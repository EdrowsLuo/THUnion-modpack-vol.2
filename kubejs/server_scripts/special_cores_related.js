

ServerEvents.recipes(event => {
    // pipez
    event.replaceInput({ mod: "pipez", not: { output: "pipez:improved_upgrade" } }, "minecraft:redstone", "kubejs:mechanical_core")


    // ender pearls
    const teleportation_core_replace = [
        "minecraft:ender_chest",
        "modularrouters:vacuum_module",
        "modularrouters:sender_module_2",
        "modularrouters:puller_module_2",
        "ae2:quantum_entangled_singularity",
        "ae2:fluix_pearl",
        "entangled:block",
        "entangled:item",
        "travelanchors:travel_anchor",
        "travelanchors:travel_staff",
    ]

    teleportation_core_replace.forEach(e => {
        const flt = typeof e === 'string' ? { output: Ingredient.of(e) } : e
        event.replaceInput(
            flt,
            "minecraft:ender_eye",
            "mekanism:teleportation_core")

        event.replaceInput(
            flt,
            { tag: "forge:ender_pearls" },
            "mekanism:teleportation_core")
    })

    event.remove({ id: "ae2:transform/entangled_singularity" })
    event.remove({ id: "ae2:transform/entangled_singularity_from_pearl" })

    event.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "explosion"
        },
        "ingredients": [
            {
                "item": "ae2:singularity"
            },
            {
                "item": "mekanism:teleportation_core"
            }
        ],
        "result": {
            "count": 2,
            "item": "ae2:quantum_entangled_singularity"
        }
    })

    // create
    event.replaceInput({ output: "create:empty_blaze_burner" }, "minecraft:netherrack", "ars_nouveau:ritual_containment")

    modifyUnique(event, "create:crushing_wheel", {
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "A": {
                "item": "alltheores:steel_ingot"
            },
            "P": {
                "tag": "minecraft:planks"
            },
            "S": {
                "item": "l2complements:explosion_shard"
            }
        },
        "pattern": [
            " AAA ",
            "AAPAA",
            "APSPA",
            "AAPAA",
            " AAA "
        ],
        "result": {
            "count": 4,
            "item": "create:crushing_wheel"
        }
    })


    // AE
    modifyUnique(event, "ae2:crafting_unit", {
        "type": "minecraft:crafting_shaped",
        "key": {
            "a": {
                "tag": "forge:ingots/iron"
            },
            "b": {
                "item": "ae2:calculation_processor"
            },
            "c": {
                "item": "ae2:fluix_glass_cable"
            },
            "d": {
                "item": "ae2:logic_processor"
            },
            "e": {
                "item": "kubejs:craft_core"
            }
        },
        "pattern": [
            "abe",
            "cdc",
            "eba"
        ],
        "result": {
            "item": "4x ae2:crafting_unit"
        }
    })

    modifyUnique(event, "ae2:molecular_assembler", {
        "type": "minecraft:crafting_shaped",
        "key": {
            "a": {
                "tag": "forge:ingots/iron"
            },
            "b": {
                "item": "ars_nouveau:wixie_charm"
            },
            "c": {
                "item": "ae2:annihilation_core"
            },
            "d": {
                "item": "minecraft:crafting_table"
            },
            "e": {
                "item": "ae2:formation_core"
            },
            "f": {
                "item": "kubejs:craft_core"
            }
        },
        "pattern": [
            "abf",
            "cde",
            "fba"
        ],
        "result": {
            "item": "ae2:molecular_assembler",
            "count": 8
        }
    })

    modifyUnique(event, "ae2:me_p2p_tunnel", {
        "type": "minecraft:crafting_shaped",
        "key": {
            "a": {
                "tag": "forge:ingots/iron"
            },
            "b": {
                "item": "ae2:engineering_processor"
            },
            "c": {
                "tag": "ae2:all_fluix"
            },
            "d": {
                "item": "mekanism:teleportation_core"
            }
        },
        "pattern": [
            " a ",
            "aba",
            "cdc"
        ],
        "result": {
            "item": "ae2:me_p2p_tunnel",
            "count": 2
        }
    })
})
