
ServerEvents.recipes( event => {
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:macerator' }, recipe => { 
        if(EUt(recipe)>32){ return; }
        try { 
            /** @type {InputItem} */var input = xthInput(recipe, 1);
            /** @type {OutputItem[]} */var outputs=allOutputs(recipe);
            if(!MACERATE_BLACKLIST[recipe.getId()]) {
                event.recipes.create.crushing(outputs,input);
            }
        } catch (err) {
            
        }
    });
});