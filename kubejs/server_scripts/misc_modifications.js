

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

  event.remove({ "type": "pneumaticcraft:pressure_chamber_enchanting" })

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

  event.replaceInput({ output: "modularrouters:blank_module" }, "minecraft:redstone", "kubejs:mechanical_core")
  event.replaceInput({ output: "modularrouters:blank_upgrade" }, "minecraft:lapis_lazuli", "kubejs:mechanical_core")

  modifyUnique(event, "modularrouters:modular_router", {
    "type": "minecraft:crafting_shaped",
    "key": {
      "B": {
        "item": "minecraft:iron_bars"
      },
      "I": {
        "tag": "forge:ingots/iron"
      },
      "M": {
        "item": "modularrouters:blank_module"
      },
      "C": {
        "item": "kubejs:craft_core"
      }
    },
    "pattern": [
      "IBI",
      "MCM",
      "IBI"
    ],
    "result": {
      "item": "modularrouters:modular_router"
    }
  })

  event.replaceInput({ "mod": "immersive_aircraft" }, "minecraft:iron_ingot", "#forge:ingots/steel")

  event.replaceInput({ "mod": "ironfurnaces" }, "allthemodium:allthemodium_block", "allthemodium:allthemodium_ingot")
  event.replaceInput({ "mod": "ironfurnaces" }, "allthemodium:vibranium_block", "allthemodium:vibranium_ingot")
  event.replaceInput({ "mod": "ironfurnaces" }, "allthemodium:unobtainium_block", "allthemodium:unobtainium_ingot")

  event.recipes.create.emptying(["minecraft:glass_bottle", Fluid.of("gtceu:radon").withAmount(250)], "alexscaves:radon_bottle")
  event.recipes.create.filling("alexscaves:radon_bottle", ["minecraft:glass_bottle", Fluid.of("gtceu:radon").withAmount(250)])

  modifyUnique(event, "advanced_ae:quantum_unit", {
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "a": {
        "item": "ae2:crafting_unit"
      },
      "b": {
        "item": "ae2:calculation_processor"
      },
      "c": {
        "item": "ae2:fluix_glass_cable"
      },
      "d": {
        "item": "gtceu:quantum_star"
      }
    },
    "pattern": [
      "aba",
      "cdc",
      "aba"
    ],
    "result": {
      "item": "advanced_ae:quantum_unit"
    },
    "show_notification": true
  })

  event.recipes.minecraft.crafting_shaped(
    "2x alexscaves:ferrouslime_ball", 
    [
      "SIS",
      "IFI",
      "SIS"
    ],{
      "S": "minecraft:slime_block",
      "I": {
        "tag": "forge:storage_blocks/steel"
      },
      "F": "alexscaves:ferrouslime_ball"
    })
})

LootJS.modifiers((event) => {
  event.addLootTableModifier(/.*/).removeLoot("tombstone:soul_receptacle");
});

EntityEvents.spawned("minecraft:item", event => {
  if(event.entity.item.id == "tombstone:soul_receptacle") {
    event.cancel()
  }
})