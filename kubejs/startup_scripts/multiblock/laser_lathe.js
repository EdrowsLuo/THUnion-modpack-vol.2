GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    let builder=event.create('imprinter')
    .category('thunion')
    .setMaxIOSize(3, 1, 1, 0)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPRESSOR);
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    let builder=event.create('precision_lathe_all')
    .category('thunion')
    .setMaxIOSize(6, 2, 0, 0)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.CUT);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    /**
     * @type {Internal.CustomMultiblockBuilder}
     */
    let builder=event.create('laser_lathe', 'multiblock')
    for(let i=0;i<=4;i++) builder.tooltips(Component.translatable(`desc.${builder.id}.${i}`));
    builder.rotationState(RotationState.NON_Y_AXIS)

        .recipeTypes([GTRecipeTypes.get('precision_lathe_all'),GTRecipeTypes.BENDER_RECIPES,GTRecipeTypes.LATHE_RECIPES,GTRecipeTypes.COMPRESSOR_RECIPES,
            GTRecipeTypes.WIREMILL_RECIPES,GTRecipeTypes.FORGE_HAMMER_RECIPES,GTRecipeTypes.FORMING_PRESS_RECIPES,GTRecipeTypes.get('imprinter')])
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/machines/bender",
            false
        )
        .recipeModifiers([
            (machine,/** @type {Internal.GTRecipe} */ recipe,params,result)=>{
                recipe=GTRecipeModifiers.accurateParallel(machine, recipe, 64, false).getFirst();
                recipe.duration/=10;if(recipe.duration<1) recipe.duration=1;
                recipe=GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK).apply(machine,recipe,params,result);
                return recipe;
            }
        ])
        .pattern(definition => FactoryBlockPattern.start()
	.aisle("AAAAAAAAA", "ABBBBBBBA", "ABBBBBBBA", "ABBBBBBBA", "AAAAAAAAA") 
	.aisle("ACCCCCCCA", "D#######D", "D#######D", "D#######D", "AAAAAAAAA") 
	.aisle("ACCCCCCCA", "D#######D", "D#######D", "D#######D", "AAAAAAAAA") 
	.aisle("ACCCCCCCA", "D#######D", "D#######D", "D#######D", "AAAAAAAAA") 
	.aisle("AAAA@AAAA", "ABBBBBBBA", "ABBBBBBBA", "ABBBBBBBA", "AAAAAAAAA") 
	.where("A", Predicates.blocks("gtceu:solid_machine_casing").setMinGlobalLimited(42).or(Predicates.autoAbilities(definition.getRecipeTypes())))
	.where("B", Predicates.blocks("minecraft:glass"))
	.where("C", Predicates.blocks("gtceu:luv_machine_casing"))
	.where("D", Predicates.blocks("gtceu:laser_safe_engraving_casing"))
	.where("#", Predicates.any())
	.where("@", Predicates.controller(Predicates.blocks(definition.get())))
    .build())

})