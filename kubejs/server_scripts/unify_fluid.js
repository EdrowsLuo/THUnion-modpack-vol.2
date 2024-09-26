

ServerEvents.recipes(event => {
    event.recipes.gtceu.extractor("allthemodium_ingot")
        .itemInputs("allthemodium:allthemodium_ingot")
        .EUt(120)
        .duration(26)
        .outputFluids(Fluid.of("allthemodium:molten_allthemodium").withAmount(144))
    event.recipes.gtceu.extractor("vibranium_ingot")
        .itemInputs("allthemodium:vibranium_ingot")
        .EUt(120)
        .duration(26)
        .outputFluids(Fluid.of("allthemodium:molten_vibranium").withAmount(144))
    event.recipes.gtceu.extractor("unobtainium_ingot")
        .itemInputs("allthemodium:unobtainium_ingot")
        .EUt(120)
        .duration(26)
        .outputFluids(Fluid.of("allthemodium:molten_unobtainium").withAmount(144))


    event.remove({ "id": "mekanism:separator/brine" })
    event.custom({
        "type": "mekanism:separating",
        "input": {
            "amount": 10,
            "fluid": "gtceu:salt_water"
        },
        "leftGasOutput": {
            "amount": 1,
            "gas": "mekanism:sodium"
        },
        "rightGasOutput": {
            "amount": 1,
            "gas": "mekanism:chlorine"
        }
    })

    event.remove({ "id": "mekanism:evaporating/lithium"})
    event.custom({
        "type": "mekanism:evaporating",
        "input": {
            "amount": 10,
            "fluid": "gtceu:salt_water"
        },
        "output": {
            "amount": 1,
            "fluid": "mekanism:lithium"
        }
    })

    event.remove({ "id": "mekanism:rotary/brine" })
    event.custom({
        "type": "mekanism:rotary",
        "fluidInput": {
            "amount": 1,
            "fluid": "gtceu:salt_water"
        },
        "fluidOutput": {
            "amount": 1,
            "fluid": "gtceu:salt_water"
        },
        "gasInput": {
            "amount": 1,
            "gas": "mekanism:brine"
        },
        "gasOutput": {
            "amount": 1,
            "gas": "mekanism:brine"
        }
    })

    event.remove({ "id": "mekanism:evaporating/brine" })
    event.custom({
        "type": "mekanism:evaporating",
        "input": {
            "amount": 10,
            "fluid": "minecraft:water"
        },
        "output": {
            "amount": 1,
            "fluid": "gtceu:salt_water"
        }
    })

    event.remove({ "id": "mekanism:reaction/substrate/ethene_oxygen" })
    event.custom({
        "type": "mekanism:reaction",
        "duration": 60,
        "energyRequired": 1000,
        "fluidInput": {
            "amount": 50,
            "fluid": "gtceu:ethylene"
        },
        "gasInput": {
            "amount": 10,
            "gas": "mekanism:oxygen"
        },
        "itemInput": {
            "ingredient": {
                "item": "mekanism:substrate"
            }
        },
        "itemOutput": {
            "item": "mekanism:hdpe_pellet"
        }
    })

    event.remove({ "id": "mekanism:rotary/ethene" })
    event.custom({
        "type": "mekanism:rotary",
        "fluidInput": {
            "amount": 1,
            "fluid": "gtceu:ethylene"
        },
        "fluidOutput": {
            "amount": 1,
            "fluid": "gtceu:ethylene"
        },
        "gasInput": {
            "amount": 1,
            "gas": "mekanism:ethene"
        },
        "gasOutput": {
            "amount": 1,
            "gas": "mekanism:ethene"
        }
    })

})

