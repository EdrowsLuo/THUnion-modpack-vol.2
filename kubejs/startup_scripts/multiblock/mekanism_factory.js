GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    let builder=event.create('mekanism_factory')
    .category('thunion')
    .setMaxIOSize(6, 1, 1, 0)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.ASSEMBLER);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    /**
     * @type {Internal.CustomMultiblockBuilder}
     */
    let builder=event.create('mekanism_factory', 'multiblock')
    for(let i=0;i<=4;i++) builder.tooltips(Component.translatable(`desc.${builder.id}.${i}`));
    builder.rotationState(RotationState.NON_Y_AXIS)

        .recipeTypes([GTRecipeTypes.get('mekanism_factory')])
        .workableCasingRenderer(
            "mekanism:block/induction_casing",
            "gtceu:block/machines/bender",
            false
        )
        .recipeModifiers([
            (machine,/** @type {Internal.GTRecipe} */ recipe,params,result)=>{
                recipe=GTRecipeModifiers.accurateParallel(machine, recipe, 64, false).getFirst();
                recipe=GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK).apply(machine,recipe,params,result);
                return recipe;
            }
        ])
        .pattern(definition => FactoryBlockPattern.start()
	.aisle("AAAAAAA", "ABBBBBA", "ABBBBBA", "AAAAAAA") 
	.aisle("AAAAAAA", "BCDDDEB", "BCDDDEB", "AFFFFFA") 
	.aisle("AAAAAAA", "BCDDDEB", "BCDDDEB", "AFFFFFA") 
	.aisle("AAA@AAA", "ABBBBBA", "ABBBBBA", "AAAAAAA") 
	.where("A", Predicates.blocks("mekanism:induction_casing").or(Predicates.autoAbilities(definition.getRecipeTypes())))
	.where("B", Predicates.blocks("mekanismgenerators:reactor_glass"))
	.where("C", Predicates.blocks("mekanism:ultimate_induction_provider"))
	.where("D", Predicates.blocks("mekanism:teleporter_frame"))
	.where("E", Predicates.blocks("mekanism:ultimate_induction_cell"))
	.where("F", Predicates.blocks("gtceu:iv_machine_casing"))
	.where("@", Predicates.controller(Predicates.blocks(definition.get())))
    .build());
});