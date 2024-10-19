
ServerEvents.recipes(event=>{
    ['copper','annealed_copper'].forEach(material=>cableManualRecipe(event,material));

    event.recipes.create.mixing(['2x gtceu:cupronickel_ingot'], ['#forge:ingots/copper','#forge:ingots/nickel']).heated()
})


function cableManualRecipe(event, material){
    event.shapeless(`gtceu:${material}_single_cable`,
        [
            `gtceu:${material}_single_wire`,
            '#forge:plates/rubber'
        ]
    );
    event.shapeless(`gtceu:${material}_double_cable`,
        [
            `gtceu:${material}_double_wire`,
            '#forge:plates/rubber'
        ]
    );
    event.shapeless(`gtceu:${material}_quadruple_cable`,
        [
            `gtceu:${material}_quadruple_wire`,
            '#forge:plates/rubber',
            '#forge:plates/rubber'
        ]
    );
    event.shapeless(`gtceu:${material}_octal_cable`,
        [
            `gtceu:${material}_octal_wire`,
            '#forge:plates/rubber',
            '#forge:plates/rubber',
            '#forge:plates/rubber'
        ]
    );
    event.shapeless(`gtceu:${material}_hex_cable`,
        [
            `gtceu:${material}_hex_wire`,
            '#forge:plates/rubber',
            '#forge:plates/rubber',
            '#forge:plates/rubber',
            '#forge:plates/rubber',
            '#forge:plates/rubber'
        ]
    );
}