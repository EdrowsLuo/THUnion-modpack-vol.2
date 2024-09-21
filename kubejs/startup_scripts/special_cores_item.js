
StartupEvents.registry("item", event => {
    const special_cores = [
        "ore_core",
        "mechanical_core",
        "craft_core",
        "distribution_core",
        "battle_core",
        "treasure_core",
    ]
    special_cores.forEach(core => {
        event.create(`kubejs:${core}`).texture("kubejs:item/" + core)
            .tooltip(Component.translate(`item.kubejs.${core}.desc`))
            .glow(true)
    });
    event.create("kubejs:uncompleted_distribution_core")
        .texture("kubejs:item/uncompleted_distribution_core")
        .tooltip(Component.translate(`item.kubejs.uncompleted_distribution_core.desc`))
        .glow(true)
        .unstackable()
})