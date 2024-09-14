ServerEvents.recipes( event => {
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:cutter' }, recipe => { 
        if(EUt(recipe)>4){ return; }
        try { 
            /** @type {InputItem} */var input = xthInput(recipe, 1);
            /** @type {OutputItem[]} */var outputs=allOutputs(recipe);
            event.recipes.create.cutting(outputs,input);
        } catch (err) {
            
        }
    });
});