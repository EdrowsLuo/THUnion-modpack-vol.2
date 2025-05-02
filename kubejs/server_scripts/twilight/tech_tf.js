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


BlockEvents.rightClicked("create:experience_block", event => {
    if(event.item.id != "twilightforest:transformation_powder") return;
    var block = event.block;
    var level = event.level;

    var pos = block.pos;

    let armor_stands = level.getEntitiesWithin(AABB.of(pos.x + 1, pos.y, pos.z + 1, pos.x - 1, pos.y + 3, pos.z - 1))
                            .filter(entity => entity.getType() == 'minecraft:armor_stand')
    if(armor_stands.isEmpty()) return;
    let armor_stand = armor_stands.getFirst()
    let armor_stand_nbt = armor_stand.nbt
    if(armor_stand_nbt.HandItems[0].id != "ars_nouveau:wand") return;
    if(armor_stand_nbt.ArmorItems[0].id != "ars_nouveau:battlemage_boots") return;
    if(armor_stand_nbt.ArmorItems[1].id != "ars_nouveau:battlemage_leggings") return;
    if(armor_stand_nbt.ArmorItems[2].id != "ars_nouveau:battlemage_robes") return;
    if(armor_stand_nbt.ArmorItems[3].id != "ars_nouveau:battlemage_hood") return;

    block.set("air")
    armor_stand.kill()
    event.item.shrink(1)

    level.runCommandSilent(`summon mokels_witch_boss:witchboss ${pos.x + 0.5} ${pos.y + 3} ${pos.z + 0.5} {Attributes: [{Base:200d, Name: "minecraft:generic.max_health"}]}`);
    level.runCommandSilent(`particle minecraft:glow ${pos.x + 0.5} ${pos.y + 2} ${pos.z + 0.5} 1 1 1 0 100 normal`);
})
