

ServerEvents.recipes(event => {
    modifyUnique(event, "draconicevolution:crafting_core", {
      "type": "minecraft:crafting_shaped",
      "key": {
        "A": {
          "item": "kubejs:golden_sweet_berries"
        },
        "B": {
          "tag": "forge:gems/diamond"
        },
        "C": {
          "item": "draconicevolution:draconium_core"
        }
      },
      "pattern": [
        "ABA",
        "BCB",
        "ABA"
      ],
      "result": {
        "item": "draconicevolution:crafting_core"
      }
    })
})

