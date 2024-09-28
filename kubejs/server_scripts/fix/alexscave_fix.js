EntityEvents.checkSpawn("alexscaves:magnetron", event => {
    event.cancel()
})

EntityEvents.spawned("alexscaves:magnetron", event => {
    event.cancel()
})

ServerEvents.recipes(event => {
    event.recipes.minecraft.crafting_shaped(
        "alexscaves:heart_of_iron",
        [
            "III",
            "IBI",
            "III"
        ],
        {
            "I": "minecraft:iron_ingot",
            "B": "alexscaves:tesla_bulb"
        }
    )
})