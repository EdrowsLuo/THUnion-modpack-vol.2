// priority: 10

const TaCZ_Loaded = Platform.isLoaded("tacz")

if (TaCZ_Loaded) {
    console.log("检测到永恒枪械工坊")
}

if (TaCZ_Loaded) {
    ServerEvents.recipes(event => {
        modifyUnique(event, "tacz:gun_smith_table", {
            "type": "minecraft:crafting_shaped",
            "result": {
                "item": "tacz:gun_smith_table"
            },
            "pattern": [
                "LLL",
                "IBI",
                "I I"
            ],
            "key": {
                "L": {
                    "tag": "minecraft:logs"
                },
                "I": {
                    "tag": "forge:ingots/steel"
                },
                "B": {
                    "tag": "forge:storage_blocks/steel"
                }
            }
        })
    })

    LootJS.modifiers(event => {
        event.addEntityLootModifier("twilightforest:minoshroom")
        .addLoot(
            LootEntry.of(
                "tacz:modern_kinetic_gun",
                `{HasBulletInBarrel: 1b, GunFireMode: "AUTO", GunId: "tacz:cz75", GunCurrentAmmoCount: 16}`
            ),
            LootEntry.of(
                "tacz:ammo_box",
                `{AmmoCount: 180, Level: 0, AmmoId: "tacz:9mm"}`
            )
        ).randomChance(0.5)
    })
}