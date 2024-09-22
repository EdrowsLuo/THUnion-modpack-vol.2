

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
})

