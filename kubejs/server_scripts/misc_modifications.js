

ServerEvents.recipes(event => {
    modifyUnique(event, "minecraft:ender_eye", {
      "type": "minecraft:crafting_shapeless",
      "category": "misc",
      "ingredients": [
        {
          "item": "minecraft:ender_pearl"
        },
        {
          "item": "minecraft:blaze_powder"
        },
        {
            "item": "minecraft:end_stone"
        }
      ],
      "result": {
        "item": "minecraft:ender_eye"
      }
    })

    banAll(event, ["modularrouters:player_module", "apotheosis:treasure_shelf"])

    event.remove({"type": "pneumaticcraft:pressure_chamber_enchanting"})
})

BlockEvents.rightClicked("the_bumblezone:crystalline_flower", event => {
  event.cancel()
})