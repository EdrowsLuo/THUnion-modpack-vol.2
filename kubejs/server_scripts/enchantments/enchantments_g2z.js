/*
 * 添加附魔配方
 * 待添加：
 * 
 * 耐蚀性
 * 
 * 快枪手I
 * 快枪手II
 * 快枪手III
 * 
 * 架势突破I
 * 架势突破II
 * 架势突破III
 * 
 * 晕眩I
 * 晕眩II
 * 晕眩III
 * 
 * 范围I
 * 范围II
 * 范围III
 * 
 * 传送
 * 
 */

// stagger 晕眩
ServerEvents.recipes(event => {
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'soulsweapons:stagger',
        level: '1',
        pedestalItems: [
            {
                item: 'minecraft:anvil'
            }, {
                item: 'minecraft:anvil'
            }, {
                item: 'soulsweapons:crimson_ingot'
            }, {
                item: 'minecraft:anvil'
            }, {
                item: 'minecraft:anvil'
            }, {
                item: 'minecraft:anvil'
            }, {
                item: 'soulsweapons:soul_ingot'
            }, {
                item: 'minecraft:anvil'
            }
        ],
        sourceCost: 2000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'soulsweapons:stagger',
        level: '2',
        pedestalItems: [
            {
                item: 'soulsweapons:essence_of_eventide'
            }, {
                item: 'minecraft:anvil'
            }, {
                item: 'minecraft:anvil'
            }, {
                item: 'minecraft:anvil'
            }, {
                item: 'soulsweapons:essence_of_luminescence'
            }, {
                item: 'minecraft:anvil'
            }, {
                item: 'minecraft:anvil'
            }, {
                item: 'minecraft:anvil'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'soulsweapons:stagger',
        level: '3',
        pedestalItems: [
            {
                item: 'alexscaves:primitive_club'
            }, {
                item: 'minecraft:anvil'
            }, {
                item: 'minecraft:anvil'
            }, {
                item: 'minecraft:anvil'
            }, {
                item: 'minecraft:anvil'
            }, {
                item: 'minecraft:anvil'
            }, {
                item: 'minecraft:anvil'
            }, {
                item: 'minecraft:anvil'
            }
        ],
        sourceCost: 5000
    })
})

// corrosion_resistance 耐蚀性
ServerEvents.recipes(event => {
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'jerotesvillage:corrosion_resistance',
        level: '1',
        pedestalItems: [
            {
                item: 'gtceu:polybenzimidazole_foil'
            }, {
                item: 'gtceu:polybenzimidazole_foil'
            }, {
                item: 'gtceu:polybenzimidazole_foil'
            }, {
                item: 'gtceu:polybenzimidazole_foil'
            }, {
                item: 'gtceu:stainless_steel_foil'
            }, {
                item: 'gtceu:stainless_steel_foil'
            }, {
                item: 'gtceu:stainless_steel_foil'
            }, {
                item: 'gtceu:stainless_steel_foil'
            }
        ],
        sourceCost: 2000
    })
})

// range 范围
ServerEvents.recipes(event => {
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'travelanchors:range',
        level: '1',
        pedestalItems: [
            {
                item: 'minecraft:chorus_fruit'
            }, {
                item: 'minecraft:ender_pearl'
            }, {
                item: 'minecraft:ender_pearl'
            }, {
                item: 'minecraft:ender_pearl'
            }, {
                item: 'minecraft:ender_pearl'
            }, {
                item: 'minecraft:ender_pearl'
            }, {
                item: 'minecraft:ender_pearl'
            }, {
                item: 'minecraft:ender_pearl'
            }
        ],
        sourceCost: 2000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'travelanchors:range',
        level: '2',
        pedestalItems: [
            {
                item: 'minecraft:chorus_flower'
            }, {
                item: 'minecraft:ender_pearl'
            }, {
                item: 'minecraft:ender_pearl'
            }, {
                item: 'the_bumblezone:windy_air'
            }, {
                item: 'minecraft:ender_pearl'
            }, {
                item: 'the_bumblezone:windy_air'
            }, {
                item: 'minecraft:ender_pearl'
            }, {
                item: 'minecraft:ender_pearl'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'travelanchors:range',
        level: '3',
        pedestalItems: [
            {
                item: 'minecraft:end_rod'
            }, {
                item: 'cataclysm:void_stone'
            }, {
                item: 'minecraft:ender_pearl'
            }, {
                item: 'the_bumblezone:windy_air'
            }, {
                item: 'minecraft:ender_pearl'
            }, {
                item: 'the_bumblezone:windy_air'
            }, {
                item: 'minecraft:ender_pearl'
            }, {
                item: 'cataclysm:void_stone'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'travelanchors:range',
        level: '4',
        pedestalItems: [
            {
                item: 'minecraft:dragon_head'
            }, {
                item: 'cataclysm:void_stone'
            }, {
                item: 'gtceu:gravitation_engine_unit'
            }, {
                item: 'the_bumblezone:windy_air'
            }, {
                item: 'minecraft:ender_pearl'
            }, {
                item: 'the_bumblezone:windy_air'
            }, {
                item: 'gtceu:gravitation_engine_unit'
            }, {
                item: 'cataclysm:void_stone'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'travelanchors:range',
        level: '5',
        pedestalItems: [
            {
                item: 'minecraft:beacon'
            }, {
                item: 'cataclysm:void_stone'
            }, {
                item: 'gtceu:gravitation_engine_unit'
            }, {
                item: 'the_bumblezone:windy_air'
            }, {
                item: 'irons_spellbooks:hither_thither_wand'
            }, {
                item: 'the_bumblezone:windy_air'
            }, {
                item: 'gtceu:gravitation_engine_unit'
            }, {
                item: 'cataclysm:void_stone'
            }
        ],
        sourceCost: 8000
    })
})


// teleportation 传送
ServerEvents.recipes(event => {
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'travelanchors:teleportation',
        level: '1',
        pedestalItems: [
            {
                item: 'travelanchors:travel_staff'
            }, {
                item: 'l2complements:void_eye'
            }, {
                item: 'l2complements:void_eye'
            }, {
                item: 'l2complements:eternium_ingot'
            }, {
                item: 'bosses_of_mass_destruction:charged_ender_pearl'
            }, {
                item: 'l2complements:eternium_ingot'
            }, {
                item: 'l2complements:void_eye'
            }, {
                item: 'l2complements:void_eye'
            }
        ],
        sourceCost: 9000
    })
})