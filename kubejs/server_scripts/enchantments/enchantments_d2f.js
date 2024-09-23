/*
 * 添加附魔配方
 * 待添加：
 * 
 * 幽匿杀手I
 * 幽匿杀手II
 * 幽匿杀手III
 * 幽匿杀手IV
 * 幽匿杀手V
 * 
 * 收割者I
 * 收割者II
 * 收割者III
 * 收割者IV
 * 收割者V
 * 
 * 背刺I
 * 背刺II
 * 背刺III
 */

ServerEvents.recipes(event => {

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'deeperdarker:sculk_smite',
        level: '1',
        pedestalItems: [
            {
                item: 'minecraft:sculk'
            }, {
                item: 'minecraft:sculk'
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
        enchantment: 'deeperdarker:sculk_smite',
        level: '2',
        pedestalItems: [
            {
                item: 'minecraft:sculk'
            }, {
                item: 'minecraft:sculk'
            }, {
                item: 'minecraft:sculk'
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
        enchantment: 'deeperdarker:sculk_smite',
        level: '3',
        pedestalItems: [
            {
                tag: 'forge:gems/echo'
            }, {
                tag: 'forge:gems/echo'
            }, {
                tag: 'forge:gems/echo'
            }, {
                tag: 'forge:gems/echo'
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
        enchantment: 'deeperdarker:sculk_smite',
        level: '4',
        pedestalItems: [
            {
                tag: 'forge:gems/echo'
            }, {
                tag: 'forge:gems/echo'
            }, {
                tag: 'forge:gems/echo'
            }, {
                tag: 'forge:gems/echo'
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
        enchantment: 'deeperdarker:sculk_smite',
        level: '5',
        pedestalItems: [
            {
                tag: 'forge:gems/echo'
            }, {
                tag: 'forge:gems/echo'
            }, {
                tag: 'forge:gems/echo'
            }, {
                tag: 'forge:gems/echo'
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
        enchantment: 'draconicevolution:reaper_enchantment',
        level: '1',
        pedestalItems: [
            {
                tag: 'forge:ingots/draconium'
            }, {
                tag: 'forge:ingots/draconium'
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
        enchantment: 'draconicevolution:reaper_enchantment',
        level: '2',
        pedestalItems: [
            {
                tag: 'forge:ingots/draconium'
            }, {
                tag: 'forge:ingots/draconium'
            }, {
                tag: 'forge:ingots/draconium'
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
        enchantment: 'draconicevolution:reaper_enchantment',
        level: '3',
        pedestalItems: [
            {
                tag: 'forge:ingots/draconium_awakened'
            }, {
                tag: 'forge:ingots/draconium_awakened'
            }, {
                tag: 'forge:ingots/draconium_awakened'
            }, {
                tag: 'forge:ingots/draconium_awakened'
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
        enchantment: 'draconicevolution:reaper_enchantment',
        level: '4',
        pedestalItems: [
            {
                tag: 'forge:ingots/draconium_awakened'
            }, {
                tag: 'forge:ingots/draconium_awakened'
            }, {
                tag: 'forge:ingots/draconium_awakened'
            }, {
                tag: 'forge:ingots/draconium_awakened'
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
        enchantment: 'draconicevolution:reaper_enchantment',
        level: '5',
        pedestalItems: [
            {
                tag: 'forge:ingots/draconium_awakened'
            }, {
                tag: 'forge:ingots/draconium_awakened'
            }, {
                tag: 'forge:ingots/draconium_awakened'
            }, {
                tag: 'forge:ingots/draconium_awakened'
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
        enchantment: 'farmersdelight:backstabbing',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_nouveau:fire_essence'
            }, {
                item: 'minecraft:pointed_dripstone'
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
        enchantment: 'farmersdelight:backstabbing',
        level: '2',
        pedestalItems: [
            {
                item: 'ars_nouveau:fire_essence'
            }, {
                item: 'minecraft:pointed_dripstone'
            }, {
                item: 'minecraft:pointed_dripstone'
            }, {
                item: 'minecraft:iron_sword'
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
        enchantment: 'farmersdelight:backstabbing',
        level: '3',
        pedestalItems: [
            {
                item: 'ars_nouveau:fire_essence'
            }, {
                item: 'minecraft:pointed_dripstone'
            }, {
                item: 'minecraft:pointed_dripstone'
            }, {
                item: 'minecraft:pointed_dripstone'
            }, {
                item: 'minecraft:diamond_sword'
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
})