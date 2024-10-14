ServerEvents.recipes(event=>{

    Ingredient.of('#mekanism:dirty_dusts').getStacks().forEach(stack=>{
        var name=stack.id.split(':')[1].replace('dirty','').replace('dust','').replace('_','')
        event.recipes.gtceu.mekanism_factory(`enriching_dirtydust_${stack.id}`)
        .itemInputs(stack)
        .itemOutputs(`#forge:dusts/${name}`)
        .circuit(20)
        .duration(100)
        .EUt(120);
        
    })

event.recipes.gtceu.mekanism_factory('charcoal_0')
.itemInputs('1x #forge:dusts/charcoal')
.itemOutputs('1x minecraft:charcoal')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('charcoal_dust_1')
.itemInputs('8x #forge:dusts/wood')
.itemOutputs('1x mekanism:dust_charcoal')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('clay_ball_2')
.itemInputs('1x minecraft:clay')
.itemOutputs('4x minecraft:clay_ball')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('glowstone_dust_3')
.itemInputs('1x minecraft:glowstone')
.itemOutputs('4x minecraft:glowstone_dust')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('hdpe_sheet_4')
.itemInputs('3x mekanism:hdpe_pellet')
.itemOutputs('1x mekanism:hdpe_sheet')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('salt_5')
.itemInputs('1x mekanism:block_salt')
.itemOutputs('4x mekanism:salt')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('string_6')
.itemInputs('1x minecraft:cobweb')
.itemOutputs('9x minecraft:string')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('basalt_or_smooth_to_polished_basalt_7')
.itemInputs('1x minecraft:basalt')
.itemOutputs('1x minecraft:polished_basalt')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('basalt_or_smooth_to_polished_basalt_8')
.itemInputs('1x minecraft:smooth_basalt')
.itemOutputs('1x minecraft:polished_basalt')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('cracked_nether_bricks_to_nether_bricks_9')
.itemInputs('1x minecraft:cracked_nether_bricks')
.itemOutputs('1x minecraft:nether_bricks')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('gravel_to_flint_10')
.itemInputs('1x #forge:gravel')
.itemOutputs('1x minecraft:flint')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('gunpowder_to_flint_11')
.itemInputs('1x #forge:gunpowder')
.itemOutputs('1x minecraft:flint')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('nether_bricks_to_chiseled_nether_bricks_12')
.itemInputs('1x minecraft:nether_bricks')
.itemOutputs('1x minecraft:chiseled_nether_bricks')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('obsidian_to_obsidian_dust_13')
.itemInputs('1x #forge:obsidian')
.itemOutputs('4x mekanism:dust_obsidian')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('purpur_pillar_from_block_14')
.itemInputs('1x minecraft:purpur_block')
.itemOutputs('1x minecraft:purpur_pillar')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('sand_to_gravel_15')
.itemInputs('1x #forge:sand')
.itemOutputs('1x minecraft:gravel')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('soul_sand_to_soul_soil_16')
.itemInputs('1x minecraft:soul_sand')
.itemOutputs('1x minecraft:soul_soil')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('sulfur_to_gunpowder_17')
.itemInputs('1x #forge:dusts/sulfur')
.itemOutputs('1x minecraft:gunpowder')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('slab_to_polished_slab_18')
.itemInputs('1x minecraft:andesite_slab')
.itemOutputs('1x minecraft:polished_andesite_slab')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('stairs_to_polished_stairs_19')
.itemInputs('1x minecraft:andesite_stairs')
.itemOutputs('1x minecraft:polished_andesite_stairs')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('to_polished_20')
.itemInputs('1x minecraft:andesite')
.itemOutputs('1x minecraft:polished_andesite')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('bricks_to_chiseled_bricks_21')
.itemInputs('1x minecraft:polished_blackstone_bricks')
.itemOutputs('1x minecraft:chiseled_polished_blackstone')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('cracked_bricks_to_bricks_22')
.itemInputs('1x minecraft:cracked_polished_blackstone_bricks')
.itemOutputs('1x minecraft:polished_blackstone_bricks')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('to_cracked_bricks_23')
.itemInputs('1x minecraft:polished_blackstone')
.itemOutputs('1x minecraft:cracked_polished_blackstone_bricks')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('chiseled_to_cracked_tile_24')
.itemInputs('1x minecraft:chiseled_deepslate')
.itemOutputs('1x minecraft:cracked_deepslate_tiles')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('cobbled_slabs_to_polished_25')
.itemInputs('1x minecraft:cobbled_deepslate_slab')
.itemOutputs('1x minecraft:polished_deepslate_slab')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('cobbled_stairs_to_polished_26')
.itemInputs('1x minecraft:cobbled_deepslate_stairs')
.itemOutputs('1x minecraft:polished_deepslate_stairs')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('cobbled_wall_to_polished_27')
.itemInputs('1x minecraft:cobbled_deepslate_wall')
.itemOutputs('1x minecraft:polished_deepslate_wall')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('cracked_bricks_to_bricks_28')
.itemInputs('1x minecraft:cracked_deepslate_bricks')
.itemOutputs('1x minecraft:deepslate_bricks')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('cracked_tile_to_tile_29')
.itemInputs('1x minecraft:cracked_deepslate_tiles')
.itemOutputs('1x minecraft:deepslate_tiles')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('from_cobbled_30')
.itemInputs('1x #forge:cobblestone/deepslate')
.itemOutputs('1x minecraft:deepslate')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('polished_chiseled_31')
.itemInputs('1x minecraft:polished_deepslate')
.itemOutputs('1x minecraft:chiseled_deepslate')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('polished_slabs_to_tile_32')
.itemInputs('1x minecraft:polished_deepslate_slab')
.itemOutputs('1x minecraft:deepslate_tile_slab')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('polished_stairs_to_tile_33')
.itemInputs('1x minecraft:polished_deepslate_stairs')
.itemOutputs('1x minecraft:deepslate_tile_stairs')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('polished_wall_to_tile_34')
.itemInputs('1x minecraft:polished_deepslate_wall')
.itemOutputs('1x minecraft:deepslate_tile_wall')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('tiles_to_cracked_bricks_35')
.itemInputs('1x minecraft:deepslate_tiles')
.itemOutputs('1x minecraft:cracked_deepslate_bricks')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('tile_slabs_to_brick_36')
.itemInputs('1x minecraft:deepslate_tile_slab')
.itemOutputs('1x minecraft:deepslate_brick_slab')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('tile_stairs_to_brick_37')
.itemInputs('1x minecraft:deepslate_tile_stairs')
.itemOutputs('1x minecraft:deepslate_brick_stairs')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('tile_wall_to_brick_38')
.itemInputs('1x minecraft:deepslate_tile_wall')
.itemOutputs('1x minecraft:deepslate_brick_wall')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('to_polished_39')
.itemInputs('1x minecraft:deepslate')
.itemOutputs('1x minecraft:polished_deepslate')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('slab_to_polished_slab_40')
.itemInputs('1x minecraft:diorite_slab')
.itemOutputs('1x minecraft:polished_diorite_slab')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('stairs_to_polished_stairs_41')
.itemInputs('1x minecraft:diorite_stairs')
.itemOutputs('1x minecraft:polished_diorite_stairs')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('to_polished_42')
.itemInputs('1x minecraft:diorite')
.itemOutputs('1x minecraft:polished_diorite')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('slab_to_polished_slab_43')
.itemInputs('1x minecraft:granite_slab')
.itemOutputs('1x minecraft:polished_granite_slab')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('stairs_to_polished_stairs_44')
.itemInputs('1x minecraft:granite_stairs')
.itemOutputs('1x minecraft:polished_granite_stairs')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('to_polished_45')
.itemInputs('1x minecraft:granite')
.itemOutputs('1x minecraft:polished_granite')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('cobblestone_46')
.itemInputs('1x minecraft:mossy_cobblestone')
.itemOutputs('1x minecraft:cobblestone')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('cobblestone_slabs_47')
.itemInputs('1x minecraft:mossy_cobblestone_slab')
.itemOutputs('1x minecraft:cobblestone_slab')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('cobblestone_stairs_48')
.itemInputs('1x minecraft:mossy_cobblestone_stairs')
.itemOutputs('1x minecraft:cobblestone_stairs')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('cobblestone_walls_49')
.itemInputs('1x minecraft:mossy_cobblestone_wall')
.itemOutputs('1x minecraft:cobblestone_wall')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('stone_bricks_50')
.itemInputs('1x minecraft:mossy_stone_bricks')
.itemOutputs('1x minecraft:stone_bricks')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('stone_brick_slabs_51')
.itemInputs('1x minecraft:mossy_stone_brick_slab')
.itemOutputs('1x minecraft:stone_brick_slab')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('stone_brick_stairs_52')
.itemInputs('1x minecraft:mossy_stone_brick_stairs')
.itemOutputs('1x minecraft:stone_brick_stairs')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('stone_brick_walls_53')
.itemInputs('1x minecraft:mossy_stone_brick_wall')
.itemOutputs('1x minecraft:stone_brick_wall')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('packed_to_bricks_54')
.itemInputs('1x minecraft:packed_mud')
.itemOutputs('1x minecraft:mud_bricks')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('to_clay_55')
.itemInputs('1x minecraft:mud')
.itemOutputs('1x minecraft:clay')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('from_smooth_quartz_56')
.itemInputs('1x minecraft:smooth_quartz')
.itemOutputs('1x minecraft:quartz_block')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('smooth_slab_to_slab_57')
.itemInputs('1x minecraft:smooth_quartz_slab')
.itemOutputs('1x minecraft:quartz_slab')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('smooth_stairs_to_stairs_58')
.itemInputs('1x minecraft:smooth_quartz_stairs')
.itemOutputs('1x minecraft:quartz_stairs')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('to_item_59')
.itemInputs('1x #forge:storage_blocks/quartz')
.itemOutputs('4x minecraft:quartz')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('to_item_60')
.itemInputs('1x minecraft:quartz_bricks')
.itemOutputs('4x minecraft:quartz')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('to_item_61')
.itemInputs('1x minecraft:chiseled_quartz_block')
.itemOutputs('4x minecraft:quartz')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('to_item_62')
.itemInputs('1x minecraft:quartz_pillar')
.itemOutputs('4x minecraft:quartz')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('bricks_to_chiseled_bricks_63')
.itemInputs('1x minecraft:stone_bricks')
.itemOutputs('1x minecraft:chiseled_stone_bricks')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('cracked_bricks_to_bricks_64')
.itemInputs('1x minecraft:cracked_stone_bricks')
.itemOutputs('1x minecraft:stone_bricks')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('to_cracked_bricks_65')
.itemInputs('1x minecraft:stone')
.itemOutputs('1x minecraft:cracked_stone_bricks')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('copper_block_66')
.itemInputs('1x minecraft:exposed_copper')
.itemOutputs('1x minecraft:copper_block')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('cut_copper_67')
.itemInputs('1x minecraft:exposed_cut_copper')
.itemOutputs('1x minecraft:cut_copper')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('cut_copper_slab_68')
.itemInputs('1x minecraft:exposed_cut_copper_slab')
.itemOutputs('1x minecraft:cut_copper_slab')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('cut_copper_stairs_69')
.itemInputs('1x minecraft:exposed_cut_copper_stairs')
.itemOutputs('1x minecraft:cut_copper_stairs')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('exposed_copper_70')
.itemInputs('1x minecraft:weathered_copper')
.itemOutputs('1x minecraft:exposed_copper')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('exposed_cut_copper_71')
.itemInputs('1x minecraft:weathered_cut_copper')
.itemOutputs('1x minecraft:exposed_cut_copper')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('exposed_cut_copper_slab_72')
.itemInputs('1x minecraft:weathered_cut_copper_slab')
.itemOutputs('1x minecraft:exposed_cut_copper_slab')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('exposed_cut_copper_stairs_73')
.itemInputs('1x minecraft:weathered_cut_copper_stairs')
.itemOutputs('1x minecraft:exposed_cut_copper_stairs')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('weathered_copper_74')
.itemInputs('1x minecraft:oxidized_copper')
.itemOutputs('1x minecraft:weathered_copper')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('weathered_cut_copper_75')
.itemInputs('1x minecraft:oxidized_cut_copper')
.itemOutputs('1x minecraft:weathered_cut_copper')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('weathered_cut_copper_slab_76')
.itemInputs('1x minecraft:oxidized_cut_copper_slab')
.itemOutputs('1x minecraft:weathered_cut_copper_slab')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('weathered_cut_copper_stairs_77')
.itemInputs('1x minecraft:oxidized_cut_copper_stairs')
.itemOutputs('1x minecraft:weathered_cut_copper_stairs')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('black_78')
.itemInputs('1x minecraft:ink_sac')
.itemOutputs('2x minecraft:black_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('black_79')
.itemInputs('1x minecraft:wither_rose')
.itemOutputs('2x minecraft:black_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('blue_80')
.itemInputs('1x minecraft:cornflower')
.itemOutputs('2x minecraft:blue_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('blue_81')
.itemInputs('1x minecraft:lapis_lazuli')
.itemOutputs('2x minecraft:blue_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('brown_82')
.itemInputs('1x minecraft:cocoa_beans')
.itemOutputs('2x minecraft:brown_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('green_83')
.itemInputs('1x minecraft:cactus')
.itemOutputs('2x minecraft:green_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('large_cyan_84')
.itemInputs('1x minecraft:pitcher_plant')
.itemOutputs('4x minecraft:cyan_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('large_magenta_85')
.itemInputs('1x minecraft:lilac')
.itemOutputs('4x minecraft:magenta_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('large_pink_86')
.itemInputs('1x minecraft:peony')
.itemOutputs('4x minecraft:pink_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('large_red_87')
.itemInputs('1x minecraft:rose_bush')
.itemOutputs('4x minecraft:red_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('large_yellow_88')
.itemInputs('1x minecraft:sunflower')
.itemOutputs('4x minecraft:yellow_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('light_blue_89')
.itemInputs('1x minecraft:blue_orchid')
.itemOutputs('2x minecraft:light_blue_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('light_gray_90')
.itemInputs('1x minecraft:oxeye_daisy')
.itemOutputs('2x minecraft:light_gray_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('light_gray_91')
.itemInputs('1x minecraft:azure_bluet')
.itemOutputs('2x minecraft:light_gray_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('light_gray_92')
.itemInputs('1x minecraft:white_tulip')
.itemOutputs('2x minecraft:light_gray_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('lime_93')
.itemInputs('1x minecraft:sea_pickle')
.itemOutputs('2x minecraft:lime_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('orange_94')
.itemInputs('1x minecraft:orange_tulip')
.itemOutputs('2x minecraft:orange_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('orange_95')
.itemInputs('1x minecraft:torchflower')
.itemOutputs('2x minecraft:orange_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('small_magenta_96')
.itemInputs('1x minecraft:allium')
.itemOutputs('2x minecraft:magenta_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('small_pink_97')
.itemInputs('1x minecraft:pink_tulip')
.itemOutputs('2x minecraft:pink_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('small_pink_98')
.itemInputs('1x minecraft:pink_petals')
.itemOutputs('2x minecraft:pink_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('small_red_99')
.itemInputs('1x minecraft:beetroot')
.itemOutputs('2x minecraft:red_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('small_red_100')
.itemInputs('1x minecraft:poppy')
.itemOutputs('2x minecraft:red_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('small_red_101')
.itemInputs('1x minecraft:red_tulip')
.itemOutputs('2x minecraft:red_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('small_yellow_102')
.itemInputs('1x minecraft:dandelion')
.itemOutputs('2x minecraft:yellow_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('white_103')
.itemInputs('1x minecraft:bone_meal')
.itemOutputs('2x minecraft:white_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('white_104')
.itemInputs('1x minecraft:lily_of_the_valley')
.itemOutputs('2x minecraft:white_dye')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('carbon_105')
.itemInputs('1x #minecraft:coals')
.itemOutputs('1x mekanism:enriched_carbon')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('diamond_106')
.itemInputs('1x #forge:gems/diamond')
.itemOutputs('1x mekanism:enriched_diamond')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('gold_107')
.itemInputs('1x #forge:dusts/gold')
.itemOutputs('1x mekanism:enriched_gold')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('redstone_108')
.itemInputs('1x #forge:dusts/redstone')
.itemOutputs('1x mekanism:enriched_redstone')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('refined_obsidian_109')
.itemInputs('1x #forge:dusts/refined_obsidian')
.itemOutputs('1x mekanism:enriched_refined_obsidian')
.EUt(120)
.circuit(20).duration(20);

event.recipes.gtceu.mekanism_factory('tin_110')
.itemInputs('1x #forge:dusts/tin')
.itemOutputs('1x mekanism:enriched_tin')
.EUt(120)
.circuit(20).duration(20);

});