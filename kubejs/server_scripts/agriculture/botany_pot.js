

ServerEvents.recipes(event => {
    event.recipes.botanypots.crop(
        "minecraft:candle", // seed item
        ["oak_leaves"], // categories that this crop can be planted on
        { block: "minecraft:candle" }, // display block
        [
            Item.of ("minecraft:candle") // item
                .withChance(100) // weight of this entry compared to the others
                .withRolls(1, 2) // the times this loot will be chosen (min, max)
            // for example, when chosen this will give 1 to 2 candles
        ],
        10, // growthTicks
        1, // optional, growthModifier - this can be set to 1 in most cases
    )
 
    event.recipes.botanypots.soil(
        "minecraft:oak_leaves", // the item that this soil is attached to
        { block: "minecraft:oak_leaves" }, // display block
        ["oak_leaves"], // categories that this soil provides
        100, // growth ticks that this soil will provide, set to -1 for no modifier
        0.5 // optional, growth modifier, example: 0.5 means all crops will take half the time
    )


    MetalOre.forEach(ore => {
        event.recipes.botanypots.crop(
            ore.asOresBlock(),
            ["ore_core"],
            { block: ore.asOresBlock().getId() },
            [
                ore.asClump().withChance(1).withRolls(ore.multiplyRate, ore.multiplyRate)
            ],
            ore.growTime*20,
            1
        )
    })

    event.recipes.botanypots.soil(
        "kubejs:ore_core",
        { block: "minecraft:mossy_cobblestone" },
        ["ore_core"],
        60*20,
        1
    )
})


