
StartupEvents.registry("item", event => {
    const special_cores = [
        "ore_core",
        "mechanical_core",
        "craft_core",
        "battle_core",
        "treasure_core",
    ]
    special_cores.forEach(core => {
        event.create(`kubejs:${core}`).texture("kubejs:item/" + core)
            .tooltip(Component.translate(`item.kubejs.${core}.desc`))
            .glow(true)
    });
})