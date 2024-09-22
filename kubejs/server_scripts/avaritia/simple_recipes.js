/**
 * 简化一些配方，下放扩展合成和奇点合成
 */


ServerEvents.recipes(event => {
    modifyUnique(event, "avaritia:neutron_collector", {
        "type": "minecraft:crafting_shaped",
        "key": {
            "I": {
                "item": "minecraft:iron_block"
            },
            "R": {
                "item": "minecraft:redstone_block"
            },
            "C": {
                "item": "avaritia:crystal_matrix_ingot"
            }
        },
        "pattern": [
            "IRI",
            "RCR",
            "III"
        ],
        "result": {
            "item": "avaritia:neutron_collector",
        }
    })

    modifyUnique(event, "avaritia:neutron_compressor", {
        "type": "minecraft:crafting_shaped",
        "key": {
            "I": {
                "item": "avaritia:neutron_pile"
            },
            "R": {
                "item": "minecraft:redstone_block"
            },
            "C": {
                "item": "avaritia:crystal_matrix_ingot"
            }
        },
        "pattern": [
            "IRI",
            "RCR",
            "III"
        ],
        "result": {
            "item": "avaritia:neutron_compressor",
        }
    })
})