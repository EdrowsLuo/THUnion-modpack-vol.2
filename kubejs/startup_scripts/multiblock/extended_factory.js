GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    let builder=event.create('precision_assembler')
    .category('thunion')
    .setMaxIOSize(6, 1, 1, 0)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.ASSEMBLER);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    /**
     * @type {Internal.CustomMultiblockBuilder}
     */
    let builder=event.create('extended_factory', 'multiblock')
    for(let i=0;i<=3;i++) builder.tooltips(Component.translatable(`desc.${builder.id}.${i}`));
    builder.rotationState(RotationState.NON_Y_AXIS)

        .recipeTypes([GTRecipeTypes.ASSEMBLER_RECIPES,GTRecipeTypes.CIRCUIT_ASSEMBLER_RECIPES,GTRecipeTypes.get('precision_assembler')])
        .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
        .workableCasingRenderer(
            "gtceu:block/casings/gcym/atomic_casing",
            "gtceu:block/machines/scanner",
            false
        )
		.recipeModifiers([
            (machine,/** @type {Internal.GTRecipe} */ recipe,params,result)=>{
                recipe=GTRecipeModifiers.accurateParallel(machine, recipe, 8, false).getFirst();
                recipe.duration/=2;if(recipe.duration<1) recipe.duration=1;
                recipe=GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK).apply(machine,recipe,params,result);
				return recipe;
            }
        ])
		.pattern(definition => FactoryBlockPattern.start()
	.aisle("AAA", "AAA", "AAA") 
	.aisle("AAA", "A#A", "AAA") 
	.aisle("AAA", "A@A", "AAA") 
	.where("A", Predicates.blocks("gtceu:atomic_casing").setMinGlobalLimited(10)
        //.or(Predicates.ability(PartAbility.INPUT_ENERGY).setExactLimit(1))
        .or(Predicates.autoAbilities(definition.getRecipeTypes())))
	.where("#", Predicates.air())
	.where("@", Predicates.controller(Predicates.blocks(definition.get())))
    .build())

})
