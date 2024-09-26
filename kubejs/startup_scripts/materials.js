GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('mana', -1, -1, -1, null, 'Ma', false);
    event.create('thunium', -1, -1, -1, null, 'ThU', false);
    event.create('azure_neodymium', 60, 83, -1, null, 'Nd*', true);
    event.create('scarlet_neodymium', 60, 85, -1, null, '*Nd', true);
 })
GTCEuStartupEvents.registry('gtceu:material', event => {

    const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');
    const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
    const $FluidStorageKeys=Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');
    const $IngotProperty=Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
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
        .flags(GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('azure_neodymium')
        .dust()
        .element('azure_neodymium')
        .color(0x1049F0).iconSet(GTMaterialIconSet.MAGNETIC)
        .blastTemp(1600)
    event.create('scarlet_neodymium')
        .dust()
        .element('scarlet_neodymium')
        .color(0xF01010).iconSet(GTMaterialIconSet.MAGNETIC)
        .blastTemp(1600)

    event.create('trineodymium')
        .ingot()
        .components('1x azure_neodymium','1x neodymium','1x scarlet_neodymium')
        .color(0x676767).iconSet(GTMaterialIconSet.MAGNETIC)
        .flags(GTMaterialFlags.GENERATE_ROD);  

    

    GTMaterials.Gadolinium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Holmium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Lanthanum.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Cerium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Lutetium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Rhenium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Thallium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Polonium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Californium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Seaborgium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Scandium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Technetium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Dubnium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Copernicium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Flerovium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Moscovium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Livermorium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Oganesson.setProperty(PropertyKey.FLUID,new $FluidProperty($FluidStorageKeys.GAS,new GTFluidBuilder().state(GTFluidState.LIQUID).temperature(10)) )


    event.create('hv_magnetic_alloy')
        .ingot()
        .components('3x iron','1x nickel','1x cobalt')
        .color(0xBCC1C2).iconSet(GTMaterialIconSet.MAGNETIC)
        .flags(GTMaterialFlags.GENERATE_PLATE);
    event.create('hv_mechanical_alloy')
        .ingot()
        .components('8x steel','1x chromium')
        .color(0xD8B652).iconSet(GTMaterialIconSet.DULL)
        .blastTemp(1000)
        .flags(GTMaterialFlags.GENERATE_PLATE);
    event.create('hv_conductive_alloy')
        .ingot()
        .components('14x annealed_copper','1x silver','1x gold')
        .color(0xE97D1E).iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE);
    event.create('hv_component_alloy')
        .ingot()
        .components('4x hv_mechanical_alloy','1x hv_magnetic_alloy','1x hv_conductive_alloy')
        .color(0xE97D1E).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.DISABLE_DECOMPOSITION,GTMaterialFlags.NO_WORKING);

    event.create('ev_magnetic_alloy')
        .ingot()
        .components('6x neodymium','1x nickel','1x cobalt')
        .color(0xAFADAC).iconSet(GTMaterialIconSet.MAGNETIC)
        .flags(GTMaterialFlags.GENERATE_PLATE);
    event.create('ev_mechanical_alloy')
        .ingot()
        .components('4x titanium','4x stainless_steel')
        .color(0xDB25CB).iconSet(GTMaterialIconSet.DULL)
        .blastTemp(1500)
        .flags(GTMaterialFlags.GENERATE_PLATE);
    event.create('ev_conductive_alloy')
        .ingot()
        .components('5x annealed_copper','8x electrum','2x aluminium')
        .color(0x86CDE9).iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE);
    event.create('ev_component_alloy')
        .ingot()
        .components('6x ev_mechanical_alloy','1x ev_magnetic_alloy','1x ev_conductive_alloy')
        .color(0xD286E9).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.DISABLE_DECOMPOSITION,GTMaterialFlags.NO_WORKING);


    event.create('iv_magnetic_alloy')
        .ingot().colorAverage()
        .components('7x trineodymium','1x oxygen')
        .iconSet(GTMaterialIconSet.MAGNETIC)
        .flags(GTMaterialFlags.GENERATE_PLATE);
    event.create('iv_mechanical_alloy')
        .ingot().colorAverage()
        .components('7x tungsten','2x chromium','2x steel','1x gold','4x titanium')
        .iconSet(GTMaterialIconSet.DULL)
        .blastTemp(2000)
        .flags(GTMaterialFlags.GENERATE_PLATE);
    event.create('iv_conductive_alloy')
        .ingot().colorAverage()
        .components('4x graphene','1x diamond')
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE);
    event.create('iv_component_alloy')
        .ingot().colorAverage()
        .components('8x iv_mechanical_alloy','1x iv_magnetic_alloy','1x iv_conductive_alloy')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.DISABLE_DECOMPOSITION,GTMaterialFlags.NO_WORKING);


    event.create('luv_magnetic_alloy')
        .ingot().colorAverage()
        .components('5x trineodymium','2x samarium','1x steel')
        .iconSet(GTMaterialIconSet.MAGNETIC)
        .flags(GTMaterialFlags.GENERATE_PLATE);
    event.create('luv_mechanical_alloy')
        .ingot().colorAverage()
        .components('4x electrum','2x iridium','2x ruthenium','12x hsss','4x rhodium')
        .iconSet(GTMaterialIconSet.DULL)
        .blastTemp(2500)
        .flags(GTMaterialFlags.GENERATE_PLATE);
    event.create('luv_conductive_alloy')
        .ingot().colorAverage()
        .components('2x ruthenium','4x silver','1x iridium','1x indium')
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE);
    event.create('luv_component_alloy')
        .ingot().colorAverage()
        .components('10x luv_mechanical_alloy','1x luv_magnetic_alloy','1x luv_conductive_alloy')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.DISABLE_DECOMPOSITION,GTMaterialFlags.NO_WORKING);


    event.create('zpm_magnetic_alloy')
        .ingot().colorAverage()
        .components('2x trineodymium','4x lanthanum','1x holmium')
        .iconSet(GTMaterialIconSet.MAGNETIC)
        .flags(GTMaterialFlags.GENERATE_PLATE);
    event.create('zpm_mechanical_alloy')
        .ingot().colorAverage()
        .components('9x hsss','3x naquadah','1x rhenium')
        .iconSet(GTMaterialIconSet.DULL)
        .blastTemp(3000)
        .flags(GTMaterialFlags.GENERATE_PLATE);
    event.create('zpm_conductive_alloy')
        .ingot().colorAverage()
        .components('4x europium','1x scandium')
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE);
    event.create('zpm_component_alloy')
        .ingot().colorAverage()
        .components('12x zpm_mechanical_alloy','1x zpm_magnetic_alloy','1x zpm_conductive_alloy')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.DISABLE_DECOMPOSITION,GTMaterialFlags.NO_WORKING);


    event.create('uv_magnetic_alloy')
        .ingot().colorAverage()
        .components('1x trineodymium','4x holmium','1x enriched_naquadah')
        .iconSet(GTMaterialIconSet.MAGNETIC)
        .flags(GTMaterialFlags.GENERATE_PLATE);
    event.create('uv_mechanical_alloy')
        .ingot().colorAverage()
        .components('15x naquadria','4x tritanium','2x duranium','1x gadolinium')
        .iconSet(GTMaterialIconSet.DULL)
        .blastTemp(2000)
        .flags(GTMaterialFlags.GENERATE_PLATE);
    event.create('uv_conductive_alloy')
        .ingot().colorAverage()
        .components('2x americium','1x lutetium')
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE);
    event.create('uv_component_alloy')
        .ingot().colorAverage()
        .components('14x uv_mechanical_alloy','1x uv_magnetic_alloy','1x uv_conductive_alloy')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.DISABLE_DECOMPOSITION,GTMaterialFlags.NO_WORKING);

    
})