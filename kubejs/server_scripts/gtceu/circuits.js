ServerEvents.tags("item", event => {
    event.add("gtceu:circuits", "mekanism:basic_control_circuit")
    event.add("gtceu:circuits/lv", "mekanism:basic_control_circuit")

    event.add("gtceu:circuits", "mekanism:advanced_control_circuit")
    event.add("gtceu:circuits/mv", "mekanism:advanced_control_circuit")

    event.add("gtceu:circuits", "mekanism:elite_control_circuit")
    event.add("gtceu:circuits/hv", "mekanism:elite_control_circuit")

    event.add("gtceu:circuits", "mekanism:ultimate_control_circuit")
    event.add("gtceu:circuits/ev", "mekanism:ultimate_control_circuit")
})

ServerEvents.recipes(event => {
    event.replaceInput({input:"#gtceu:circuits/lv"}, "#gtceu:circuits/lv", "mekanism:basic_control_circuit")
    event.replaceInput({input:"#gtceu:circuits/mv"}, "#gtceu:circuits/mv", "mekanism:advanced_control_circuit")
    event.replaceInput({input:"#gtceu:circuits/hv"}, "#gtceu:circuits/hv", "mekanism:elite_control_circuit")
    event.replaceInput({input:"#gtceu:circuits/ev"}, "#gtceu:circuits/ev", "mekanism:ultimate_control_circuit")
})