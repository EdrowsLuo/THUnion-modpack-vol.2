
StartupEvents.registry("item", event => {
    const special_cores = [
        "ore_core",
        "mechanical_core",
        "craft_core",
        "battle_core",
        "treasure_core",
        "growth_core",
        "singular_storage_2",
        "singular_storage_16",
        "singular_storage_128"
    ]
    special_cores.forEach(core => {
        event.create(`kubejs:${core}`).texture("kubejs:item/" + core)
            .tooltip(Component.translate(`item.kubejs.${core}.desc`))
            .glow(true)
    });

    event.create(`kubejs:ore_core_uncompleted`).texture("kubejs:item/ore_core_uncompleted")
        .tooltip(Component.translate(`item.kubejs.ore_core_uncompleted.desc`))

    event.create("kubejs:golden_sweet_berries").texture("kubejs:item/golden_sweet_berries")
       .tooltip(Component.translate(`item.kubejs.golden_sweet_berries.desc`).gold())
       .glow(true)
})