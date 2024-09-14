
ServerEvents.recipes( event => {
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:macerator' }, recipe => { 
        if(EUt(recipe)>2){ return; }
        try { 
            /** @type {InputItem} */var input = xthInput(recipe, 1);
            //不产出任何概率产出的副产物
            /** @type {OutputItem[]} */var outputs=allOutputs(recipe).filter(output => output.chance==1);
            event.recipes.create.milling(outputs,input);
        } catch (err) {
            
        }
    });
});