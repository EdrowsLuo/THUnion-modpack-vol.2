

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
})
