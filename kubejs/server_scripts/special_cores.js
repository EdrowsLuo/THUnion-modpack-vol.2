// priority: 0

const distribution_core_time_limit = 20 * 1
const distribution_core_distance_sqr = 20**2

ServerEvents.recipes(event => {
    MakeTeleportationCore(event)
    MakeOreCore(event)
    MakeMechanicalCore(event)
    MakeCraftCore(event)
    MakeDistributionCore(event)
})


EntityEvents.spawned("minecraft:item", event => {
    if(event.entity.item.id == "kubejs:uncompleted_distribution_core") {
        let item = event.entity.item
        if(item.nbt && item.nbt["Time"] && item.nbt["Dim"] == event.level.dimensionId) {
            let currentTime = event.level.getTime()
            if(currentTime - item.nbt.Time < distribution_core_time_limit) {
                if(distanceToSqr(event.entity, item.nbt.X, item.nbt.Y, item.nbt.Z) > distribution_core_distance_sqr) {
                    event.entity.item = Item.of("kubejs:distribution_core", 4)
                    return
                }
            }
        }
        item.nbt = {
            Dim: event.level.dimensionId,
            Time: event.level.getTime(), 
            X: event.entity.x, 
            Y: event.entity.y, 
            Z: event.entity.z}
        event.entity.pickUpDelay = distribution_core_time_limit
    }
})


function MakeTeleportationCore(event) {
    event.remove({ output: "mekanism:teleportation_core"})
    event.custom({
        "type":"lychee:item_inside",
        "item_in": { "item": "kubejs:distribution_core" },
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

function MakeDistributionCore(event) {
    event.shaped(
        Item.of("kubejs:uncompleted_distribution_core", 1),
        [" H ",
         "H H",
         " H "],
        {
            H: "minecraft:hopper"
        })
}
