/**
 * 提供暮色森林阶段的科技树
 * 
 */


ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "tag": "forge:tools/hammers"
            },
            {
                "item": "minecraft:raw_gold"
            }
        ],
        "result": {
            "item": "create:crushed_raw_gold",
            "count": 2
        }
    })

    event.custom({
        "type":"lychee:item_inside",
        "item_in": { "item": "create:crushed_raw_gold" },
        "block_in": { "blocks": ["minecraft:water"] },
        "post":  [
            {  "type": "drop_item",  "item": "minecraft:gold_nugget", "count": 7},
            {  "type": "drop_item",  "item": "minecraft:quartz", "count": 1},
        ]
    })

    event.custom({
        "type": "twilightforest:transformation_powder",
        "from": "twilightforest:quest_ram",
        "reversible": false,
        "to": "ars_nouveau:starbuncle"
    })

    event.custom({
        "type": "crafting_shaped",
        "pattern": [
            "CAC",
            "ABA",
            "CAC"
        ],
        "key": {
            "A": {
                "item": "minecraft:glowstone_dust"
            },
            "B": {
                "item": "ars_nouveau:manipulation_essence"
            },
            "C": {
                "item": "minecraft:lapis_lazuli"
            }
        },
        "result": {
            "item": "twilightforest:transformation_powder",
            "count": 4
        }
    })
})