/*
 * 添加附魔配方
 * 已添加：
 * 
 * 饵钓I
 * 饵钓II
 * 饵钓III
 * 
 * 海之眷顾I
 * 海之眷顾II
 * 海之眷顾III
 * 
 * 穿刺I
 * 穿刺II
 * 穿刺III
 * 穿刺IV
 * 穿刺V
 * 
 * 忠诚I
 * 忠诚II
 * 忠诚III
 * 
 * 激流I
 * 激流II
 * 激流III
 * 
 * 引雷I
 * 
 * 经验修补I？
 */

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'minecraft:lure',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'aquaculture:worm'
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
        enchantment: 'minecraft:lure',
        level: '2',
        pedestalItems: [
            {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'aquaculture:iron_hook'
            }, {
                item: 'aquaculture:worm'
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
        enchantment: 'minecraft:lure',
        level: '3',
        pedestalItems: [
            {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'aquaculture:diamond_hook'
            }, {
                item: 'aquaculture:worm'
            }, {
                item: 'aquaculture:worm'
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
        enchantment: 'minecraft:luck_of_the_sea',
        level: '1',
        pedestalItems: [
            {
                item: 'aquaculture:fish_bones'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 3000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'minecraft:luck_of_the_sea',
        level: '2',
        pedestalItems: [
            {
                tag: 'forge:raw_fishes'
            }, {
                tag: 'forge:raw_fishes'
            }, {
                tag: 'forge:ingots/neptunium'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 6000
    })
    
    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'minecraft:luck_of_the_sea',
        level: '3',
        pedestalItems: [
            {
                item: 'aquaculture:message_in_a_bottle'
            }, {
                item: 'aquaculture:message_in_a_bottle'
            }, {
                item: 'aquaculture:message_in_a_bottle'
            }, {
                item: 'aquaculture:neptunes_bounty'
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
        sourceCost: 9000
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'minecraft:loyalty',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'ars_nouveau:air_essence'
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
        enchantment: 'minecraft:loyalty',
        level: '2',
        pedestalItems: [
            {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'minecraft:prismarine_shard'
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
        enchantment: 'minecraft:loyalty',
        level: '3',
        pedestalItems: [
            {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'minecraft:nautilus_shell'
            }, {
                tag: 'forge:storage_blocks/source'
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
        enchantment: 'minecraft:riptide',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'ars_nouveau:manipulation_essence'
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
        enchantment: 'minecraft:riptide',
        level: '2',
        pedestalItems: [
            {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'ars_nouveau:manipulation_essence'
            }, {
                item: 'minecraft:prismarine_shard'
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
        enchantment: 'minecraft:riptide',
        level: '3',
        pedestalItems: [
            {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'ars_nouveau:manipulation_essence'
            }, {
                item: 'minecraft:heart_of_the_sea'
            }, {
                tag: 'forge:storage_blocks/source'
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
        enchantment: 'minecraft:impaling',
        level: '1',
        pedestalItems: [
            {
                item: 'minecraft:prismarine_shard'
            }, {
                item: 'minecraft:prismarine_shard'
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
        enchantment: 'minecraft:impaling',
        level: '2',
        pedestalItems: [
            {
                item: 'minecraft:prismarine_shard'
            }, {
                item: 'minecraft:prismarine_shard'
            }, {
                item: 'minecraft:prismarine_shard'
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
        enchantment: 'minecraft:impaling',
        level: '3',
        pedestalItems: [
            {
                item: 'minecraft:prismarine_wall'
            }, {
                item: 'minecraft:prismarine_wall'
            }, {
                item: 'minecraft:prismarine_wall'
            }, {
                item: 'minecraft:prismarine_wall'
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
        enchantment: 'minecraft:impaling',
        level: '4',
        pedestalItems: [
            {
                item: 'minecraft:prismarine_wall'
            }, {
                item: 'minecraft:prismarine_wall'
            }, {
                item: 'minecraft:prismarine_wall'
            }, {
                item: 'minecraft:prismarine_wall'
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
        enchantment: 'minecraft:impaling',
        level: '5',
        pedestalItems: [
            {
                item: 'minecraft:prismarine_wall'
            }, {
                item: 'minecraft:prismarine_wall'
            }, {
                item: 'minecraft:prismarine_wall'
            }, {
                item: 'minecraft:prismarine_wall'
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
        enchantment: 'minecraft:channeling',
        level: '1',
        pedestalItems: [
            {
                tag: 'gtceu:batteries/iv'
            }, {
                tag: 'gtceu:batteries/iv'
            }, {
                tag: 'gtceu:batteries/iv'
            }, {
                tag: 'gtceu:batteries/iv'
            }, {
                tag: 'gtceu:batteries/iv'
            }, {
                tag: 'gtceu:batteries/iv'
            }, {
                item: 'gtceu:iv_battery_buffer_8x'
            }, {
                item: 'gtceu:platinum_quadruple_wire'
            }
        ],
        sourceCost: 9000
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'minecraft:mending',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_nouveau:abjuration_essence'
            }, {
                tag: 'minecraft:sculk'
            }, {
                tag: 'minecraft:sculk'
            }, {
                tag: 'minecraft:sculk'
            }, {
                item: 'create:experience_block'
            }, {
                item: 'create:experience_block'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 5000
    })
})