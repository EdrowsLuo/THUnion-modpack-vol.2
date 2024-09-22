const fissile_core = "alexscaves:fissile_core"

ServerEvents.recipes(event => {

    modifyUnique(event, "create_new_age:reactor_fuel_acceptor", {
      "type": "minecraft:crafting_shaped",
      "category": "building",
      "key": {
        "#": {
          "item": "create_new_age:reactor_casing"
        },
        ".": {
          "item": "create:andesite_funnel"
        },
        ",": {
          "item": "create:brass_funnel"
        },
        "C": {
            "item": fissile_core
        }
      },
      "pattern": [
        "#.#",
        " C ",
        "#,#"
      ],
      "result": {
        "count": 1,
        "item": "create_new_age:reactor_fuel_acceptor"
      },
      "show_notification": true
    })

    modifyUnique(event, "biggerreactors:reactor_terminal", {
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "CFC",
        "YDY",
        "CRC"
      ],
      "key": {
        "C": {
          "item": "biggerreactors:reactor_casing"
        },
        "Y": {
          "tag": "forge:ingots/uranium"
        },
        "R": {
          "item": "minecraft:redstone"
        },
        "D": {
          "item": "minecraft:diamond"
        },
        "F": {
            "item": "create_new_age:corium"
        }
      },
      "result": {
        "item": "biggerreactors:reactor_terminal"
      }
    })

    modifyUnique(event, "mekanismgenerators:fission_reactor_port", {
      "type": "minecraft:crafting_shaped",
      "key": {
        "C": {
          "item": "mekanism:elite_control_circuit"
        },
        "F": {
          "item": "mekanismgenerators:fission_reactor_casing"
        },
        "L": {
            "item": "biggerreactors:ludicrite_ingot"
        }
      },
      "pattern": [
        "LFL",
        "FCF",
        "LFL"
      ],
      "result": {
        "count": 2,
        "item": "mekanismgenerators:fission_reactor_port"
      }
    })
})
