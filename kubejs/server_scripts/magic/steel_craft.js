

ServerEvents.recipes(event => {
    event.recipes.minecraft.blasting("gtceu:wrought_iron_ingot", "minecraft:iron_ingot")
    event.recipes.ars_nouveau.imbuement("gtceu:wrought_iron_ingot", "alltheores:steel_ingot", 1000, ["minecraft:milk_bucket", "minecraft:coal"])
    event.recipes.ars_nouveau.imbuement("gtceu:wrought_iron_block", "9x alltheores:steel_ingot", 8000, ["minecraft:milk_bucket", "minecraft:coal"])

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:milk_bucket", "minecraft:coal", "ars_nouveau:fire_essence", "ars_nouveau:fire_essence"],
        ["allthecompressed:iron_block_1x"],
        "allthecompressed:steel_block_1x",
        10000
    )

})
