



ServerEvents.recipes( event => {
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:forge_hammer' }, recipe => { 
        try { 
            
            /** @type {InputItem} */var input = xthInput(recipe, 1);
            /** @type {OutputItem} */var output=xthOutput(recipe, 1);

            if(input.count==1 && output.count==1){
                event.recipes.create.pressing(output, input);
            }else if(input.count==3 && output.count==2){
                //由于配方只能接受一个物品作为输入，所以3：2写不了
                //如果配方输出变为概率（即有概率什么都不输出），可能会导致游戏崩溃
                //https://github.com/Creators-of-Create/Create/issues/6668
                //所以1：1！省点事情不好吗
                //更好的办法可能是一个块出六个板，但是我不会写
                event.recipes.create.pressing([output.withCount(1)], input);
            }
        } catch (err) { 

        }
    });
});