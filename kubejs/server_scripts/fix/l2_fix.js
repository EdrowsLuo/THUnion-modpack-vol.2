
ServerEvents.recipes(event => {
    event.findRecipes({ "type": "minecraft:smithing_transform" }).forEach(recipe => {
        let smithing_template = recipe.json.get("template")
        if(smithing_template.size() == 0) {
            let fixedRecipe = JsonIO.parse(recipe.json.toString())
            recipe.remove()
            fixedRecipe.template = { "item": "minecraft:stick"}
            event.custom(fixedRecipe)
        }
    })
})
