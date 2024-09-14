ServerEvents.recipes(event => {
    event.remove({ type: "gtceu:arc_furnace" })
    event.smelting("gtceu:annealed_copper_ingot", "minecraft:copper_ingot")
})