GTCEuStartupEvents.registry('gtceu:machine', event => {
    /**
     * @type {Internal.CustomMultiblockBuilder}
     */
    let builder=event.create('extended_factory', 'multiblock')
    
    builder.rotationState(RotationState.NON_Y_AXIS)

        .recipeTypes([GTRecipeTypes.ASSEMBLER_RECIPES,GTRecipeTypes.CIRCUIT_ASSEMBLER_RECIPES])
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
	.where("A", Predicates.blocks("gtceu:atomic_casing").setMinGlobalLimited(10).or(Predicates.autoAbilities(definition.getRecipeTypes())))
	.where("#", Predicates.air())
	.where("@", Predicates.controller(Predicates.blocks(definition.get())))
    .build())

})
