ServerEvents.recipes(event=>{
event.recipes.gtceu.assembler('l2weap_custom_recipe_1')
    .itemInputs('minecraft:book')
    .itemInputs('2x l2complements:explosion_shard', '3x l2complements:warden_bone_shard', '3x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:claw_shielding', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2weap_custom_recipe_2')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2complements:poseidite_ingot', '1x l2weaponry:reinforced_handle', '2x minecraft:ender_eye', '4x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:ender_hand', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2weap_custom_recipe_3')
    .itemInputs('minecraft:book')
    .itemInputs('2x l2complements:soul_flame', '2x minecraft:lapis_lazuli', '4x minecraft:redstone')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:energized_will', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2weap_custom_recipe_4')
    .itemInputs('minecraft:book')
    .itemInputs('2x l2complements:explosion_shard', '2x l2complements:resonant_feather', '4x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:ghost_slash', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2weap_custom_recipe_5')
    .itemInputs('minecraft:book')
    .itemInputs('3x l2complements:shulkerate_ingot', '2x l2weaponry:reinforced_handle', '3x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:hard_shield', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2weap_custom_recipe_6')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2weaponry:reinforced_handle', '3x minecraft:anvil', '2x minecraft:gold_ingot', '2x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:heavy', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2weap_custom_recipe_7')
    .itemInputs('minecraft:book')
    .itemInputs('2x l2weaponry:reinforced_handle', '1x minecraft:anvil', '2x minecraft:lapis_lazuli', '3x minecraft:netherite_ingot')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:heavy_shield', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2weap_custom_recipe_8')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2complements:storm_core', '1x minecraft:crossbow', '2x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:instant_shot', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2weap_custom_recipe_9')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2complements:guardian_eye', '1x l2complements:poseidite_ingot', '1x l2complements:void_eye', '1x minecraft:conduit', '2x minecraft:lapis_lazuli', '1x minecraft:zombie_head')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:projection', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2weap_custom_recipe_10')
    .itemInputs('minecraft:book')
    .itemInputs('2x l2complements:soul_flame', '4x minecraft:glowstone_dust', '2x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:raised_spirit', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2weap_custom_recipe_11')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2complements:captured_wind', '3x l2complements:hard_ice', '4x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:stealth', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

});