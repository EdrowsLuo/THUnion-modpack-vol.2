ServerEvents.recipes(event=>{
    event.recipes.gtceu.circuit_assembler('1konestep')
        .itemInputs('#gtceu:circuits/mv','2x #ae2:all_certus_quartz','2x #forge:dusts/redstone')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .duration(20)
        .EUt(120)
        .itemOutputs('ae2:cell_component_1k');

    event.recipes.gtceu.circuit_assembler('4konestep')
        .itemInputs('#gtceu:circuits/hv','4x #gtceu:circuits/mv','4x #ae2:all_certus_quartz','4x #forge:dusts/redstone')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',72))
        .duration(20)
        .EUt(480)
        .itemOutputs('ae2:cell_component_4k');

    event.recipes.gtceu.circuit_assembler('16konestep')
        .itemInputs('#gtceu:circuits/ev','4x #gtceu:circuits/hv','8x #ae2:all_certus_quartz','8x #forge:dusts/redstone')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',144))
        .duration(20)
        .EUt(1920)
        .itemOutputs('ae2:cell_component_16k');

    event.recipes.gtceu.precision_assembler('64konestep')
        .itemInputs('#gtceu:circuits/iv','4x #gtceu:circuits/ev','16x #ae2:all_certus_quartz','16x #forge:dusts/redstone')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',288))
        .duration(20)
        .EUt(7680)
        .itemOutputs('ae2:cell_component_64k');

    event.recipes.gtceu.precision_assembler('256konestep')
        .itemInputs('#gtceu:circuits/luv','4x #gtceu:circuits/iv','32x #ae2:all_certus_quartz','32x #forge:dusts/redstone')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',576))
        .duration(20)
        .EUt(30720)
        .itemOutputs('ae2:cell_component_256k');

    event.recipes.gtceu.precision_assembler('1024konestep')
        .itemInputs('#gtceu:circuits/zpm','4x #gtceu:circuits/luv','64x #ae2:all_certus_quartz','64x #forge:dusts/redstone')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',1152))
        .duration(20)
        .EUt(122880)
        .itemOutputs('ae2additions:cell_component_1024');

    event.recipes.gtceu.precision_assembler('4096konestep')
        .itemInputs('#gtceu:circuits/uv','4x #gtceu:circuits/zpm','128x #ae2:all_certus_quartz','128x #forge:dusts/redstone')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',2304))
        .duration(20)
        .EUt(491520)
        .itemOutputs('ae2additions:cell_component_4096');

    event.recipes.gtceu.precision_assembler('16384konestep')
        .itemInputs('#gtceu:circuits/uhv','4x #gtceu:circuits/uv','256x #ae2:all_certus_quartz','8x #forge:dusts/redstone')
        .inputFluids(Fluid.of('gtceu:soldering_alloy',4608))
        .duration(20)
        .EUt(1966080)
        .itemOutputs('ae2additions:cell_component_16384');
    
})