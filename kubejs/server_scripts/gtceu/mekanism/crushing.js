ServerEvents.recipes(event=>{

    Ingredient.of('#mekanism:clumps').getStacks().forEach(stack=>{
        var name=stack.id.split(':')[1].replace('clump','').replace('_','')
        event.recipes.gtceu.mekanism_factory(`crushing_clump_${stack.id}`)
        .itemInputs(stack)
        .itemOutputs(`#mekanism:dirty_dusts/${name}`)
        .circuit(21)
        .duration(100)
        .EUt(120);
        
    })



    event.recipes.gtceu.mekanism_factory('crushing_break_disc_5_0')
.itemInputs('1x minecraft:music_disc_5')
.itemOutputs('9x minecraft:disc_fragment_5')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_charcoal_dust_1')
.itemInputs('1x minecraft:charcoal')
.itemOutputs('1x mekanism:dust_charcoal')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_chiseled_nether_bricks_to_nether_bricks_2')
.itemInputs('1x minecraft:chiseled_nether_bricks')
.itemOutputs('1x minecraft:nether_bricks')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_cobblestone_to_gravel_3')
.itemInputs('1x #forge:cobblestone/normal')
.itemOutputs('1x minecraft:gravel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_flint_to_gunpowder_4')
.itemInputs('1x minecraft:flint')
.itemOutputs('1x minecraft:gunpowder')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_gravel_to_sand_5')
.itemInputs('1x #forge:gravel')
.itemOutputs('1x minecraft:sand')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_mud_bricks_to_packed_6')
.itemInputs('1x minecraft:mud_bricks')
.itemOutputs('1x minecraft:packed_mud')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_nether_bricks_to_cracked_nether_bricks_7')
.itemInputs('1x minecraft:nether_bricks')
.itemOutputs('1x minecraft:cracked_nether_bricks')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_pointed_dripstone_from_block_8')
.itemInputs('1x minecraft:dripstone_block')
.itemOutputs('4x minecraft:pointed_dripstone')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_polished_or_smooth_basalt_to_basalt_9')
.itemInputs('1x minecraft:polished_basalt')
.itemOutputs('1x minecraft:basalt')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_polished_or_smooth_basalt_to_basalt_10')
.itemInputs('1x minecraft:smooth_basalt')
.itemOutputs('1x minecraft:basalt')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_purpur_block_from_pillar_11')
.itemInputs('1x minecraft:purpur_pillar')
.itemOutputs('1x minecraft:purpur_block')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_red_sandstone_to_sand_12')
.itemInputs('1x minecraft:red_sandstone')
.itemOutputs('2x minecraft:red_sand')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_red_sandstone_to_sand_13')
.itemInputs('1x minecraft:chiseled_red_sandstone')
.itemOutputs('2x minecraft:red_sand')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_red_sandstone_to_sand_14')
.itemInputs('1x minecraft:cut_red_sandstone')
.itemOutputs('2x minecraft:red_sand')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_red_sandstone_to_sand_15')
.itemInputs('1x minecraft:smooth_red_sandstone')
.itemOutputs('2x minecraft:red_sand')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_sandstone_to_sand_16')
.itemInputs('1x minecraft:sandstone')
.itemOutputs('2x minecraft:sand')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_sandstone_to_sand_17')
.itemInputs('1x minecraft:chiseled_sandstone')
.itemOutputs('2x minecraft:sand')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_sandstone_to_sand_18')
.itemInputs('1x minecraft:cut_sandstone')
.itemOutputs('2x minecraft:sand')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_sandstone_to_sand_19')
.itemInputs('1x minecraft:smooth_sandstone')
.itemOutputs('2x minecraft:sand')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_soul_soil_to_soul_sand_20')
.itemInputs('1x minecraft:soul_soil')
.itemOutputs('1x minecraft:soul_sand')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_wool_to_string_21')
.itemInputs('1x #minecraft:wool')
.itemOutputs('4x minecraft:string')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_from_polished_22')
.itemInputs('1x minecraft:polished_andesite')
.itemOutputs('1x minecraft:andesite')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_slab_from_polished_slab_23')
.itemInputs('1x minecraft:polished_andesite_slab')
.itemOutputs('1x minecraft:andesite_slab')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_stairs_from_polished_stairs_24')
.itemInputs('1x minecraft:polished_andesite_stairs')
.itemOutputs('1x minecraft:andesite_stairs')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_acacia_leaves_25')
.itemInputs('1x minecraft:acacia_leaves')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_acacia_sapling_26')
.itemInputs('1x minecraft:acacia_sapling')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_allium_27')
.itemInputs('1x minecraft:allium')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_apple_28')
.itemInputs('1x minecraft:apple')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_azalea_29')
.itemInputs('1x minecraft:azalea')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_azalea_leaves_30')
.itemInputs('1x minecraft:azalea_leaves')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_azure_bluet_31')
.itemInputs('1x minecraft:azure_bluet')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_baked_potato_32')
.itemInputs('1x minecraft:baked_potato')
.itemOutputs('7x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_beetroot_33')
.itemInputs('1x minecraft:beetroot')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_beetroot_seeds_34')
.itemInputs('1x minecraft:beetroot_seeds')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_big_dripleaf_35')
.itemInputs('1x minecraft:big_dripleaf')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_birch_leaves_36')
.itemInputs('1x minecraft:birch_leaves')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_birch_sapling_37')
.itemInputs('1x minecraft:birch_sapling')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_blue_orchid_38')
.itemInputs('1x minecraft:blue_orchid')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_bread_39')
.itemInputs('1x minecraft:bread')
.itemOutputs('7x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_brown_mushroom_40')
.itemInputs('1x minecraft:brown_mushroom')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_brown_mushroom_block_41')
.itemInputs('1x minecraft:brown_mushroom_block')
.itemOutputs('7x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_cactus_42')
.itemInputs('1x minecraft:cactus')
.itemOutputs('4x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_cake_43')
.itemInputs('1x minecraft:cake')
.itemOutputs('8x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_carrot_44')
.itemInputs('1x minecraft:carrot')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_carved_pumpkin_45')
.itemInputs('1x minecraft:carved_pumpkin')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_cherry_leaves_46')
.itemInputs('1x minecraft:cherry_leaves')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_cherry_sapling_47')
.itemInputs('1x minecraft:cherry_sapling')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_cocoa_beans_48')
.itemInputs('1x minecraft:cocoa_beans')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_cookie_49')
.itemInputs('1x minecraft:cookie')
.itemOutputs('7x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_cornflower_50')
.itemInputs('1x minecraft:cornflower')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_crimson_fungus_51')
.itemInputs('1x minecraft:crimson_fungus')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_crimson_roots_52')
.itemInputs('1x minecraft:crimson_roots')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_dandelion_53')
.itemInputs('1x minecraft:dandelion')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_dark_oak_leaves_54')
.itemInputs('1x minecraft:dark_oak_leaves')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_dark_oak_sapling_55')
.itemInputs('1x minecraft:dark_oak_sapling')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_dried_kelp_56')
.itemInputs('1x minecraft:dried_kelp')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_dried_kelp_block_57')
.itemInputs('1x minecraft:dried_kelp_block')
.itemOutputs('4x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_fern_58')
.itemInputs('1x minecraft:fern')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_flowering_azalea_59')
.itemInputs('1x minecraft:flowering_azalea')
.itemOutputs('7x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_flowering_azalea_leaves_60')
.itemInputs('1x minecraft:flowering_azalea_leaves')
.itemOutputs('4x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_glow_berries_61')
.itemInputs('1x minecraft:glow_berries')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_glow_lichen_62')
.itemInputs('1x minecraft:glow_lichen')
.itemOutputs('4x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_grass_63')
.itemInputs('1x minecraft:grass')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_hanging_roots_64')
.itemInputs('1x minecraft:hanging_roots')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_hay_block_65')
.itemInputs('1x minecraft:hay_block')
.itemOutputs('7x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_jungle_leaves_66')
.itemInputs('1x minecraft:jungle_leaves')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_jungle_sapling_67')
.itemInputs('1x minecraft:jungle_sapling')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_kelp_68')
.itemInputs('1x minecraft:kelp')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_large_fern_69')
.itemInputs('1x minecraft:large_fern')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_lilac_70')
.itemInputs('1x minecraft:lilac')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_lily_of_the_valley_71')
.itemInputs('1x minecraft:lily_of_the_valley')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_lily_pad_72')
.itemInputs('1x minecraft:lily_pad')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_mangrove_leaves_73')
.itemInputs('1x minecraft:mangrove_leaves')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_mangrove_propagule_74')
.itemInputs('1x minecraft:mangrove_propagule')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_mangrove_roots_75')
.itemInputs('1x minecraft:mangrove_roots')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_melon_76')
.itemInputs('1x minecraft:melon')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_melon_seeds_77')
.itemInputs('1x minecraft:melon_seeds')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_melon_slice_78')
.itemInputs('1x minecraft:melon_slice')
.itemOutputs('4x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_moss_block_79')
.itemInputs('1x minecraft:moss_block')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_moss_carpet_80')
.itemInputs('1x minecraft:moss_carpet')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_mushroom_stem_81')
.itemInputs('1x minecraft:mushroom_stem')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_nether_sprouts_82')
.itemInputs('1x minecraft:nether_sprouts')
.itemOutputs('4x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_nether_wart_83')
.itemInputs('1x minecraft:nether_wart')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_nether_wart_block_84')
.itemInputs('1x minecraft:nether_wart_block')
.itemOutputs('7x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_oak_leaves_85')
.itemInputs('1x minecraft:oak_leaves')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_oak_sapling_86')
.itemInputs('1x minecraft:oak_sapling')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_orange_tulip_87')
.itemInputs('1x minecraft:orange_tulip')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_oxeye_daisy_88')
.itemInputs('1x minecraft:oxeye_daisy')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_peony_89')
.itemInputs('1x minecraft:peony')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_pink_petals_90')
.itemInputs('1x minecraft:pink_petals')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_pink_tulip_91')
.itemInputs('1x minecraft:pink_tulip')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_pitcher_plant_92')
.itemInputs('1x minecraft:pitcher_plant')
.itemOutputs('7x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_pitcher_pod_93')
.itemInputs('1x minecraft:pitcher_pod')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_poppy_94')
.itemInputs('1x minecraft:poppy')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_potato_95')
.itemInputs('1x minecraft:potato')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_pumpkin_96')
.itemInputs('1x minecraft:pumpkin')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_pumpkin_pie_97')
.itemInputs('1x minecraft:pumpkin_pie')
.itemOutputs('8x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_pumpkin_seeds_98')
.itemInputs('1x minecraft:pumpkin_seeds')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_red_mushroom_99')
.itemInputs('1x minecraft:red_mushroom')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_red_mushroom_block_100')
.itemInputs('1x minecraft:red_mushroom_block')
.itemOutputs('7x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_red_tulip_101')
.itemInputs('1x minecraft:red_tulip')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_rose_bush_102')
.itemInputs('1x minecraft:rose_bush')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_seagrass_103')
.itemInputs('1x minecraft:seagrass')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_sea_pickle_104')
.itemInputs('1x minecraft:sea_pickle')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_shroomlight_105')
.itemInputs('1x minecraft:shroomlight')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_small_dripleaf_106')
.itemInputs('1x minecraft:small_dripleaf')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_spore_blossom_107')
.itemInputs('1x minecraft:spore_blossom')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_spruce_leaves_108')
.itemInputs('1x minecraft:spruce_leaves')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_spruce_sapling_109')
.itemInputs('1x minecraft:spruce_sapling')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_sugar_cane_110')
.itemInputs('1x minecraft:sugar_cane')
.itemOutputs('4x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_sunflower_111')
.itemInputs('1x minecraft:sunflower')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_sweet_berries_112')
.itemInputs('1x minecraft:sweet_berries')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_tall_grass_113')
.itemInputs('1x minecraft:tall_grass')
.itemOutputs('4x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_torchflower_114')
.itemInputs('1x minecraft:torchflower')
.itemOutputs('7x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_torchflower_seeds_115')
.itemInputs('1x minecraft:torchflower_seeds')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_twisting_vines_116')
.itemInputs('1x minecraft:twisting_vines')
.itemOutputs('4x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_vine_117')
.itemInputs('1x minecraft:vine')
.itemOutputs('4x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_warped_fungus_118')
.itemInputs('1x minecraft:warped_fungus')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_warped_roots_119')
.itemInputs('1x minecraft:warped_roots')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_warped_wart_block_120')
.itemInputs('1x minecraft:warped_wart_block')
.itemOutputs('7x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_weeping_vines_121')
.itemInputs('1x minecraft:weeping_vines')
.itemOutputs('4x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_wheat_122')
.itemInputs('1x minecraft:wheat')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_wheat_seeds_123')
.itemInputs('1x minecraft:wheat_seeds')
.itemOutputs('2x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_white_tulip_124')
.itemInputs('1x minecraft:white_tulip')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_wither_rose_125')
.itemInputs('1x minecraft:wither_rose')
.itemOutputs('5x mekanism:bio_fuel')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_bricks_to_cracked_bricks_126')
.itemInputs('1x minecraft:polished_blackstone_bricks')
.itemOutputs('1x minecraft:cracked_polished_blackstone_bricks')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_chiseled_bricks_to_bricks_127')
.itemInputs('1x minecraft:chiseled_polished_blackstone')
.itemOutputs('1x minecraft:polished_blackstone_bricks')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_from_cracked_bricks_128')
.itemInputs('1x minecraft:cracked_polished_blackstone_bricks')
.itemOutputs('1x minecraft:polished_blackstone')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_from_polished_129')
.itemInputs('1x minecraft:polished_blackstone')
.itemOutputs('1x minecraft:blackstone')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_polished_slabs_to_slabs_130')
.itemInputs('1x minecraft:polished_blackstone_slab')
.itemOutputs('1x minecraft:blackstone_slab')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_polished_stairs_to_stairs_131')
.itemInputs('1x minecraft:polished_blackstone_stairs')
.itemOutputs('1x minecraft:blackstone_stairs')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_polished_wall_to_wall_132')
.itemInputs('1x minecraft:polished_blackstone_wall')
.itemOutputs('1x minecraft:blackstone_wall')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_bricks_to_cracked_bricks_133')
.itemInputs('1x minecraft:deepslate_bricks')
.itemOutputs('1x minecraft:cracked_deepslate_bricks')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_brick_slabs_to_tile_134')
.itemInputs('1x minecraft:deepslate_brick_slab')
.itemOutputs('1x minecraft:deepslate_tile_slab')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_brick_stairs_to_tile_135')
.itemInputs('1x minecraft:deepslate_brick_stairs')
.itemOutputs('1x minecraft:deepslate_tile_stairs')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_brick_wall_to_tile_136')
.itemInputs('1x minecraft:deepslate_brick_wall')
.itemOutputs('1x minecraft:deepslate_tile_wall')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_cracked_bricks_to_tile_137')
.itemInputs('1x minecraft:cracked_deepslate_bricks')
.itemOutputs('1x minecraft:deepslate_tiles')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_cracked_tile_to_chiseled_138')
.itemInputs('1x minecraft:cracked_deepslate_tiles')
.itemOutputs('1x minecraft:chiseled_deepslate')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_from_chiseled_139')
.itemInputs('1x minecraft:chiseled_deepslate')
.itemOutputs('1x minecraft:deepslate')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_polished_slabs_to_brick_140')
.itemInputs('1x minecraft:polished_deepslate_slab')
.itemOutputs('1x minecraft:deepslate_brick_slab')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_polished_stairs_to_brick_141')
.itemInputs('1x minecraft:polished_deepslate_stairs')
.itemOutputs('1x minecraft:deepslate_brick_stairs')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_polished_to_bricks_142')
.itemInputs('1x minecraft:polished_deepslate')
.itemOutputs('1x minecraft:deepslate_bricks')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_polished_wall_to_brick_143')
.itemInputs('1x minecraft:polished_deepslate_wall')
.itemOutputs('1x minecraft:deepslate_brick_wall')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_tile_slabs_to_cobbled_144')
.itemInputs('1x minecraft:deepslate_tile_slab')
.itemOutputs('1x minecraft:cobbled_deepslate_slab')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_tile_stairs_to_cobbled_145')
.itemInputs('1x minecraft:deepslate_tile_stairs')
.itemOutputs('1x minecraft:cobbled_deepslate_stairs')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_tile_to_cracked_tile_146')
.itemInputs('1x minecraft:deepslate_tiles')
.itemOutputs('1x minecraft:cracked_deepslate_tiles')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_tile_wall_to_cobbled_147')
.itemInputs('1x minecraft:deepslate_tile_wall')
.itemOutputs('1x minecraft:cobbled_deepslate_wall')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_to_cobbled_148')
.itemInputs('1x minecraft:deepslate')
.itemOutputs('1x minecraft:cobbled_deepslate')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_copper_block_149')
.itemInputs('1x minecraft:waxed_copper_block')
.itemOutputs('1x minecraft:copper_block')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_cut_copper_150')
.itemInputs('1x minecraft:waxed_cut_copper')
.itemOutputs('1x minecraft:cut_copper')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_cut_copper_slab_151')
.itemInputs('1x minecraft:waxed_cut_copper_slab')
.itemOutputs('1x minecraft:cut_copper_slab')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_cut_copper_stairs_152')
.itemInputs('1x minecraft:waxed_cut_copper_stairs')
.itemOutputs('1x minecraft:cut_copper_stairs')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_exposed_copper_153')
.itemInputs('1x minecraft:waxed_exposed_copper')
.itemOutputs('1x minecraft:exposed_copper')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_exposed_cut_copper_154')
.itemInputs('1x minecraft:waxed_exposed_cut_copper')
.itemOutputs('1x minecraft:exposed_cut_copper')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_exposed_cut_copper_slab_155')
.itemInputs('1x minecraft:waxed_exposed_cut_copper_slab')
.itemOutputs('1x minecraft:exposed_cut_copper_slab')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_exposed_cut_copper_stairs_156')
.itemInputs('1x minecraft:waxed_exposed_cut_copper_stairs')
.itemOutputs('1x minecraft:exposed_cut_copper_stairs')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_oxidized_copper_157')
.itemInputs('1x minecraft:waxed_oxidized_copper')
.itemOutputs('1x minecraft:oxidized_copper')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_oxidized_cut_copper_158')
.itemInputs('1x minecraft:waxed_oxidized_cut_copper')
.itemOutputs('1x minecraft:oxidized_cut_copper')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_oxidized_cut_copper_slab_159')
.itemInputs('1x minecraft:waxed_oxidized_cut_copper_slab')
.itemOutputs('1x minecraft:oxidized_cut_copper_slab')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_oxidized_cut_copper_stairs_160')
.itemInputs('1x minecraft:waxed_oxidized_cut_copper_stairs')
.itemOutputs('1x minecraft:oxidized_cut_copper_stairs')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_weathered_copper_161')
.itemInputs('1x minecraft:waxed_weathered_copper')
.itemOutputs('1x minecraft:weathered_copper')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_weathered_cut_copper_162')
.itemInputs('1x minecraft:waxed_weathered_cut_copper')
.itemOutputs('1x minecraft:weathered_cut_copper')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_weathered_cut_copper_slab_163')
.itemInputs('1x minecraft:waxed_weathered_cut_copper_slab')
.itemOutputs('1x minecraft:weathered_cut_copper_slab')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_weathered_cut_copper_stairs_164')
.itemInputs('1x minecraft:waxed_weathered_cut_copper_stairs')
.itemOutputs('1x minecraft:weathered_cut_copper_stairs')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_from_polished_165')
.itemInputs('1x minecraft:polished_diorite')
.itemOutputs('1x minecraft:diorite')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_slab_from_polished_slab_166')
.itemInputs('1x minecraft:polished_diorite_slab')
.itemOutputs('1x minecraft:diorite_slab')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_stairs_from_polished_stairs_167')
.itemInputs('1x minecraft:polished_diorite_stairs')
.itemOutputs('1x minecraft:diorite_stairs')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_from_polished_168')
.itemInputs('1x minecraft:polished_granite')
.itemOutputs('1x minecraft:granite')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_slab_from_polished_slab_169')
.itemInputs('1x minecraft:polished_granite_slab')
.itemOutputs('1x minecraft:granite_slab')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_stairs_from_polished_stairs_170')
.itemInputs('1x minecraft:polished_granite_stairs')
.itemOutputs('1x minecraft:granite_stairs')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_shard_from_block_171')
.itemInputs('1x minecraft:prismarine')
.itemOutputs('4x minecraft:prismarine_shard')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_shard_from_brick_172')
.itemInputs('1x minecraft:prismarine_bricks')
.itemOutputs('9x minecraft:prismarine_shard')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_shard_from_brick_slabs_173')
.itemInputs('2x minecraft:prismarine_brick_slab')
.itemOutputs('9x minecraft:prismarine_shard')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_shard_from_brick_stairs_174')
.itemInputs('1x minecraft:prismarine_brick_stairs')
.itemOutputs('9x minecraft:prismarine_shard')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_shard_from_slabs_175')
.itemInputs('1x minecraft:prismarine_slab')
.itemOutputs('2x minecraft:prismarine_shard')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_shard_from_stairs_176')
.itemInputs('1x minecraft:prismarine_stairs')
.itemOutputs('4x minecraft:prismarine_shard')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_shard_from_wall_177')
.itemInputs('1x minecraft:prismarine_wall')
.itemOutputs('4x minecraft:prismarine_shard')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_bricks_to_chiseled_178')
.itemInputs('1x minecraft:quartz_bricks')
.itemOutputs('1x minecraft:chiseled_quartz_block')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_chiseled_to_pillar_179')
.itemInputs('1x minecraft:chiseled_quartz_block')
.itemOutputs('1x minecraft:quartz_pillar')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_from_pillar_180')
.itemInputs('1x minecraft:quartz_pillar')
.itemOutputs('1x minecraft:quartz_block')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_slab_to_smooth_slab_181')
.itemInputs('1x minecraft:quartz_slab')
.itemOutputs('1x minecraft:smooth_quartz_slab')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_smooth_to_bricks_182')
.itemInputs('1x minecraft:smooth_quartz')
.itemOutputs('1x minecraft:quartz_bricks')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_stairs_to_smooth_stairs_183')
.itemInputs('1x minecraft:quartz_stairs')
.itemOutputs('1x minecraft:smooth_quartz_stairs')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_to_smooth_quartz_184')
.itemInputs('1x #forge:storage_blocks/quartz')
.itemOutputs('1x minecraft:smooth_quartz')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_bricks_to_cracked_bricks_185')
.itemInputs('1x minecraft:stone_bricks')
.itemOutputs('1x minecraft:cracked_stone_bricks')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_chiseled_bricks_to_bricks_186')
.itemInputs('1x minecraft:chiseled_stone_bricks')
.itemOutputs('1x minecraft:stone_bricks')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_from_cracked_bricks_187')
.itemInputs('1x minecraft:cracked_stone_bricks')
.itemOutputs('1x minecraft:stone')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_slabs_to_cobblestone_slabs_188')
.itemInputs('1x minecraft:stone_slab')
.itemOutputs('1x minecraft:cobblestone_slab')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_stairs_to_cobblestone_stairs_189')
.itemInputs('1x minecraft:stone_stairs')
.itemOutputs('1x minecraft:cobblestone_stairs')
.EUt(120)
.circuit(21)
.duration(20);

event.recipes.gtceu.mekanism_factory('crushing_to_cobblestone_190')
.itemInputs('1x minecraft:stone')
.itemOutputs('1x minecraft:cobblestone')
.EUt(120)
.circuit(21)
.duration(20);


})