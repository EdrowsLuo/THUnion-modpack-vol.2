GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    let builder=event.create('neutron_compressor')
    .category('thunion')
    .setMaxIOSize(1, 1, 1, 0)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPRESSOR);
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    let builder=event.create('degenerate_compressor')
    .category('thunion')
    .setMaxIOSize(1, 1, 1, 0)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPRESSOR);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {

    const $GTRecipeCapabilities=Java.loadClass('com.gregtechceu.gtceu.common.data.GTRecipeCapabilities');
    const $ContentModifier=Java.loadClass('com.gregtechceu.gtceu.api.recipe.content.ContentModifier');
    /**
     * @type {Internal.CustomMultiblockBuilder}
     */

    let builder=event.create('ultimate_neutron_compressor', 'multiblock')
    for(let i=0;i<=8;i++) builder.tooltips(Component.translatable(`desc.${builder.id}.${i}`));
    builder.rotationState(RotationState.NON_Y_AXIS)

        .recipeTypes([GTRecipeTypes.get('neutron_compressor'),GTRecipeTypes.get('degenerate_compressor'),GTRecipeTypes.EXTRUDER_RECIPES])
        .workableCasingRenderer(
            "avaritia:block/resource/neutron",
            "gtceu:block/machines/rock_crusher",
            false
        )
        .recipeModifiers([
            (/** @type {Internal.WorkableMultiblockMachine} */machine,/** @type {Internal.GTRecipe} */ recipe,params,result)=>{
				if(recipe.getType()==='gtceu:extruder'){
                    
                    recipe=GTRecipeModifiers.accurateParallel(machine, recipe, 2147483647, false).getFirst();
                    recipe.duration=1;
                }else{
                    var bonus=machine.getTier()-$RecipeHelper.getRecipeEUtTier(recipe);
                    if(bonus<0) return recipe;
                    recipe=modifyRecipe(recipe, $GTRecipeCapabilities.ITEM, $ContentModifier.multiplier(1/(1+bonus)),true,false);
                    recipe=GTRecipeModifiers.accurateParallel(machine, recipe, 2147483647, false).getFirst();
                    recipe=GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK).apply(machine,recipe,params,result);
                }
                
                return recipe;
            }
        ])
        .pattern(definition => FactoryBlockPattern.start()
	.aisle("####AAA####", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "####AAA####") 
	.aisle("##AABBBAA##", "#####A#####", "#####A#####", "#####A#####", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "#####A#####", "#####A#####", "#####A#####", "##AABBBAA##") 
	.aisle("#ABBBBBBBA#", "##A#####A##", "##A#####A##", "##A#####A##", "#####A#####", "#####A#####", "#####A#####", "#####A#####", "###########", "###########", "####BBB####", "####CCC####", "####BBB####", "###########", "###########", "#####A#####", "#####A#####", "#####A#####", "#####A#####", "##A#####A##", "##A#####A##", "##A#####A##", "#ABBBBBBBA#") 
	.aisle("#ABBBBBBBA#", "###D#D#D###", "###D#D#D###", "###D#D#D###", "###A###A###", "###A###A###", "###A###A###", "###A###A###", "#####A#####", "#####A#####", "###BBABB###", "###CEAEC###", "###BBABB###", "#####A#####", "#####A#####", "###A###A###", "###A###A###", "###A###A###", "###A###A###", "###D#D#D###", "###D#D#D###", "###D#D#D###", "#ABBBBBBBA#") 
	.aisle("ABBBBBBBBBA", "###########", "###########", "###########", "####D#D####", "####D#D####", "####F#F####", "####F#F####", "####AFA####", "####AFA####", "##BBAFABB##", "##CEAFAEC##", "##BBAFABB##", "####AFA####", "####AFA####", "####F#F####", "####F#F####", "####D#D####", "####D#D####", "###########", "###########", "###########", "ABBBBBBBBBA") 
	.aisle("ABBBBBBBBBA", "#A#D###D#A#", "#A#D###D#A#", "#A#D###D#A#", "##A#####A##", "##A#####A##", "##A#####A##", "##A#####A##", "###AFFFA###", "###AFFFA###", "##BAFFFAB##", "##CAFFFAC##", "##BAFFFAB##", "###AFFFA###", "###AFFFA###", "##A#####A##", "##A#####A##", "##A#####A##", "##A#####A##", "#A#D###D#A#", "#A#D###D#A#", "#A#D###D#A#", "ABBBBBBBBBA") 
	.aisle("ABBBBBBBBBA", "###########", "###########", "###########", "####D#D####", "####D#D####", "####F#F####", "####F#F####", "####AFA####", "####AFA####", "##BBAFABB##", "##CEAFAEC##", "##BBAFABB##", "####AFA####", "####AFA####", "####F#F####", "####F#F####", "####D#D####", "####D#D####", "###########", "###########", "###########", "ABBBBBBBBBA") 
	.aisle("#ABBBBBBBA#", "###D#D#D###", "###D#D#D###", "###D#D#D###", "###A###A###", "###A###A###", "###A###A###", "###A###A###", "#####A#####", "#####A#####", "###BBABB###", "###CEAEC###", "###BBABB###", "#####A#####", "#####A#####", "###A###A###", "###A###A###", "###A###A###", "###A###A###", "###D#D#D###", "###D#D#D###", "###D#D#D###", "#ABBBBBBBA#") 
	.aisle("#ABBBBBBBA#", "##A#####A##", "##A#####A##", "##A#####A##", "#####A#####", "#####A#####", "#####A#####", "#####A#####", "###########", "###########", "####BBB####", "####C@C####", "####BBB####", "###########", "###########", "#####A#####", "#####A#####", "#####A#####", "#####A#####", "##A#####A##", "##A#####A##", "##A#####A##", "#ABBBBBBBA#") 
	.aisle("##AABBBAA##", "#####A#####", "#####A#####", "#####A#####", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "#####A#####", "#####A#####", "#####A#####", "##AABBBAA##") 
	.aisle("####AAA####", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "####AAA####") 
	.where("#", Predicates.any())
	.where("A", Predicates.blocks("gtceu:cosmic_neutron_frame"))
	.where("B", Predicates.blocks("avaritia:neutron"))
	.where("C", Predicates.blocks("avaritia:neutron").or(Predicates.autoAbilities(definition.getRecipeTypes())))
	.where("D", Predicates.blocks("gtceu:neutronium_frame"))
	.where("E", Predicates.blocks("gtceu:fusion_coil"))
	.where("F", Predicates.blocks("gtceu:neutronium_block"))
	.where("@", Predicates.controller(Predicates.blocks(definition.get())))
    .build());
});
