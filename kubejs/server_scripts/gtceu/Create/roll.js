ServerEvents.recipes( event => {
    event.remove({ mod: 'createaddition', type: 'createaddition:rolling' });
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:wiremill' }, recipe => { 
        if(EUt(recipe)>7 || circuit(recipe)!=1){ return; }
        try { 
            /** @type {InputItem} */var input = allConsumingInputs(recipe)[0];
            /** @type {OutputItem} */var output=xthOutput(recipe,1);
            rollingMachineRecipe(event,input,output);
        } catch (err) {

        }
    });
    ['gold','copper','iron','electrum'].forEach( material=> {
        event.replaceInput( {input: 'createaddition:'+material+'_wire' }, 
        'createaddition:'+material+'_wire', 
        'gtceu:'+material+'_single_wire');
    });
    
});

function rollingMachineRecipe(event, /** @type {InputItem} */input, /** @type {OutputItem} */output){
    event.custom({
        type: 'createaddition:rolling',
        input: {
            item: input.ingredient.first.item.arch$registryName().toString(),
            count: input.count  
        },
        result: {
            item: output.item.item.arch$registryName().toString(),
            count: output.count  
        }

    })
}