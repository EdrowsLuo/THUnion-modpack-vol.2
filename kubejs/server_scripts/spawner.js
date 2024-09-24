
ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.enchantment(
        [
            "pneumaticcraft:empty_spawner",
            "pneumaticcraft:spawner_extractor",
            "pneumaticcraft:spawner_agitator",
            "minecraft:chicken_spawn_egg",
            "ars_nouveau:source_gem_block",
            "l2complements:life_essence"
        ],
        "minecraft:silk_touch",
        2,
        20000
    )

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

    /** @param {Internal.Item_} mainhand */
    function modifySpawner(mainhand, stat_change, stat_change_inverted) {
        event.custom({
            "type": "apotheosis:spawner_modifier",
            "conditions": [
                {
                    "type": "apotheosis:module",
                    "module": "spawner"
                }
            ],
            "mainhand": {
                "item": mainhand
            },
            "offhand": {
                "item": "alexscaves:pure_darkness"
            },
            "consumes_offhand": true,
            "stat_changes": [
                stat_change
            ]
        })

        event.custom({
            "type": "apotheosis:spawner_modifier",
            "conditions": [
                {
                    "type": "apotheosis:module",
                    "module": "spawner"
                }
            ],
            "mainhand": {
                "item": mainhand
            },
            "offhand": {
                "item": "supplementaries:soap"
            },
            "consumes_offhand": false,
            "stat_changes": [
                stat_change_inverted
            ]
        })
    }

    /** @param {Internal.Item_} mainhand */
    function modifySpawnerBoolean(mainhand, id, defaultValue) {
        modifySpawner(mainhand, { "id": id, "value": !defaultValue }, { "id": id, "value": defaultValue })
    }

    /** @param {Internal.Item_} mainhand */
    function modifySpawnerInt(mainhand, id, value, from, to) {
        if (value > 0) {
            modifySpawner(
                mainhand,
                { "id": id, "value": value, "min": -1, "max": to },
                { "id": id, "value": -value, "min": from, "max": -1 }
            )
        } else {
            modifySpawner(
                mainhand,
                { "id": id, "value": value, "min": from, "max": -1 },
                { "id": id, "value": -value, "min": -1, "max": to }
            )
        }
    }

    event.remove({ "type": "apotheosis:spawner_modifier" })
    modifySpawnerBoolean("minecraft:poisonous_potato", "baby", false)
    modifySpawnerBoolean("draconicevolution:celestial_manipulator", "ignore_conditions", false)
    modifySpawnerBoolean("torchmaster:feral_flare_lantern", "ignore_light", false)
    modifySpawnerBoolean("minecraft:player_head", "ignore_players", false)
    modifySpawnerInt("ars_nouveau:manipulation_essence", "max_delay", -10, 80, -1)
    modifySpawnerInt("ars_nouveau:ritual_containment", "max_nearby", 2, 1, 32)
    modifySpawnerInt("ars_nouveau:air_essence", "min_delay", -10, 80, -1)
    modifySpawnerBoolean("ars_elemental:anima_essence", "no_ai", false)
    modifySpawnerInt("pneumaticcraft:range_upgrade", "player_range", 2, 1, 48)
    modifySpawnerBoolean("advancedperipherals:redstone_integrator", "redstone_control", false)
    modifySpawnerBoolean("modularrouters:muffler_upgrade", "silent", false)
    modifySpawnerInt("modularrouters:stack_augment", "spawn_count", 1, 1, 16)
    modifySpawnerInt("create:encased_fan", "spawn_range", 1, 1, 16)
})
