GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    let builder=event.create('ore_processing_tower')
    .category('thunion')
    .setMaxIOSize(1, 9, 1, 0)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.MACERATOR);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {

    const $IMufflerMachine=Java.loadClass('com.gregtechceu.gtceu.api.machine.feature.multiblock.IMufflerMachine');
    /**
     * @type {Internal.CustomMultiblockBuilder}
     */
    let builder=event.create('ore_processing_tower', 'multiblock')
    for(let i=0;i<=4;i++) builder.tooltips(Component.translatable(`desc.${builder.id}.${i}`));
    builder.rotationState(RotationState.NON_Y_AXIS)

        .recipeTypes([GTRecipeTypes.get('ore_processing_tower')])
		.appearanceBlock(()=>Block.getBlock('alexscaves:hazmat_block'))
        .workableCasingRenderer(
            "alexscaves:block/hazmat_block_top",
            "gtceu:block/machines/macerator",
            false
        )
        .recipeModifiers([
            (/** @type {Internal.IWorkableMultiController_} */machine,/** @type {Internal.GTRecipe} */ recipe,params,result)=>{
                var minimumTier=15;
				machine.getParts().forEach(part=>{
                    if(part instanceof $IMufflerMachine) minimumTier=Math.min(minimumTier,part.getTier());
                })
				recipe=GTRecipeModifiers.accurateParallel(machine, recipe, Math.pow(2,minimumTier), false).getFirst();
				recipe.duration/=minimumTier; if(recipe.duration<1) recipe.duration=1;
                return recipe;
            },
			GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)
        ])
		.additionalDisplay((controller,list)=>{
			var minimumTier=15;
			if(controller.isFormed()){
				controller.getParts().forEach(part=>{
					if(part instanceof $IMufflerMachine) minimumTier=Math.min(minimumTier,part.getTier());
				})
				list.add(Component.translatable('desc.gtceu.ore_processing_tower.muffler_tier',GTValues.VOLTAGE_NAMES[minimumTier]));
			}
		})

.pattern(definition => FactoryBlockPattern.start()
	.aisle("AAAABCCCC", "#########", "#########", "#########", "DDDDDDDDD", "#########", "#########", "#########", "DDDDDDDDD", "#########", "#########", "#########", "DDDDDDDDD", "#########", "#########", "#########", "DDDDDDDDD", "#########", "#########", "#########", "#########") 
	.aisle("ABBBBBBBC", "#EEE#FFF#", "#EEE#FFF#", "#EEE#FFF#", "DEEEDFFFD", "#EEE#FFF#", "#EEE#FFF#", "#EEE#FFF#", "DEEEDFFFD", "#EEE#FFF#", "#EEE#FFF#", "#EEE#FFF#", "DEEEDFFFD", "#EEE#FFF#", "#EEE#FFF#", "#EEE#FFF#", "DEEEDFFFD", "#EEE#FFF#", "#EEE#FFF#", "#EEE#FFF#", "#EEE#FFF#") 
	.aisle("ABBBBBBBC", "#EEEGFFF#", "#EHEGFIF#", "#EHEGFIF#", "DEHEGFIFD", "#EHEGFIF#", "#EHEGFIF#", "#EHEGFIF#", "DEHEGFIFD", "#EHEGFIF#", "#EHEGFIF#", "#EHEGFIF#", "DEHEGFIFD", "#EHEGFIF#", "#EHEGFIF#", "#EHEGFIF#", "DEHEGFIFD", "#EHEGFIF#", "#EHEGFIF#", "#EHEGFIF#", "#EJEKFJF#") 
	.aisle("ABBBBBBBC", "#EEELFFF#", "#EEELFFF#", "#EEELFFF#", "DEEELFFFD", "#EEELFFF#", "#EEELFFF#", "#EEELFFF#", "DEEELFFFD", "#EEELFFF#", "#EEELFFF#", "#EEELFFF#", "DEEELFFFD", "#EEELFFF#", "#EEELFFF#", "#EEELFFF#", "DEEELFFFD", "#EEELFFF#", "#EEELFFF#", "#EEELFFF#", "#EEEKFFF#") 
	.aisle("BBBBBBBBB", "##GLMLG##", "##GLMLG##", "##GLMLG##", "DDGLMLGDD", "##GLMLG##", "##GLMLG##", "##GLMLG##", "DDGLMLGDD", "##GLMLG##", "##GLMLG##", "##GLMLG##", "DDGLMLGDD", "##GLMLG##", "##GLMLG##", "##GLMLG##", "DDGLMLGDD", "##GLMLG##", "##GLMLG##", "##GLMLG##", "##KK@KK##") 
	.aisle("NBBBBBBBO", "#PPPLQQQ#", "#PPPLQQQ#", "#PPPLQQQ#", "DPPPLQQQD", "#PPPLQQQ#", "#PPPLQQQ#", "#PPPLQQQ#", "DPPPLQQQD", "#PPPLQQQ#", "#PPPLQQQ#", "#PPPLQQQ#", "DPPPLQQQD", "#PPPLQQQ#", "#PPPLQQQ#", "#PPPLQQQ#", "DPPPLQQQD", "#PPPLQQQ#", "#PPPLQQQ#", "#PPPLQQQ#", "#PPPKQQQ#") 
	.aisle("NBBBBBBBO", "#PPPGQQQ#", "#PRPGQSQ#", "#PRPGQSQ#", "DPRPGQSQD", "#PRPGQSQ#", "#PRPGQSQ#", "#PRPGQSQ#", "DPRPGQSQD", "#PRPGQSQ#", "#PRPGQSQ#", "#PRPGQSQ#", "DPRPGQSQD", "#PRPGQSQ#", "#PRPGQSQ#", "#PRPGQSQ#", "DPRPGQSQD", "#PRPGQSQ#", "#PRPGQSQ#", "#PRPGQSQ#", "#PJPKQJQ#") 
	.aisle("NBBBBBBBO", "#PPP#QQQ#", "#PPP#QQQ#", "#PPP#QQQ#", "DPPPDQQQD", "#PPP#QQQ#", "#PPP#QQQ#", "#PPP#QQQ#", "DPPPDQQQD", "#PPP#QQQ#", "#PPP#QQQ#", "#PPP#QQQ#", "DPPPDQQQD", "#PPP#QQQ#", "#PPP#QQQ#", "#PPP#QQQ#", "DPPPDQQQD", "#PPP#QQQ#", "#PPP#QQQ#", "#PPP#QQQ#", "#PPP#QQQ#") 
	.aisle("NNNNBOOOO", "#########", "#########", "#########", "DDDDDDDDD", "#########", "#########", "#########", "DDDDDDDDD", "#########", "#########", "#########", "DDDDDDDDD", "#########", "#########", "#########", "DDDDDDDDD", "#########", "#########", "#########", "#########") 
	.where("A", Predicates.blocks("gtceu:high_pressure_hazard_sign_block"))
	.where("B", Predicates.blocks("gtceu:polished_dark_concrete"))
	.where("C", Predicates.blocks("gtceu:magnetic_hazard_sign_block"))
	.where("#", Predicates.any())
	.where("D", Predicates.blocks("gtceu:black_steel_frame"))
	.where("E", Predicates.blocks("gtceu:vibration_safe_casing"))
	.where("F", Predicates.blocks("gtceu:nonconducting_casing"))
	.where("G", Predicates.blocks("alexscaves:hazmat_block"))
	.where("H", Predicates.blocks("gtceu:assembly_line_grating"))
	.where("I", Predicates.blocks("gtceu:electrolytic_cell"))
	.where("J", Predicates.ability(PartAbility.MUFFLER).setExactLimit(4))
	.where("K", Predicates.blocks("alexscaves:hazmat_block").or(Predicates.autoAbilities(definition.getRecipeTypes())))
	.where("L", Predicates.blocks("gtceu:tungstensteel_pipe_casing"))
	.where("M", Predicates.blocks("gtceu:ptfe_pipe_casing"))
	.where("@", Predicates.controller(Predicates.blocks(definition.get())))
	.where("N", Predicates.blocks("gtceu:acid_hazard_sign_block"))
	.where("O", Predicates.blocks("gtceu:noise_hazard_sign_block"))
	.where("P", Predicates.blocks("gtceu:watertight_casing"))
	.where("Q", Predicates.blocks("gtceu:secure_maceration_casing"))
	.where("R", Predicates.blocks("gtceu:steel_pipe_casing"))
	.where("S", Predicates.blocks("gtceu:crushing_wheels")).build());
})