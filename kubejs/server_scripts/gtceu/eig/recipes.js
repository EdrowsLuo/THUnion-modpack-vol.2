ServerEvents.recipes(event=>{

    //似乎不太支持概率配方
    MetalOre.forEach(ore=>{
        event.recipes.gtceu.eig_input(`${ore.modId}_${ore.oreId}`)
        .itemInputs('kubejs:ore_core',ore.asOresBlock())
        .itemOutputs(
            ore.asClump(),
            ore.asNugget()
        )
        .EUt(480)
        .duration(1);
    });
    
    GemOre.forEach(ore=>{
        event.recipes.gtceu.eig_input(`${ore.modId}_${ore.oreId}`)
        .itemInputs('kubejs:ore_core',ore.asGem())
        .itemOutputs(
            ore.asGem()
        )
        .EUt(480)
        .duration(1);
    });

    MiscOre.forEach(ore=>{
        event.recipes.gtceu.eig_input(`${ore.modId}_${ore.oreId}`)
        .itemInputs('kubejs:ore_core',ore.asOresBlock())
        .itemOutputs(
            ore.customExport
        )
        .EUt(480)
        .duration(1);
    });


    ['nickel','iron','copper'].forEach(material=>{
        addSingular(event,0,material,1920,'',1);
    });

    ['naquadah'].forEach(material=>{
        addSingular(event,1,material,7680,'',1);
    });


    function addSingular(event, tier, item, EUt, outputOverride, multiplier){
        var tiers=['kubejs:singular_storage_2','kubejs:singular_storage_16','kubejs:singular_storage_128'];

        event.recipes.gtceu.eig_input(`${item}_tier_${tier}`)
        .itemInputs(tiers[tier],Item.of('avaritia:singularity',`{Id:"avaritia:${item}"}`).weakNBT())
        .itemOutputs(outputOverride===''?`${multiplier}x #forge:ingots/${item}`:`${multiplier}x ${outputOverride}`)
        .EUt(EUt)
        .duration(1);

        if(tier<2){
            addSingular(event, tier+1, item, EUt*4, outputOverride, multiplier*8);
        }
    }

    event.recipes.gtceu.eig_input('work_dummy')
    .circuit(3)
    .itemOutputs(Item.of('minecraft:paper', "{display:{Name:'{\"text\":\"输出种植产物\"}'}}").strongNBT())
    .EUt(480)
    .duration(100);

    event.recipes.gtceu.eig_input('output_dummy')
    .circuit(2)
    .itemOutputs(Item.of('minecraft:paper', "{display:{Name:'{\"text\":\"输出储存的种植物品\"}'}}").strongNBT())
    .EUt(480)
    .duration(1);
})

