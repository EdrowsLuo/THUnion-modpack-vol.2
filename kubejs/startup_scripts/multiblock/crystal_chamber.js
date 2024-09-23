GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    let builder=event.create('crystal_chamber')
    .category('thunion')
    .setMaxIOSize(2, 1, 1, 0)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.TURBINE);
})



GTCEuStartupEvents.registry('gtceu:machine', event => {
    /**
     * @type {Internal.CustomMultiblockBuilder}
     */
    let builder=event.create('crystal_chamber', 'multiblock')
    
    builder.rotationState(RotationState.NON_Y_AXIS)

        .recipeTypes([GTRecipeTypes.get('crystal_chamber'),GTRecipeTypes.AUTOCLAVE_RECIPES])
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
	.where("C", Predicates.blocks("minecraft:water"))
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

