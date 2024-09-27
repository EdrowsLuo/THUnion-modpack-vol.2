ServerEvents.recipes(event => {
    ['lv','mv','hv','ev','iv','luv','zpm','uv'].forEach(voltage=>dwos_crafting_recipe(event,voltage));

    event.recipes.gtceu.assembly_line('eternalwos')
        .itemInputs(
            'bloodmagic:largebloodstonebrick',
            '2x gtceu:luv_electric_pump',
            '4x bloodmagic:rawdemoncrystal',
            '4x bloodmagic:corrosivedemoncrystal',
            '4x bloodmagic:destructivedemoncrystal',
            '4x bloodmagic:steadfastdemoncrystal',
            '4x bloodmagic:vengefuldemoncrystal',
            '64x hostilenetworks:prediction_matrix'
        )
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',1024000))
        .itemOutputs('gtceu:eternal_well_of_suffer')
        .duration(4800)
        .EUt(32000)
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:luv_digital_well_of_suffer')).EUt(120).duration(9600)) // (1)

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