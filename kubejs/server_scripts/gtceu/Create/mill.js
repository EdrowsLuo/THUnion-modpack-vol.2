let MACERATE_BLACKLIST = {
    "gtceu:macerator/macerate_wheat": true
};

["gold_ore", "iron_ore", "copper_ore"].forEach(ore => {
    console.log(`添加${ore}的粉碎机黑名单`);
    MACERATE_BLACKLIST[`gtceu:macerator/macerate_${ore}_to_crushed_ore`] = true;
    MACERATE_BLACKLIST[`gtceu:macerator/macerate_endstone_${ore}_to_crushed_ore`] = true;
    MACERATE_BLACKLIST[`gtceu:macerator/macerate_deepslate_${ore}_to_crushed_ore`] = true;
    MACERATE_BLACKLIST[`gtceu:macerator/macerate_raw_${ore}_to_crushed_ore`] = true;
});

ServerEvents.recipes( event => {
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:macerator' }, recipe => { 
        if(EUt(recipe)>2){ return; }
        try { 
            /** @type {InputItem} */var input = xthInput(recipe, 1);
            //不产出任何概率产出的副产物
            /** @type {OutputItem[]} */var outputs=allOutputs(recipe).filter(output => output.chance==1);
            if(!MACERATE_BLACKLIST[recipe.getId()]) {
                event.recipes.create.milling(outputs,input);
            }
        } catch (err) {
            
        }
    });
});