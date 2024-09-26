ServerEvents.recipes(event=>{
    var counter=1;
    event.findRecipes({type:'bloodmagic:soulforge'}).forEach(recipe=>{
        /** @type {InputItem} */var input0=recipe.get('input0');
        /** @type {InputItem} */var input1=recipe.get('input1');
        /** @type {InputItem} */var input2=recipe.get('input2');
        /** @type {InputItem} */var input3=recipe.get('input3');
        /** @type {OutputItem} */var output=recipe.get('output');
        if(input2===null) console.log("NULL");
        var drain=recipe.get('drain');
        var minimumDrain=recipe.get('minimumDrain');
        
        var builder=event.recipes.gtceu.hellforge(counter+'_hellforge');
        [input0,input1,input2,input3].forEach(input=>{
            if(input!==null) builder.itemInputs(input);
        })
        builder.itemOutputs(output)
        .EUt(minimumDrain===0?30:minimumDrain*20)
        .duration(200)
        .addDataNumber('minimumDrain',minimumDrain)
        .addDataNumber('drain',drain);
        counter++;
    })
})