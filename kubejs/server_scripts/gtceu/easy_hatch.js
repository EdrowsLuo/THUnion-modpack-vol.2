// priority: 10

ServerEvents.recipes(event => {
    function easy_hatch_recipe(mkLevel, gregLevel, useFerrousSlimeBall) {
        event.remove({ output: `gtceu:${gregLevel}_dual_input_hatch` })
        event.remove({ output: `gtceu:${gregLevel}_dual_output_hatch` })

        let ball = useFerrousSlimeBall ? "alexscaves:ferrouslime_ball" : "minecraft:slime_ball"
    
        event.shaped(
            `gtceu:${gregLevel}_dual_input_hatch`,
            [
                ' H ',
                'ICT',
                '   '
            ], {
            H: 'minecraft:hopper',
            I: `mekanism:${mkLevel}_bin`,
            C: ball,
            T: `mekanism:${mkLevel}_fluid_tank`
        })

        event.shaped(
            `gtceu:${gregLevel}_dual_output_hatch`,
            [
                '   ',
                'ICT',
                ' H '
            ], {
            H: 'minecraft:hopper',
            I: `mekanism:${mkLevel}_bin`,
            C: ball,
            T: `mekanism:${mkLevel}_fluid_tank`
        })

        event.shapeless(`gtceu:${gregLevel}_dual_input_hatch`, [ `gtceu:${gregLevel}_dual_output_hatch` ])
        event.shapeless(`gtceu:${gregLevel}_dual_output_hatch`, [ `gtceu:${gregLevel}_dual_input_hatch` ])

        event.shapeless(`gtceu:${gregLevel}_output_hatch`, [ `mekanism:${mkLevel}_fluid_tank`, ball ])
        event.shapeless(`gtceu:${gregLevel}_output_bus`, [ `mekanism:${mkLevel}_bin`, ball ])
    }

    easy_hatch_recipe("basic", "luv", false)
    easy_hatch_recipe("advanced", "zpm", false)
    easy_hatch_recipe("elite", "uxv", true)
    easy_hatch_recipe("ultimate", "max", true)

    function easy_energy_hatch(mkLevel, gregLevel, useFerrousSlimeBall) {
        let ball = useFerrousSlimeBall ? "alexscaves:ferrouslime_ball" : "minecraft:slime_ball"
        let energy_hatch = `gtceu:${gregLevel}_energy_input_hatch`
        event.remove({ "type": "gtceu:macerator", "input": energy_hatch })
        event.remove({ "output": energy_hatch })

        event.shapeless(energy_hatch, [ `mekanism:${mkLevel}_energy_cube`, ball ])
    }

    easy_energy_hatch("basic", "lv", false)
    easy_energy_hatch("advanced", "mv", false)
    easy_energy_hatch("elite", "hv", true)
    easy_energy_hatch("ultimate", "ev", true)
})