/*
 * 添加附魔配方
 * 已添加：
 * 
 * 矿工热忱I
 * 矿工热忱II
 * 矿工热忱III
 * 矿工热忱IV
 * 矿工热忱V
 * 
 * 剥削
 * 
 * 叠装弩箭I
 * 叠装弩箭II
 * 叠装弩箭III
 * 叠装弩箭IV
 * 叠装弩箭V
 * 
 * 地球恩惠I
 * 地球恩惠II
 * 地球恩惠III
 * 
 * 阅历I
 * 阅历II
 * 阅历III
 * 
 * 清道夫I
 * 清道夫II
 * 清道夫III
 * 
 * 电锯
 * 
 * 无尽箭袋
 * 
 * 生长激素
 */

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:miners_fervor',
        level: '1',
        pedestalItems: [
            {
                tag: 'forge:dusts/blaze'
            }, {
                item: 'minecraft:iron_pickaxe'
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
        enchantment: 'apotheosis:miners_fervor',
        level: '2',
        pedestalItems: [
            {
                tag: 'forge:rods/blaze'
            }, {
                item: 'minecraft:golden_pickaxe'
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
        enchantment: 'apotheosis:miners_fervor',
        level: '3',
        pedestalItems: [
            {
                tag: 'forge:rods/blaze'
            }, {
                tag: 'forge:rods/blaze'
            }, {
                item: 'minecraft:golden_pickaxe'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/glowstone'
            }, {
                tag: 'forge:storage_blocks/glowstone'
            }
        ],
        sourceCost: 5000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:miners_fervor',
        level: '4',
        pedestalItems: [
            {
                tag: 'forge:rods/blaze'
            }, {
                tag: 'forge:rods/blaze'
            }, {
                item: 'minecraft:diamond_pickaxe'
            }, {
                item: 'minecraft:iron_shovel'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/glowstone'
            }, {
                tag: 'forge:storage_blocks/glowstone'
            }
        ],
        sourceCost: 6500
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:miners_fervor',
        level: '5',
        pedestalItems: [
            {
                tag: 'forge:rods/blaze'
            }, {
                tag: 'forge:rods/blaze'
            }, {
                item: 'minecraft:diamond_pickaxe'
            }, {
                item: 'minecraft:diamond_shovel'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/refined_glowstone'
            }, {
                tag: 'forge:storage_blocks/refined_glowstone'
            }
        ],
        sourceCost: 8000
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:exploitation',
        level: '1',
        pedestalItems: [
            {
                tag: 'forge:string'
            }, {
                tag: 'forge:wool'
            }, {
                item: 'bloodmagic:sacrificialdagger'
            }, {
                tag: 'forge:wool'
            }
        ],
        sourceCost: 5000
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:crescendo',
        level: '1',
        pedestalItems: [
            {
                item: 'minecraft:arrow'
            }, {
                item: 'minecraft:arrow'
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
        enchantment: 'apotheosis:crescendo',
        level: '2',
        pedestalItems: [
            {
                item: 'minecraft:arrow'
            }, {
                item: 'minecraft:arrow'
            }, {
                item: 'minecraft:arrow'
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
        enchantment: 'apotheosis:crescendo',
        level: '3',
        pedestalItems: [
            {
                item: 'apotheosis:obsidian_arrow'
            }, {
                item: 'apotheosis:obsidian_arrow'
            }, {
                item: 'apotheosis:obsidian_arrow'
            }, {
                item: 'apotheosis:obsidian_arrow'
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
        enchantment: 'apotheosis:crescendo',
        level: '4',
        pedestalItems: [
            {
                item: 'apotheosis:obsidian_arrow'
            }, {
                item: 'apotheosis:obsidian_arrow'
            }, {
                item: 'apotheosis:obsidian_arrow'
            }, {
                item: 'apotheosis:obsidian_arrow'
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
        enchantment: 'apotheosis:crescendo',
        level: '5',
        pedestalItems: [
            {
                item: 'apotheosis:obsidian_arrow'
            }, {
                item: 'apotheosis:obsidian_arrow'
            }, {
                item: 'apotheosis:obsidian_arrow'
            }, {
                item: 'apotheosis:obsidian_arrow'
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
        enchantment: 'apotheosis:earths_boon',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_nouveau:earth_essence'
            }, {
                tag: 'forge:ingots/netherite'
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
        sourceCost: 6000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:earths_boon',
        level: '2',
        pedestalItems: [
            {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:earth_essence'
            }, {
                tag: 'forge:ingots/netherite'
            }, {
                tag: 'forge:ingots/netherite'
            }, {
                tag: 'forge:ingots/netherite'
            }, {
                tag: 'forge:ingots/netherite'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 8000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:earths_boon',
        level: '3',
        pedestalItems: [
            {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'ars_nouveau:earth_essence'
            }, {
                tag: 'forge:storage_blocks/netherite'
            }, {
                tag: 'forge:storage_blocks/emerald'
            }, {
                tag: 'forge:storage_blocks/emerald'
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
        enchantment: 'apotheosis:knowledge',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_nouveau:water_essence'
            }, {
                tag: 'forge:ingots/netherite'
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
        sourceCost: 6000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:knowledge',
        level: '2',
        pedestalItems: [
            {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'ars_nouveau:water_essence'
            }, {
                tag: 'forge:ingots/netherite'
            }, {
                tag: 'forge:ingots/netherite'
            }, {
                tag: 'forge:ingots/netherite'
            }, {
                tag: 'forge:ingots/netherite'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 8000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:knowledge',
        level: '3',
        pedestalItems: [
            {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'ars_nouveau:water_essence'
            }, {
                item: 'ars_nouveau:water_essence'
            }, {
                tag: 'forge:storage_blocks/netherite'
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
        sourceCost: 9000
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:scavenger',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_nouveau:air_essence'
            }, {
                tag: 'forge:ingots/netherite'
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
        sourceCost: 6000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:scavenger',
        level: '2',
        pedestalItems: [
            {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                tag: 'forge:ingots/netherite'
            }, {
                tag: 'forge:ingots/netherite'
            }, {
                tag: 'forge:ingots/netherite'
            }, {
                tag: 'forge:ingots/netherite'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 8000
    })

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:scavenger',
        level: '3',
        pedestalItems: [
            {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                tag: 'forge:storage_blocks/netherite'
            }, {
                tag: 'forge:storage_blocks/redstone'
            }, {
                tag: 'forge:storage_blocks/redstone'
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
        enchantment: 'apotheosis:chainsaw',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_nouveau:earth_essence'
            }, {
                item: 'minecraft:diamond_axe'
            }, {
                tag: 'forge:storage_blocks/source'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 2000
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:endless_quiver',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                tag: 'forge:storage_blocks/diamond'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                item: 'ars_nouveau:air_essence'
            }, {
                tag: 'forge:storage_blocks/netherite'
            }
        ],
        sourceCost: 9000
    })
})

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'apotheosis:growth_serum',
        level: '1',
        pedestalItems: [
            {
                tag: 'forge:string'
            }, {
                tag: 'forge:wool'
            }, {
                item: 'minecraft:hay_block'
            }, {
                tag: 'forge:wool'
            }
        ],
        sourceCost: 5000
    })
})