
StartupEvents.registry("item", event => {
    const incomplete_items = [
        // "incomplete_protection",
        // "incomplete_sharpness",
        // "incomplete_power",
        // "incomplete_fortune",
        // "incomplete_looting"
    ]
    incomplete_items.forEach(core => {
        event.create(`kubejs:${core}`).texture("minecraft:enchanted_book")
            .tooltip(Component.translate(`item.kubejs.${core}.desc`))
    });

})