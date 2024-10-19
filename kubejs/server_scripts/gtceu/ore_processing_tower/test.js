ServerEvents.recipes(event=>{

    const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');

    const M=3628800;

    event.recipes.gtceu.ore_processing_tower('test1')
    .itemInputs('minecraft:diamond')
    .itemOutputs('minecraft:coal')
    .EUt(480)
    .duration(200);


    GTMaterialRegistry.getRegistries().forEach(registry=>{
        registry.getAllMaterials().forEach(material=>{
            if(material.hasProperty(PropertyKey.ORE)){
                console.log(material.name+' has property ore');
                /** @type {Internal.OreProperty} */
                var property=material.getProperty(PropertyKey.ORE);
                console.log(property.oreMultiplier,property.byProductMultiplier);
                var length=property.getOreByProducts().length;
                var mt1=length>0?property.getOreByProduct(0,material):material;
                var mt2=length>1?property.getOreByProduct(1,material):material;
                var mt3=length>2?property.getOreByProduct(2,material):material;
                var mt4=length>3?property.getOreByProduct(3,material):material;
                console.log(mt1,mt2,mt3,mt4);
                event.recipes.gtceu.ore_processing_tower(material.name)
                .itemInputs(
                    Item.of('gtceu:almandine_ore')
                )
                .itemOutputs(
                    ChemicalHelper.getDust(material,property.oreMultiplier*2*M),
                    ChemicalHelper.getDust(mt1,property.byProductMultiplier*M),
                    ChemicalHelper.getDust(mt2,property.byProductMultiplier*2*M),
                    ChemicalHelper.getDust(mt3,property.byProductMultiplier*2*M),
                    ChemicalHelper.getDust(mt4,property.byProductMultiplier*2*M)
                )
                .EUt(30).duration(200);
                
            }
        })
    })
})