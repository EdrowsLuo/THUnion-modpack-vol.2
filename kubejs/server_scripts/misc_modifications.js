

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
    banAll(event, ["l2complements:totem_of_dream", "l2complements:eternal_totem_of_dream", "l2complements:totem_of_the_sea", "ars_nouveau:thread_undying"])
    banAll(event, ["mob_grinding_utils:mob_swab", "mob_grinding_utils:mob_swab_used", "mob_grinding_utils:gm_chicken_feed", "mob_grinding_utils:gm_chicken_feed_cursed"])

    event.remove({"type": "pneumaticcraft:pressure_chamber_enchanting"})

    event.remove({ "id": "allthemodium:allthemodium_sword" })
    event.remove({ "id": "allthemodium:allthemodium_axe" })
    event.remove({ "id": "allthemodium:allthemodium_hoe" })
    event.remove({ "id": "allthemodium:allthemodium_pickaxe" })
    event.remove({ "id": "allthemodium:allthemodium_shovel" })
    banAll(event, [
      "allthemodium:vibranium_sword", 
      "allthemodium:vibranium_axe", 
      "allthemodium:vibranium_hoe", 
      "allthemodium:vibranium_pickaxe",
      "allthemodium:vibranium_shovel",
      "allthemodium:unobtainium_sword", 
      "allthemodium:unobtainium_axe", 
      "allthemodium:unobtainium_hoe", 
      "allthemodium:unobtainium_pickaxe",
      "allthemodium:unobtainium_shovel",
    ])
})

BlockEvents.rightClicked("the_bumblezone:crystalline_flower", event => {
  event.cancel()
})