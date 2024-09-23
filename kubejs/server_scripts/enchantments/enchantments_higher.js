/*
 * 添加超等级附魔配方
 * 待添加：
 * 
 * 保护V
 * 
 * 锋利VI
 * 锋利VII
 * 锋利VIII
 * 
 * 力量VI
 * 力量VII
 * 力量VIII
 * 
 * 时运IV
 * 时运V
 * 
 * 抢夺IV
 * 抢夺V
 * 
 * 狂怒IV
 * 狂怒v
 * 
 */

ServerEvents.recipes(event => {
    event.remove({id: 'ars_nouveau:protection_5'})

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'minecraft:protection',
        level: '5',
        pedestalItems: [
            {
                item: 'ars_nouveau:manipulation_essence'
            }, {
                item: 'ars_nouveau:manipulation_essence'
            }, {
                item: 'ars_nouveau:manipulation_essence'
            }, {
                item: 'ars_nouveau:abjuration_essence'
            }, {
                item: 'ars_nouveau:abjuration_essence'
            }, {
                item: 'the_bumblezone:royal_jelly_bucket'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/diamond'
            }
        ],
        sourceCost: 8000
    })
})

ServerEvents.recipes(event => {
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'minecraft:sharpness',
        level: '6',
        pedestalItems: [
            {
                tag: 'forge:storage_blocks/quartz'
            }, {
                tag: 'forge:storage_blocks/quartz'
            }, {
                tag: 'forge:gems/diamond'
            }, {
                tag: 'forge:gems/diamond'
            }, {
                tag: 'forge:gems/diamond'
            }, {
                item: 'the_bumblezone:royal_jelly_bottle'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }
        ],
        sourceCost: 9500
    })
    
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'minecraft:sharpness',
        level: '7',
        pedestalItems: [
            {
                tag: 'forge:storage_blocks/quartz'
            }, {
                tag: 'forge:storage_blocks/quartz'
            }, {
                tag: 'forge:storage_blocks/diamond'
            }, {
                item: 'the_bumblezone:royal_jelly_bottle'
            }, {
                item: 'the_bumblezone:royal_jelly_bottle'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }
        ],
        sourceCost: 11000
    })
    
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'minecraft:sharpness',
        level: '8',
        pedestalItems: [
            {
                tag: 'forge:storage_blocks/quartz'
            }, {
                tag: 'forge:storage_blocks/quartz'
            }, {
                tag: 'forge:storage_blocks/quartz'
            }, {
                tag: 'forge:storage_blocks/diamond'
            }, {
                item: 'the_bumblezone:royal_jelly_bucket'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }
        ],
        sourceCost: 12500
    })
})

ServerEvents.recipes(event => {
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'minecraft:power',
        level: '6',
        pedestalItems: [
            {
                tag: 'forge:flawless_gems/diamond'
            }, {
                tag: 'forge:flawless_gems/diamond'
            }, {
                tag: 'forge:flawless_gems/diamond'
            }, {
                item: 'the_bumblezone:royal_jelly_bottle'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }
        ],
        sourceCost: 10500
    })
    
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'minecraft:power',
        level: '7',
        pedestalItems: [
            {
                tag: 'forge:exqusite_gems/diamond'
            }, {
                tag: 'forge:exqusite_gems/diamond'
            }, {
                item: 'the_bumblezone:royal_jelly_bottle'
            }, {
                item: 'the_bumblezone:royal_jelly_bottle'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }
        ],
        sourceCost: 13000
    })
    
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'minecraft:power',
        level: '8',
        pedestalItems: [
            {
                tag: 'forge:exqusite_gems/diamond'
            }, {
                tag: 'forge:exqusite_gems/diamond'
            }, {
                tag: 'forge:exqusite_gems/diamond'
            }, {
                item: 'the_bumblezone:royal_jelly_bucket'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }
        ],
        sourceCost: 16000
    })
})

ServerEvents.recipes(event => {
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'minecraft:fortune',
        level: '4',
        pedestalItems: [
            {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'the_bumblezone:royal_jelly_bottle'
            }, {
                tag: 'forge:storage_blocks/diamond'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 12000
    })
    
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'minecraft:fortune',
        level: '5',
        pedestalItems: [
            {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'the_bumblezone:royal_jelly_bucket'
            }, {
                tag: 'forge:storage_blocks/diamond'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }
        ],
        sourceCost: 15000
    })
})

ServerEvents.recipes(event => {
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'minecraft:looting',
        level: '4',
        pedestalItems: [
            {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'the_bumblezone:royal_jelly_bottle'
            }, {
                tag: 'forge:storage_blocks/emerald'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 12000
    })
    
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'minecraft:looting',
        level: '5',
        pedestalItems: [
            {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'the_bumblezone:royal_jelly_bucket'
            }, {
                tag: 'forge:storage_blocks/emerald'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }
        ],
        sourceCost: 15000
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:berserkers_fury',
        level: '4',
        pedestalItems: [
            {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'ars_nouveau:fire_essence'
            }, {
                item: 'ars_elemental:anima_essence'
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
        sourceCost: 12000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:berserkers_fury',
        level: '5',
        pedestalItems: [
            {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'ars_nouveau:fire_essence'
            }, {
                item: 'ars_elemental:anima_essence'
            }, {
                item: 'ars_nouveau:abjuration_essence'
            }, {
                tag: 'forge:storage_blocks/diamond'
            }, {
                tag: 'forge:storage_blocks/diamond'
            }, {
                tag: 'forge:storage_blocks/diamond'
            }
        ],
        sourceCost: 15000
    })
})


/*ServerEvents.recipes(event => {
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "minecraft:enchanted_book",
            nbt: {StoredEnchantments:[{id:"minecraft:protection",lvl:4}]}
        },
        loops: 4,
        results: [
            {
                chance: 100.0,
                item: "minecraft:enchanted_book",
                nbt: {StoredEnchantments:[{id:"minecraft:protection",lvl:5}]}
            }
        ],
        sequence: [
            {
                type: "create:filling",
                ingredients: [
                    {
                        item: "kubejs:incomplete_protection"
                    },
                    {
                        amount: 250,
                        fluid: "the_bumblezone:royal_jelly_fluid_still"
                    }
                ],
                results: [{
                    item: "kubejs:incomplete_protection"
                }]
            }, {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "kubejs:incomplete_protection"
                    },
                    {
                        tag: "forge:plates/diamond"
                    }
                ],
                results: [{
                    item: "kubejs:incomplete_protection"
                }]
            }, {
                type: "create:pressing",
                ingredients: [
                    {
                        item: "kubejs:incomplete_protection"
                    }
                ],
                results: [{
                    item: "kubejs:incomplete_protection"
                }]
            }
        ],
        transitionalItem: {
            item: "kubejs:incomplete_protection"
        }
    })
})*/

