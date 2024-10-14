//priority 114
StartupEvents.registry('block', event => {

    event.create('abyssalalloy_coil_block', 'gtceu:coil')
    .textureAll("kubejs:block/abyssalalloy_coil_block")
    .temperature(12600)
    .energyDiscount(8)
    .level(20)
    .tier(8)
    .coilMaterial(() => GTMaterials.get('iron'))
    .tagBlock("mineable/pickaxe")
    .tagBlock("forge:mineable/wrench")
    .hardness(5)
    .requiresTool(true)
    .soundType("metal")
    .mapColor("metal")
    .noValidSpawns(true);
    
    event.create('eternium_coil_block', 'gtceu:coil')
    .texture("kubejs:block/eternium_coil_block")
    .temperature(12600)
    .energyDiscount(8)
    .level(20)
    .tier(8)
    .coilMaterial(() => GTMaterials.get('iron'))
    .tagBlock("mineable/pickaxe")
    .tagBlock("forge:mineable/wrench")
    .hardness(5)
    .requiresTool(true)
    .soundType("metal")
    .mapColor("metal")
    .noValidSpawns(true);
        
})
