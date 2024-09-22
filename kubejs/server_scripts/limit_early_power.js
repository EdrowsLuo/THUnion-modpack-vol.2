
const energized_galena_neutral = "alexscaves:energized_galena_neutral"
const telecore = "alexscaves:telecore"
const tesla_bulb = "alexscaves:tesla_bulb"

ServerEvents.recipes(event => {
    modifyUnique(event, "ironfurnaces:augment_generator", {
      "type": "crafting_shaped",
      "pattern": [
        "#R#",
        "PXP",
        "#R#"
      ],
      "key": {
        "#": {
          "tag": "forge:stone"
        },
        "P": {
          "item": "minecraft:paper"
        },
        "R": {
          "tag": "forge:dusts/redstone"
        },
        "X": {
          "item": energized_galena_neutral
        }
      },
      "result": {
        "item": "ironfurnaces:augment_generator"
      }
    })

    modifyUnique(event, "mekanismgenerators:heat_generator", {
      "type": "minecraft:crafting_shaped",
      "key": {
        "C": {
          "tag": "forge:ingots/copper"
        },
        "F": {
          "item": "minecraft:furnace"
        },
        "I": {
          "tag": "forge:ingots/iron"
        },
        "O": {
          "item": energized_galena_neutral
        },
        "W": {
          "tag": "minecraft:planks"
        }
      },
      "pattern": [
        "III",
        "WOW",
        "CFC"
      ],
      "result": {
        "item": "mekanismgenerators:heat_generator"
      }
    })

    modifyUnique(event, "mekanismgenerators:solar_generator", {
      "type": "minecraft:crafting_shaped",
      "key": {
        "#": {
          "item": "mekanismgenerators:solar_panel"
        },
        "A": {
          "tag": "mekanism:alloys/infused"
        },
        "E": {
          "item": "mekanism:energy_tablet"
        },
        "I": {
          "item": energized_galena_neutral
        },
        "O": {
          "tag": "forge:ingots/osmium"
        }
      },
      "pattern": [
        "###",
        "AIA",
        "OEO"
      ],
      "result": {
        "item": "mekanismgenerators:solar_generator"
      }
    })

    modifyUnique(event, "mekanismgenerators:wind_generator", {
      "type": "mekanism:mek_data",
      "key": {
        "A": {
          "item": telecore
        },
        "C": {
          "tag": "forge:circuits/basic"
        },
        "E": {
          "item": "mekanism:energy_tablet"
        },
        "O": {
          "tag": "forge:ingots/osmium"
        }
      },
      "pattern": [
        " O ",
        "OAO",
        "ECE"
      ],
      "result": {
        "item": "mekanismgenerators:wind_generator"
      }
    })

    event.remove({ output: "mekanismgenerators:bio_generator" })
    event.remove({ output: "mekanismgenerators:gas_burning_generator"})
    
    modifyUnique(event, "mekanism:metallurgic_infuser", {
      "type": "minecraft:crafting_shaped",
      "key": {
        "#": {
          "item": "minecraft:furnace"
        },
        "I": {
          "tag": "forge:ingots/iron"
        },
        "O": {
          "item": telecore
        },
        "R": {
          "tag": "forge:dusts/redstone"
        }
      },
      "pattern": [
        "I#I",
        "ROR",
        "I#I"
      ],
      "result": {
        "item": "mekanism:metallurgic_infuser"
      }
    })

    event.remove({ output: "createaddition:alternator" })

    modifyUnique(event, "draconicevolution:generator", {
      "type": "minecraft:crafting_shaped",
      "key": {
        "A": {
          "tag": "forge:ingots/nether_brick"
        },
        "B": {
          "tag": "forge:ingots/iron"
        },
        "C": {
          "item": "minecraft:furnace"
        },
        "D": {
          "item": tesla_bulb
        }
      },
      "pattern": [
        "ABA",
        "BCB",
        "ADA"
      ],
      "result": {
        "item": "draconicevolution:generator"
      }
    })

    modifyUnique(event, "create_new_age:generator_coil", {
      "type": "minecraft:crafting_shaped",
      "category": "building",
      "key": {
        "c": {
          "item": "minecraft:copper_ingot"
        },
        "a": {
          "item": "create:andesite_alloy_block"
        },
        "E": {
          "item": energized_galena_neutral
        }
      },
      "pattern": [
        "cEc",
        "EaE",
        "cEc"
      ],
      "result": {
        "count": 1,
        "item": "create_new_age:generator_coil"
      },
      "show_notification": true
    })

    modifyUnique(event, "mekanism:digital_miner", {
      "type": "minecraft:crafting_shaped",
      "key": {
        "A": {
          "tag": "mekanism:alloys/atomic"
        },
        "C": {
          "tag": "forge:circuits/basic"
        },
        "R": {
          "item": "alexscaves:quarry_smasher"
        },
        "S": {
          "item": "mekanism:logistical_sorter"
        },
        "T": {
          "item": "mekanism:teleportation_core"
        },
        "X": {
          "item": "alexscaves:quarry"
        }
      },
      "pattern": [
        "ACA",
        "SRS",
        "TXT"
      ],
      "result": {
        "item": "mekanism:digital_miner"
      }
    })

    modifyUnique(event, "fluxnetworks:basic_flux_storage", {
      "type": "minecraft:crafting_shaped",
      "group": "fluxnetworks",
      "pattern": [
        "bbb",
        "gPg",
        "bbb"
      ],
      "key": {
        "b": {
          "item": "fluxnetworks:flux_block"
        },
        "g": {
          "tag": "forge:glass_panes"
        },
        "P": "createaddition:modular_accumulator"
      },
      "result": {
        "item": "fluxnetworks:basic_flux_storage"
      }
    })

    modifyUnique(event, "fluxnetworks:flux_core", {
      "type": "minecraft:crafting_shaped",
      "group": "fluxnetworks",
      "pattern": [
        "fof",
        "oeo",
        "fof"
      ],
      "key": {
        "o": {
          "item": "minecraft:obsidian"
        },
        "f": {
          "item": "fluxnetworks:flux_dust"
        },
        "e": {
          "item": energized_galena_neutral
        }
      },
      "result": {
        "item": "fluxnetworks:flux_core",
        "count": 4
      }
    })

    modifyUnique(event, "fluxnetworks:flux_controller", {
      "type": "minecraft:crafting_shaped",
      "group": "fluxnetworks",
      "pattern": [
        "bcb",
        "f f",
        "bbb"
      ],
      "key": {
        "c": {
          "item": tesla_bulb
        },
        "b": {
          "item": "fluxnetworks:flux_block"
        },
        "f": {
          "item": "fluxnetworks:flux_dust"
        }
      },
      "result": {
        "item": "fluxnetworks:flux_controller"
      }
    })

    event.remove({ type: "mekanism:metallurgic_infusing", output: "alltheores:steel_dust" })
    event.remove({ id: "alltheores:steel_dust_from_alloy_blending" })
    event.remove({ id: "mekanism:metallurgic_infusing/allthecompressed/iron/1x_to_1x_steel" })
    event.remove({ id: "gtceu:electric_blast_furnace/steel_from_iron" })
    event.remove({ id: "gtceu:electric_blast_furnace/steel_from_wrought_iron" })
    event.remove({ type: "gtceu:primitive_blast_furnace" })
})
