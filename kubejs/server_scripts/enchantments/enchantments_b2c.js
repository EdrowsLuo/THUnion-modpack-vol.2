/*
 * 添加附魔配方
 * 待添加：
 * 
 * 淬毒I
 * 淬毒II
 * 淬毒III
 * 
 * 蜜脾割具
 * 
 * 扩容I(cofh)
 * 扩容II
 * 扩容III
 * 扩容IV
 * 
 */

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'the_bumblezone:potent_poison',
        level: '1',
        pedestalItems: [
            {
                item: 'minecraft:spider_eye'
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
        enchantment: 'the_bumblezone:potent_poison',
        level: '2',
        pedestalItems: [
            {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:poisonous_potato'
            }, {
                item: 'minecraft:poisonous_potato'
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
        enchantment: 'the_bumblezone:potent_poison',
        level: '3',
        pedestalItems: [
            {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:fermented_spider_eye'
            }, {
                item: 'minecraft:poisonous_potato'
            }, {
                item: 'minecraft:poisonous_potato'
            }, {
                item: 'minecraft:pufferfish'
            }, {
                item: 'minecraft:pufferfish'
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
        enchantment: 'the_bumblezone:comb_cutter',
        level: '1',
        pedestalItems: [
            {
                item: 'minecraft:shears'
            }, {
                tag: 'forge:storage_blocks/wax'
            }, {
                item: 'minecraft:bee_nest'
            }, {
                tag: 'forge:storage_blocks/wax'
            }, {
                tag: 'forge:storage_blocks/wax'
            }, {
                tag: 'forge:storage_blocks/wax'
            }, {
                item: 'minecraft:bee_nest'
            }, {
                tag: 'forge:storage_blocks/wax'
            }
        ],
        sourceCost: 5000
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'cofh_core:holding',
        level: '1',
        pedestalItems: [
            {
                item: 'minecraft:bucket'
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
        enchantment: 'cofh_core:holding',
        level: '2',
        pedestalItems: [
            {
                item: 'create:fluid_tank'
            }, {
                item: 'create:fluid_tank'
            }, {
                item: 'create:fluid_pipe'
            }, {
                tag: 'forge:storage_blocks/source'
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
        enchantment: 'cofh_core:holding',
        level: '3',
        pedestalItems: [
            {
                item: 'mecanism:elite_fluid_tank'
            }, {
                item: 'mecanism:elite_fluid_tank'
            }, {
                item: 'mecanism:elite_fluid_tank'
            }, {
                item: 'mecanism:elite_mechanical_pipe'
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
        enchantment: 'cofh_core:holding',
        level: '4',
        pedestalItems: [
            {
                item: 'ae2:fluid_storage_cell_64k'
            }, {
                item: 'ae2:fluid_storage_cell_64k'
            }, {
                item: 'ae2:fluid_storage_cell_64k'
            }, {
                item: 'ae2:drive'
            }, {
                item: 'ae2:storage_bus'
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
})