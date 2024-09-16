ServerEvents.recipes(event => {
    ['lv','mv','hv','ev','iv','luv','zpm','uv'].forEach(voltage=>dwos_crafting_recipe(event,voltage));
})

function dwos_crafting_recipe(event,voltage) {
    event.shaped(
        `gtceu:${voltage}_digital_well_of_suffer`,
        [
            'PCP',
            'SHS',
            'PCP'
        ], {
        P: `gtceu:${voltage}_electric_pump`,
        C: `#gtceu:circuits/${voltage}`,
        H: `gtceu:${voltage}_machine_hull`,
        ShaderTexture: 'bloodmagic:sacrificerune'
    })
}