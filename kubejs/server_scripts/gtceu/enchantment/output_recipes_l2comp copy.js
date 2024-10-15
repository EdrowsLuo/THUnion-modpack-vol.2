ServerEvents.recipes(event=>{
event.recipes.gtceu.assembler('l2comp_custom_recipe_1')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2complements:storm_core', '2x minecraft:iron_ingot', '2x minecraft:lapis_lazuli', '3x minecraft:stone_pickaxe')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:cubic_digging', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_2')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2complements:blackstone_core', '2x l2complements:sculkium_ingot', '2x minecraft:lapis_lazuli', '3x minecraft:netherite_pickaxe')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:cubic_eater', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_3')
    .itemInputs('minecraft:book')
    .itemInputs('2x l2complements:cursed_droplet', '2x minecraft:fermented_spider_eye', '4x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:cursed_blade', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_4')
    .itemInputs('minecraft:book')
    .itemInputs('4x l2complements:sculkium_nugget', '4x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:dampened', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_5')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2complements:storm_core', '2x minecraft:iron_ingot', '2x minecraft:lapis_lazuli', '3x minecraft:stone_shovel')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:drill_digging', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_6')
    .itemInputs('minecraft:book')
    .itemInputs('1x minecraft:diamond', '3x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:durable_armor', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_7')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:durable_armor', 1).strongNBT())
    .itemInputs('4x minecraft:diamond', '4x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:durable_armor', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_8')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:durable_armor', 2).strongNBT())
    .itemInputs('1x minecraft:diamond_boots', '1x minecraft:diamond_chestplate', '1x minecraft:diamond_helmet', '1x minecraft:diamond_leggings', '4x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:durable_armor', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_9')
    .itemInputs('minecraft:book')
    .itemInputs('1x minecraft:carved_pumpkin', '3x minecraft:ender_eye', '4x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ender_mask', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_10')
    .itemInputs('minecraft:book')
    .itemInputs('3x minecraft:ender_pearl', '1x minecraft:hopper', '4x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ender_reach', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_11')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2complements:captured_wind', '2x l2complements:sun_membrane', '4x l2complements:void_eye')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:environment_reject', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_12')
    .itemInputs('minecraft:book')
    .itemInputs('3x l2complements:eternium_ingot', '1x l2complements:space_shard', '4x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:eternal', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_13')
    .itemInputs('minecraft:book')
    .itemInputs('4x l2complements:explosion_shard', '1x minecraft:crying_obsidian')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:explosion_reject', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_14')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2complements:hard_ice', '4x l2complements:soul_flame')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:fire_reject', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_15')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2complements:explosion_shard', '3x l2complements:shulkerate_ingot', '2x l2complements:warden_bone_shard', '2x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:hardened', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_16')
    .itemInputs('minecraft:book')
    .itemInputs('4x l2complements:hard_ice', '4x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ice_blade', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_17')
    .itemInputs('minecraft:book')
    .itemInputs('4x l2complements:hard_ice', '4x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ice_thorn', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_18')
    .itemInputs('minecraft:book')
    .itemInputs('4x l2complements:space_shard')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:invincible', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_19')
    .itemInputs('minecraft:book')
    .itemInputs('2x minecraft:lapis_lazuli', '2x minecraft:rotten_flesh', '2x minecraft:twisting_vines', '2x minecraft:weeping_vines')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:life_mending', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_20')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2complements:force_field', '4x minecraft:lapis_lazuli', '3x minecraft:wither_rose')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:life_sync', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_21')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2complements:force_field', '4x l2complements:resonant_feather', '2x l2complements:void_eye')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:magic_reject', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_22')
    .itemInputs('minecraft:book')
    .itemInputs('6x minecraft:end_rod', '2x minecraft:nether_star')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:owner_protection', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_23')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2complements:storm_core', '2x minecraft:iron_ingot', '2x minecraft:lapis_lazuli', '3x minecraft:stone_hoe')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:plane_digging', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_24')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2complements:blackstone_core', '2x l2complements:sculkium_ingot', '2x minecraft:lapis_lazuli', '3x minecraft:netherite_hoe')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:plane_eater', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_25')
    .itemInputs('minecraft:book')
    .itemInputs('4x l2complements:force_field')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:projectile_reject', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_26')
    .itemInputs('minecraft:book')
    .itemInputs('2x l2complements:shulkerate_nugget', '2x minecraft:amethyst_shard', '2x minecraft:lapis_lazuli', '2x minecraft:netherite_scrap')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:safeguard', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_27')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2complements:cursed_droplet', '3x l2complements:explosion_shard', '4x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:sharp_blade', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_28')
    .itemInputs('minecraft:book')
    .itemInputs('4x minecraft:gold_ingot', '4x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:shinny', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_29')
    .itemInputs('minecraft:book')
    .itemInputs('3x l2complements:shulkerate_nugget', '1x minecraft:glass', '4x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:shulker_armor', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_30')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2complements:soul_flame', '4x minecraft:lapis_lazuli', '3x minecraft:lava_bucket')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:smelt', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_31')
    .itemInputs('minecraft:book')
    .itemInputs('4x minecraft:lapis_lazuli', '4x minecraft:leather')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:snow_walker', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);


event.recipes.gtceu.assembler('l2comp_custom_recipe_33')
    .itemInputs('minecraft:book')
    .itemInputs('4x l2complements:soul_flame', '4x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:soul_flame_blade', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_34')
    .itemInputs('minecraft:book')
    .itemInputs('4x l2complements:soul_flame', '4x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:soul_flame_thorn', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_35')
    .itemInputs('minecraft:book')
    .itemInputs('1x minecraft:crying_obsidian', '4x minecraft:lapis_lazuli', '3x minecraft:obsidian')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:stable_body', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_36')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2complements:storm_core', '2x minecraft:gold_ingot', '3x minecraft:iron_axe', '2x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:tree_chopping', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_37')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2complements:storm_core', '2x minecraft:gold_ingot', '3x minecraft:iron_pickaxe', '2x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:vien_mining', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_38')
    .itemInputs('minecraft:book')
    .itemInputs('4x l2complements:resonant_feather', '2x l2complements:sun_membrane', '2x l2complements:void_eye')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:void_touch', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2comp_custom_recipe_39')
    .itemInputs('minecraft:book')
    .itemInputs('3x l2complements:shulkerate_nugget', '1x l2complements:storm_core', '4x minecraft:lapis_lazuli')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:wind_sweep', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

});