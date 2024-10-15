GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    let builder=event.create('void_miner')
    .category('thunion')
    .setMaxIOSize(2, 27, 1, 0)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.MINER);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    /**
     * @type {Internal.CustomMultiblockBuilder}
     */
    let builder=event.create('void_miner', 'multiblock')
    for(let i=0;i<=3;i++) builder.tooltips(Component.translatable(`desc.${builder.id}.${i}`));
    builder.rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .recipeTypes([GTRecipeTypes.get('void_miner')])
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/machines/miner",
            false
        )
        .recipeModifiers([
            (machine,/** @type {Internal.GTRecipe} */ recipe,params,result)=>{
                recipe=GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK).apply(machine,recipe,params,result);
                return recipe;
            }
        ])
        .pattern(definition => FactoryBlockPattern.start()
	.aisle("AAA", "#B#", "#B#", "#B#", "###", "###", "###") 
	.aisle("AAA", "BAB", "BAB", "BAB", "#B#", "#B#", "#B#") 
	.aisle("A@A", "#B#", "#B#", "#B#", "###", "###", "###") 
	.where("A", Predicates.blocks("gtceu:clean_machine_casing").or(Predicates.autoAbilities(definition.getRecipeTypes())))
	.where("#", Predicates.any())
	.where("B", Predicates.blocks("gtceu:black_steel_frame"))
	.where("@", Predicates.controller(Predicates.blocks(definition.get())))
    .build());
});

