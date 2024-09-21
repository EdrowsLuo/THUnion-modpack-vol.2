// priority: 0

ServerEvents.recipes(event => {
    MakeTeleportationCore(event)
    MakeOreCore(event)
    MakeMechanicalCore(event)
    MakeCraftCore(event)
})


function MakeTeleportationCore(event) {
    event.remove({ output: "mekanism:teleportation_core"})
    event.custom({
        "type":"lychee:item_inside",
        "item_in": { "item": "kubejs:mechanical_core" },
        "block_in": { "blocks": ["minecraft:nether_portal"] },
        "post":  {  "type": "drop_item",  "item": "mekanism:teleportation_core"}
    })
}

function MakeOreCore(event) {
    event.custom({
        "type": "lychee:block_crushing",
        "item_in": [
            { "tag": "forge:ores/copper" },
            { "tag": "forge:ores/iron" },
            { "tag": "forge:ores/gold" },
            { "tag": "forge:ores/diamond" },
            { "tag": "forge:ores/aluminum" },
            { "tag": "forge:ores/lead" },
            { "tag": "forge:ores/nickel" },
            { "tag": "forge:ores/osmiun" },
            { "tag": "forge:ores/zinc" },
            { "tag": "forge:ores/redstone" },
        ],
        "post": [
            {
                "type": "drop_item",
                "item": "kubejs:ore_core",
                "count": 2
            }
        ]
    })
}

function MakeMechanicalCore(event) {
    event.recipes.create.crushing(
        Item.of("kubejs:mechanical_core", 16),
        "create:mechanical_arm"
    )
}

function MakeCraftCore(event) {
    event.recipes.create.mechanical_crafting('kubejs:craft_core', 
    [
        'D'
    ], 
    {
        D: "create:mechanical_crafter"
    })
}

