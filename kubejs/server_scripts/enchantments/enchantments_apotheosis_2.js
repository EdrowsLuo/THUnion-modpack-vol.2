/*
 * 添加附魔配方
 * 已添加：
 * 
 * 狂怒I
 * 狂怒II
 * 狂怒III
 * 
 * 生命修补I
 * 生命修补II
 * 生命修补III
 * 
 * 冰霜荆棘I
 * 冰霜荆棘II
 * 冰霜荆棘III
 * 
 * 弹飞I
 * 弹飞II
 * 弹飞III
 * 
 * 稳定步伐
 * 
 * 盾反I
 * 盾反II
 * 盾反III
 * 盾反IV
 * 盾反V
 * 
 * 盾击I
 * 盾击II
 * 盾击III
 * 盾击IV
 * 
 */

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:berserkers_fury',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'ars_nouveau:fire_essence'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 3000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:berserkers_fury',
        level: '2',
        pedestalItems: [
            {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'ars_nouveau:fire_essence'
            }, {
                tag: 'forge:gems/diamond'
            }, {
                tag: 'forge:gems/diamond'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 6000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:berserkers_fury',
        level: '3',
        pedestalItems: [
            {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'ars_nouveau:fire_essence'
            }, {
                tag: 'forge:storage_blocks/netherite'
            }, {
                tag: 'forge:storage_blocks/diamond'
            }, {
                tag: 'forge:storage_blocks/diamond'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 9000
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:life_mending',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_elemental:anima_essence'
            }, {
                item: 'bloodmagic:reinforcedslate'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 3000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:life_mending',
        level: '2',
        pedestalItems: [
            {
                item: 'ars_elemental:anima_essence'
            }, {
                item: 'ars_elemental:anima_essence'
            }, {
                item: 'bloodmagic:reinforcedslate'
            }, {
                item: 'bloodmagic:reinforcedslate'
            }, {
                item: 'bloodmagic:reinforcedslate'
            }, {
                item: 'bloodmagic:reinforcedslate'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 6000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:life_mending',
        level: '3',
        pedestalItems: [
            {
                item: 'ars_elemental:anima_essence'
            }, {
                item: 'ars_elemental:anima_essence'
            }, {
                item: 'ars_elemental:anima_essence'
            }, {
                item: 'bloodmagic:infusedslate'
            }, {
                item: 'bloodmagic:infusedslate'
            }, {
                item: 'bloodmagic:infusedslate'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 9000
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:icy_thorns',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_nouveau:wilden_spike'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                item: 'minecraft:blue_ice'
            }
        ],
        sourceCost: 2000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:icy_thorns',
        level: '2',
        pedestalItems: [
            {
                item: 'ars_nouveau:wilden_spike'
            }, {
                item: 'ars_nouveau:wilden_spike'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                item: 'minecraft:blue_ice'
            }, {
                item: 'minecraft:blue_ice'
            }
        ],
        sourceCost: 3500
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:icy_thorns',
        level: '3',
        pedestalItems: [
            {
                item: 'ars_nouveau:wilden_spike'
            }, {
                item: 'ars_nouveau:wilden_spike'
            }, {
                item: 'ars_nouveau:wilden_spike'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                item: 'minecraft:blue_ice'
            }, {
                item: 'minecraft:blue_ice'
            }, {
                item: 'minecraft:blue_ice'
            }
        ],
        sourceCost: 5000
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:rebounding',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_nouveau:wilden_wing'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                item: 'minecraft:slime_block'
            }
        ],
        sourceCost: 2000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:rebounding',
        level: '2',
        pedestalItems: [
            {
                item: 'ars_nouveau:wilden_wing'
            }, {
                item: 'ars_nouveau:wilden_wing'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                item: 'minecraft:slime_block'
            }, {
                item: 'minecraft:slime_block'
            }
        ],
        sourceCost: 3500
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:rebounding',
        level: '3',
        pedestalItems: [
            {
                item: 'ars_nouveau:wilden_wing'
            }, {
                item: 'ars_nouveau:wilden_wing'
            }, {
                item: 'ars_nouveau:wilden_wing'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                item: 'minecraft:slime_block'
            }, {
                item: 'minecraft:slime_block'
            }, {
                item: 'minecraft:slime_block'
            }
        ],
        sourceCost: 5000
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:reflective',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_nouveau:wilden_spike'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/iron'
            }
        ],
        sourceCost: 2000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:reflective',
        level: '2',
        pedestalItems: [
            {
                item: 'ars_nouveau:wilden_spike'
            }, {
                item: 'ars_nouveau:wilden_spike'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/iron'
            }
        ],
        sourceCost: 3500
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:reflective',
        level: '3',
        pedestalItems: [
            {
                item: 'ars_nouveau:wilden_spike'
            }, {
                item: 'ars_nouveau:wilden_spike'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/iron'
            }, {
                tag: 'forge:storage_blocks/iron'
            }
        ],
        sourceCost: 5000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:reflective',
        level: '4',
        pedestalItems: [
            {
                item: 'ars_nouveau:wilden_spike'
            }, {
                item: 'ars_nouveau:wilden_spike'
            }, {
                item: 'ars_nouveau:wilden_spike'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/iron'
            }, {
                tag: 'forge:storage_blocks/iron'
            }
        ],
        sourceCost: 6500
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:reflective',
        level: '5',
        pedestalItems: [
            {
                item: 'ars_nouveau:wilden_spike'
            }, {
                item: 'ars_nouveau:wilden_spike'
            }, {
                item: 'ars_nouveau:wilden_spike'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/iron'
            }, {
                tag: 'forge:storage_blocks/iron'
            }, {
                tag: 'forge:storage_blocks/iron'
            }
        ],
        sourceCost: 8000
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:shield_bash',
        level: '1',
        pedestalItems: [
            {
                item: 'supplementaries:bamboo_spikes'
            }, {
                item: 'supplementaries:bamboo_spikes'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 2000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:shield_bash',
        level: '2',
        pedestalItems: [
            {
                item: 'supplementaries:bamboo_spikes'
            }, {
                item: 'supplementaries:bamboo_spikes'
            }, {
                item: 'supplementaries:bamboo_spikes'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 3500
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:shield_bash',
        level: '3',
        pedestalItems: [
            {
                item: 'gtceu:long_iron_rod'
            }, {
                item: 'gtceu:long_iron_rod'
            }, {
                item: 'gtceu:long_iron_rod'
            }, {
                item: 'gtceu:long_iron_rod'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 5000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:shield_bash',
        level: '4',
        pedestalItems: [
            {
                item: 'gtceu:long_iron_rod'
            }, {
                item: 'gtceu:long_iron_rod'
            }, {
                item: 'gtceu:long_iron_rod'
            }, {
                item: 'gtceu:long_iron_rod'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 6500
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:stable_footing',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'gtceu:double_iron_plate'
            }, {
                tag: 'forge:storage_blocks/iron'
            }, {
                item: 'gtceu:double_iron_plate'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }
        ],
        sourceCost: 9000
    })
})