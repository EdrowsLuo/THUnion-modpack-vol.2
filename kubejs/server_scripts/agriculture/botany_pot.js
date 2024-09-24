

ServerEvents.recipes(event => {
    _modifyPotRecipe(event)
    
    /**
     * 
     * @param {OreType} ore 
     * @param {Internal.Item_} seed 
     * @param {Internal.Item_} displayBlock
     * @param {Internal.ItemStack_[]} output 
     */
    function addOreBotanyRecipe(ore, seed, displayBlock, output) {
        event.recipes.botanypots.crop(
            seed,
            ["ore_core"],
            { block: displayBlock.getId() },
            output.concat(ore.customExport),
            ore.growTime*20,
            1
        )
    }


    MetalOre.forEach(ore => {
        addOreBotanyRecipe(ore, ore.asOresBlock(), ore.asOresBlock(), [
            ore.asClump().withChance(1).withRolls(ore.multiplyRate, ore.multiplyRate),
            ore.asNugget().withChance(0.1).withRolls(ore.multiplyRate, ore.multiplyRate),
        ])
    })

    GemOre.forEach(ore => {
        addOreBotanyRecipe(ore, ore.asGem(), ore.asBlock(), [
            ore.asGem().withChance(1).withRolls(ore.multiplyRate, ore.multiplyRate),
        ])
    })

    MiscOre.forEach(ore => {
        addOreBotanyRecipe(ore, ore.asBlock(), ore.asBlock(), [])
    })

    event.recipes.botanypots.soil(
        "kubejs:ore_core",
        { block: "minecraft:mossy_cobblestone" },
        ["ore_core"],
        60*20,
        1
    )
})

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
function _modifyPotRecipe(event) {
    event.remove({"mod": "botanypots", "type": "crafting_shaped"})
    event.remove({"mod": "botanypotstiers", "type": "crafting_shaped"})
    event.remove({"mod": "botanypots", "type": "crafting_shapeless"})
    event.remove({"mod": "botanypotstiers", "type": "crafting_shapeless"})
    event.custom({
      "type": "crafting_shaped",
      "pattern": [
        "SHS",
        "SPS",
        " S "
      ],
      "key": {
        "S": {
          "item": "minecraft:terracotta"
        },
        "P": {
          "item": "kubejs:growth_core"
        },
        "H": {
          "item": "minecraft:hopper"
        }
      },
      "result": {
        "item": "botanypots:terracotta_hopper_botany_pot",
        "count": 1
      }
    })

    event.custom({
      "type": "crafting_shaped",
      "pattern": [
        " E ",
        "IPI"
      ],
      "key": {
        "P": {
          "item": "botanypots:terracotta_hopper_botany_pot"
        },
        "I": {
          "item": "ars_nouveau:source_gem_block"
        },
        "E": {
          "item": "ars_nouveau:whirlisprig_shards"
        }
      },
      "result": {
        "item": "botanypotstiers:elite_terracotta_hopper_botany_pot",
        "count": 1
      }
    })

    event.custom({
      "type": "crafting_shaped",
      "pattern": [
        "HEH",
        "IPI"
      ],
      "key": {
        "P": {
          "item": "botanypotstiers:elite_terracotta_hopper_botany_pot"
        },
        "I": {
          "item": "ars_nouveau:ritual_flowering"
        },
        "E": {
          "item": "minecraft:nether_star"
        },
        "H": {
            "item": "ars_nouveau:ritual_harvest"
        }
      },
      "result": {
        "item": "botanypotstiers:ultra_terracotta_hopper_botany_pot",
        "count": 1
      }
    })

    event.custom({
      "type": "crafting_shaped",
      "pattern": [
        "GEG",
        "IPI"
      ],
      "key": {
        "P": {
          "item": "botanypotstiers:ultra_terracotta_hopper_botany_pot"
        },
        "I": {
          "item": "minecraft:netherite_block"
        },
        "E": {
          "item": "minecraft:enchanted_golden_apple"
        },
        "G": {
            "item": "pneumaticcraft:glycerol"
        }
      },
      "result": {
        "item": "botanypotstiers:creative_terracotta_hopper_botany_pot",
        "count": 1
      }
    })
}
