ServerEvents.tags("item", event => {
    event.add("gtceu:circuits", "mekanism:basic_control_circuit")
    event.add("gtceu:circuits/lv", "mekanism:basic_control_circuit")

    event.add("gtceu:circuits", "mekanism:advanced_control_circuit")
    event.add("gtceu:circuits/mv", "mekanism:advanced_control_circuit")

    event.add("gtceu:circuits", "mekanism:elite_control_circuit")
    event.add("gtceu:circuits/hv", "mekanism:elite_control_circuit")

    event.add("gtceu:circuits", "mekanism:ultimate_control_circuit")
    event.add("gtceu:circuits/ev", "mekanism:ultimate_control_circuit")

    event.add('gtceu:circuits', 'kubejs:optic_processor_assembly');
    event.add('gtceu:circuits/uv', 'kubejs:optic_processor_assembly');

    event.add('gtceu:circuits', 'kubejs:optic_processor_computer');
    event.add('gtceu:circuits/uhv', 'kubejs:optic_processor_computer');

    event.add('gtceu:circuits', 'kubejs:optic_processor_mainframe');
    event.add('gtceu:circuits/uev', 'kubejs:optic_processor_mainframe');

    event.add('gtceu:circuits', 'kubejs:optic_processor_singularity');
    event.add('gtceu:circuits/uiv', 'kubejs:optic_processor_singularity');
})

ServerEvents.recipes(event => {
    event.replaceInput({input:"#gtceu:circuits/lv"}, "#gtceu:circuits/lv", "mekanism:basic_control_circuit")
    event.replaceInput({input:"#gtceu:circuits/mv"}, "#gtceu:circuits/mv", "mekanism:advanced_control_circuit")
    event.replaceInput({input:"#gtceu:circuits/hv"}, "#gtceu:circuits/hv", "mekanism:elite_control_circuit")
    event.replaceInput({input:"#gtceu:circuits/ev"}, "#gtceu:circuits/ev", "mekanism:ultimate_control_circuit")
})