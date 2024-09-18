// priority: 0

// Visit the wiki for more info - https://kubejs.com/



ServerEvents.recipes(event => {


    event.recipes.gtceu.mark_of_falling_tower('overworld_iron')
        .itemInputs('minecraft:stick')
        .fluidInputs(Fluid.of('bloodmagic:life_essence_fluid',128000))
        .itemOutputs('64x minecraft:iron_ore','64x gtceu:hematite_ore','64x gtceu:chromite_ore','64x gtceu:pyrite_ore','64x gtceu:magnetite_ore')
        .addData('radius',4)
        .addData('rock','minecraft:stone')
        .EUt(1920)
        .duration(400);

    event.recipes.gtceu.mark_of_falling_tower('overworld_copper')
        .itemInputs('minecraft:stick')
        .fluidInputs(Fluid.of('bloodmagic:life_essence_fluid',160000))
        .itemOutputs('64x minecraft:copper_ore','64x gtceu:chalcopyrite_ore','64x gtceu:chromite_ore','64x gtceu:pyrite_ore','64x gtceu:magnetite_ore')
        .addData('radius',4)
        .addData('rock','minecraft:stone')
        .EUt(1920)
        .duration(400);

    event.recipes.gtceu.mark_of_falling_tower('test2')
        .itemInputs('minecraft:stick')
        .itemOutputs(Item.of('minecraft:diamond',64),Item.of('minecraft:sponge',64))
        .addData('radius',5)
        .addData('rock','minecraft:stone')
        .EUt(1920)
        .duration(400);
        
        
    
    event.recipes.gtceu.mark_of_falling_tower('test3')
        .itemInputs('minecraft:diamond')
        .itemOutputs('64x gtceu:hematite_ore','64x gtceu:chromite_ore','64x gtceu:pyrite_ore','64x gtceu:magnetite_ore')
        .addData('radius',6)
        .addData('rock','minecraft:bedrock')
        .EUt(1920)
        .duration(400);

    event.recipes.gtceu.mark_of_falling_tower('test4')
        .itemInputs('minecraft:emerald')
        .itemOutputs('64x gtceu:hematite_ore','64x gtceu:chromite_ore','64x gtceu:pyrite_ore','64x gtceu:magnetite_ore')
        .addData('radius',9)
        .addData('rock','minecraft:end_stone')
        .EUt(1920)
        .duration(800);

    event.recipes.gtceu.mark_of_falling_tower('test5')
        .itemInputs('minecraft:gold_ingot')
        .itemOutputs('64x gtceu:hematite_ore','64x gtceu:chromite_ore','64x gtceu:pyrite_ore','64x gtceu:magnetite_ore')
        .addData('radius',12)
        .addData('rock','minecraft:granite')
        .EUt(1920)
        .duration(1200);


  
    
        
})