ServerEvents.recipes(event=>{

    event.remove({output:'gtceu:micro_processor_mainframe'});
    event.remove({output:'gtceu:nano_processor_mainframe'});
    event.remove({output:'gtceu:quantum_processor_mainframe'});
    event.remove({output:'gtceu:crystal_processor_mainframe'});
    event.remove({output:'gtceu:wetware_processor_mainframe'});

    event.recipes.gtceu.circuit_assembler('gt_iv_circuit')
        .itemInputs('2x gtceu:aluminium_frame','8x mekanism:ultimate_control_circuit','2x gtceu:nano_cpu_chip','64x gtceu:fine_electrum_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('gtceu:micro_processor_mainframe')
        .EUt(480)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('gt_iv_circuit_onestep')
        .itemInputs('1x gtceu:aluminium_frame','gtceu:soc','16x gtceu:fine_electrum_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('4x gtceu:micro_processor_mainframe')
        .EUt(1920)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('gt_luv_circuit')
        .itemInputs('2x gtceu:tungsten_steel_frame','8x gtceu:micro_processor_mainframe','2x gtceu:qbit_cpu_chip','64x gtceu:fine_naquadah_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('gtceu:nano_processor_mainframe')
        .EUt(1920)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('gt_luv_circuit_onestep')
        .itemInputs('1x gtceu:tungsten_steel_frame','gtceu:advanced_soc','16x gtceu:fine_naquadah_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('4x gtceu:nano_processor_mainframe')
        .EUt(7680)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('gt_zpm_circuit')
        .itemInputs('2x gtceu:hsss_frame','8x gtceu:nano_processor_mainframe','12x gtceu:qbit_cpu_chip','64x gtceu:fine_rhodium_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('gtceu:quantum_processor_mainframe')
        .EUt(7680)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('gt_zpm_circuit_onestep')
        .itemInputs('1x gtceu:hsss_frame','gtceu:crystal_soc','16x gtceu:fine_rhodium_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('4x gtceu:quantum_processor_mainframe')
        .EUt(30720)
        .duration(100);
        
    event.recipes.gtceu.circuit_assembler('gt_uv_circuit')
        .itemInputs('2x gtceu:naquadah_alloy_frame','8x gtceu:quantum_processor_mainframe','2x gtceu:crystal_cpu','64x gtceu:fine_naquadria_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('gtceu:crystal_processor_mainframe')
        .EUt(30720)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('gt_uv_circuit_onestep')
        .itemInputs('1x gtceu:naquadah_alloy_frame','gtceu:highly_advanced_soc','16x gtceu:fine_naquadria_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('4x gtceu:crystal_processor_mainframe')
        .EUt(122880)
        .duration(100);

    event.recipes.gtceu.assembly_line('gt_uhv_circuit')
        .itemInputs('4x gtceu:europium_frame','8x gtceu:crystal_processor_mainframe','64x gtceu:advanced_smd_capacitor','64x gtceu:advanced_smd_diode','64x gtceu:advanced_smd_inductor',
            '64x gtceu:advanced_smd_resistor','64x gtceu:advanced_smd_transistor','64x gtceu:polybenzimidazole_foil','64x gtceu:ram_chip','16x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy',9216))
        .itemOutputs('gtceu:wetware_processor_mainframe')
        .stationResearch(b => b.researchStack(Item.of('gtceu:crystal_processor_mainframe')).EUt(GTValues.VA[GTValues.IV]).CWUt(10))
        .EUt(300000)
        .duration(400);



        
});