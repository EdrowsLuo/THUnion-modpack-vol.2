ServerEvents.recipes(event=>{

event.recipes.gtceu.assembler('ars_elemental_custom_recipe_1')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:spell_prism', '1x ars_nouveau:manipulation_essence', '1x ars_nouveau:abjuration_essence')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('ars_elemental:mirror_shield', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('ars_elemental_custom_recipe_2')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('ars_elemental:mirror_shield', 1).strongNBT())
    .itemInputs('1x ars_nouveau:air_essence', '1x ars_nouveau:fire_essence', '1x ars_nouveau:earth_essence', '1x ars_nouveau:water_essence', '1x ars_elemental:spell_mirror')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('ars_elemental:mirror_shield', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('ars_elemental_custom_recipe_3')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('ars_elemental:mirror_shield', 2).strongNBT())
    .itemInputs('1x ars_nouveau:enchanters_mirror', '1x minecraft:totem_of_undying', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('ars_elemental:mirror_shield', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);


});
