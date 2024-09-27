ServerEvents.recipes(event=>{

    event.shaped(
        'gtceu:extended_factory',
        [
            'RER',
            'ZHZ',
            'CSC'
        ], {
        R: 'gtceu:luv_robot_arm',
        E: 'gtceu:luv_emitter',
        Z: '#gtceu:circuits/zpm',
        H: 'gtceu:luv_machine_hull',
        C: 'gtceu:luv_conveyor_module',
        S: 'gtceu:luv_sensor'
    });

    event.recipes.gtceu.assembler('atomic_casing')
        .itemInputs('gtceu:ultimet_frame','gtceu:hv_robot_arm','#gtceu:circuits/iv','gtceu:quantum_star','2x gtceu:nichrome_single_cable')
        .inputFluids(Fluid.of('gtceu:stainless_steel',144))
        .itemOutputs('3x gtceu:atomic_casing')
        .EUt(1920)
        .duration(200);
});