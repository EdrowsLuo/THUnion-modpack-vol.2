ServerEvents.recipes(event=>{

    event.shaped(
        'gtceu:mekanism_factory',
        [
            'APA',
            'IHI',
            'BUB'
        ], {
        A: 'mekanism:ultimate_induction_provider',
        B: 'mekanism:ultimate_induction_cell',
        I: 'gtceu:iv_electric_piston',
        H: 'gtceu:iv_machine_hull',
        U: 'mekanism:pellet_plutonium',
        P: 'mekanism:pellet_polonium'
    })
});