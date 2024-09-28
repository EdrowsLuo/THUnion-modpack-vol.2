ServerEvents.recipes(event=>{


    ['mv','hv','ev','iv','luv','zpm','uv'].forEach(tier=>{
        event.shaped(
            `gtceu:${tier}_advanced_inscriber`,
            [
                '1P2',
                'CHC',
                '3I4'
            ], {
            C: `#gtceu:circuits/${tier}`,
            H: `gtceu:${tier}_machine_hull`,
            P: `gtceu:${tier}_electric_piston`,
            I: 'ae2:inscriber',
            1: 'ae2:engineering_processor_press',
            2: 'ae2:logic_processor_press',
            3: 'ae2:calculation_processor_press',
            4: 'ae2:silicon_press'
        })
    })
    
})