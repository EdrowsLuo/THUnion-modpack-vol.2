// priority: 100

JEIEvents.hideItems(event=>{
    [
        'gtceu:basic_electronic_circuit',
        'gtceu:good_electronic_circuit',
        'gtceu:basic_integrated_circuit',
        'gtceu:good_integrated_circuit',
        'gtceu:advanced_integrated_circuit',
        'gtceu:microchip_processor',
        'gtceu:micro_processor',
        'gtceu:micro_processor_assembly',
        'gtceu:micro_processor_computer',
        'gtceu:nano_processor',
        'gtceu:nano_processor_assembly',
        'gtceu:nano_processor_computer',
        'gtceu:quantum_processor',
        'gtceu:quantum_processor_assembly',
        'gtceu:quantum_processor_computer',
        'gtceu:crystal_processor',
        'gtceu:crystal_processor_assembly',
        'gtceu:crystal_processor_computer',
        'gtceu:wetware_processor',
        'gtceu:wetware_processor_assembly',
        'gtceu:wetware_processor_computer',
        'gtceu:uv_dual_input_hatch',
        'gtceu:uv_dual_output_hatch',
        'gtceu:uhv_dual_input_hatch',
        'gtceu:uhv_dual_output_hatch',
        'gtceu:uev_dual_input_hatch',
        'gtceu:uev_dual_output_hatch',
        'gtceu:uiv_dual_input_hatch',
        'gtceu:uiv_dual_output_hatch',
        'gtceu:umv_dual_input_hatch',
        'gtceu:umv_dual_output_hatch',
        'gtceu:opv_dual_input_hatch',
        'gtceu:opv_dual_output_hatch',

    ].forEach(item=>{
        event.hide(item);
    })

    event.hide("#botanypots:all_botany_pots")
})
