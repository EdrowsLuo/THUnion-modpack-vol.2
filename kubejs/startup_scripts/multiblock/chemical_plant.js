GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    let builder=event.create('chemical_plant')
    .category('thunion')
    .setMaxIOSize(9, 9, 4, 4)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.TURBINE);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {

    const $CoilWorkableElectricMultiblockMachine=Java.loadClass('com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine');
    /**
     * @type {Internal.CustomMultiblockBuilder}
     */
    let builder=event.create('chemical_plant', 'multiblock',(holder)=>new $CoilWorkableElectricMultiblockMachine(holder))
    for(let i=0;i<=4;i++) builder.tooltips(Component.translatable(`desc.${builder.id}.${i}`));
    builder.rotationState(RotationState.NON_Y_AXIS)

        .recipeTypes([
            GTRecipeTypes.LARGE_CHEMICAL_RECIPES,
            GTRecipeTypes.get('chemical_plant')
        ])
        .recipeModifiers([
            (machine,/** @type {Internal.GTRecipe} */ recipe,params,result)=>{
                var temp=machine.getCoilType().getCoilTemperature();
                var recipeTemp=0;
                if(recipe.getType()=='gtceu:large_chemical_reactor'){
                    recipeTemp=0;
                }else if(recipe.getType()=='gtceu:chemical_plant'){
                    recipeTemp=recipe.data.getInt('temp');
                }
                var bonus=(temp-recipeTemp)/900;
                if(bonus<0) return null;
                recipe=GTRecipeModifiers.accurateParallel(machine, recipe, Math.pow(2,bonus), false).getFirst();
                recipe.duration/=(1+bonus);if(recipe.duration<1) recipe.duration=1;
                
                return recipe;
            },
            GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)
        ])
        .appearanceBlock(GTBlocks.CASING_PTFE_INERT)
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_inert_ptfe",
            "gtceu:block/machines/chemical_reactor",
            false
        )
        .pattern(definition => FactoryBlockPattern.start()
	.aisle("#AAA#", "#AAA#", "#AAA#", "#BBB#", "#CCC#", "#BBB#", "#CCC#", "#BBB#", "#CCC#", "#####") 
	.aisle("ACCCA", "A###A", "A###A", "BDDDB", "CDDDC", "BDDDB", "CDDDC", "BDDDB", "CDDDC", "#CCC#") 
	.aisle("ACCCA", "A#E#A", "A#E#A", "BDEDB", "CDEDC", "BDEDB", "CDEDC", "BDEDB", "CDEDC", "#CFC#") 
	.aisle("ACCCA", "A###A", "A###A", "BDDDB", "CDDDC", "BDDDB", "CDDDC", "BDDDB", "CDDDC", "#CCC#") 
	.aisle("#AAA#", "#A@A#", "#AAA#", "#BBB#", "#CCC#", "#BBB#", "#CCC#", "#BBB#", "#CCC#", "#####") 
	.where("#", Predicates.air())
	.where("A", Predicates.blocks("gtceu:inert_machine_casing").or(Predicates.autoAbilities(definition.getRecipeTypes())))
	.where("B", Predicates.blocks("gtceu:laminated_glass"))
	.where("C", Predicates.blocks("gtceu:inert_machine_casing"))
	.where("D", Predicates.heatingCoils())
	.where("E", Predicates.blocks("gtceu:ptfe_pipe_casing"))
	.where("@", Predicates.controller(Predicates.blocks(definition.get())))
	.where("F", Predicates.ability(PartAbility.MUFFLER).setExactLimit(1)).build());
});