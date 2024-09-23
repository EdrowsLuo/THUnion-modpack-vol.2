GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('mana', -1, -1, -1, null, 'Ma', false)
    event.create('thunium', -1, -1, -1, null, 'ThU', false)
 })
GTCEuStartupEvents.registry('gtceu:material', event => {

    const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');
    const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
    const $FluidStorageKeys=Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');
    GTMaterials.NaquadahEnriched.setProperty(PropertyKey.ORE, new $OreProperty());
    GTMaterials.Osmium.setProperty(PropertyKey.ORE, new $OreProperty());
    GTMaterials.Rhodium.setProperty(PropertyKey.ORE, new $OreProperty());
    GTMaterials.Ruthenium.setProperty(PropertyKey.ORE, new $OreProperty());
    GTMaterials.Naquadria.setProperty(PropertyKey.ORE, new $OreProperty());
    GTMaterials.Europium.setProperty(PropertyKey.ORE, new $OreProperty());
    
    GTMaterials.Neutronium.setProperty(PropertyKey.ORE, new $OreProperty());
    GTMaterials.Duranium.setProperty(PropertyKey.ORE, new $OreProperty());
    GTMaterials.Tritanium.setProperty(PropertyKey.ORE, new $OreProperty());
    GTMaterials.Trinium.setProperty(PropertyKey.ORE, new $OreProperty());
    GTMaterials.Americium.setProperty(PropertyKey.ORE, new $OreProperty());

    GTMaterials.Iodine.setProperty(PropertyKey.FLUID, new $FluidProperty($FluidStorageKeys.LIQUID,new GTFluidBuilder().state(GTFluidState.GAS).temperature(363)));
    GTMaterials.Caesium.setProperty(PropertyKey.FLUID, new $FluidProperty($FluidStorageKeys.LIQUID,new GTFluidBuilder().state(GTFluidState.LIQUID).temperature(300)));
    GTMaterials.Phosphorus.setProperty(PropertyKey.FLUID, new $FluidProperty($FluidStorageKeys.LIQUID,new GTFluidBuilder().state(GTFluidState.LIQUID).temperature(500)));
    GTMaterials.Sulfur.setProperty(PropertyKey.FLUID, new $FluidProperty($FluidStorageKeys.LIQUID,new GTFluidBuilder().state(GTFluidState.LIQUID).temperature(500)));
    
    
    GTMaterials.Duranium.addFlags(GTMaterialFlags.GENERATE_FRAME);
    event.create('hyperblend')
        .dust()
        .components('1x redstone', '1x glowstone')
        .color(0xEF2522).iconSet(GTMaterialIconSet.BRIGHT)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING);

    event.create('energetic_silver')
        .ingot()
        .components('1x silver','1x hyperblend')
        .color(0x9BE6DB).iconSet(GTMaterialIconSet.METALLIC)
        .blastTemp(1700)
        .flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.DISABLE_DECOMPOSITION);
    
    event.create('energetic_alloy')
        .ingot()
        .components('1x gold','1x hyperblend')
        .color(0xF4872E).iconSet(GTMaterialIconSet.METALLIC)
        .blastTemp(2400)
        .flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.DISABLE_DECOMPOSITION,GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(512,3,1);
event.create('thunium')
        .ingot()
        .liquid(new GTFluidBuilder().temperature(19112024))
        .element('thunium')
        .color(0x8D1AF2).iconSet(GTMaterialIconSet.METALLIC)
        .blastTemp(2024)
        .flags(GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.DISABLE_DECOMPOSITION)

    
})