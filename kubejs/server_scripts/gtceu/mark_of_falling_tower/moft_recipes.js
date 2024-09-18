// priority: 0

// Visit the wiki for more info - https://kubejs.com/



ServerEvents.recipes(event => {
    //casings

    event.recipes.gtceu.chemical_bath('blood_casing')
        .itemInputs('gtceu:solid_machine_casing')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',4000))
        .itemOutputs('kubejs:blood_casing')
        .EUt(1920)
        .duration(100)
    event.recipes.gtceu.assembler('force_field_casing')
        .itemInputs('gtceu:tungsten_steel_frame','4x gtceu:platinum_single_cable','gtceu:iv_field_generator','4x #gtceu:circuits/luv')
        .inputFluids(Fluid.of('gtceu:helium',500))
        .itemOutputs('3x kubejs:force_field_casing')
        .EUt(7680)
        .duration(100)

    event.recipes.gtceu.mark_of_falling_tower('stone_iron')
        .itemInputs('minecraft:iron_block')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',128000))
        .itemOutputs('256x minecraft:iron_ore','64x gtceu:hematite_ore','64x gtceu:yellow_limonite_ore',
            '64x gtceu:pyrite_ore','64x gtceu:magnetite_ore','64x gtceu:goethite_ore'
        )
        .addData('radius',6)
        .addData('rock','minecraft:stone')
        .EUt(1920)
        .duration(400);

    event.recipes.gtceu.mark_of_falling_tower('stone_copper')
        .itemInputs('minecraft:copper_block')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',128000))
        .itemOutputs('256x minecraft:copper_ore','64x gtceu:chalcopyrite_ore','64x gtceu:tetrahedrite_ore','64x gtceu:bornite_ore','64x gtceu:chalcocite_ore')
        .addData('radius',5)
        .addData('rock','minecraft:stone')
        .EUt(1920)
        .duration(400);

    event.recipes.gtceu.mark_of_falling_tower('stone_gems_red')
        .itemInputs('gtceu:exquisite_ruby_gem')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',192000))
        .itemOutputs('64x alltheores:ruby_ore','64x gtceu:almandine_ore','64x gtceu:cinnabar_ore',
            '64x gtceu:pyrope_ore','64x gtceu:realgar_ore','64x gtceu:red_garnet_ore'
        )
        .addData('radius',6)
        .addData('rock','minecraft:stone')
        .EUt(1920)
        .duration(400);

    event.recipes.gtceu.mark_of_falling_tower('stone_gems_blue')
        .itemInputs('gtceu:exquisite_sapphire_gem')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',192000))
        .itemOutputs('64x gtceu:blue_topaz_ore','64x minecraft:diamond_ore','64x gtceu:lazurite_ore',
            '64x gtceu:sodalite_ore','64x alltheores:sapphire_ore','64x minecraft:lapis_ore','64x gtceu:apatite_ore'
        )
        .addData('radius',6)
        .addData('rock','minecraft:stone')
        .EUt(1920)
        .duration(400);

    event.recipes.gtceu.mark_of_falling_tower('stone_gems_green')
        .itemInputs('gtceu:exquisite_emerald_gem')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',192000))
        .itemOutputs('64x minecraft:emerald_ore','64x gtceu:green_sapphire_ore','64x gtceu:malachite_ore',
            '64x gtceu:olivine_ore','64x gtceu:monazite_ore'
        )
        .addData('radius',6)
        .addData('rock','minecraft:stone')
        .EUt(1920)
        .duration(400);
        
    event.recipes.gtceu.mark_of_falling_tower('end_pt')
        .itemInputs('gtceu:platinum_block')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',1024000))
        .itemOutputs('64x gtceu:endstone_palladium_ore','64x gtceu:endstone_platinum_ore','64x gtceu:endstone_cooperite_ore',
            '64x alltheores:end_iridium_ore','64x gtceu:endstone_nickel_ore','64x gtceu:endstone_copper_ore'
        )
        .addData('radius',6)
        .addData('rock','minecraft:end_stone')
        .EUt(30720)
        .duration(400);

    event.recipes.gtceu.mark_of_falling_tower('end_radioactive')
        .itemInputs('gtceu:naquadria_block')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',4096000))
        .itemOutputs('2048x gtceu:endstone_naquadah_ore','1024x alltheores:end_uranium_ore','1024x gtceu:endstone_plutonium_ore')
        .addData('radius',12)
        .addData('rock','minecraft:end_stone')
        .EUt(122880)
        .duration(800);


    event.recipes.gtceu.mark_of_falling_tower('sandstone_oil')
        .itemInputs('gtceu:oil_bucket')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',256000))
        .itemOutputs('1024x gtceu:sand_oilsands_ore')
        .addData('radius',9)
        .addData('rock','minecraft:sandstone')
        .EUt(7680)
        .duration(800);
    
        
})