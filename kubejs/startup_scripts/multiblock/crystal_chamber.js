GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    let builder=event.create('crystal_chamber')
    .category('thunion')
    .setMaxIOSize(3, 1, 1, 0)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.TURBINE);
})



GTCEuStartupEvents.registry('gtceu:machine', event => {
    /**
     * @type {Internal.CustomMultiblockBuilder}
     */
    let builder=event.create('crystal_chamber', 'multiblock')
    for(let i=0;i<=6;i++) builder.tooltips(Component.translatable(`desc.${builder.id}.${i}`));
    builder.rotationState(RotationState.NON_Y_AXIS)

        .recipeTypes([GTRecipeTypes.get('crystal_chamber'),GTRecipeTypes.AUTOCLAVE_RECIPES])
        .recipeModifiers([
            (machine,/** @type {Internal.GTRecipe} */ recipe,params,result)=>{

                if(recipe.getType().toString()=='gtceu:autoclave'){
                    recipe=powerBasedParallel(4,4)(machine,recipe,params,result);
                    recipe.duration/=2.5;if(recipe.duration<1) recipe.duration=1;
                    
                    
                }
                recipe=GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK).apply(machine,recipe,params,result);
                return recipe;
                
            }
        ])
        .appearanceBlock(()=>Block.getBlock("ae2:smooth_sky_stone_block"))
        .workableCasingRenderer(
            "ae2:block/smooth_sky_stone_block",
            "gtceu:block/machines/autoclave",
            false
        )
        .pattern(definition => FactoryBlockPattern.start()
	.aisle("#######", "#######", "##AAA##", "##BBB##", "##BBB##", "##BBB##", "##AAA##", "#######", "#######") 
	.aisle("#######", "##AAA##", "#AAAAA#", "#BCCCB#", "#BCCCB#", "#BCCCB#", "#AAAAA#", "##AAA##", "#######") 
	.aisle("##AAA##", "#ADEDA#", "AAECEAA", "BCCCCCB", "BCCICCB", "BCCCCCB", "AAECEAA", "#ADEDA#", "##HHH##") 
	.aisle("##AAA##", "#AECEA#", "AACCCAA", "BCCICCB", "BCIGICB", "BCCICCB", "AACCCAA", "#AECEA#", "##H@H##") 
	.aisle("##AAA##", "#ADEDA#", "AAECEAA", "BCCCCCB", "BCCICCB", "BCCCCCB", "AAECEAA", "#ADEDA#", "##HHH##") 
	.aisle("#######", "##AAA##", "#AAAAA#", "#BCCCB#", "#BCCCB#", "#BCCCB#", "#AAAAA#", "##AAA##", "#######") 
	.aisle("#######", "#######", "##AAA##", "##BBB##", "##BBB##", "##BBB##", "##AAA##", "#######", "#######") 
	.where("#", Predicates.any())
	.where("A", Predicates.blocks("ae2:smooth_sky_stone_block"))
	.where("B", Predicates.blocks("minecraft:tinted_glass"))
	.where("C", Predicates.air())
	.where("D", Predicates.blocks("minecraft:quartz_block"))
	.where("E", Predicates.blocks("ae2:growth_accelerator"))
	.where("F", Predicates.blocks("ae2:small_quartz_bud"))
	.where("G", Predicates.blocks("ae2:flawless_budding_quartz"))
    .where("I", Predicates.blocks("ae2:quartz_block"))
	.where("H", Predicates.blocks("ae2:smooth_sky_stone_block")
        .or(Predicates.autoAbilities(definition.getRecipeTypes())))
	.where("@", Predicates.controller(Predicates.blocks(definition.get())))
    .build());

})

