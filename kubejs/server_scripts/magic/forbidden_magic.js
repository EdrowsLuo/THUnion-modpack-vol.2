

ServerEvents.recipes(event => {

    modifyUnique(event, "utilitix:mob_yoinker", {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "C": {
                "item": "minecraft:copper_ingot"
            },
            "I": {
                "item": "minecraft:iron_bars"
            },
            "L": {
                "item": "alexscaves:pure_darkness"
            }
        },
        "pattern": [
            "CIC",
            "ILI",
            "III"
        ],
        "result": {
            "item": "utilitix:mob_yoinker"
        },
        "show_notification": true
    })

    modifyUnique(event, "ars_nouveau:mob_jar", {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "x": {
                "tag": "forge:glass"
            },
            "y": {
                "item": "ars_nouveau:archwood_slab"
            },
            "D": {
                "item": "alexscaves:pure_darkness"
            }
        },
        "pattern": [
            "yDy",
            "x x",
            "xxx"
        ],
        "result": {
            "item": "ars_nouveau:mob_jar"
        },
        "show_notification": true
    })

    modifyUnique(event, "ars_nouveau:drygmy_charm", {
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "output": {
            "item": "ars_nouveau:drygmy_charm"
        },
        "pedestalItems": [
            {
                "tag": "minecraft:fishes"
            },
            {
                "item": "minecraft:wheat"
            },
            {
                "item": "minecraft:apple"
            },
            {
                "item": "minecraft:carrot"
            },
            {
                "tag": "forge:seeds"
            },
            {
                "item": "ars_nouveau:source_gem_block"
            },
            {
                "item": "alexscaves:pure_darkness"
            },
            {
                "item": "alexscaves:pure_darkness"
            },
            {
                "item": "alexscaves:pure_darkness"
            }
        ],
        "reagent": [
            {
                "item": "ars_nouveau:drygmy_shard"
            }
        ],
        "sourceCost": 10000
    })

    modifyUnique(event, "pneumaticcraft:spawner_extractor", {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": {
                "item": "pneumaticcraft:spawner_agitator"
            },
            "I": {
                "item": "alexscaves:pure_darkness"
            },
            "O": {
                "tag": "forge:obsidian"
            },
            "P": {
                "item": "pneumaticcraft:drill_pipe"
            },
            "T": {
                "item": "pneumaticcraft:pressure_tube"
            },
            "W": {
                "item": "pneumaticcraft:pressure_chamber_wall"
            }
        },
        "pattern": [
            "ITI",
            "WAW",
            "OPO"
        ],
        "result": {
            "item": "pneumaticcraft:spawner_extractor"
        },
        "show_notification": true
    })

    modifyUnique(event, "hostilenetworks:blank_data_model", {
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "LPL",
            "RSR",
            "LGL"
        ],
        "key": {
            "L": {
                "item": "minecraft:clay_ball"
            },
            "P": {
                "item": "minecraft:repeater"
            },
            "R": {
                "tag": "forge:dusts/redstone"
            },
            "S": {
                "item": "alexscaves:pure_darkness"
            },
            "G": {
                "tag": "forge:ingots/gold"
            }
        },
        "result": {
            "item": "hostilenetworks:blank_data_model"
        }
    })

    modifyUnique(event, "hostilenetworks:sim_chamber", {
        "type": "minecraft:crafting_shaped",
        "pattern": [
            " P ",
            "EOE",
            "LCL"
        ],
        "key": {
            "P": {
                "item": "ars_nouveau:drygmy_charm"
            },
            "E": {
                "item": "minecraft:ender_pearl"
            },
            "O": {
                "item": "pneumaticcraft:spawner_agitator"
            },
            "L": {
                "tag": "forge:gems/lapis"
            },
            "C": {
                "item": "minecraft:comparator"
            }
        },
        "result": {
            "item": "hostilenetworks:sim_chamber"
        }
    })

    modifyUnique(event, "hostilenetworks:loot_fabricator", {
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "1P2",
            "EOE",
            "3C4"
        ],
        "key": {
            "P": {
                "tag": "forge:ingots/netherite"
            },
            "E": {
                "tag": "forge:gems/diamond"
            },
            "O": {
                "item": "pneumaticcraft:spawner_agitator"
            },
            "C": {
                "item": "minecraft:comparator"
            },
            "1": "hostilenetworks:overworld_prediction",
            "2": "hostilenetworks:nether_prediction",
            "3": "hostilenetworks:end_prediction",
            "4": "hostilenetworks:twilight_prediction",
        },
        "result": {
            "item": "hostilenetworks:loot_fabricator"
        }
    })

    modifyUnique(event, "hostilenetworks:prediction_matrix", {
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "BGB",
            "GLG",
            "BGB"
        ],
        "key": {
            "G": {
                "item": "ae2:matter_ball"
            },
            "L": {
                "item": "minecraft:dragon_egg"
            },
            "B": {
                "item": "starbunclemania:source_fluid_bucket"
            }
        },
        "result": {
            "item": "hostilenetworks:prediction_matrix",
            "count": 64
        }
    })

    modifyUnique(event, "mob_grinding_utils:saw", {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "D": {
                "tag": "forge:gems/diamond"
            },
            "I": {
                "tag": "forge:storage_blocks/iron"
            },
            "R": {
                "item": "allthemodium:allthemodium_sword"
            },
            "S": {
                "item": "minecraft:iron_sword"
            },
            "V": {
                "item": "mob_grinding_utils:spikes"
            }
        },
        "pattern": [
            "SDS",
            "VRV",
            "DID"
        ],
        "result": {
            "item": "mob_grinding_utils:saw"
        },
        "show_notification": true
    })
})
