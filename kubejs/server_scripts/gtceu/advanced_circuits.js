ServerEvents.recipes(event=>{

    event.remove({output:'gtceu:micro_processor_mainframe'});
    event.remove({output:'gtceu:nano_processor_computer'});
    event.remove({output:'gtceu:nano_processor_mainframe'});
    event.remove({output:'gtceu:quantum_processor_computer'});
    event.remove({output:'gtceu:quantum_processor_mainframe'});
    event.remove({output:'gtceu:crystal_processor_computer'});
    event.remove({output:'gtceu:crystal_processor_mainframe'});
    event.remove({output:'gtceu:wetware_processor_computer'});
    event.remove({output:'gtceu:wetware_processor_mainframe'});

    event.recipes.gtceu.circuit_assembler('gt_iv_circuit')
        .itemInputs('2x gtceu:aluminium_frame','4x mekanism:ultimate_control_circuit','2x gtceu:nano_cpu_chip','64x gtceu:fine_electrum_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('gtceu:micro_processor_mainframe')
        .EUt(480)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('gt_iv_circuit_onestep')
        .itemInputs('1x gtceu:aluminium_frame','gtceu:soc','16x gtceu:fine_electrum_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('4x gtceu:nano_processor_computer')
        .EUt(1920)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('gt_luv_circuit')
        .itemInputs('2x gtceu:tungsten_steel_frame','6x #gtceu:circuits/iv','2x gtceu:qbit_cpu_chip',
            '8x gtceu:smd_transistor','64x gtceu:fine_naquadah_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('gtceu:nano_processor_mainframe')
        .EUt(1920)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('gt_luv_circuit_adv')
        .itemInputs('2x gtceu:tungsten_steel_frame','3x #gtceu:circuits/iv','2x gtceu:qbit_cpu_chip',
            '2x gtceu:advanced_smd_transistor','64x gtceu:fine_naquadah_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('gtceu:nano_processor_mainframe')
        .EUt(1920)
        .duration(50);

    event.recipes.gtceu.circuit_assembler('gt_luv_circuit_onestep')
        .itemInputs('1x gtceu:tungsten_steel_frame','gtceu:advanced_soc','16x gtceu:fine_naquadah_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('4x gtceu:quantum_processor_computer')
        .EUt(7680)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('gt_zpm_circuit')
        .itemInputs('2x gtceu:hsss_frame','8x #gtceu:circuits/luv','12x gtceu:qbit_cpu_chip',
            '4x gtceu:advanced_smd_transistor','4x gtceu:advanced_smd_resistor','64x gtceu:fine_rhodium_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('gtceu:quantum_processor_mainframe')
        .EUt(7680)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('gt_zpm_circuit_onestep')
        .itemInputs('1x gtceu:hsss_frame','16x gtceu:crystal_cpu','32x gtceu:fine_rhodium_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('gtceu:crystal_processor_computer')
        .EUt(30720)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('gt_zpm_circuit_onestep_h')
        .itemInputs('1x gtceu:hsss_frame','gtceu:crystal_soc','16x gtceu:fine_rhodium_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('4x gtceu:crystal_processor_computer')
        .EUt(30720)
        .duration(100);
        
    event.recipes.gtceu.circuit_assembler('gt_uv_circuit')
        .itemInputs('2x gtceu:naquadah_alloy_frame','10x #gtceu:circuits/zpm','2x gtceu:crystal_cpu',
            '8x gtceu:advanced_smd_diode','8x gtceu:advanced_smd_inductor','64x gtceu:fine_naquadria_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('gtceu:crystal_processor_mainframe')
        .EUt(30720)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('gt_uv_circuit_adv')
        .itemInputs('2x gtceu:naquadah_alloy_frame','5x #gtceu:circuits/zpm','2x gtceu:crystal_cpu',
            '2x kubejs:optic_smd_diode','2x kubejs:optic_smd_inductor','64x gtceu:fine_naquadria_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('gtceu:crystal_processor_mainframe')
        .EUt(30720)
        .duration(50);

    event.recipes.gtceu.circuit_assembler('gt_uv_circuit_onestep')
        .itemInputs('1x gtceu:naquadah_alloy_frame','16x gtceu:crystal_soc','32x gtceu:fine_naquadria_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('gtceu:wetware_processor_computer')
        .EUt(122880)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('gt_uv_circuit_onestep_h')
        .itemInputs('1x gtceu:naquadah_alloy_frame','gtceu:highly_advanced_soc','16x gtceu:fine_naquadria_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('4x gtceu:wetware_processor_computer')
        .EUt(122880)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('gt_uv_circuit_optic')
        .itemInputs('1x gtceu:tritanium_frame','kubejs:optic_soc','4x gtceu:fine_naquadria_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('16x kubejs:optic_processor_assembly')
        .EUt(491520)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('gt_uv_circuit_optic_h')
        .itemInputs('1x gtceu:tritanium_frame','kubejs:optic_soc_enlightened','gtceu:fine_naquadria_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('64x kubejs:optic_processor_assembly')
        .EUt(491520)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('gt_uhv_circuit_optic_h')
        .itemInputs('1x gtceu:tritanium_frame','7x #gtceu:circuits/uv','64x gtceu:advanced_smd_capacitor','kubejs:optic_soc_enlightened','64x gtceu:advanced_smd_resistor',
            '32x gtceu:enriched_naquadah_trinium_europium_duranide_single_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('4x kubejs:optic_processor_computer')
        .EUt(491520)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('gt_uhv_circuit_optic_h_adv')
        .itemInputs('1x gtceu:tritanium_frame','3x #gtceu:circuits/uv','16x kubejs:optic_smd_capacitor','kubejs:optic_soc_enlightened','64x kubejs:optic_smd_resistor',
            '32x gtceu:enriched_naquadah_trinium_europium_duranide_single_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('4x kubejs:optic_processor_computer')
        .EUt(491520)
        .duration(50);

    event.recipes.gtceu.circuit_assembler('gt_uhv_circuit_optic')
        .itemInputs('1x gtceu:tritanium_frame','14x #gtceu:circuits/uv','64x gtceu:advanced_smd_capacitor','4x kubejs:optic_soc','64x gtceu:advanced_smd_resistor',
            '32x gtceu:enriched_naquadah_trinium_europium_duranide_single_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('1x kubejs:optic_processor_computer')
        .EUt(491520)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('gt_uhv_circuit_optic_adv')
        .itemInputs('1x gtceu:tritanium_frame','7x #gtceu:circuits/uv','16x kubejs:optic_smd_capacitor','4x kubejs:optic_soc','16x kubejs:optic_smd_resistor',
            '32x gtceu:enriched_naquadah_trinium_europium_duranide_single_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .itemOutputs('1x kubejs:optic_processor_computer')
        .EUt(491520)
        .duration(50);

    event.recipes.gtceu.assembler('optic_smd_capacitor')
        .itemInputs('4x gtceu:peek_foil','gtceu:naquadah_alloy_foil')
        .inputFluids(Fluid.of('gtceu:peek',36))
        .EUt(491520)
        .duration(80)
        .itemOutputs('16x kubejs:optic_smd_capacitor');

    event.recipes.gtceu.assembler('optic_smd_inductor')
        .itemInputs('gtceu:darmstadtium_ring','8x gtceu:fine_naquadria_wire')
        .inputFluids(Fluid.of('gtceu:peek',144))
        .EUt(491520)
        .duration(150)
        .itemOutputs('16x kubejs:optic_smd_inductor');

    event.recipes.gtceu.assembler('optic_smd_transistor')
        .itemInputs('gtceu:duranium_foil','8x gtceu:fine_uranium_rhodium_dinaquadide_wire')
        .inputFluids(Fluid.of('gtceu:peek',144))
        .EUt(491520)
        .duration(150)
        .itemOutputs('16x kubejs:optic_smd_transistor');

    event.recipes.gtceu.assembler('optic_smd_resistor')
        .itemInputs('biggerreactors:ludicrite_dust','8x gtceu:fine_cosmic_neutron_wire')
        .inputFluids(Fluid.of('gtceu:peek',144))
        .EUt(491520)
        .duration(150)
        .itemOutputs('16x kubejs:optic_smd_resistor');

    event.recipes.gtceu.assembler('optic_smd_diode')
        .itemInputs('gtceu:europium_dust','64x gtceu:fine_indium_tin_barium_titanium_cuprate_wire')
        .inputFluids(Fluid.of('gtceu:peek',288))
        .EUt(491520)
        .duration(300)
        .itemOutputs('16x kubejs:optic_smd_diode');

    event.recipes.gtceu.assembly_line('gt_uhv_circuit')
        .itemInputs('4x gtceu:europium_frame','12x #gtceu:circuits/uv','64x gtceu:advanced_smd_capacitor','64x gtceu:advanced_smd_diode','64x gtceu:advanced_smd_inductor',
            '64x gtceu:advanced_smd_resistor','64x gtceu:advanced_smd_transistor','64x gtceu:polybenzimidazole_foil','64x gtceu:ram_chip','16x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy',9216))
        .itemOutputs('gtceu:wetware_processor_mainframe')
        .stationResearch(b => b.researchStack(Item.of('gtceu:crystal_processor_mainframe')).EUt(GTValues.VA[GTValues.IV]).CWUt(10))
        .EUt(300000)
        .duration(400);

    event.recipes.gtceu.assembly_line('gt_uhv_circuit_adv')
        .itemInputs('4x gtceu:europium_frame','6x #gtceu:circuits/uv','16x kubejs:optic_smd_capacitor','16x kubejs:optic_smd_diode','16x kubejs:optic_smd_inductor',
            '16x kubejs:optic_smd_resistor','16x kubejs:optic_smd_transistor','64x gtceu:polybenzimidazole_foil','64x gtceu:ram_chip','16x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy',9216))
        .itemOutputs('gtceu:wetware_processor_mainframe')
        .stationResearch(b => b.researchStack(Item.of('gtceu:crystal_processor_mainframe')).EUt(GTValues.VA[GTValues.IV]).CWUt(10))
        .EUt(300000)
        .duration(400);

    event.recipes.gtceu.assembly_line('gt_uev_circuit_optic')
        .itemInputs('4x gtceu:tritanium_frame','16x #gtceu:circuits/uhv','64x kubejs:optic_smd_capacitor','64x kubejs:optic_smd_diode','64x kubejs:optic_smd_inductor',
            '64x kubejs:optic_smd_resistor','64x kubejs:optic_smd_transistor','64x gtceu:polybenzimidazole_foil','kubejs:optic_soc_enlightened','64x gtceu:ruthenium_trinium_americium_neutronate_single_wire'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy',9216))
        .itemOutputs('kubejs:optic_processor_mainframe')
        .stationResearch(b => b.researchStack(Item.of('kubejs:optic_processor_computer')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
        .EUt(1200000)
        .duration(400);


    event.recipes.gtceu.laser_engraver('optic_soc_wafer')
    .itemInputs('gtceu:neutronium_wafer')
    .notConsumable('gtceu:magenta_glass_lens')
    .EUt(491520)
    .itemOutputs('kubejs:optic_soc_wafer')
    .duration(600);

    event.recipes.gtceu.cutter('optic_soc')
    .itemInputs('kubejs:optic_soc_wafer')
    .EUt(491520)
    .itemOutputs('kubejs:optic_soc')
    .duration(1200);

    event.recipes.gtceu.chemical_reactor('optic_soc_enlightened')
    .itemInputs('kubejs:optic_soc','64x gtceu:fine_americium_wire','8x allthemodium:allthemodium_dust')
    .inputFluids(Fluid.of('gtceu:nickel_plasma',1152),Fluid.of('gtceu:neutronium',2304))
    .itemOutputs('kubejs:optic_soc_enlightened')
    .EUt(GTValues.VA[GTValues.UEV])
    .duration(600);
        
});