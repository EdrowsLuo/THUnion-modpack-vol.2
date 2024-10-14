const $FarmingForBlockheadsAPI = Java.loadClass('net.blay09.mods.farmingforblockheads.api.FarmingForBlockheadsAPI')


ForgeEvents.onEvent('net.blay09.mods.farmingforblockheads.api.MarketRegistryReloadEvent$Post', event => {
    
    function MarketCategory(category) {
        this.category = category
    }

    /**
     * @param {Internal.Item_} input
     * @param {Internal.Item_[]} items
     */
    MarketCategory.prototype.add = function(input, items) {
        items.forEach(item => {
            $FarmingForBlockheadsAPI.registerMarketEntry(item, input, this.category)
        })
    }

    let saplings = new MarketCategory($FarmingForBlockheadsAPI.getMarketCategorySaplings())
    let seeds = new MarketCategory($FarmingForBlockheadsAPI.getMarketCategorySeeds())
    let flowers = new MarketCategory($FarmingForBlockheadsAPI.getMarketCategoryFlowers())

    seeds.add(
        "minecraft:diamond",
        [
        "farmersdelight:onion", 
        "farmersdelight:wild_beetroots", 
        "farmersdelight:wild_cabbages", 
        "farmersdelight:wild_carrots", 
        "farmersdelight:wild_onions",
        "farmersdelight:wild_potatoes",
        "farmersdelight:wild_rice",
        "farmersdelight:wild_tomatoes",
        "ars_nouveau:sourceberry_bush",
        "minecraft:glow_berries",
        "minecraft:sweet_berries"
        ]
    )

    saplings.add(
        "minecraft:diamond",
        [
        "ars_nouveau:red_archwood_sapling",
        "ars_nouveau:blue_archwood_sapling",
        "ars_nouveau:green_archwood_sapling",
        "ars_nouveau:purple_archwood_sapling",
        "ars_elemental:yellow_archwood_sapling"
        ]
    )

    flowers.add("minecraft:wither_skeleton_skull", ["minecraft:wither_rose"])
    
})
