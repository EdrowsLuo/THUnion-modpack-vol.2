ServerEvents.recipes(event=>{

    event.recipes.create.item_application(
        "gtceu:electrical_volcano",
        [
            {
                "item": "alexscaves:volcanic_core"
            },
            {
                "item": "create:brass_casing"
            }
        ]
    )

    event.recipes.gtceu.electric_volcano('lava')
        .circuit(1)
        .duration(100)
        .EUt(1920)
        .outputFluids(Fluid.lava(1000));
})