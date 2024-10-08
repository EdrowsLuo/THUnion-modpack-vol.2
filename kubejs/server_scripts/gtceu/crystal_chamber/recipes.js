ServerEvents.recipes(event=>{
    event.shaped(
        'gtceu:crystal_chamber',
        [
            'ICI',
            'SHS',
            'ICI'
        ], {
        C: 'ae2:flawless_budding_quartz',
        H: 'gtceu:hv_machine_hull',
        S: '#gtceu:circuits/ev',
        I: 'ae2:growth_accelerator'
    })


    event.recipes.gtceu.crystal_chamber('certus1')
        .notConsumable('ae2:flawless_budding_quartz')
        .circuit(1)
        .itemOutputs('ae2:certus_quartz_crystal')
        .EUt(120)
        .duration(600);
    event.recipes.gtceu.crystal_chamber('quartz1')
        .notConsumable('ae2:flawless_budding_quartz')
        .circuit(2)
        .itemOutputs('minecraft:quartz')
        .EUt(120)
        .duration(600);
    event.recipes.gtceu.crystal_chamber('fluix1')
        .notConsumable('ae2:flawless_budding_quartz')
        .itemInputs('#forge:dusts/redstone')
        .circuit(3)
        .itemOutputs('2x ae2:fluix_crystal')
        .EUt(120)
        .duration(900);
    event.recipes.gtceu.crystal_chamber('certus2')
        .notConsumable('ae2:flawless_budding_quartz')
        .circuit(4)
        .itemOutputs('ae2:certus_quartz_dust')
        .EUt(120)
        .duration(600);
    event.recipes.gtceu.crystal_chamber('quartz2')
        .notConsumable('ae2:flawless_budding_quartz')
        .circuit(5)
        .itemOutputs('gtceu:nether_quartz_dust')
        .EUt(120)
        .duration(600);
    event.recipes.gtceu.crystal_chamber('fluix2')
        .notConsumable('ae2:flawless_budding_quartz')
        .itemInputs('#forge:dusts/redstone')
        .circuit(6)
        .itemOutputs('2x ae2:fluix_dust')
        .EUt(120)
        .duration(900);
    event.recipes.gtceu.crystal_chamber('certus3')
        .notConsumable('8x ae2:flawless_budding_quartz')
        .circuit(9)
        .itemOutputs('8x ae2:certus_quartz_crystal')
        .EUt(480)
        .duration(600);
    event.recipes.gtceu.crystal_chamber('quartz3')
        .notConsumable('8x ae2:flawless_budding_quartz')
        .circuit(10)
        .itemOutputs('8x minecraft:quartz')
        .EUt(480)
        .duration(600);
    event.recipes.gtceu.crystal_chamber('fluix3')
        .notConsumable('8x ae2:flawless_budding_quartz')
        .itemInputs('8x #forge:dusts/redstone')
        .circuit(11)
        .itemOutputs('16x ae2:fluix_crystal')
        .EUt(480)
        .duration(900);
    event.recipes.gtceu.crystal_chamber('certus4')
        .notConsumable('8x ae2:flawless_budding_quartz')
        .circuit(12)
        .itemOutputs('8x ae2:certus_quartz_dust')
        .EUt(480)
        .duration(600);
    event.recipes.gtceu.crystal_chamber('quartz4')
        .notConsumable('8x ae2:flawless_budding_quartz')
        .circuit(13)
        .itemOutputs('8x gtceu:nether_quartz_dust')
        .EUt(480)
        .duration(600);
    event.recipes.gtceu.crystal_chamber('fluix4')
        .notConsumable('8x ae2:flawless_budding_quartz')
        .itemInputs('8x #forge:dusts/redstone')
        .circuit(14)
        .itemOutputs('16x ae2:fluix_dust')
        .EUt(480)
        .duration(900);
    event.recipes.gtceu.crystal_chamber('certus5')
        .notConsumable('64x ae2:flawless_budding_quartz')
        .circuit(17)
        .itemOutputs('64x ae2:certus_quartz_crystal')
        .EUt(1920)
        .duration(600);
    event.recipes.gtceu.crystal_chamber('quartz5')
        .notConsumable('64x ae2:flawless_budding_quartz')
        .circuit(18)
        .itemOutputs('64x minecraft:quartz')
        .EUt(1920)
        .duration(600);
    event.recipes.gtceu.crystal_chamber('fluix5')
        .notConsumable('64x ae2:flawless_budding_quartz')
        .itemInputs('64x #forge:dusts/redstone')
        .circuit(19)
        .itemOutputs('128x ae2:fluix_crystal')
        .EUt(1920)
        .duration(900);
    event.recipes.gtceu.crystal_chamber('certus6')
        .notConsumable('64x ae2:flawless_budding_quartz')
        .circuit(20)
        .itemOutputs('64x ae2:certus_quartz_dust')
        .EUt(1920)
        .duration(600);
    event.recipes.gtceu.crystal_chamber('quartz6')
        .notConsumable('64x ae2:flawless_budding_quartz')
        .circuit(21)
        .itemOutputs('64x gtceu:nether_quartz_dust')
        .EUt(1920)
        .duration(600);
    event.recipes.gtceu.crystal_chamber('fluix6')
        .notConsumable('64x ae2:flawless_budding_quartz')
        .itemInputs('64x #forge:dusts/redstone')
        .circuit(22)
        .itemOutputs('128x ae2:fluix_dust')
        .EUt(1920)
        .duration(900);
})