

ServerEvents.recipes(event => {

    /**
     * 
     * @param {OreType} ore 
     * @param {Internal.Item_} seed 
     * @param {Internal.Item_} displayBlock
     * @param {Internal.ItemStack_[]} output 
     */
    function addOreBotanyRecipe(ore, seed, displayBlock, output) {
        event.recipes.botanypots.crop(
            seed,
            ["ore_core"],
            { block: displayBlock.getId() },
            output.concat(ore.customExport),
            ore.growTime*20,
            1
        )
    }


    MetalOre.forEach(ore => {
        addOreBotanyRecipe(ore, ore.asOresBlock(), ore.asOresBlock(), [
            ore.asClump().withChance(1).withRolls(ore.multiplyRate, ore.multiplyRate),
            ore.asNugget().withChance(0.1).withRolls(ore.multiplyRate, ore.multiplyRate),
        ])
    })

    GemOre.forEach(ore => {
        addOreBotanyRecipe(ore, ore.asGem(), ore.asBlock(), [
            ore.asGem().withChance(1).withRolls(ore.multiplyRate, ore.multiplyRate),
        ])
    })

    MiscOre.forEach(ore => {
        addOreBotanyRecipe(ore, ore.asBlock(), ore.asBlock(), [])
    })

    event.recipes.botanypots.soil(
        "kubejs:ore_core",
        { block: "minecraft:mossy_cobblestone" },
        ["ore_core"],
        60*20,
        1
    )
})


