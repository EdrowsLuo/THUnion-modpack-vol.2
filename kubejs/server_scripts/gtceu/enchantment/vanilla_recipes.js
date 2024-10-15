ServerEvents.recipes(event=>{

event.recipes.gtceu.assembler('vanilla_custom_recipe_1')
    .itemInputs('minecraft:book')
    .itemInputs('4x #minecraft:fishes', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:aqua_affinity', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_2')
    .itemInputs('minecraft:book')
    .itemInputs('2x minecraft:spider_eye', '1x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_3')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 1).strongNBT())
    .itemInputs('3x minecraft:spider_eye', '1x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_4')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 2).strongNBT())
    .itemInputs('4x minecraft:fermented_spider_eye', '1x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_5')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 3).strongNBT())
    .itemInputs('4x minecraft:fermented_spider_eye', '2x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_6')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 4).strongNBT())
    .itemInputs('4x minecraft:fermented_spider_eye', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_7')
    .itemInputs('minecraft:book')
    .itemInputs('2x #forge:storage_blocks/iron', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_8')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 1).strongNBT())
    .itemInputs('2x #forge:storage_blocks/iron', '1x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 4000))
    .EUt(4000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_9')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 2).strongNBT())
    .itemInputs('2x #forge:gems/diamond', '2x #forge:storage_blocks/source', '2x #forge:obsidian')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6000))
    .EUt(6000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_10')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 3).strongNBT())
    .itemInputs('4x #forge:gems/diamond', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/gold')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_11')
    .itemInputs('minecraft:book')
    .itemInputs('2x ars_nouveau:water_essence', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:depth_strider', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3000))
    .EUt(3000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_12')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:depth_strider', 1).strongNBT())
    .itemInputs('2x ars_nouveau:water_essence', '2x #forge:storage_blocks/source', '2x minecraft:prismarine_shard')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:depth_strider', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6000))
    .EUt(6000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_13')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:depth_strider', 2).strongNBT())
    .itemInputs('4x ars_nouveau:water_essence', '3x #forge:storage_blocks/source', '1x minecraft:nautilus_shell')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:depth_strider', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_14')
    .itemInputs('minecraft:book')
    .itemInputs('1x minecraft:sugar', '1x minecraft:iron_pickaxe', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_15')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 1).strongNBT())
    .itemInputs('1x #forge:storage_blocks/redstone', '1x minecraft:golden_pickaxe', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_16')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 2).strongNBT())
    .itemInputs('2x #forge:storage_blocks/redstone', '1x minecraft:golden_pickaxe', '3x #forge:storage_blocks/source', '2x #forge:obsidian')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_17')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 3).strongNBT())
    .itemInputs('2x #forge:storage_blocks/redstone', '1x minecraft:diamond_pickaxe', '1x minecraft:iron_shovel', '2x #forge:storage_blocks/source', '2x #forge:obsidian')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_18')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 4).strongNBT())
    .itemInputs('2x #forge:storage_blocks/redstone', '1x minecraft:diamond_pickaxe', '1x minecraft:diamond_shovel', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_19')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:air_essence', '1x #forge:slimeballs', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_20')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', 1).strongNBT())
    .itemInputs('2x ars_nouveau:air_essence', '1x #forge:slimeballs', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_21')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', 2).strongNBT())
    .itemInputs('3x ars_nouveau:air_essence', '1x #forge:slimeballs', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_22')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', 3).strongNBT())
    .itemInputs('4x ars_nouveau:air_essence', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_23')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:fire_essence', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_aspect', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_24')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_aspect', 1).strongNBT())
    .itemInputs('2x ars_nouveau:fire_essence', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_aspect', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 4000))
    .EUt(4000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_25')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:fire_essence', '1x ars_nouveau:abjuration_essence', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_26')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 1).strongNBT())
    .itemInputs('2x ars_nouveau:fire_essence', '1x ars_nouveau:abjuration_essence', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_27')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 2).strongNBT())
    .itemInputs('2x ars_nouveau:fire_essence', '1x ars_nouveau:abjuration_essence', '3x #forge:storage_blocks/source', '1x #forge:rods/blaze')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_28')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 3).strongNBT())
    .itemInputs('2x ars_nouveau:fire_essence', '2x ars_nouveau:abjuration_essence', '2x #forge:storage_blocks/source', '2x #forge:rods/blaze')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_29')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 4).strongNBT())
    .itemInputs('3x ars_nouveau:fire_essence', '3x ars_nouveau:abjuration_essence', '1x #forge:storage_blocks/source', '1x #forge:rods/blaze')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_30')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:fire_essence', '1x ars_nouveau:air_essence', '1x #forge:rods/blaze')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:flame', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_31')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:earth_essence', '1x #forge:gems/diamond', '6x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6000))
    .EUt(6000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_32')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 1).strongNBT())
    .itemInputs('2x ars_nouveau:earth_essence', '4x #forge:gems/diamond', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_33')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 2).strongNBT())
    .itemInputs('3x ars_nouveau:earth_essence', '1x #forge:storage_blocks/diamond', '2x #forge:storage_blocks/lapis', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_34')
    .itemInputs('minecraft:book')
    .itemInputs('7x ars_nouveau:air_essence', '1x #forge:storage_blocks/diamond')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:infinity', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_35')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:manipulation_essence', '1x ars_nouveau:air_essence', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:knockback', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_36')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:knockback', 1).strongNBT())
    .itemInputs('1x ars_nouveau:manipulation_essence', '2x ars_nouveau:air_essence', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:knockback', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 4000))
    .EUt(4000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_37')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:earth_essence', '1x #forge:gems/emerald', '6x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6000))
    .EUt(6000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_38')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 1).strongNBT())
    .itemInputs('2x ars_nouveau:earth_essence', '4x #forge:gems/emerald', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_39')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 2).strongNBT())
    .itemInputs('3x ars_nouveau:earth_essence', '1x #forge:storage_blocks/emerald', '2x #forge:storage_blocks/lapis', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_40')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:sourceberry_bush', '4x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('ars_nouveau:mana_boost', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_41')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('ars_nouveau:mana_boost', 1).strongNBT())
    .itemInputs('1x ars_nouveau:sourceberry_bush', '1x #forge:gems/diamond', '4x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('ars_nouveau:mana_boost', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_42')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('ars_nouveau:mana_boost', 2).strongNBT())
    .itemInputs('1x ars_nouveau:sourceberry_bush', '2x #forge:gems/diamond', '4x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('ars_nouveau:mana_boost', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_43')
    .itemInputs('minecraft:book')
    .itemInputs('2x ars_nouveau:sourceberry_bush', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('ars_nouveau:mana_regen', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_44')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('ars_nouveau:mana_regen', 1).strongNBT())
    .itemInputs('2x ars_nouveau:sourceberry_bush', '2x ars_nouveau:abjuration_essence', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('ars_nouveau:mana_regen', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_45')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('ars_nouveau:mana_regen', 2).strongNBT())
    .itemInputs('2x ars_nouveau:sourceberry_bush', '3x ars_nouveau:abjuration_essence', '2x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('ars_nouveau:mana_regen', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_46')
    .itemInputs('minecraft:book')
    .itemInputs('3x ars_nouveau:manipulation_essence', '5x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:multishot', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_47')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:manipulation_essence', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:piercing', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2500))
    .EUt(2500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_48')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:piercing', 1).strongNBT())
    .itemInputs('2x ars_nouveau:manipulation_essence', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:piercing', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_49')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:piercing', 2).strongNBT())
    .itemInputs('3x ars_nouveau:manipulation_essence', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:piercing', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 7500))
    .EUt(7500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_50')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:piercing', 3).strongNBT())
    .itemInputs('4x ars_nouveau:manipulation_essence', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:piercing', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_51')
    .itemInputs('minecraft:book')
    .itemInputs('1x #forge:gems/diamond', '1x ars_nouveau:air_essence', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_52')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 1).strongNBT())
    .itemInputs('2x #forge:gems/diamond', '1x ars_nouveau:air_essence', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_53')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 2).strongNBT())
    .itemInputs('3x #forge:gems/diamond', '1x ars_nouveau:air_essence', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_54')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 3).strongNBT())
    .itemInputs('4x #forge:gems/diamond', '1x ars_nouveau:air_essence', '1x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_55')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 4).strongNBT())
    .itemInputs('5x #forge:gems/diamond', '1x ars_nouveau:air_essence', '1x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_56')
    .itemInputs('minecraft:book')
    .itemInputs('1x minecraft:arrow', '1x ars_nouveau:air_essence', '1x ars_nouveau:abjuration_essence', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_57')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 1).strongNBT())
    .itemInputs('1x minecraft:arrow', '2x ars_nouveau:air_essence', '1x ars_nouveau:abjuration_essence', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_58')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 2).strongNBT())
    .itemInputs('1x minecraft:arrow', '2x ars_nouveau:air_essence', '1x ars_nouveau:abjuration_essence', '3x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_59')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 3).strongNBT())
    .itemInputs('1x minecraft:arrow', '2x ars_nouveau:air_essence', '2x ars_nouveau:abjuration_essence', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_60')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 4).strongNBT())
    .itemInputs('1x minecraft:arrow', '3x ars_nouveau:air_essence', '3x ars_nouveau:abjuration_essence', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_61')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:manipulation_essence', '1x ars_nouveau:abjuration_essence', '1x #forge:storage_blocks/lapis', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_62')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 1).strongNBT())
    .itemInputs('2x ars_nouveau:manipulation_essence', '1x ars_nouveau:abjuration_essence', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_63')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 2).strongNBT())
    .itemInputs('2x ars_nouveau:manipulation_essence', '1x ars_nouveau:abjuration_essence', '3x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_64')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 3).strongNBT())
    .itemInputs('2x ars_nouveau:manipulation_essence', '2x ars_nouveau:abjuration_essence', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);



event.recipes.gtceu.assembler('vanilla_custom_recipe_66')
    .itemInputs('minecraft:book')
    .itemInputs('2x ars_nouveau:air_essence', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:punch', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_67')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:punch', 1).strongNBT())
    .itemInputs('3x ars_nouveau:air_essence', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:punch', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 4000))
    .EUt(4000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_68')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:air_essence', '1x ars_nouveau:abjuration_essence', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:quick_charge', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_69')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:quick_charge', 1).strongNBT())
    .itemInputs('1x ars_nouveau:air_essence', '2x ars_nouveau:abjuration_essence', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:quick_charge', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 4000))
    .EUt(4000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_70')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:quick_charge', 2).strongNBT())
    .itemInputs('1x ars_nouveau:air_essence', '2x ars_nouveau:abjuration_essence', '3x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:quick_charge', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6000))
    .EUt(6000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_71')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('ars_nouveau:reactive', 1).strongNBT())
    .itemInputs('4x minecraft:blaze_powder', '1x ars_nouveau:air_essence', '1x ars_nouveau:earth_essence', '1x ars_nouveau:fire_essence', '1x ars_nouveau:water_essence')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('ars_nouveau:reactive', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6000))
    .EUt(6000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_72')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('ars_nouveau:reactive', 2).strongNBT())
    .itemInputs('4x #forge:gems/emerald', '1x #forge:ender_pearls', '1x ars_nouveau:abjuration_essence', '1x ars_nouveau:conjuration_essence', '1x ars_nouveau:manipulation_essence')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('ars_nouveau:reactive', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_73')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('ars_nouveau:reactive', 3).strongNBT())
    .itemInputs('4x #forge:gems/diamond', '1x #forge:ender_pearls', '1x ars_nouveau:wilden_tribute')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('ars_nouveau:reactive', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_74')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:water_essence', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:respiration', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3000))
    .EUt(3000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_75')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:respiration', 1).strongNBT())
    .itemInputs('4x ars_nouveau:water_essence', '4x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:respiration', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6000))
    .EUt(6000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_76')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:respiration', 2))
    .itemInputs('6x ars_nouveau:water_essence', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:respiration', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_77')
    .itemInputs('minecraft:book')
    .itemInputs('2x #forge:storage_blocks/quartz', '1x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_78')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 1).strongNBT())
    .itemInputs('2x #forge:storage_blocks/quartz', '2x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_79')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 2).strongNBT())
    .itemInputs('2x #forge:storage_blocks/quartz', '1x #forge:gems/diamond', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_80')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 3).strongNBT())
    .itemInputs('2x #forge:storage_blocks/quartz', '2x #forge:gems/diamond', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_81')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 4).strongNBT())
    .itemInputs('2x #forge:storage_blocks/quartz', '2x #forge:gems/diamond', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_82')
    .itemInputs('minecraft:book')
    .itemInputs('2x #forge:gems/emerald', '2x #forge:gems/diamond', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:silk_touch', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_83')
    .itemInputs('minecraft:book')
    .itemInputs('2x minecraft:bone_block', '1x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_84')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 1).strongNBT())
    .itemInputs('3x minecraft:bone_block', '1x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_85')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 2).strongNBT())
    .itemInputs('4x minecraft:bone_block', '1x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_86')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 3).strongNBT())
    .itemInputs('4x minecraft:bone_block', '2x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_87')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 4).strongNBT())
    .itemInputs('4x minecraft:bone_block', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_88')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:manipulation_essence', '1x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sweeping', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_89')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sweeping', 1).strongNBT())
    .itemInputs('2x ars_nouveau:manipulation_essence', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sweeping', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_90')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sweeping', 2).strongNBT())
    .itemInputs('3x ars_nouveau:manipulation_essence', '2x #forge:storage_blocks/source', '3x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sweeping', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_91')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:wilden_spike', '1x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:thorns', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_92')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:thorns', 1).strongNBT())
    .itemInputs('2x ars_nouveau:wilden_spike', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:thorns', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_93')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:thorns', 2).strongNBT())
    .itemInputs('3x ars_nouveau:wilden_spike', '2x #forge:storage_blocks/source', '3x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:thorns', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_94')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:abjuration_essence', '1x #forge:gems/diamond', '1x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('vanilla_custom_recipe_95')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 1).strongNBT())
    .itemInputs('1x ars_nouveau:abjuration_essence', '2x #forge:gems/diamond', '2x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('vanilla_custom_recipe_96')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 2).strongNBT())
    .itemInputs('1x ars_nouveau:abjuration_essence', '3x #forge:gems/diamond', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

});