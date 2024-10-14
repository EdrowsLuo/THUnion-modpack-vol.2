ServerEvents.recipes(event=>{
    event.recipes.gtceu.mekanism_factory('mi_alloy_infused')
    .itemInputs('8x #forge:ingots/iron','mekanism:enriched_redstone')
    .circuit(22)
    .itemOutputs('8x mekanism:alloy_infused')
    .EUt(120)
    .duration(20);

    event.recipes.gtceu.mekanism_factory('mi_alloy_reinforced')
    .itemInputs('4x mekanism:alloy_infused','mekanism:enriched_diamond')
    .circuit(22)
    .itemOutputs('4x mekanism:alloy_reinforced')
    .EUt(480)
    .duration(20);

    event.recipes.gtceu.mekanism_factory('mi_alloy_atomic')
    .itemInputs('2x mekanism:alloy_reinforced','mekanism:enriched_refined_obsidian')
    .circuit(22)
    .itemOutputs('2x mekanism:alloy_atomic')
    .EUt(1920)
    .duration(20);

    event.recipes.gtceu.mekanism_factory('mi_rf_obsidian')
    .itemInputs('8x #forge:dusts/obsidian','mekanism:enriched_diamond')
    .circuit(22)
    .itemOutputs('8x mekanism:dust_refined_obsidian')
    .EUt(120)
    .duration(20);

    event.recipes.gtceu.mekanism_factory('mi_rose_quartz')
    .itemInputs('minecraft:quartz','mekanism:enriched_diamond')
    .circuit(22)
    .itemOutputs('create:rose_quartz')
    .EUt(120)
    .duration(20);
})