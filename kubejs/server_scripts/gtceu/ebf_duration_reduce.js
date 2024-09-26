ServerEvents.recipes(event => {
    event.forEachRecipe({ mod: 'gtceu' , type: 'gtceu:electric_blast_furnace'}, recipe => {
        try {
            var newDuration = recipe.get("duration");
            recipe.set("duration", newDuration/4>=1?newDuration/4:1);
            
        } catch (err) {
        }
    })

    event.forEachRecipe({ mod: 'gtceu' , type: 'gtceu:alloy_blast_smelter'}, recipe => {
        try {
            var newDuration = recipe.get("duration");
            recipe.set("duration", newDuration/4>=1?newDuration/4:1);
            
        } catch (err) {
        }
    })
})