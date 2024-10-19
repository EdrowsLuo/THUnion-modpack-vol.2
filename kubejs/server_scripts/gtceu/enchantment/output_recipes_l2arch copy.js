ServerEvents.recipes(event=>{
event.recipes.gtceu.assembler('l2arch_custom_recipe_1')
    .itemInputs('minecraft:book')
    .itemInputs('3x l2complements:captured_shulker_bullet', '1x minecraft:dragon_breath', '4x minecraft:phantom_membrane')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:float', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2arch_custom_recipe_2')
    .itemInputs('minecraft:book')
    .itemInputs('4x minecraft:glowstone_dust', '4x minecraft:spectral_arrow')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:glow', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2arch_custom_recipe_3')
    .itemInputs('minecraft:book')
    .itemInputs('1x minecraft:dragon_breath', '6x minecraft:fermented_spider_eye', '1x minecraft:nether_wart')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:harm', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2arch_custom_recipe_4')
    .itemInputs('minecraft:book')
    .itemInputs('1x minecraft:dragon_breath', '6x minecraft:glistering_melon_slice', '1x minecraft:nether_wart')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:heal', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2arch_custom_recipe_5')
    .itemInputs('minecraft:book')
    .itemInputs('6x l2complements:captured_shulker_bullet', '1x minecraft:dragon_breath', '1x minecraft:nether_wart')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:levitate', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2arch_custom_recipe_6')
    .itemInputs('minecraft:book')
    .itemInputs('1x minecraft:dragon_breath', '1x minecraft:pufferfish', '6x minecraft:spider_eye')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:poison', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2arch_custom_recipe_7')
    .itemInputs('minecraft:book')
    .itemInputs('6x minecraft:cobweb', '1x minecraft:dragon_breath', '1x minecraft:fermented_spider_eye')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:slow', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2arch_custom_recipe_8')
    .itemInputs('minecraft:book')
    .itemInputs('1x minecraft:dragon_breath', '3x minecraft:fermented_spider_eye', '4x minecraft:glowstone_dust')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:weak', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);

event.recipes.gtceu.assembler('l2arch_custom_recipe_9')
    .itemInputs('minecraft:book')
    .itemInputs('1x minecraft:dragon_breath', '6x minecraft:wither_rose', '1x minecraft:wither_skeleton_skull')
    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('l2archery:wither', 1)) 
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
    .EUt(2000);
});
