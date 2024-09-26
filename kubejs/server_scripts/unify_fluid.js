

ServerEvents.recipes(event => {

    function uniqueFluid(unique, targetTag) {
        event.findRecipes({"inputFluid": `#${targetTag}`}).forEach(r => console.log(r))
    }

    uniqueFluid("gtceu:hydrofluoric_acid", "forge:hydrofluoric_acid")
})

