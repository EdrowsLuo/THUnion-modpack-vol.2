ServerEvents.recipes(event=>{
    event.recipes.gtceu.assembler('custom_recipe_1')
    .itemInputs('minecraft:book')
    .itemInputs('1x #forge:dusts/blaze', '1x minecraft:iron_pickaxe', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_2')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 1).strongNBT())
    .itemInputs('1x #forge:rods/blaze', '1x minecraft:golden_pickaxe', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_3')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 2).strongNBT())
    .itemInputs('2x #forge:rods/blaze', '1x minecraft:golden_pickaxe', '3x #forge:storage_blocks/source', '2x #forge:storage_blocks/glowstone')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_4')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 3).strongNBT())
    .itemInputs('2x #forge:rods/blaze', '1x minecraft:diamond_pickaxe', '1x minecraft:iron_shovel', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/glowstone')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_5')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 4).strongNBT())
    .itemInputs('2x #forge:rods/blaze', '1x minecraft:diamond_pickaxe', '1x minecraft:diamond_shovel', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/refined_glowstone')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:miners_fervor', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_6')
    .itemInputs('minecraft:book')
    .itemInputs('1x #forge:string', '2x #forge:wool', '1x bloodmagic:sacrificialdagger')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:exploitation', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_7')
    .itemInputs('minecraft:book')
    .itemInputs('2x minecraft:arrow', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:crescendo', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_8')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:crescendo', 1).strongNBT())
    .itemInputs('3x minecraft:arrow', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:crescendo', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_9')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:crescendo', 2).strongNBT())
    .itemInputs('4x apotheosis:obsidian_arrow', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:crescendo', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_10')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:crescendo', 3).strongNBT())
    .itemInputs('4x apotheosis:obsidian_arrow', '1x #forge:storage_blocks/lapis', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:crescendo', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_11')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:crescendo', 4).strongNBT())
    .itemInputs('4x apotheosis:obsidian_arrow', '2x #forge:storage_blocks/lapis', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:crescendo', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_12')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:earth_essence', '1x #forge:ingots/netherite', '6x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:earths_boon', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6000))
    .EUt(6000);

event.recipes.gtceu.assembler('custom_recipe_13')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:earths_boon', 1).strongNBT())
    .itemInputs('2x ars_nouveau:earth_essence', '4x #forge:ingots/netherite', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:earths_boon', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_14')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:earths_boon', 2).strongNBT())
    .itemInputs('3x ars_nouveau:earth_essence', '1x #forge:storage_blocks/netherite', '2x #forge:storage_blocks/emerald', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:earths_boon', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_15')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:water_essence', '1x #forge:ingots/netherite', '6x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:knowledge', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6000))
    .EUt(6000);

event.recipes.gtceu.assembler('custom_recipe_16')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:knowledge', 1).strongNBT())
    .itemInputs('2x ars_nouveau:water_essence', '4x #forge:ingots/netherite', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:knowledge', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_17')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:knowledge', 2).strongNBT())
    .itemInputs('3x ars_nouveau:water_essence', '1x #forge:storage_blocks/netherite', '2x create:experience_block', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:knowledge', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_18')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:air_essence', '1x #forge:ingots/netherite', '6x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:scavenger', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6000))
    .EUt(6000);

event.recipes.gtceu.assembler('custom_recipe_19')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:scavenger', 1).strongNBT())
    .itemInputs('2x ars_nouveau:air_essence', '4x #forge:ingots/netherite', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:scavenger', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_20')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:scavenger', 2).strongNBT())
    .itemInputs('3x ars_nouveau:air_essence', '1x #forge:storage_blocks/netherite', '2x #forge:storage_blocks/redstone', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:scavenger', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_21')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:earth_essence', '1x minecraft:diamond_axe', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:chainsaw', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_22')
    .itemInputs('minecraft:book')
    .itemInputs('6x ars_nouveau:air_essence', '1x #forge:storage_blocks/diamond', '1x #forge:storage_blocks/netherite')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:endless_quiver', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_23')
    .itemInputs('minecraft:book')
    .itemInputs('1x #forge:string', '2x #forge:wool', '1x minecraft:hay_block')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:growth_serum', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_24')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:earth_essence', '1x ars_nouveau:air_essence', '1x ars_nouveau:fire_essence', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:berserkers_fury', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3000))
    .EUt(3000);

event.recipes.gtceu.assembler('custom_recipe_25')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:berserkers_fury', 1).strongNBT())
    .itemInputs('1x ars_nouveau:earth_essence', '1x ars_nouveau:air_essence', '1x ars_nouveau:fire_essence', '2x #forge:gems/diamond', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:berserkers_fury', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6000))
    .EUt(6000);

event.recipes.gtceu.assembler('custom_recipe_26')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:berserkers_fury', 2).strongNBT())
    .itemInputs('1x ars_nouveau:earth_essence', '1x ars_nouveau:air_essence', '1x ars_nouveau:fire_essence', '1x #forge:storage_blocks/diamond', '4x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:berserkers_fury', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_27')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_elemental:anima_essence', '1x bloodmagic:reinforcedslate', '6x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:life_mending', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3000))
    .EUt(3000);

event.recipes.gtceu.assembler('custom_recipe_28')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:life_mending', 1).strongNBT())
    .itemInputs('2x ars_elemental:anima_essence', '4x bloodmagic:reinforcedslate', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:life_mending', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6000))
    .EUt(6000);

event.recipes.gtceu.assembler('custom_recipe_29')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:life_mending', 2).strongNBT())
    .itemInputs('3x ars_elemental:anima_essence', '3x bloodmagic:infusedslate', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:life_mending', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_30')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:wilden_spike', '1x #forge:storage_blocks/source', '1x minecraft:blue_ice')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:icy_thorns', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_31')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:icy_thorns', 1).strongNBT())
    .itemInputs('2x ars_nouveau:wilden_spike', '2x #forge:storage_blocks/source', '2x minecraft:blue_ice')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:icy_thorns', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_32')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:icy_thorns', 2).strongNBT())
    .itemInputs('3x ars_nouveau:wilden_spike', '2x #forge:storage_blocks/source', '3x minecraft:blue_ice')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:icy_thorns', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_33')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:wilden_wing', '1x #forge:storage_blocks/source', '1x minecraft:slime_block')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:rebounding', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_34')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:rebounding', 1).strongNBT())
    .itemInputs('2x ars_nouveau:wilden_wing', '2x #forge:storage_blocks/source', '2x minecraft:slime_block')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:rebounding', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_35')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:rebounding', 2).strongNBT())
    .itemInputs('3x ars_nouveau:wilden_wing', '2x #forge:storage_blocks/source', '3x minecraft:slime_block')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:rebounding', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_36')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:wilden_spike', '2x #forge:storage_blocks/source', '1x #forge:storage_blocks/iron')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:reflective', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_37')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:reflective', 1).strongNBT())
    .itemInputs('2x ars_nouveau:wilden_spike', '2x #forge:storage_blocks/source', '1x #forge:storage_blocks/iron')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:reflective', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_38')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:reflective', 2).strongNBT())
    .itemInputs('2x ars_nouveau:wilden_spike', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/iron')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:reflective', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_39')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:reflective', 3).strongNBT())
    .itemInputs('3x ars_nouveau:wilden_spike', '2x #forge:storage_blocks/source', '2x #forge:storage_blocks/iron')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:reflective', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_40')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:reflective', 4).strongNBT())
    .itemInputs('3x ars_nouveau:wilden_spike', '2x #forge:storage_blocks/source', '3x #forge:storage_blocks/iron')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:reflective', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_41')
    .itemInputs('minecraft:book')
    .itemInputs('2x supplementaries:bamboo_spikes', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:shield_bash', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_42')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:shield_bash', 1).strongNBT())
    .itemInputs('3x supplementaries:bamboo_spikes', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:shield_bash', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_43')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:shield_bash', 2).strongNBT())
    .itemInputs('4x gtceu:long_iron_rod', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:shield_bash', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_44')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:shield_bash', 3).strongNBT())
    .itemInputs('4x gtceu:long_iron_rod', '1x #forge:storage_blocks/lapis', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:shield_bash', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_45')
    .itemInputs('minecraft:book')
    .itemInputs('5x ars_nouveau:air_essence', '2x gtceu:double_iron_plate', '1x #forge:storage_blocks/iron')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:stable_footing', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_46')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:earth_essence', '1x #forge:dusts/bone', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:natures_blessing', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_47')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:natures_blessing', 1).strongNBT())
    .itemInputs('2x ars_nouveau:earth_essence', '1x #forge:dusts/bone', '1x #forge:seeds', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:natures_blessing', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_48')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:natures_blessing', 2).strongNBT())
    .itemInputs('2x ars_nouveau:earth_essence', '1x #forge:storage_blocks/bone', '3x #forge:seeds', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:natures_blessing', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_49')
    .itemInputs('minecraft:book')
    .itemInputs('2x #forge:gems/emerald', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:bane_of_illagers', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_50')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:bane_of_illagers', 1).strongNBT())
    .itemInputs('3x #forge:gems/emerald', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:bane_of_illagers', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_51')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:bane_of_illagers', 2).strongNBT())
    .itemInputs('4x #forge:storage_blocks/emerald', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:bane_of_illagers', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_52')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:bane_of_illagers', 3).strongNBT())
    .itemInputs('4x #forge:storage_blocks/emerald', '1x #forge:storage_blocks/lapis', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:bane_of_illagers', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_53')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:bane_of_illagers', 4).strongNBT())
    .itemInputs('4x #forge:storage_blocks/emerald', '2x #forge:storage_blocks/lapis', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:bane_of_illagers', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_54')
    .itemInputs('minecraft:book')
    .itemInputs('1x l2complements:totemic_gold_ingot', '1x ars_nouveau:mob_jar', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:capturing', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_55')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:capturing', 1).strongNBT())
    .itemInputs('1x l2complements:totemic_gold_ingot', '1x minecraft:cobweb', '2x ars_nouveau:mob_jar', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:capturing', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_56')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:capturing', 2).strongNBT())
    .itemInputs('3x l2complements:totemic_gold_ingot', '2x ars_nouveau:mob_jar', '3x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:capturing', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_57')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:capturing', 3).strongNBT())
    .itemInputs('1x l2complements:totemic_gold_block', '1x l2complements:force_field', '2x ars_nouveau:mob_jar', '4x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:capturing', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_58')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:capturing', 4).strongNBT())
    .itemInputs('1x l2complements:totemic_gold_block', '2x l2complements:force_field', '2x ars_nouveau:mob_jar', '3x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:capturing', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_59')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:manipulation_essence', '7x #forge:dyes')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:chromatic', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_60')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:conjuration_essence', '7x #minecraft:flowers')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:tempting', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_61')
    .itemInputs('minecraft:book')
    .itemInputs('2x #forge:storage_blocks/source', '2x #forge:storage_blocks/diamond', '4x #forge:storage_blocks/iron')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:obliteration', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_62')
    .itemInputs('minecraft:book')
    .itemInputs('2x #forge:storage_blocks/source', '3x #forge:storage_blocks/iron', '3x #forge:storage_blocks/refined_obsidian')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:splitting', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_63')
    .itemInputs('minecraft:book')
    .itemInputs('1x minecraft:spider_eye', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('the_bumblezone:potent_poison', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_64')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('the_bumblezone:potent_poison', 1).strongNBT())
    .itemInputs('2x minecraft:fermented_spider_eye', '2x minecraft:poisonous_potato', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('the_bumblezone:potent_poison', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_65')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('the_bumblezone:potent_poison', 2).strongNBT())
    .itemInputs('2x minecraft:fermented_spider_eye', '2x minecraft:poisonous_potato', '2x minecraft:pufferfish', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('the_bumblezone:potent_poison', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_66')
    .itemInputs('minecraft:book')
    .itemInputs('1x minecraft:shears', '5x #forge:storage_blocks/wax', '2x minecraft:bee_nest')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('the_bumblezone:comb_cutter', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_67')
    .itemInputs('minecraft:book')
    .itemInputs('1x minecraft:bucket', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('cofh_core:holding', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_68')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('cofh_core:holding', 1).strongNBT())
    .itemInputs('2x create:fluid_tank', '1x create:fluid_pipe', '3x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('cofh_core:holding', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_69')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('cofh_core:holding', 2).strongNBT())
    .itemInputs('3x mecanism:elite_fluid_tank', '1x mecanism:elite_mechanical_pipe', '4x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('cofh_core:holding', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_70')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('cofh_core:holding', 3).strongNBT())
    .itemInputs('3x ae2:fluid_storage_cell_64k', '1x ae2:drive', '1x ae2:storage_bus', '3x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('cofh_core:holding', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_71')
    .itemInputs('minecraft:book')
    .itemInputs('2x minecraft:sculk', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('deeperdarker:sculk_smite', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_72')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('deeperdarker:sculk_smite', 1).strongNBT())
    .itemInputs('3x minecraft:sculk', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('deeperdarker:sculk_smite', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_73')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('deeperdarker:sculk_smite', 2).strongNBT())
    .itemInputs('4x #forge:gems/echo', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('deeperdarker:sculk_smite', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_74')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('deeperdarker:sculk_smite', 3).strongNBT())
    .itemInputs('4x #forge:gems/echo', '1x #forge:storage_blocks/lapis', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('deeperdarker:sculk_smite', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_75')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('deeperdarker:sculk_smite', 4).strongNBT())
    .itemInputs('4x #forge:gems/echo', '2x #forge:storage_blocks/lapis', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('deeperdarker:sculk_smite', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_76')
    .itemInputs('minecraft:book')
    .itemInputs('2x #forge:ingots/draconium', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('draconicevolution:reaper_enchantment', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_77')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('draconicevolution:reaper_enchantment', 1).strongNBT())
    .itemInputs('3x #forge:ingots/draconium', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('draconicevolution:reaper_enchantment', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_78')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('draconicevolution:reaper_enchantment', 2).strongNBT())
    .itemInputs('4x #forge:ingots/draconium_awakened', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('draconicevolution:reaper_enchantment', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_79')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('draconicevolution:reaper_enchantment', 3).strongNBT())
    .itemInputs('4x #forge:ingots/draconium_awakened', '1x #forge:storage_blocks/lapis', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('draconicevolution:reaper_enchantment', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_80')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('draconicevolution:reaper_enchantment', 4).strongNBT())
    .itemInputs('4x #forge:ingots/draconium_awakened', '2x #forge:storage_blocks/lapis', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('draconicevolution:reaper_enchantment', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_81')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:fire_essence', '1x minecraft:pointed_dripstone', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('farmersdelight:backstabbing', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_82')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('farmersdelight:backstabbing', 1).strongNBT())
    .itemInputs('1x ars_nouveau:fire_essence', '2x minecraft:pointed_dripstone', '1x minecraft:iron_sword', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('farmersdelight:backstabbing', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_83')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('farmersdelight:backstabbing', 2).strongNBT())
    .itemInputs('1x ars_nouveau:fire_essence', '3x minecraft:pointed_dripstone', '1x minecraft:diamond_sword', '3x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('farmersdelight:backstabbing', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_84')
    .itemInputs('minecraft:book')
    .itemInputs('6x minecraft:anvil', '1x soulsweapons:crimson_ingot', '1x soulsweapons:soul_ingot')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('soulsweapons:stagger', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_85')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('soulsweapons:stagger', 1).strongNBT())
    .itemInputs('1x soulsweapons:essence_of_eventide', '6x minecraft:anvil', '1x soulsweapons:essence_of_luminescence')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('soulsweapons:stagger', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_86')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('soulsweapons:stagger', 2).strongNBT())
    .itemInputs('1x alexscaves:primitive_club', '7x minecraft:anvil')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('soulsweapons:stagger', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_87')
    .itemInputs('minecraft:book')
    .itemInputs('4x gtceu:polybenzimidazole_foil', '4x gtceu:stainless_steel_foil')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('jerotesvillage:corrosion_resistance', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_88')
    .itemInputs('minecraft:book')
    .itemInputs('1x minecraft:chorus_fruit', '7x minecraft:ender_pearl')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('travelanchors:range', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_89')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('travelanchors:range', 1).strongNBT())
    .itemInputs('1x minecraft:chorus_flower', '5x minecraft:ender_pearl', '2x the_bumblezone:windy_air')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('travelanchors:range', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_90')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('travelanchors:range', 2).strongNBT())
    .itemInputs('1x minecraft:end_rod', '2x cataclysm:void_stone', '3x minecraft:ender_pearl', '2x the_bumblezone:windy_air')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('travelanchors:range', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_91')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('travelanchors:range', 3).strongNBT())
    .itemInputs('1x minecraft:dragon_head', '2x cataclysm:void_stone', '2x gtceu:gravitation_engine_unit', '2x the_bumblezone:windy_air', '1x minecraft:ender_pearl')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('travelanchors:range', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_92')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('travelanchors:range', 4).strongNBT())
    .itemInputs('1x minecraft:beacon', '2x cataclysm:void_stone', '2x gtceu:gravitation_engine_unit', '2x the_bumblezone:windy_air', '1x irons_spellbooks:hither_thither_wand')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('travelanchors:range', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_93')
    .itemInputs('minecraft:book')
    .itemInputs('1x travelanchors:travel_staff', '4x l2complements:void_eye', '2x l2complements:eternium_ingot', '1x bosses_of_mass_destruction:charged_ender_pearl')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('travelanchors:teleportation', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_94')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 4).strongNBT())
    .itemInputs('3x ars_nouveau:manipulation_essence', '2x ars_nouveau:abjuration_essence', '1x the_bumblezone:royal_jelly_bucket', '1x #forge:storage_blocks/source', '1x #forge:storage_blocks/diamond')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_95')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 5).strongNBT())
    .itemInputs('2x #forge:storage_blocks/quartz', '3x #forge:gems/diamond', '1x the_bumblezone:royal_jelly_bottle', '2x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 6)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9500))
    .EUt(9500);

event.recipes.gtceu.assembler('custom_recipe_96')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 6).strongNBT())
    .itemInputs('2x #forge:storage_blocks/quartz', '1x #forge:storage_blocks/diamond', '2x the_bumblezone:royal_jelly_bottle', '3x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 7)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 11000))
    .EUt(11000);

event.recipes.gtceu.assembler('custom_recipe_97')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 7).strongNBT())
    .itemInputs('3x #forge:storage_blocks/quartz', '1x #forge:storage_blocks/diamond', '1x the_bumblezone:royal_jelly_bucket', '3x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 8)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 12500))
    .EUt(12500);

event.recipes.gtceu.assembler('custom_recipe_98')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 5).strongNBT())
    .itemInputs('3x #forge:flawless_gems/diamond', '1x the_bumblezone:royal_jelly_bottle', '2x ars_nouveau:air_essence', '1x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 6)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 10500))
    .EUt(10500);

event.recipes.gtceu.assembler('custom_recipe_99')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 6).strongNBT())
    .itemInputs('2x #forge:exquisite_gems/diamond', '2x the_bumblezone:royal_jelly_bottle', '2x ars_nouveau:air_essence', '1x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 7)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 13000))
    .EUt(13000);

event.recipes.gtceu.assembler('custom_recipe_100')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 7).strongNBT())
    .itemInputs('3x #forge:exquisite_gems/diamond', '1x the_bumblezone:royal_jelly_bucket', '2x ars_nouveau:air_essence', '1x #forge:storage_blocks/source', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 8)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 16000))
    .EUt(16000);

event.recipes.gtceu.assembler('custom_recipe_101')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:capturing', 5).strongNBT())
    .itemInputs('2x l2complements:totemic_gold_block', '2x l2complements:force_field', '1x ars_nouveau:mob_jar', '3x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:capturing', 6)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 10500))
    .EUt(10500);

event.recipes.gtceu.assembler('custom_recipe_102')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:capturing', 6).strongNBT())
    .itemInputs('2x l2complements:totemic_gold_block', '2x l2complements:force_field', '2x ars_nouveau:mob_jar', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:capturing', 7)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 13000))
    .EUt(13000);

event.recipes.gtceu.assembler('custom_recipe_103')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:capturing', 7).strongNBT())
    .itemInputs('2x l2complements:totemic_gold_block', '3x l2complements:force_field', '1x ars_nouveau:mob_jar', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:capturing', 8)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 16000))
    .EUt(16000);

event.recipes.gtceu.assembler('custom_recipe_104')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 3).strongNBT())
    .itemInputs('4x ars_nouveau:earth_essence', '1x the_bumblezone:royal_jelly_bottle', '1x #forge:storage_blocks/diamond', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 12000))
    .EUt(12000);

event.recipes.gtceu.assembler('custom_recipe_105')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 4).strongNBT())
    .itemInputs('5x ars_nouveau:earth_essence', '1x the_bumblezone:royal_jelly_bucket', '1x #forge:storage_blocks/diamond', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 15000))
    .EUt(15000);

event.recipes.gtceu.assembler('custom_recipe_106')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 3).strongNBT())
    .itemInputs('4x ars_nouveau:earth_essence', '1x the_bumblezone:royal_jelly_bottle', '1x #forge:storage_blocks/emerald', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 12000))
    .EUt(12000);

event.recipes.gtceu.assembler('custom_recipe_107')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 4).strongNBT())
    .itemInputs('5x ars_nouveau:earth_essence', '1x the_bumblezone:royal_jelly_bucket', '1x #forge:storage_blocks/emerald', '1x #forge:storage_blocks/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 15000))
    .EUt(15000);

event.recipes.gtceu.assembler('custom_recipe_108')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:berserkers_fury', 3).strongNBT())
    .itemInputs('1x ars_nouveau:earth_essence', '1x ars_nouveau:air_essence', '1x ars_nouveau:fire_essence', '1x ars_elemental:anima_essence', '2x #forge:storage_blocks/diamond', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:berserkers_fury', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 12000))
    .EUt(12000);

event.recipes.gtceu.assembler('custom_recipe_109')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:berserkers_fury', 4).strongNBT())
    .itemInputs('1x ars_nouveau:earth_essence', '1x ars_nouveau:air_essence', '1x ars_nouveau:fire_essence', '1x ars_elemental:anima_essence', '1x ars_nouveau:abjuration_essence', '3x #forge:storage_blocks/diamond')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('apotheosis:berserkers_fury', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 15000))
    .EUt(15000);

event.recipes.gtceu.assembler('custom_recipe_110')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:magnify', 1).strongNBT())
    .itemInputs('5x #forge:ingots/copper', '1x minecraft:spyglass')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:magnify', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_111')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:magnify', 2).strongNBT())
    .itemInputs('3x #forge:ingots/copper', '2x #forge:storage_blocks/copper', '1x minecraft:spyglass')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:magnify', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_112')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:magnify', 3).strongNBT())
    .itemInputs('3x #forge:ingots/copper', '2x #forge:storage_blocks/copper', '2x minecraft:spyglass')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:magnify', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_113')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:magnify', 4).strongNBT())
    .itemInputs('4x #forge:storage_blocks/copper', '2x #forge:storage_blocks/amethyst', '2x minecraft:spyglass')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:magnify', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_114')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:explode', 1).strongNBT())
    .itemInputs('1x minecraft:fire_charge', '3x l2complements:storm_core', '2x l2complements:strong_fire_charge', '2x minecraft:dragon_breath')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:explode', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_115')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:explode', 2).strongNBT())
    .itemInputs('1x minecraft:tnt', '3x l2complements:storm_core', '2x l2complements:strong_fire_charge', '2x minecraft:dragon_breath')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:explode', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_116')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:explode', 3).strongNBT())
    .itemInputs('1x minecraft:end_crystal', '3x l2complements:storm_core', '2x l2complements:strong_fire_charge', '2x minecraft:dragon_breath')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:explode', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_117')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:explode', 4).strongNBT())
    .itemInputs('1x alexscaves:nuclear_bomb', '3x l2complements:storm_core', '2x l2complements:strong_fire_charge', '2x minecraft:dragon_breath')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:explode', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_118')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:harm', 1).strongNBT())
    .itemInputs('1x minecraft:spider_eye', '1x minecraft:dragon_breath', '5x minecraft:fermented_spider_eye', '1x minecraft:nether_wart')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:harm', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_119')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:harm', 2).strongNBT())
    .itemInputs('1x minecraft:ender_pearl', '1x minecraft:dragon_breath', '5x minecraft:fermented_spider_eye', '1x minecraft:nether_wart')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:harm', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_120')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:harm', 3).strongNBT())
    .itemInputs('1x alexscaves:acid_bucket', '1x minecraft:dragon_breath', '5x minecraft:fermented_spider_eye', '1x minecraft:nether_wart')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:harm', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_121')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:harm', 4).strongNBT())
    .itemInputs('1x gtceu:hydrofluoric_acid_bucket', '1x minecraft:dragon_breath', '5x minecraft:fermented_spider_eye', '1x minecraft:nether_wart')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:harm', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_122')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:heal', 1).strongNBT())
    .itemInputs('1x minecraft:golden_carrot', '1x minecraft:dragon_breath', '5x minecraft:glistering_melon_slice', '1x minecraft:nether_wart')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:heal', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_123')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:heal', 2).strongNBT())
    .itemInputs('1x minecraft:golden_apple', '1x minecraft:dragon_breath', '5x minecraft:glistering_melon_slice', '1x minecraft:nether_wart')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:heal', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_124')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:heal', 3).strongNBT())
    .itemInputs('1x minecraft:enchanted_golden_apple', '1x minecraft:dragon_breath', '5x minecraft:glistering_melon_slice', '1x minecraft:nether_wart')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:heal', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_125')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:heal', 4).strongNBT())
    .itemInputs('1x l2complements:totemic_gold_ingot', '1x minecraft:dragon_breath', '5x minecraft:glistering_melon_slice', '1x minecraft:nether_wart')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:heal', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_126')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:float', 1).strongNBT())
    .itemInputs('1x minecraft:feather', '3x l2complements:captured_shulker_bullet', '1x minecraft:dragon_breath', '3x minecraft:phantom_membrane')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:float', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_127')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:float', 2).strongNBT())
    .itemInputs('1x #forge:wool', '3x l2complements:captured_shulker_bullet', '1x minecraft:dragon_breath', '3x minecraft:phantom_membrane')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:float', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_128')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:float', 3).strongNBT())
    .itemInputs('1x l2complements:resonant_feather', '3x l2complements:captured_shulker_bullet', '1x minecraft:dragon_breath', '3x minecraft:phantom_membrane')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:float', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_129')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:float', 4).strongNBT())
    .itemInputs('1x minecraft:elytra', '3x l2complements:captured_shulker_bullet', '1x minecraft:dragon_breath', '3x minecraft:phantom_membrane')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:float', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_130')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:slow', 1).strongNBT())
    .itemInputs('1x #forge:slimeballs', '5x minecraft:cobweb', '1x minecraft:dragon_breath', '1x minecraft:fermented_spider_eye')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:slow', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_131')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:slow', 2).strongNBT())
    .itemInputs('1x #forge:buckets/honey', '5x minecraft:cobweb', '1x minecraft:dragon_breath', '1x minecraft:fermented_spider_eye')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:slow', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_132')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:slow', 3).strongNBT())
    .itemInputs('1x l2complements:blackstone_core', '5x minecraft:cobweb', '1x minecraft:dragon_breath', '1x minecraft:fermented_spider_eye')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:slow', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_133')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:slow', 4).strongNBT())
    .itemInputs('1x gtceu:polybenzimidazole_bucket', '5x minecraft:cobweb', '1x minecraft:dragon_breath', '1x minecraft:fermented_spider_eye')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:slow', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_134')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:levitate', 1).strongNBT())
    .itemInputs('1x minecraft:firework_rocket', '5x l2complements:captured_shulker_bullet', '1x minecraft:dragon_breath', '1x minecraft:nether_wart')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:levitate', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_135')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:levitate', 2).strongNBT())
    .itemInputs('1x create:encased_fan', '5x l2complements:captured_shulker_bullet', '1x minecraft:dragon_breath', '1x minecraft:nether_wart')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:levitate', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_136')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:levitate', 3).strongNBT())
    .itemInputs('1x l2complements:sun_membrane', '5x l2complements:captured_shulker_bullet', '1x minecraft:dragon_breath', '1x minecraft:nether_wart')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:levitate', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_137')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:levitate', 4).strongNBT())
    .itemInputs('1x gtceu:helium_bucket', '5x l2complements:captured_shulker_bullet', '1x minecraft:dragon_breath', '1x minecraft:nether_wart')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:levitate', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_138')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:poison', 1).strongNBT())
    .itemInputs('1x minecraft:poisonous_potato', '1x minecraft:dragon_breath', '1x minecraft:pufferfish', '5x minecraft:spider_eye')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:poison', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_139')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:poison', 2).strongNBT())
    .itemInputs('1x the_bumblezone:bee_stinger', '1x minecraft:dragon_breath', '1x minecraft:pufferfish', '5x minecraft:spider_eye')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:poison', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_140')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:poison', 3).strongNBT())
    .itemInputs('1x alexsmobs:komodo_spit', '1x minecraft:dragon_breath', '1x minecraft:pufferfish', '5x minecraft:spider_eye')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:poison', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_141')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:poison', 4).strongNBT())
    .itemInputs('1x gtceu:hydrogen_cyanide_bucket', '1x minecraft:dragon_breath', '1x minecraft:pufferfish', '5x minecraft:spider_eye')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:poison', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_142')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:wither', 1).strongNBT())
    .itemInputs('1x #forge:ingots/uranium_235', '1x minecraft:dragon_breath', '5x minecraft:wither_rose', '1x minecraft:wither_skeleton_skull')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:wither', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_143')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:wither', 2).strongNBT())
    .itemInputs('1x #forge:ingots/plutonium_241', '1x minecraft:dragon_breath', '5x minecraft:wither_rose', '1x minecraft:wither_skeleton_skull')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:wither', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_144')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:wither', 3).strongNBT())
    .itemInputs('1x #forge:ingots/naquadria', '1x minecraft:dragon_breath', '5x minecraft:wither_rose', '1x minecraft:wither_skeleton_skull')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:wither', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_145')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:wither', 4).strongNBT())
    .itemInputs('1x #forge:ingots/neutronium', '1x minecraft:dragon_breath', '5x minecraft:wither_rose', '1x minecraft:wither_skeleton_skull')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:wither', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_146')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:weak', 1).strongNBT())
    .itemInputs('1x minecraft:cobweb', '1x minecraft:dragon_breath', '3x minecraft:fermented_spider_eye', '3x #forge:dusts/glowstone')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:weak', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_147')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:weak', 2).strongNBT())
    .itemInputs('1x twilightforest:experiment_115', '1x minecraft:dragon_breath', '3x minecraft:fermented_spider_eye', '3x #forge:dusts/glowstone')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:weak', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_148')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:weak', 3).strongNBT())
    .itemInputs('1x alexsmobs:mimicream', '1x minecraft:dragon_breath', '3x minecraft:fermented_spider_eye', '3x #forge:dusts/glowstone')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:weak', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_149')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:weak', 4).strongNBT())
    .itemInputs('1x gtceu:nitrous_oxide_bucket', '1x minecraft:dragon_breath', '3x minecraft:fermented_spider_eye', '3x #forge:dusts/glowstone')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:weak', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_150')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:chaotic', 1).strongNBT())
    .itemInputs('1x minecraft:brewing_stand', '2x l2complements:guardian_eye', '1x minecraft:dragon_breath', '4x minecraft:dragon_head')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:chaotic', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_151')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:chaotic', 2).strongNBT())
    .itemInputs('1x minecraft:chorus_fruit', '2x l2complements:guardian_eye', '1x minecraft:dragon_breath', '4x minecraft:dragon_head')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:chaotic', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_152')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:chaotic', 3).strongNBT())
    .itemInputs('1x legendary_monsters:infected_chorus_fruit', '2x l2complements:guardian_eye', '1x minecraft:dragon_breath', '4x minecraft:dragon_head')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:chaotic', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_153')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2archery:chaotic', 4).strongNBT())
    .itemInputs('1x #forge:dusts/nether_star', '2x l2complements:guardian_eye', '1x minecraft:dragon_breath', '4x minecraft:dragon_head')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:chaotic', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_154')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:durable_armor', 1).strongNBT())
    .itemInputs('4x #forge:gems/diamond', '4x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:durable_armor', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_155')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:durable_armor', 2).strongNBT())
    .itemInputs('4x #forge:gems/diamond', '1x #forge:ingots/netherite', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:durable_armor', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_156')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:durable_armor', 3).strongNBT())
    .itemInputs('3x #forge:gems/diamond', '2x #forge:ingots/netherite', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:durable_armor', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_157')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:durable_armor', 4).strongNBT())
    .itemInputs('3x #forge:gems/diamond', '3x #forge:ingots/netherite', '2x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:durable_armor', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_158')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:wind_sweep', 1).strongNBT())
    .itemInputs('3x l2complements:shulkerate_nugget', '1x l2complements:storm_core', '1x l2complements:captured_wind', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:wind_sweep', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_159')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:wind_sweep', 2).strongNBT())
    .itemInputs('3x l2complements:shulkerate_nugget', '1x l2complements:storm_core', '2x l2complements:captured_wind', '2x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:wind_sweep', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_160')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:wind_sweep', 3).strongNBT())
    .itemInputs('3x l2complements:shulkerate_nugget', '1x l2complements:storm_core', '3x l2complements:captured_wind', '1x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:wind_sweep', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_161')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:wind_sweep', 4).strongNBT())
    .itemInputs('3x l2complements:shulkerate_nugget', '1x l2complements:storm_core', '4x l2complements:captured_wind')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:wind_sweep', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_162')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ice_blade', 1).strongNBT())
    .itemInputs('1x #forge:storage_blocks/ice', '4x l2complements:hard_ice', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ice_blade', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_163')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ice_blade', 2).strongNBT())
    .itemInputs('1x minecraft:packed_ice', '4x l2complements:hard_ice', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ice_blade', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_164')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ice_blade', 3).strongNBT())
    .itemInputs('1x minecraft:blue_ice', '4x l2complements:hard_ice', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ice_blade', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_165')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ice_blade', 4).strongNBT())
    .itemInputs('1x gtceu:liquid_helium_bucket', '4x l2complements:hard_ice', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ice_blade', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_166')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:soul_flame_blade', 1).strongNBT())
    .itemInputs('1x #forge:dusts/blaze', '4x l2complements:soul_flame', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:soul_flame_blade', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_167')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:soul_flame_blade', 2).strongNBT())
    .itemInputs('1x #forge:rods/blaze', '4x l2complements:soul_flame', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:soul_flame_blade', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_168')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:soul_flame_blade', 3).strongNBT())
    .itemInputs('1x jerotesvillage:piglin_golden_fire', '4x l2complements:soul_flame', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:soul_flame_blade', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_169')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:soul_flame_blade', 4).strongNBT())
    .itemInputs('1x gtceu:iron_plasma_bucket', '4x l2complements:soul_flame', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:soul_flame_blade', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_170')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:cursed_blade', 1).strongNBT())
    .itemInputs('1x minecraft:soul_lantern', '2x l2complements:cursed_droplet', '2x minecraft:fermented_spider_eye', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:cursed_blade', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_171')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:cursed_blade', 2).strongNBT())
    .itemInputs('1x mob_grinding_utils:dreadful_dirt', '2x l2complements:cursed_droplet', '2x minecraft:fermented_spider_eye', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:cursed_blade', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_172')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:cursed_blade', 3).strongNBT())
    .itemInputs('1x alexsmobs:soul_heart', '2x l2complements:cursed_droplet', '2x minecraft:fermented_spider_eye', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:cursed_blade', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_173')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:cursed_blade', 4).strongNBT())
    .itemInputs('1x #soulsweapons:lord_soul', '2x l2complements:cursed_droplet', '2x minecraft:fermented_spider_eye', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:cursed_blade', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_174')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:sharp_blade', 1).strongNBT())
    .itemInputs('1x supplementaries:bamboo_spikes', '1x l2complements:cursed_droplet', '3x l2complements:explosion_shard', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:sharp_blade', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_175')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:sharp_blade', 2).strongNBT())
    .itemInputs('1x bloodmagic:daggerofsacrifice', '1x l2complements:cursed_droplet', '3x l2complements:explosion_shard', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:sharp_blade', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_176')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:sharp_blade', 3).strongNBT())
    .itemInputs('1x bloodmagic:life_essence_bucket', '1x l2complements:cursed_droplet', '3x l2complements:explosion_shard', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:sharp_blade', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_177')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:sharp_blade', 4).strongNBT())
    .itemInputs('1x l2complements:space_shard', '1x l2complements:cursed_droplet', '3x l2complements:explosion_shard', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:sharp_blade', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_178')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ice_thorn', 1).strongNBT())
    .itemInputs('1x minecraft:powder_snow_bucket', '4x l2complements:hard_ice', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ice_thorn', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_179')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ice_thorn', 2).strongNBT())
    .itemInputs('1x twilightforest:ice_bomb', '4x l2complements:hard_ice', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ice_thorn', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_180')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ice_thorn', 3).strongNBT())
    .itemInputs('1x jerotesvillage:bitter_cold_bell', '4x l2complements:hard_ice', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ice_thorn', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_181')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ice_thorn', 4).strongNBT())
    .itemInputs('1x gtceu:liquid_oxygen_bucket', '4x l2complements:hard_ice', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:ice_thorn', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_182')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:soul_flame_thorn', 1).strongNBT())
    .itemInputs('1x #forge:ingots/fiery', '4x l2complements:soul_flame', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:soul_flame_thorn', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_183')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:soul_flame_thorn', 2).strongNBT())
    .itemInputs('1x jerotesvillage:fire_secretor_adhesive', '4x l2complements:soul_flame', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:soul_flame_thorn', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_184')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:soul_flame_thorn', 3).strongNBT())
    .itemInputs('1x alexscaves:tectonic_shard', '4x l2complements:soul_flame', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:soul_flame_thorn', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_185')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:soul_flame_thorn', 4).strongNBT())
    .itemInputs('1x gtceu:nickel_plasma_bucket', '4x l2complements:soul_flame', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:soul_flame_thorn', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_186')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:void_touch', 1).strongNBT())
    .itemInputs('1x cataclysm:void_stone', '3x l2complements:resonant_feather', '2x l2complements:sun_membrane', '2x l2complements:void_eye')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:void_touch', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_187')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:void_touch', 2).strongNBT())
    .itemInputs('1x cataclysm:void_core', '3x l2complements:resonant_feather', '2x l2complements:sun_membrane', '2x l2complements:void_eye')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:void_touch', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_188')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:void_touch', 3).strongNBT())
    .itemInputs('1x bosses_of_mass_destruction:void_thorn', '3x l2complements:resonant_feather', '2x l2complements:sun_membrane', '2x l2complements:void_eye')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:void_touch', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_189')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:void_touch', 4).strongNBT())
    .itemInputs('1x draconicevolution:small_chaos_frag', '3x l2complements:resonant_feather', '2x l2complements:sun_membrane', '2x l2complements:void_eye')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:void_touch', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_190')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:cubic_digging', 1).strongNBT())
    .itemInputs('1x l2complements:storm_core', '2x #forge:gems/diamond', '2x #forge:gems/lapis', '3x minecraft:diamond_pickaxe')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:cubic_digging', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_191')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:plane_digging', 1).strongNBT())
    .itemInputs('1x l2complements:storm_core', '2x #forge:gems/diamond', '2x #forge:gems/lapis', '3x minecraft:diamond_hoe')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:plane_digging', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_192')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:plane_digging', 2).strongNBT())
    .itemInputs('1x l2complements:storm_core', '2x #forge:ingots/netherite', '2x #forge:gems/lapis', '3x minecraft:netherite_hoe')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:plane_digging', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_193')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:drill_digging', 1).strongNBT())
    .itemInputs('1x l2complements:storm_core', '2x #forge:gems/diamond', '2x #forge:gems/lapis', '3x minecraft:diamond_shovel')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:drill_digging', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_194')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:drill_digging', 2).strongNBT())
    .itemInputs('1x l2complements:storm_core', '2x #forge:ingots/netherite', '2x #forge:gems/lapis', '3x minecraft:netherite_shovel')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:drill_digging', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_195')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:cubic_eater', 1).strongNBT())
    .itemInputs('1x l2complements:blackstone_core', '2x l2complements:eternium_ingot', '2x #forge:gems/lapis', '3x l2complements:sculkium_pickaxe')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:cubic_eater', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_196')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:plane_eater', 1).strongNBT())
    .itemInputs('1x l2complements:blackstone_core', '2x l2complements:eternium_ingot', '2x #forge:gems/lapis', '3x l2complements:sculkium_hoe')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:plane_eater', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_197')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2complements:plane_eater', 2).strongNBT())
    .itemInputs('1x l2complements:blackstone_core', '2x l2complements:eternium_ingot', '2x #forge:gems/lapis', '3x l2complements:eternium_hoe')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2complements:plane_eater', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_198')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:stealth', 1).strongNBT())
    .itemInputs('1x l2complements:captured_wind', '4x l2complements:hard_ice', '3x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:stealth', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_199')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:stealth', 2).strongNBT())
    .itemInputs('1x l2complements:captured_wind', '5x l2complements:hard_ice', '2x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:stealth', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_200')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:stealth', 3).strongNBT())
    .itemInputs('1x l2complements:captured_wind', '6x l2complements:hard_ice', '1x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:stealth', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_201')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:stealth', 4).strongNBT())
    .itemInputs('1x l2complements:captured_wind', '7x l2complements:hard_ice')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:stealth', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_202')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:heavy', 1).strongNBT())
    .itemInputs('1x l2weaponry:reinforced_handle', '3x minecraft:anvil', '3x forge:ingots/gold', '1x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:heavy', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_203')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:heavy', 2).strongNBT())
    .itemInputs('1x l2weaponry:reinforced_handle', '3x minecraft:anvil', '4x forge:ingots/gold')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:heavy', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_204')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:heavy', 3).strongNBT())
    .itemInputs('1x l2weaponry:reinforced_handle', '4x minecraft:anvil', '3x forge:storage_blocks/gold')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:heavy', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_205')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:heavy', 4).strongNBT())
    .itemInputs('1x l2weaponry:reinforced_handle', '4x minecraft:anvil', '2x forge:storage_blocks/gold', '1x forge:storage_blocks/netherite')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:heavy', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_206')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:hard_shield', 1).strongNBT())
    .itemInputs('4x l2complements:shulkerate_ingot', '2x l2weaponry:reinforced_handle', '2x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:hard_shield', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_207')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:hard_shield', 2).strongNBT())
    .itemInputs('3x l2complements:shulkerate_ingot', '1x l2complements:force_field', '2x l2weaponry:reinforced_handle', '2x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:hard_shield', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_208')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:hard_shield', 3).strongNBT())
    .itemInputs('3x l2complements:shulkerate_ingot', '2x l2complements:force_field', '2x l2weaponry:reinforced_handle', '1x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:hard_shield', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_209')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:hard_shield', 4).strongNBT())
    .itemInputs('3x l2complements:shulkerate_ingot', '1x l2complements:eternium_ingot', '2x l2complements:force_field', '2x l2weaponry:reinforced_handle')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:hard_shield', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_210')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:heavy_shield', 1).strongNBT())
    .itemInputs('2x l2weaponry:reinforced_handle', '1x minecraft:anvil', '1x #forge:gems/lapis', '4x #forge:ingots/netherite')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:heavy_shield', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_211')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:heavy_shield', 2).strongNBT())
    .itemInputs('2x l2weaponry:reinforced_handle', '2x minecraft:anvil', '4x #forge:ingots/netherite')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:heavy_shield', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_212')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:heavy_shield', 3).strongNBT())
    .itemInputs('2x l2weaponry:reinforced_handle', '5x minecraft:anvil', '1x #forge:storage_blocks/netherite')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:heavy_shield', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_213')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:heavy_shield', 4).strongNBT())
    .itemInputs('2x l2weaponry:reinforced_handle', '3x minecraft:anvil', '2x l2complements:eternium_ingot', '1x #forge:storage_blocks/netherite')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:heavy_shield', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_214')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:energized_will', 1).strongNBT())
    .itemInputs('2x l2complements:soul_flame', '2x #forge:gems/lapis', '4x #forge:dusts/blaze')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:energized_will', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_215')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:energized_will', 2).strongNBT())
    .itemInputs('3x l2complements:soul_flame', '2x #forge:gems/lapis', '3x #forge:dusts/blaze')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:energized_will', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_216')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:energized_will', 3).strongNBT())
    .itemInputs('4x l2complements:soul_flame', '2x #forge:gems/lapis', '2x #forge:rods/blaze')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:energized_will', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_217')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:energized_will', 4).strongNBT())
    .itemInputs('5x l2complements:soul_flame', '3x #forge:rods/blaze')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:energized_will', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_218')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:raised_spirit', 1).strongNBT())
    .itemInputs('2x l2complements:soul_flame', '4x #forge:heads', '2x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:raised_spirit', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_219')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:raised_spirit', 2).strongNBT())
    .itemInputs('3x l2complements:soul_flame', '3x #forge:heads', '2x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:raised_spirit', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_220')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:raised_spirit', 3).strongNBT())
    .itemInputs('4x l2complements:soul_flame', '2x #forge:heads', '2x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:raised_spirit', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_221')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:raised_spirit', 4).strongNBT())
    .itemInputs('5x l2complements:soul_flame', '3x #forge:heads')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:raised_spirit', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_222')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:claw_shielding', 1).strongNBT())
    .itemInputs('2x l2complements:explosion_shard', '4x l2complements:warden_bone_shard', '2x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:claw_shielding', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_223')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:claw_shielding', 2).strongNBT())
    .itemInputs('3x l2complements:explosion_shard', '3x l2complements:warden_bone_shard', '2x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:claw_shielding', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_224')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:claw_shielding', 3).strongNBT())
    .itemInputs('4x l2complements:explosion_shard', '2x l2complements:warden_bone_shard', '2x #forge:gems/lapis')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:claw_shielding', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_225')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:claw_shielding', 4).strongNBT())
    .itemInputs('4x l2complements:explosion_shard', '2x l2complements:warden_bone_shard', '2x l2complements:eternium_ingot')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2weaponry:claw_shielding', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_226')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:water_essence', '1x aquaculture:worm', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:lure', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_227')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:lure', 1).strongNBT())
    .itemInputs('2x ars_nouveau:water_essence', '1x aquaculture:iron_hook', '1x aquaculture:worm', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:lure', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_228')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:lure', 2).strongNBT())
    .itemInputs('3x ars_nouveau:water_essence', '1x aquaculture:diamond_hook', '2x aquaculture:worm', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:lure', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_229')
    .itemInputs('minecraft:book')
    .itemInputs('1x aquaculture:fish_bones', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:luck_of_the_sea', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3000))
    .EUt(3000);

event.recipes.gtceu.assembler('custom_recipe_230')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:luck_of_the_sea', 1).strongNBT())
    .itemInputs('2x #forge:raw_fishes', '1x #forge:ingots/neptunium', '2x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:luck_of_the_sea', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6000))
    .EUt(6000);

event.recipes.gtceu.assembler('custom_recipe_231')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:luck_of_the_sea', 2).strongNBT())
    .itemInputs('3x aquaculture:message_in_a_bottle', '1x aquaculture:neptunes_bounty', '2x #forge:storage_blocks/lapis', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:luck_of_the_sea', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_232')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:water_essence', '1x ars_nouveau:air_essence', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:loyalty', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3000))
    .EUt(3000);

event.recipes.gtceu.assembler('custom_recipe_233')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:loyalty', 1).strongNBT())
    .itemInputs('2x ars_nouveau:water_essence', '1x ars_nouveau:air_essence', '1x minecraft:prismarine_shard', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:loyalty', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6000))
    .EUt(6000);

event.recipes.gtceu.assembler('custom_recipe_234')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:loyalty', 2).strongNBT())
    .itemInputs('3x ars_nouveau:water_essence', '1x ars_nouveau:air_essence', '1x minecraft:nautilus_shell', '3x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:loyalty', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_235')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:water_essence', '1x ars_nouveau:manipulation_essence', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:riptide', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3000))
    .EUt(3000);

event.recipes.gtceu.assembler('custom_recipe_236')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:riptide', 1).strongNBT())
    .itemInputs('2x ars_nouveau:water_essence', '1x ars_nouveau:manipulation_essence', '1x minecraft:prismarine_shard', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:riptide', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6000))
    .EUt(6000);

event.recipes.gtceu.assembler('custom_recipe_237')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:riptide', 2).strongNBT())
    .itemInputs('3x ars_nouveau:water_essence', '1x ars_nouveau:manipulation_essence', '1x minecraft:heart_of_the_sea', '3x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:riptide', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_238')
    .itemInputs('minecraft:book')
    .itemInputs('2x minecraft:prismarine_shard', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:impaling', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('custom_recipe_239')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:impaling', 1).strongNBT())
    .itemInputs('3x minecraft:prismarine_shard', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:impaling', 2)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 3500))
    .EUt(3500);

event.recipes.gtceu.assembler('custom_recipe_240')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:impaling', 2).strongNBT())
    .itemInputs('4x minecraft:prismarine_wall', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:impaling', 3)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_241')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:impaling', 3).strongNBT())
    .itemInputs('4x minecraft:prismarine_wall', '1x #forge:storage_blocks/lapis', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:impaling', 4)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 6500))
    .EUt(6500);

event.recipes.gtceu.assembler('custom_recipe_242')
    .itemInputs(Item.of('minecraft:enchanted_book').enchant('minecraft:impaling', 4).strongNBT())
    .itemInputs('4x minecraft:prismarine_wall', '2x #forge:storage_blocks/lapis', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:impaling', 5)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 8000))
    .EUt(8000);

event.recipes.gtceu.assembler('custom_recipe_243')
    .itemInputs('minecraft:book')
    .itemInputs('6x #gtceu:batteries/iv', '1x gtceu:iv_battery_buffer_8x', '1x gtceu:platinum_quadruple_wire')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:channeling', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 9000))
    .EUt(9000);

event.recipes.gtceu.assembler('custom_recipe_244')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_nouveau:abjuration_essence', '3x minecraft:sculk', '2x create:experience_block', '2x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('minecraft:mending', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 5000))
    .EUt(5000);

event.recipes.gtceu.assembler('custom_recipe_245')
    .itemInputs('minecraft:book')
    .itemInputs('1x ars_elemental:anima_essence', '1x tombstone:grave_dust', '1x #forge:storage_blocks/lapis', '1x #forge:storage_blocks/source')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('tombstone:soulbound', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 10000))
    .EUt(10000);




})