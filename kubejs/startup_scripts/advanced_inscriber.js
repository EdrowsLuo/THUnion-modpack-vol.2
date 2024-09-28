

GTCEuStartupEvents.registry('gtceu:machine', event => {
    
    const $SimpleTieredMachine=Java.loadClass("com.gregtechceu.gtceu.api.machine.SimpleTieredMachine")
    /**
     * @type {Internal.MachineBuilder}
     */
    let builder=event.create('advanced_inscriber', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV) 
    builder.recipeType(GTRecipeTypes.get('imprinter'))
    
        .editableUI($SimpleTieredMachine.EDITABLE_UI_CREATOR.apply(GTCEu.id('advanced_inscriber'),GTRecipeTypes.get('imprinter')))
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/forming_press"))
        .tankScalingFunction(tier => tier * 32000)
        
        
    
    
})


