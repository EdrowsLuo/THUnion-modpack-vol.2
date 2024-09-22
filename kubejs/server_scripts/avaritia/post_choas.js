/**
 * 在混沌龙后解锁大合成
 */

ServerEvents.recipes(event => {
    modifyUnique(event, "avaritia:extreme_crafting_table", {
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "x": {
          "item": "avaritia:crystal_matrix"
        },
        "y": {
          "item": "draconicevolution:chaotic_crafting_injector"
        }
      },
      "pattern": [
        "xxx",
        "xyx",
        "xxx"
      ],
      "result": {
        "item": "avaritia:extreme_crafting_table"
      },
      "show_notification": true
    })
})