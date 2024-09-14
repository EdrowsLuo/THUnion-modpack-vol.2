ServerEvents.recipes(event => {
    function easy_hatch_recipe(mkLevel, gregLevel, useFerrousSlimeBall) {
        event.remove({ output: `gtceu:${gregLevel}_dual_input_hatch` })
        event.remove({ output: `gtceu:${gregLevel}_dual_output_hatch` })
    
        event.shaped(
            `gtceu:${gregLevel}_dual_input_hatch`,
            [
                ' H ',
                'ICT',
                '   '
            ], {
            H: 'minecraft:hopper',
            I: `mekanism:${mkLevel}_bin`,
            C: useFerrousSlimeBall ? "alexscaves:ferrouslime_ball" : "minecraft:slime_ball",
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
            C: useFerrousSlimeBall ? "alexscaves:ferrouslime_ball" : "minecraft:slime_ball",
            T: `mekanism:${mkLevel}_fluid_tank`
        })

        event.shapeless(`gtceu:${gregLevel}_dual_input_hatch`, [ `gtceu:${gregLevel}_dual_output_hatch` ])
        event.shapeless(`gtceu:${gregLevel}_dual_output_hatch`, [ `gtceu:${gregLevel}_dual_input_hatch` ])
    }

    easy_hatch_recipe("basic", "luv", false)
    easy_hatch_recipe("advanced", "zpm", false)
    easy_hatch_recipe("elite", "uxv", true)
    easy_hatch_recipe("ultimate", "max", true)
})