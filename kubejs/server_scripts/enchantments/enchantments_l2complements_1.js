/* 
 * l2complements
 * 
 */

// durable_armor 盔甲耐久
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:durable_armor',
        level: '2',
        pedestalItems: [
            {
                tag: 'forge:gems/diamond'
            }, {
                tag: 'forge:gems/diamond'
            }, {
                tag: 'forge:gems/diamond'
            }, {
                tag: 'forge:gems/diamond'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:durable_armor',
        level: '3',
        pedestalItems: [
            {
                tag: 'forge:gems/diamond'
            }, {
                tag: 'forge:gems/diamond'
            }, {
                tag: 'forge:gems/diamond'
            }, {
                tag: 'forge:gems/diamond'
            }, {
                tag: 'forge:ingots/netherite'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:durable_armor',
        level: '4',
        pedestalItems: [
            {
                tag: 'forge:gems/diamond'
            }, {
                tag: 'forge:gems/diamond'
            }, {
                tag: 'forge:gems/diamond'
            }, {
                tag: 'forge:ingots/netherite'
            }, {
                tag: 'forge:ingots/netherite'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:durable_armor',
        level: '5',
        pedestalItems: [
            {
                tag: 'forge:gems/diamond'
            }, {
                tag: 'forge:gems/diamond'
            }, {
                tag: 'forge:gems/diamond'
            }, {
                tag: 'forge:ingots/netherite'
            }, {
                tag: 'forge:ingots/netherite'
            }, {
                tag: 'forge:ingots/netherite'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 8000
    })
})

// wind_sweep 剑风
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:wind_sweep',
        level: '2',
        pedestalItems: [
            {
                item: 'l2complements:shulkerate_nugget'
            }, {
                item: 'l2complements:shulkerate_nugget'
            }, {
                item: 'l2complements:shulkerate_nugget'
            }, {
                item: 'l2complements:storm_core'
            }, {
                item: 'l2complements:captured_wind'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:wind_sweep',
        level: '3',
        pedestalItems: [
            {
                item: 'l2complements:shulkerate_nugget'
            }, {
                item: 'l2complements:shulkerate_nugget'
            }, {
                item: 'l2complements:shulkerate_nugget'
            }, {
                item: 'l2complements:storm_core'
            }, {
                item: 'l2complements:captured_wind'
            }, {
                item: 'l2complements:captured_wind'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:wind_sweep',
        level: '4',
        pedestalItems: [
            {
                item: 'l2complements:shulkerate_nugget'
            }, {
                item: 'l2complements:shulkerate_nugget'
            }, {
                item: 'l2complements:shulkerate_nugget'
            }, {
                item: 'l2complements:storm_core'
            }, {
                item: 'l2complements:captured_wind'
            }, {
                item: 'l2complements:captured_wind'
            }, {
                item: 'l2complements:captured_wind'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:wind_sweep',
        level: '5',
        pedestalItems: [
            {
                item: 'l2complements:shulkerate_nugget'
            }, {
                item: 'l2complements:shulkerate_nugget'
            }, {
                item: 'l2complements:shulkerate_nugget'
            }, {
                item: 'l2complements:storm_core'
            }, {
                item: 'l2complements:captured_wind'
            }, {
                item: 'l2complements:captured_wind'
            }, {
                item: 'l2complements:captured_wind'
            }, {
                item: 'l2complements:captured_wind'
            }
        ],
        sourceCost: 8000
    })
})

// ice_blade 冰刃
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:ice_blade',
        level: '2',
        pedestalItems: [
            {
                tag: 'forge:storage_blocks/ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:ice_blade',
        level: '3',
        pedestalItems: [
            {
                item: 'minecraft:packed_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:ice_blade',
        level: '4',
        pedestalItems: [
            {
                item: 'minecraft:blue_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:ice_blade',
        level: '5',
        pedestalItems: [
            {
                item: 'gtceu:liquid_helium_bucket'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 8000
    })
})

//soul_flame_blade 炎刃
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:soul_flame_blade',
        level: '2',
        pedestalItems: [
            {
                tag: 'forge:dusts/blaze'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:soul_flame_blade',
        level: '3',
        pedestalItems: [
            {
                tag: 'forge:rods/blaze'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:soul_flame_blade',
        level: '4',
        pedestalItems: [
            {
                item: 'jerotesvillage:piglin_golden_fire'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:soul_flame_blade',
        level: '5',
        pedestalItems: [
            {
                item: 'gtceu:iron_plasma_bucket'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 8000
    })
})

// cursed_blade 诅咒之刃
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:cursed_blade',
        level: '2',
        pedestalItems: [
            {
                item: 'minecraft:soul_lantern'
            }, {
                item: 'l2complements:cursed_droplet'
            }, {
                item: 'l2complements:cursed_droplet'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:cursed_blade',
        level: '3',
        pedestalItems: [
            {
                item: 'mob_grinding_utils:dreadful_dirt'
            }, {
                item: 'l2complements:cursed_droplet'
            }, {
                item: 'l2complements:cursed_droplet'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:cursed_blade',
        level: '4',
        pedestalItems: [
            {
                item: 'alexsmobs:soul_heart'
            }, {
                item: 'l2complements:cursed_droplet'
            }, {
                item: 'l2complements:cursed_droplet'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:cursed_blade',
        level: '5',
        pedestalItems: [
            {
                tag: 'soulsweapons:lord_soul'
            }, {
                item: 'l2complements:cursed_droplet'
            }, {
                item: 'l2complements:cursed_droplet'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 8000
    })
})

// sharp_blade 撕裂之刃
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:sharp_blade',
        level: '2',
        pedestalItems: [
            {
                item: 'supplementaries:bamboo_spikes'
            }, {
                item: 'l2complements:cursed_droplet'
            }, {
                item: 'l2complements:explosion_shard'
            }, {
                item: 'l2complements:explosion_shard'
            }, {
                item: 'l2complements:explosion_shard'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:sharp_blade',
        level: '3',
        pedestalItems: [
            {
                item: 'bloodmagic:daggerofsacrifice'
            }, {
                item: 'l2complements:cursed_droplet'
            }, {
                item: 'l2complements:explosion_shard'
            }, {
                item: 'l2complements:explosion_shard'
            }, {
                item: 'l2complements:explosion_shard'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:sharp_blade',
        level: '4',
        pedestalItems: [
            {
                item: 'bloodmagic:life_essence_bucket'
            }, {
                item: 'l2complements:cursed_droplet'
            }, {
                item: 'l2complements:explosion_shard'
            }, {
                item: 'l2complements:explosion_shard'
            }, {
                item: 'l2complements:explosion_shard'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:sharp_blade',
        level: '5',
        pedestalItems: [
            {
                item: 'l2complements:space_shard'
            }, {
                item: 'l2complements:cursed_droplet'
            }, {
                item: 'l2complements:explosion_shard'
            }, {
                item: 'l2complements:explosion_shard'
            }, {
                item: 'l2complements:explosion_shard'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 8000
    })
})

// ice_thorn 冰棘
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:ice_thorn',
        level: '2',
        pedestalItems: [
            {
                item: 'minecraft:powder_snow_bucket'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:ice_thorn',
        level: '3',
        pedestalItems: [
            {
                item: 'twilightforest:ice_bomb'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:ice_thorn',
        level: '4',
        pedestalItems: [
            {
                item: 'jerotesvillage:bitter_cold_bell'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:ice_thorn',
        level: '5',
        pedestalItems: [
            {
                item: 'gtceu:liquid_oxygen_bucket'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                item: 'l2complements:hard_ice'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 8000
    })
})

//soul_flame_thorn 炎棘
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:soul_flame_thorn',
        level: '2',
        pedestalItems: [
            {
                tag: 'forge:ingots/fiery'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:soul_flame_thorn',
        level: '3',
        pedestalItems: [
            {
                item: 'jerotesvillage:fire_secretor_adhesive'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:soul_flame_thorn',
        level: '4',
        pedestalItems: [
            {
                item: 'alexscaves:tectonic_shard'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:soul_flame_thorn',
        level: '5',
        pedestalItems: [
            {
                item: 'gtceu:nickel_plasma_bucket'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                item: 'l2complements:soul_flame'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }, {
                tag: 'forge:gems/lapis'
            }
        ],
        sourceCost: 8000
    })
})

// void_touch 虚空之触
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:void_touch',
        level: '2',
        pedestalItems: [
            {
                item: 'cataclysm:void_stone'
            }, {
                item: 'l2complements:resonant_feather'
            }, {
                item: 'l2complements:resonant_feather'
            }, {
                item: 'l2complements:resonant_feather'
            }, {
                item: 'l2complements:sun_membrane'
            }, {
                item: 'l2complements:sun_membrane'
            }, {
                item: 'l2complements:void_eye'
            }, {
                item: 'l2complements:void_eye'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:void_touch',
        level: '3',
        pedestalItems: [
            {
                item: 'cataclysm:void_core'
            }, {
                item: 'l2complements:resonant_feather'
            }, {
                item: 'l2complements:resonant_feather'
            }, {
                item: 'l2complements:resonant_feather'
            }, {
                item: 'l2complements:sun_membrane'
            }, {
                item: 'l2complements:sun_membrane'
            }, {
                item: 'l2complements:void_eye'
            }, {
                item: 'l2complements:void_eye'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:void_touch',
        level: '4',
        pedestalItems: [
            {
                item: 'bosses_of_mass_destruction:void_thorn'
            }, {
                item: 'l2complements:resonant_feather'
            }, {
                item: 'l2complements:resonant_feather'
            }, {
                item: 'l2complements:resonant_feather'
            }, {
                item: 'l2complements:sun_membrane'
            }, {
                item: 'l2complements:sun_membrane'
            }, {
                item: 'l2complements:void_eye'
            }, {
                item: 'l2complements:void_eye'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2complements:void_touch',
        level: '5',
        pedestalItems: [
            {
                item: 'draconicevolution:small_chaos_frag'
            }, {
                item: 'l2complements:resonant_feather'
            }, {
                item: 'l2complements:resonant_feather'
            }, {
                item: 'l2complements:resonant_feather'
            }, {
                item: 'l2complements:sun_membrane'
            }, {
                item: 'l2complements:sun_membrane'
            }, {
                item: 'l2complements:void_eye'
            }, {
                item: 'l2complements:void_eye'
            }
        ],
        sourceCost: 8000
    })
})