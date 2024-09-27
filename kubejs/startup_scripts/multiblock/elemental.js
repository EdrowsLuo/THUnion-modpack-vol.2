GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    let builder=event.create('mass_generator')
    .category('thunion')
    .setMaxIOSize(1, 0, 1, 2)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPUTATION);
})
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    let builder=event.create('element_duplicator')
    .category('thunion')
    .setMaxIOSize(1, 1, 3, 1)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPUTATION);
})
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    let builder=event.create('element_creator')
    .category('thunion')
    .setMaxIOSize(2, 1, 2, 1)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPUTATION);
})
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    let builder=event.create('cosmic_neutron_collector')
    .category('thunion')
    .setMaxIOSize(1, 1, 1, 0)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPUTATION);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    /**
     * @type {Internal.CustomMultiblockBuilder}
     */
    let builder=event.create('element_master', 'multiblock')
    for(let i=0;i<=9;i++) builder.tooltips(Component.translatable(`desc.${builder.id}.${i}`));
    builder.rotationState(RotationState.NON_Y_AXIS)

        .recipeTypes([
            GTRecipeTypes.get('mass_generator'),
            GTRecipeTypes.get('element_duplicator'),
            GTRecipeTypes.get('element_creator'),
            GTRecipeTypes.get('cosmic_neutron_collector')
        ])
        .recipeModifiers([
            (machine,/** @type {Internal.GTRecipe} */ recipe,params,result)=>{
                if(recipe.getType()==='gtceu:cosmic_neutron_collector'){
                    recipe=GTRecipeModifiers.accurateParallel(machine, recipe, 256, false).getFirst();
                }
                recipe=GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK).apply(machine,recipe,params,result);
                return recipe;
            }
        ])
        .workableCasingRenderer(
            "kubejs:block/elemental_casing",
            "gtceu:block/machines/chemical_reactor",
            false
        )
        .pattern(definition => FactoryBlockPattern.start()
	.aisle("AAAAA", "ABBBA", "ABBBA", "ABBBA", "ABBBA", "ABBBA", "AAAAA") 
	.aisle("ACCCA", "BDEDB", "BEDEB", "BDEDB", "BEDEB", "BDEDB", "ACCCA") 
	.aisle("ACCCA", "BEEEB", "BDEDB", "BEEEB", "BDEDB", "BEEEB", "ACCCA") 
	.aisle("ACCCA", "BDEDB", "BEDEB", "BDEDB", "BEDEB", "BDEDB", "ACCCA") 
	.aisle("AA@AA", "ABBBA", "ABBBA", "ABBBA", "ABBBA", "ABBBA", "AAAAA") 
	.where("A", Predicates.blocks("kubejs:elemental_casing").or(Predicates.autoAbilities(definition.getRecipeTypes())))
	.where("B", Predicates.blocks("gtceu:laminated_glass"))
	.where("C", Predicates.blocks("kubejs:elemental_casing"))
	.where("#", Predicates.any())
	.where("D", Predicates.blocks("kubejs:proton_casing"))
	.where("E", Predicates.blocks("kubejs:neutron_casing"))
	.where("@", Predicates.controller(Predicates.blocks(definition.get()))).build());
});