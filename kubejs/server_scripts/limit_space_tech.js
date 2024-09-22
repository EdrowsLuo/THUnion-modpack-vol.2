
/**
 * 限制传送手段
 * 在获取传送核心前有效的传送方法只有传送卷轴和折跃卷轴（也就是一次性传送）
 * 
 * 限制空间技术
 * 主要是纸箱
 */

ServerEvents.recipes(event => {
    event.remove({ output: "draconicevolution:advanced_dislocator" })

    modifyUnique(event, "draconicevolution:dislocator", {
      "type": "minecraft:crafting_shaped",
      "key": {
        "A": {
          "item": "minecraft:blaze_powder"
        },
        "B": {
          "tag": "forge:dusts/draconium"
        },
        "C": {
          "item": "mekanism:teleportation_core"
        }
      },
      "pattern": [
        "ABA",
        "BCB",
        "ABA"
      ],
      "result": {
        "item": "draconicevolution:dislocator",
        "nbt": "{Damage:0}"
      }
    })

    modifyUnique(event, "waystones:warp_stone", {
      "result": {
        "item": "waystones:warp_stone"
      },
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "DED",
        "EGE",
        "DED"
      ],
      "key": {
        "G": {
          "item": "mekanism:teleportation_core"
        },
        "E": {
          "item": "minecraft:ender_pearl"
        },
        "D": {
          "item": "minecraft:amethyst_shard"
        }
      }
    })

    modifyUnique(event, "ars_nouveau:stable_warp_scroll", {
      "type": "ars_nouveau:enchanting_apparatus",
      "keepNbtOfReagent": true,
      "output": {
        "item": "ars_nouveau:stable_warp_scroll"
      },
      "pedestalItems": [
        {
          "item": "minecraft:blaze_powder"
        },
        {
          "item": "minecraft:blaze_powder"
        },
        {
          "item": "minecraft:blaze_powder"
        },
        {
          "item": "minecraft:blaze_powder"
        },
        {
          "item": "mekanism:teleportation_core"
        }
      ],
      "reagent": [
        {
          "item": "ars_nouveau:warp_scroll"
        }
      ],
      "sourceCost": 0
    })

    modifyUnique(event, "ars_nouveau:warp_scroll", {
      "type": "minecraft:crafting_shapeless",
      "category": "misc",
      "ingredients": [
        {
          "tag": "forge:gems/lapis"
        },
        {
          "tag": "forge:gems/lapis"
        },
        {
          "tag": "forge:gems/lapis"
        },
        {
          "tag": "forge:gems/lapis"
        },
        {
          "item": "ars_nouveau:blank_parchment"
        },
        {
          "tag": "forge:gems/source"
        },
        {
          "tag": "forge:gems/source"
        },
        {
          "tag": "forge:gems/source"
        },
        {
          "tag": "forge:gems/source"
        }
      ],
      "result": {
        "item": "8x ars_nouveau:warp_scroll"
      }
    })

    event.remove({ output: "mekanism:cardboard_box" })
})