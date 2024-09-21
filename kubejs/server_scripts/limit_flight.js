

/**
 * 用于限制飞行能力
 * 1. 飞行药水
 * 2. 新生魔艺飞行之板
 * 永久飞行类
 * 3. 龙研飞行模块
 * 4. 飞仙戒指
 * 5. 飞行药水护符神化100级灌注（巨龙书架限制在龙研后）
 */


ServerEvents.recipes(event => {
    event.remove({"output": "ars_nouveau:ritual_flight"})
    event.custom({
      "type": "minecraft:crafting_shapeless",
      "category": "misc",
      "ingredients": [
        {
          "item": "ars_nouveau:purple_archwood_log"
        },
        {
          "item": "ars_nouveau:wilden_wing"
        },
        {
          "item": "ars_nouveau:wilden_wing"
        },
        {
          "item": "ars_nouveau:wilden_wing"
        },
        {
          "tag": "forge:gems/diamond"
        },
        {
          "tag": "forge:gems/diamond"
        },
        {
          "item": "minecraft:ender_pearl"
        },
        {
            "item": "minecraft:popped_chorus_fruit"
        },
        {
            "item": "l2complements:storm_core"
        }
      ],
      "result": {
        "item": "ars_nouveau:ritual_flight"
      }
    })

    event.remove({ output: "celestial_artifacts:flight_ring" })
    event.custom({
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "conditions": [
        {
          "type": "l2library:boolean_config",
          "expected": true,
          "line": [
            "itemToggle",
            "flight_ring"
          ],
          "path": "celestial_configs/celestial_artifacts-common.toml"
        }
      ],
      "key": {
        "A": {
          "item": "celestial_artifacts:gold_ring"
        },
        "B": {
          "item": "minecraft:feather"
        },
        "C": {
          "item": "celestial_core:soaring_wings"
        },
        "F": {
            "item": "draconicevolution:item_draconic_flight"
        }
      },
      "pattern": [
        " C ",
        "BAB",
        " F "
      ],
      "result": {
        "item": "celestial_artifacts:flight_ring"
      },
      "show_notification": true
    })

    event.remove({ output: "apotheosis:endshelf" })
    event.custom({
      "type": "minecraft:crafting_shaped",
      "conditions": [
        {
          "type": "apotheosis:module",
          "module": "enchantment"
        }
      ],
      "group": "wooden_door",
      "pattern": [
        "EEE",
        "IBP",
        "EEE"
      ],
      "key": {
        "E": {
          "item": "minecraft:end_stone_bricks"
        },
        "I": {
          "item": "apotheosis:infused_breath"
        },
        "B": {
          "tag": "forge:bookshelves"
        },
        "P": {
          "item": "draconicevolution:awakened_draconium_ingot"
        }
      },
      "result": {
        "item": "apotheosis:endshelf",
        "count": 1
      }
    })
})

LootJS.modifiers((event) => {
    event.addLootTableModifier(/.*/).removeLoot("ars_nouveau:ritual_flight");
});

