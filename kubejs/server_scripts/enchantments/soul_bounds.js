/*
 *  统一灵魂绑定
 */


ServerEvents.recipes(event => {
    event.remove({id: 'ars_nouveau:soulbound_1'})
    event.remove({id: 'l2complements:enchantments/soul_bound_ars'})

    event.custom({
        type: 'ars_nouveau:enchantment',
        enchantment: 'tombstone:soulbound',
        level: '1',
        pedestalItems: [
            {
                item: 'ars_elemental:anima_essence'
            }, {
                item: 'tombstone:grave_dust'
            }, {
                tag: 'forge:storage_blocks/lapis'
            }, {
                tag: 'forge:storage_blocks/source'
            }
        ],
        sourceCost: 10000
    })

})

// ItemEvents.canPickUp('minecraft:enchanted_book', event => {
//     let soulbounds = [
//         "ars_elemental:soulbound",
//         "l2complements:soul_bound"
//     ]
//     let new_enchantment_tags = []
//     let has_soul_bound = false
//     event.item.enchantmentTags.forEach(enchantment => {
//         let is_soulbound = soulbounds.find(enchantment.id) != undefined
//         has_soul_bound = has_soul_bound || is_soulbound
//         if (!is_soulbound) new_enchantment_tags.push(enchantment)
//     })
//     if (has_soul_bound) {
//         if (!event.item.enchantmentTags.find(enchantment => enchantment.id == "tombstone:soulbound")) {
//             new_enchantment_tags.push({id:"tombstone:soulbound", lvl:1})
//         }
//     }
//     event.item.enchantmentTags = new_enchantment_tags
// })