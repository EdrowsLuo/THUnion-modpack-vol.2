/* 
 * l2archery
 * 
 */

// magnify 望远镜
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:magnify',
        level: '2',
        pedestalItems: [
            {
                tag: 'forge:ingots/copper'
            }, {
                tag: 'forge:ingots/copper'
            }, {
                tag: 'forge:ingots/copper'
            }, {
                tag: 'forge:ingots/copper'
            }, {
                tag: 'forge:ingots/copper'
            }, {
                item: 'minecraft:spyglass'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:magnify',
        level: '3',
        pedestalItems: [
            {
                tag: 'forge:ingots/copper'
            }, {
                tag: 'forge:ingots/copper'
            }, {
                tag: 'forge:ingots/copper'
            }, {
                tag: 'forge:storage_blocks/copper'
            }, {
                tag: 'forge:storage_blocks/copper'
            }, {
                item: 'minecraft:spyglass'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:magnify',
        level: '4',
        pedestalItems: [
            {
                tag: 'forge:ingots/copper'
            }, {
                tag: 'forge:ingots/copper'
            }, {
                tag: 'forge:ingots/copper'
            }, {
                tag: 'forge:storage_blocks/copper'
            }, {
                tag: 'forge:storage_blocks/copper'
            }, {
                item: 'minecraft:spyglass'
            }, {
                item: 'minecraft:spyglass'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:magnify',
        level: '5',
        pedestalItems: [
            {
                tag: 'forge:storage_blocks/copper'
            }, {
                tag: 'forge:storage_blocks/copper'
            }, {
                tag: 'forge:storage_blocks/copper'
            }, {
                tag: 'forge:storage_blocks/copper'
            }, {
                tag: 'forge:storage_blocks/amethyst'
            }, {
                tag: 'forge:storage_blocks/amethyst'
            }, {
                item: 'minecraft:spyglass'
            }, {
                item: 'minecraft:spyglass'
            }
        ],
        sourceCost: 8000
    })
})

// explode 爆炸
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:explode',
        level: '2',
        pedestalItems: [
            {
                item: 'minecraft:fire_charge'
            }, {
                item: 'l2complements:storm_core'
            }, {
                item: 'l2complements:storm_core'
            }, {
                item: 'l2complements:storm_core'
            }, {
                item: 'l2complements:strong_fire_charge'
            }, {
                item: 'l2complements:strong_fire_charge'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:dragon_breath'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:explode',
        level: '3',
        pedestalItems: [
            {
                item: 'minecraft:tnt'
            }, {
                item: 'l2complements:storm_core'
            }, {
                item: 'l2complements:storm_core'
            }, {
                item: 'l2complements:storm_core'
            }, {
                item: 'l2complements:strong_fire_charge'
            }, {
                item: 'l2complements:strong_fire_charge'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:dragon_breath'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:explode',
        level: '4',
        pedestalItems: [
            {
                item: 'minecraft:end_crystal'
            }, {
                item: 'l2complements:storm_core'
            }, {
                item: 'l2complements:storm_core'
            }, {
                item: 'l2complements:storm_core'
            }, {
                item: 'l2complements:strong_fire_charge'
            }, {
                item: 'l2complements:strong_fire_charge'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:dragon_breath'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:explode',
        level: '5',
        pedestalItems: [
            {
                item: 'alexscaves:nuclear_bomb'
            }, {
                item: 'l2complements:storm_core'
            }, {
                item: 'l2complements:storm_core'
            }, {
                item: 'l2complements:storm_core'
            }, {
                item: 'l2complements:strong_fire_charge'
            }, {
                item: 'l2complements:strong_fire_charge'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:dragon_breath'
            }
        ],
        sourceCost: 8000
    })
})

// harm 瞬间伤害
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:harm',
        level: '2',
        pedestalItems: [
            {
                item: 'minecraft:spider_eye'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:nether_wart'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:harm',
        level: '3',
        pedestalItems: [
            {
                item: 'minecraft:ender_pearl'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:nether_wart'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:harm',
        level: '4',
        pedestalItems: [
            {
                item: 'alexscaves:acid_bucket'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:nether_wart'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:harm',
        level: '5',
        pedestalItems: [
            {
                item: 'gtceu:hydrofluoric_acid_bucket'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:nether_wart'
            }
        ],
        sourceCost: 8000
    })
})

// heal 瞬间治疗
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:heal',
        level: '2',
        pedestalItems: [
            {
                item: 'minecraft:golden_carrot'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:nether_wart'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:heal',
        level: '3',
        pedestalItems: [
            {
                item: 'minecraft:golden_apple'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:nether_wart'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:heal',
        level: '4',
        pedestalItems: [
            {
                item: 'minecraft:enchanted_golden_apple'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:nether_wart'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:heal',
        level: '5',
        pedestalItems: [
            {
                item: 'l2complements:totemic_gold_ingot'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:glistering_melon_slice'
            }, {
                item: 'minecraft:nether_wart'
            }
        ],
        sourceCost: 8000
    })
})

// float 缓降
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:float',
        level: '2',
        pedestalItems: [
            {
                item: 'minecraft:feather'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:phantom_membrane'
            }, {
                item: 'minecraft:phantom_membrane'
            }, {
                item: 'minecraft:phantom_membrane'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:float',
        level: '3',
        pedestalItems: [
            {
                tag: 'forge:wool'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:phantom_membrane'
            }, {
                item: 'minecraft:phantom_membrane'
            }, {
                item: 'minecraft:phantom_membrane'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:float',
        level: '4',
        pedestalItems: [
            {
                item: 'l2complements:resonant_feather'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:phantom_membrane'
            }, {
                item: 'minecraft:phantom_membrane'
            }, {
                item: 'minecraft:phantom_membrane'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:float',
        level: '5',
        pedestalItems: [
            {
                item: 'minecraft:elytra'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:phantom_membrane'
            }, {
                item: 'minecraft:phantom_membrane'
            }, {
                item: 'minecraft:phantom_membrane'
            }
        ],
        sourceCost: 8000
    })
})

// slow 减速
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:slow',
        level: '2',
        pedestalItems: [
            {
                tag: 'forge:slimeballs'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:slow',
        level: '3',
        pedestalItems: [
            {
                tag: 'forge:buckets/honey'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:slow',
        level: '4',
        pedestalItems: [
            {
                item: 'l2complements:blackstone_core'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:slow',
        level: '5',
        pedestalItems: [
            {
                item: 'gtceu:polybenzimidazole_bucket'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }
        ],
        sourceCost: 8000
    })
})

// levitate 漂浮
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:levitate',
        level: '2',
        pedestalItems: [
            {
                item: 'minecraft:firework_rocket'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:nether_wart'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:levitate',
        level: '3',
        pedestalItems: [
            {
                item: 'create:encased_fan'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:nether_wart'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:levitate',
        level: '4',
        pedestalItems: [
            {
                item: 'l2complements:sun_membrane'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:nether_wart'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:levitate',
        level: '5',
        pedestalItems: [
            {
                item: 'gtceu:helium_bucket'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'l2complements:captured_shulker_bullet'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:nether_wart'
            }
        ],
        sourceCost: 8000
    })
})

// poison 剧毒
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:poison',
        level: '2',
        pedestalItems: [
            {
                item: 'minecraft:poisonous_potato'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:pufferfish'
            }, {
                item: 'minecraft:spider_eye'
            }, {
                item: 'minecraft:spider_eye'
            }, {
                item: 'minecraft:spider_eye'
            }, {
                item: 'minecraft:spider_eye'
            }, {
                item: 'minecraft:spider_eye'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:poison',
        level: '3',
        pedestalItems: [
            {
                item: 'the_bumblezone:bee_stinger'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:pufferfish'
            }, {
                item: 'minecraft:spider_eye'
            }, {
                item: 'minecraft:spider_eye'
            }, {
                item: 'minecraft:spider_eye'
            }, {
                item: 'minecraft:spider_eye'
            }, {
                item: 'minecraft:spider_eye'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:poison',
        level: '4',
        pedestalItems: [
            {
                item: 'alexsmobs:komodo_spit'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:pufferfish'
            }, {
                item: 'minecraft:spider_eye'
            }, {
                item: 'minecraft:spider_eye'
            }, {
                item: 'minecraft:spider_eye'
            }, {
                item: 'minecraft:spider_eye'
            }, {
                item: 'minecraft:spider_eye'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:poison',
        level: '5',
        pedestalItems: [
            {
                item: 'gtceu:hydrogen_cyanide_bucket'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:pufferfish'
            }, {
                item: 'minecraft:spider_eye'
            }, {
                item: 'minecraft:spider_eye'
            }, {
                item: 'minecraft:spider_eye'
            }, {
                item: 'minecraft:spider_eye'
            }, {
                item: 'minecraft:spider_eye'
            }
        ],
        sourceCost: 8000
    })
})

// wither 凋零
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:wither',
        level: '2',
        pedestalItems: [
            {
                tag: 'forge:ingots/uranium_235'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_skeleton_skull'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:wither',
        level: '3',
        pedestalItems: [
            {
                tag: 'forge:ingots/plutonium_241'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_skeleton_skull'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:wither',
        level: '4',
        pedestalItems: [
            {
                tag: 'forge:ingots/naquadria'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_skeleton_skull'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:wither',
        level: '5',
        pedestalItems: [
            {
                tag: 'forge:ingots/neutronium'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_rose'
            }, {
                item: 'minecraft:wither_skeleton_skull'
            }
        ],
        sourceCost: 8000
    })
})

// weak 虚弱
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:weak',
        level: '2',
        pedestalItems: [
            {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                tag: 'forge:dusts/glowstone'
            }, {
                tag: 'forge:dusts/glowstone'
            }, {
                tag: 'forge:dusts/glowstone'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:weak',
        level: '3',
        pedestalItems: [
            {
                item: 'twilightforest:experiment_115'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                tag: 'forge:dusts/glowstone'
            }, {
                tag: 'forge:dusts/glowstone'
            }, {
                tag: 'forge:dusts/glowstone'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:weak',
        level: '4',
        pedestalItems: [
            {
                item: 'alexsmobs:mimicream'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                tag: 'forge:dusts/glowstone'
            }, {
                tag: 'forge:dusts/glowstone'
            }, {
                tag: 'forge:dusts/glowstone'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:weak',
        level: '5',
        pedestalItems: [
            {
                item: 'gtceu:nitrous_oxide_bucket'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                tag: 'forge:dusts/glowstone'
            }, {
                tag: 'forge:dusts/glowstone'
            }, {
                tag: 'forge:dusts/glowstone'
            }
        ],
        sourceCost: 8000
    })
})

// chaotic 狂乱
ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:chaotic',
        level: '2',
        pedestalItems: [
            {
                item: 'minecraft:brewing_stand'
            }, {
                item: 'l2complements:guardian_eye'
            }, {
                item: 'l2complements:guardian_eye'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:dragon_head'
            }, {
                item: 'minecraft:dragon_head'
            }, {
                item: 'minecraft:dragon_head'
            }, {
                item: 'minecraft:dragon_head'
            }
        ],
        sourceCost: 3500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:chaotic',
        level: '3',
        pedestalItems: [
            {
                item: 'minecraft:chorus_fruit'
            }, {
                item: 'l2complements:guardian_eye'
            }, {
                item: 'l2complements:guardian_eye'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:dragon_head'
            }, {
                item: 'minecraft:dragon_head'
            }, {
                item: 'minecraft:dragon_head'
            }, {
                item: 'minecraft:dragon_head'
            }
        ],
        sourceCost: 5000
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:chaotic',
        level: '4',
        pedestalItems: [
            {
                item: 'legendary_monsters:infected_chorus_fruit'
            }, {
                item: 'l2complements:guardian_eye'
            }, {
                item: 'l2complements:guardian_eye'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:dragon_head'
            }, {
                item: 'minecraft:dragon_head'
            }, {
                item: 'minecraft:dragon_head'
            }, {
                item: 'minecraft:dragon_head'
            }
        ],
        sourceCost: 6500
    })
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'l2archery:chaotic',
        level: '5',
        pedestalItems: [
            {
                tag: 'forge:dusts/nether_star'
            }, {
                item: 'l2complements:guardian_eye'
            }, {
                item: 'l2complements:guardian_eye'
            }, {
                item: 'minecraft:dragon_breath'
            }, {
                item: 'minecraft:dragon_head'
            }, {
                item: 'minecraft:dragon_head'
            }, {
                item: 'minecraft:dragon_head'
            }, {
                item: 'minecraft:dragon_head'
            }
        ],
        sourceCost: 8000
    })
})