
ServerEvents.recipes(event => {
    banAll(event, [
        "tomeofblood:novice_tome_of_blood",
        "tomeofblood:apprentice_tome_of_blood"
    ])

    modifyUnique(event, "tomeofblood:archmage_tome_of_blood", {
        "type": "forge:conditional",
        "recipes": [
            {
                "conditions": [
                    {
                        "type": "forge:mod_loaded",
                        "modid": "bloodmagic"
                    }
                ],
                "recipe": {
                    "type": "bloodmagic:altar",
                    "altarSyphon": 25000,
                    "consumptionRate": 20,
                    "drainRate": 20,
                    "input": {
                        "item": "ars_nouveau:archmage_spell_book"
                    },
                    "output": {
                        "item": "tomeofblood:archmage_tome_of_blood"
                    },
                    "upgradeLevel": 4
                }
            }
        ]
    })

    modifyUnique(event, "ars_nouveau:novice_spell_book", {
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "item": "mokels_witch_boss:witch_staff"
            },
            {
                "item": "minecraft:iron_shovel"
            },
            {
                "item": "minecraft:iron_pickaxe"
            },
            {
                "item": "minecraft:iron_axe"
            },
            {
                "item": "minecraft:iron_sword"
            }
        ],
        "result": {
            "item": "ars_nouveau:novice_spell_book"
        }
    })

    modifyUnique(event, "ars_nouveau:archmage_spell_book", {
        "type": "ars_nouveau:book_upgrade",
        "ingredients": [
            {
                "item": "ars_nouveau:apprentice_spell_book"
            },
            {
                "item": "minecraft:nether_star"
            },
            {
                "item": "ars_nouveau:wilden_tribute"
            },
            {
                "item": "irons_spellbooks:ruined_book"
            },
            {
                "item": "minecraft:emerald"
            },
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "minecraft:totem_of_undying"
            }
        ],
        "result": {
            "item": "ars_nouveau:archmage_spell_book"
        }
    })
})