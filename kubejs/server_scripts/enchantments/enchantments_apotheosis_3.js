/*
 * 添加附魔配方
 * 已添加：
 * 
 * 自然祝福I
 * 自然祝福II
 * 自然祝福III
 * 
 * 灾厄村民杀手I
 * 灾厄村民杀手II
 * 灾厄村民杀手III
 * 灾厄村民杀手IV
 * 灾厄村民杀手V
 * 
 * 捕捉I
 * 捕捉II
 * 捕捉III
 * 捕捉IV
 * 捕捉V
 * 
 * 染色
 * 
 * 引诱
 * 
 * 分裂
 * 
 * 拆分
 */

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:natures_blessing',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_nouveau:earth_essence'
            }, {
                tag: 'forge:dusts/bone'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 2000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:natures_blessing',
        level: '2',
        pedestalItems: [
            {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:earth_essence'
            }, {
                tag: 'forge:dusts/bone'
            }, {
                tag: 'forge:seeds'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 3500
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:natures_blessing',
        level: '3',
        pedestalItems: [
            {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:earth_essence'
            }, {
                tag: 'forge:storage_blocks/bone'
            }, {
                tag: 'forge:seeds'
            }, {
                tag: 'forge:seeds'
            }, {
                tag: 'forge:seeds'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 5000
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:bane_of_illagers',
        level: '1',
        pedestalItems: [
            {
                tag: 'forge:gems/emerald'
            }, {
                tag: 'forge:gems/emerald'
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
        enchantment: 'apotheosis:bane_of_illagers',
        level: '2',
        pedestalItems: [
            {
                tag: 'forge:gems/emerald'
            }, {
                tag: 'forge:gems/emerald'
            }, {
                tag: 'forge:gems/emerald'
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
        enchantment: 'apotheosis:bane_of_illagers',
        level: '3',
        pedestalItems: [
            {
                tag: 'forge:storage_blocks/emerald'
            }, {
                tag: 'forge:storage_blocks/emerald'
            }, {
                tag: 'forge:storage_blocks/emerald'
            }, {
                tag: 'forge:storage_blocks/emerald'
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
        enchantment: 'apotheosis:bane_of_illagers',
        level: '4',
        pedestalItems: [
            {
                tag: 'forge:storage_blocks/emerald'
            }, {
                tag: 'forge:storage_blocks/emerald'
            }, {
                tag: 'forge:storage_blocks/emerald'
            }, {
                tag: 'forge:storage_blocks/emerald'
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

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:bane_of_illagers',
        level: '5',
        pedestalItems: [
            {
                tag: 'forge:storage_blocks/emerald'
            }, {
                tag: 'forge:storage_blocks/emerald'
            }, {
                tag: 'forge:storage_blocks/emerald'
            }, {
                tag: 'forge:storage_blocks/emerald'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 8000
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:capturing',
        level: '1',
        pedestalItems: [
            {
                item: 'l2complements:totemic_gold_ingot'
            }, {
                item: 'minecraft:cobweb'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 2000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:capturing',
        level: '2',
        pedestalItems: [
            {
                item: 'l2complements:totemic_gold_ingot'
            },  {
                item: 'l2complements:soul_flame'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 3500
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:capturing',
        level: '3',
        pedestalItems: [
            {
                item: 'l2complements:totemic_gold_ingot'
            },  {
                item: 'l2complements:soul_flame'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
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
        sourceCost: 5000
    })
    
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:capturing',
        level: '4',
        pedestalItems: [
            {
                item: 'l2complements:totemic_gold_block'
            },  {
                item: 'l2complements:soul_flame'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
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
        sourceCost: 6500
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:capturing',
        level: '5',
        pedestalItems: [
            {
                item: 'l2complements:totemic_gold_block'
            }, {
                item: 'l2complements:totemic_gold_block'
            }, {
                item: 'l2complements:totemic_gold_block'
            }, {
                item: 'l2complements:totemic_gold_block'
            }, {
                item: 'minecraft:cobweb'
            }, {
                item: 'minecraft:cobweb'
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
        enchantment: 'apotheosis:chromatic',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_nouveau:manipulation_essence'
            }, {
                tag: 'forge:dyes'
            }, {
                tag: 'forge:dyes'
            }, {
                tag: 'forge:dyes'
            }, {
                tag: 'forge:dyes'
            }, {
                tag: 'forge:dyes'
            }, {
                tag: 'forge:dyes'
            }, {
                tag: 'forge:dyes'
            }
        ],
        sourceCost: 9000
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:tempting',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_nouveau:conjuration_essence'
            }, {
                tag: 'minecraft:flowers'
            }, {
                tag: 'minecraft:flowers'
            }, {
                tag: 'minecraft:flowers'
            }, {
                tag: 'minecraft:flowers'
            }, {
                tag: 'minecraft:flowers'
            }, {
                tag: 'minecraft:flowers'
            }, {
                tag: 'minecraft:flowers'
            }
        ],
        sourceCost: 9000
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:obliteration',
        level: '1',
        pedestalItems: [
            {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/diamond'
            }, {
                tag: 'forge:storage_blocks/iron'
            }, {
                tag: 'forge:storage_blocks/iron'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/iron'
            }, {
                tag: 'forge:storage_blocks/iron'
            }, {
                tag: 'forge:storage_blocks/diamond'
            }
        ],
        sourceCost: 9000
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:splitting',
        level: '1',
        pedestalItems: [
            {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/iron'
            }, {
                tag: 'forge:storage_blocks/iron'
            }, {
                tag: 'forge:storage_blocks/iron'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/refined_obsidian'
            }, {
                tag: 'forge:storage_blocks/refined_obsidian'
            }, {
                tag: 'forge:storage_blocks/refined_obsidian'
            }
        ],
        sourceCost: 9000
    })
})