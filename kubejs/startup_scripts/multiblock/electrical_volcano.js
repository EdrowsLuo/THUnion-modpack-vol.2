GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    let builder=event.create('electric_volcano')
    .category('thunion')
    .setMaxIOSize(1, 0, 0, 1)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.TURBINE);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    /**
     * @type {Internal.CustomMultiblockBuilder}
     */
    let builder=event.create('electrical_volcano', 'multiblock')
    for(let i=0;i<=2;i++) builder.tooltips(Component.translatable(`desc.${builder.id}.${i}`));
    builder.rotationState(RotationState.NON_Y_AXIS)

        .recipeTypes([GTRecipeTypes.get('electric_volcano'),GTRecipeTypes.ROCK_BREAKER_RECIPES])
        .workableCasingRenderer(
            "alexscaves:block/flood_basalt_top",
            "gtceu:block/machines/rock_breaker",
            false
        )
        .recipeModifiers([
            (machine,/** @type {Internal.GTRecipe} */ recipe,params,result)=>{
				recipe=GTRecipeModifiers.accurateParallel(machine, recipe, 256, false).getFirst();
				recipe=GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK).apply(machine,recipe,params,result);
                return recipe;
            }
        ])
		.pattern(definition => FactoryBlockPattern.start()
	.aisle("####AAAAA####", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############") 
	.aisle("##AAAAAAAAA##", "####AAAAA####", "####AAAAA####", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############") 
	.aisle("#AAAAAAAAAAA#", "##AAAAAAAAA##", "##AAAAAAAAA##", "####AAAAA####", "####AAAAA####", "####AAAAA####", "#############", "#############", "#############", "#############", "#############") 
	.aisle("#AAAAAAAAAAA#", "##AAAAAAAAA##", "##AAAAAAAAA##", "###AAAAAAA###", "###AAAAAAA###", "###AAAAAAA###", "####AAAAA####", "####AAAAA####", "####AAAAA####", "#############", "#############") 
	.aisle("AAAAAAAAAAAAA", "#AAAAAAAAAAA#", "#AAAAAAAAAAA#", "##AAAAAAAAA##", "##AAAAAAAAA##", "##AAAAAAAAA##", "###AAAAAAA###", "###AAAAAAA###", "###AAAAAAA###", "#####AAA#####", "#####AAA#####") 
	.aisle("AAAAAAAAAAAAA", "#AAAAAAAAAAA#", "#AAAAAAAAAAA#", "##AAAAAAAAA##", "##AAAAAAAAA##", "##AAABBBAAA##", "###AABBBAA###", "###AABBBAA###", "###AAABAAA###", "####AABAA####", "####AA#AA####") 
	.aisle("AAAAAAAAAAAAA", "#AAAAAAAAAAA#", "#AAAAAAAAAAA#", "##AAAAAAAAA##", "##AAAAAAAAA##", "##AAABBBAAA##", "###AABBBAA###", "###AABBBAA###", "###AABBBAA###", "####ABBBA####", "####A#@#A####") 
	.aisle("AAAAAAAAAAAAA", "#AAAAAAAAAAA#", "#AAAAAAAAAAA#", "##AAAAAAAAA##", "##AAAAAAAAA##", "##AAABBBAAA##", "###AABBBAA###", "###AABBBAA###", "###AAABAAA###", "####AABAA####", "####AA#AA####") 
	.aisle("AAAAAAAAAAAAA", "#AAAAAAAAAAA#", "#AAAAAAAAAAA#", "##AAAAAAAAA##", "##AAAAAAAAA##", "##AAAAAAAAA##", "###AAAAAAA###", "###AAAAAAA###", "###AAAAAAA###", "#####AAA#####", "#####AAA#####") 
	.aisle("#AAAAAAAAAAA#", "##AAAAAAAAA##", "##AAAAAAAAA##", "###AAAAAAA###", "###AAAAAAA###", "###AAAAAAA###", "####AAAAA####", "####AAAAA####", "####AAAAA####", "#############", "#############") 
	.aisle("#AAAAAAAAAAA#", "##AAAAAAAAA##", "##AAAAAAAAA##", "####AAAAA####", "####AAAAA####", "####AAAAA####", "#############", "#############", "#############", "#############", "#############") 
	.aisle("##AAAAAAAAA##", "####AAAAA####", "####AAAAA####", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############") 
	.aisle("####AAAAA####", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############") 
	.where("#", Predicates.any())
	.where("A", Predicates.blocks("alexscaves:flood_basalt").or(Predicates.autoAbilities(definition.getRecipeTypes())))
	.where("B", Predicates.blocks("alexscaves:primal_magma"))
	.where("@", Predicates.controller(Predicates.blocks(definition.get()))).build())
});

