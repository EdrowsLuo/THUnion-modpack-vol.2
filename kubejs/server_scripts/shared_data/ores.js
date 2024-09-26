// priority: 100

/**
 * @param {Internal.Item_} modId
 * @param {string} oreId 
 * @param {number} rarity 用于决定生成矿物的比例或者植物盆里的生长时间。越高越常见。
 */
function OreType(modId, oreId, rarity, growTime, multiplyRate) {
    this.modId = modId
    this.oreId = oreId
    this.rarity = rarity
    this.growTime = growTime
    this.multiplyRate = multiplyRate
    /**
     * @type {Internal.ItemStack_[]}
     */
    this.customExport = []
}

/**
 * 
 * @param {Internal.ItemStack_[]} customExport 
 */
OreType.prototype.withCustomExport = function(customExport) {
    this.customExport = customExport
    return this
}

OreType.prototype.asGem = function() {
    return Item.of(`#forge:gems/${this.oreId}`)
}

OreType.prototype.asDust = function() {
    return Item.of(`#forge:dusts/${this.oreId}`)
}

OreType.prototype.asBlock = function() {
    return Item.of(`#forge:storage_blocks/${this.oreId}`)
}

OreType.prototype.asIngot = function() {
    return Item.of(`#forge:ingots/${this.oreId}`)
}

OreType.prototype.asNugget = function() {
    return Item.of(`#forge:nuggets/${this.oreId}`)
}

OreType.prototype.asClump = function() {
    return Item.of(`#mekanism:clumps/${this.oreId}`)
}

OreType.prototype.asOresBlock = function() {
    return Item.of(`${this.modId}:${this.oreId}_ore`)
}

OreType.prototype.asSingularity = function() {
    return Item.of(`avaritia:singularity`).withNBT({"id": `avaritia:${this.oreId}`})
}


/**
 * @type {OreType[]}
 */
const MetalOre = [
    new OreType("minecraft", "iron", 100, 60*2, 1),
    new OreType("minecraft", "copper", 100, 60*2, 2),
    new OreType("minecraft", "gold", 70, 60*2 + 30, 1),
    new OreType("alltheores", "aluminum", 30, 60*4, 1),
    new OreType("alltheores", "lead", 30, 60*4, 1),
    new OreType("alltheores", "nickel", 30, 60*4, 1),
    new OreType("alltheores", "osmium", 50, 60*3, 1),
    new OreType("alltheores", "platinum", 10, 60*7, 1),
    new OreType("alltheores", "silver", 30, 60*4, 1),
    new OreType("alltheores", "tin", 30, 60*4, 1),
    new OreType("alltheores", "uranium", 15, 60*6, 1),
    new OreType("alltheores", "zinc", 60, 60*4, 1),
    new OreType("alltheores", "iridium", 5, 60*8, 1)
]

/**
 * @type {OreType[]}
 */
const GemOre = [
    new OreType("minecraft", "coal", 100, 60*2, 4),
    new OreType("minecraft", "lapis", 80, 60*2, 2),
    new OreType("minecraft", "diamond", 40, 60*4, 1),
    new OreType("alltheores", "ruby", 80, 60*2, 2),
    new OreType("mekanism", "fluorite", 80, 60*2, 6)
]

/**
 * @type {OreType[]}
 */
const MiscOre = [
    new OreType("minecraft", "redstone", 80, 60*2, 8).withCustomExport([
        Item.of("#forge:dusts/redstone").withChance(1).withRolls(8, 16),
        Item.of("#forge:gems/redstone").withChance(0.05).withRolls(1,2)])
]

const AllOre = MetalOre.concat(GemOre)

ServerEvents.recipes(events => {
    MetalOre.forEach(ore => {
        console.log(`${ore.oreId}: asBlock[${ore.asBlock().getId()}]`)
        console.log(`${ore.oreId}: asIngot[${ore.asBlock().getId()}]`)
        console.log(`${ore.oreId}: asNugget[${ore.asBlock().getId()}]`)
        console.log(`${ore.oreId}: asClump[${ore.asClump().getId()}]`)
        console.log(`${ore.oreId}: asOresBlock[${ore.asOresBlock().getId()}]`)
    })
})
