
ServerEvents.recipes( event => {
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:compressor' }, recipe => { 
        try { 
            /** @type {InputItem} */var input = xthInput(recipe, 1);
            /** @type {OutputItem} */var output=xthOutput(recipe, 1);
            event.recipes.create.compacting(output, input);
            //rollingMachineRecipe(event, input, output);
        } catch (err) { 
        }
    });
});