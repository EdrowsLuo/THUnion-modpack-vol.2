ServerEvents.recipes(event=>{
    event.recipes.gtceu.mixer('hvma')
    .itemInputs('3x #forge:dusts/iron','#forge:dusts/nickel','#forge:dusts/cobalt')
    .EUt(480)
    .duration(20)
    .itemOutputs('5x gtceu:hv_magnetic_alloy_dust');
    event.recipes.gtceu.mixer('hvxa')
    .itemInputs('8x #forge:dusts/steel','#forge:dusts/chromium')
    .EUt(480)
    .duration(20)
    .itemOutputs('9x gtceu:hv_mechanical_alloy_dust');
    event.recipes.gtceu.mixer('hvca')
    .itemInputs('14x #forge:dusts/annealed_copper','#forge:dusts/silver','#forge:dusts/gold')
    .EUt(480)
    .duration(20)
    .itemOutputs('16x gtceu:hv_conductive_alloy_dust');
    prefabRecipe(event, GTValues.HV, 'hv');

    event.recipes.gtceu.mixer('evma')
    .itemInputs('6x #forge:dusts/neodymium','#forge:dusts/nickel','#forge:dusts/cobalt')
    .EUt(1920)
    .duration(20)
    .itemOutputs('8x gtceu:ev_magnetic_alloy_dust');
    event.recipes.gtceu.mixer('evxa')
    .itemInputs('4x #forge:dusts/titanium','4x #forge:dusts/stainless_steel')
    .EUt(1920)
    .duration(20)
    .itemOutputs('8x gtceu:ev_mechanical_alloy_dust');
    event.recipes.gtceu.mixer('evca')
    .itemInputs('5x #forge:dusts/annealed_copper','8x #forge:dusts/electrum','2x #forge:dusts/aluminium')
    .EUt(1920)
    .duration(20)
    .itemOutputs('15x gtceu:ev_conductive_alloy_dust');
    prefabRecipe(event, GTValues.EV, 'ev');

    event.recipes.gtceu.mixer('ivma')
    .itemInputs('7x #forge:dusts/trineodymium')
    .inputFluids(Fluid.of('gtceu:oxygen',1000))
    .EUt(7680)
    .duration(20)
    .itemOutputs('8x gtceu:iv_magnetic_alloy_dust');
    event.recipes.gtceu.mixer('ivxa')
    .itemInputs('7x #forge:dusts/tungsten','2x #forge:dusts/chromium','2x #forge:dusts/steel','#forge:dusts/gold','4x #forge:dusts/titanium')
    .EUt(7680)
    .duration(20)
    .itemOutputs('16x gtceu:iv_mechanical_alloy_dust');
    event.recipes.gtceu.mixer('ivca')
    .itemInputs('4x #forge:dusts/graphene','#forge:dusts/diamond')
    .EUt(7680)
    .duration(20)
    .itemOutputs('5x gtceu:iv_conductive_alloy_dust');
    prefabRecipe(event, GTValues.IV, 'iv');

    event.recipes.gtceu.mixer('luvma')
    .itemInputs('5x #forge:dusts/trineodymium','2x #forge:dusts/samarium','#forge:dusts/steel')
    .EUt(30720)
    .duration(20)
    .itemOutputs('8x gtceu:luv_magnetic_alloy_dust');
    event.recipes.gtceu.mixer('luvxa')
    .itemInputs('4x #forge:dusts/electrum','2x #forge:dusts/iridium','2x #forge:dusts/ruthenium','12x #forge:dusts/hsss','4x #forge:dusts/rhodium')
    .EUt(30720)
    .duration(20)
    .itemOutputs('24x gtceu:luv_mechanical_alloy_dust');
    event.recipes.gtceu.mixer('luvca')
    .itemInputs('2x #forge:dusts/ruthenium','4x #forge:dusts/silver','#forge:dusts/iridium','#forge:dusts/indium')
    .EUt(30720)
    .duration(20)
    .itemOutputs('8x gtceu:luv_conductive_alloy_dust');
    prefabRecipe(event, GTValues.LuV, 'luv');

    event.recipes.gtceu.mixer('zpmma')
    .itemInputs('2x #forge:dusts/trineodymium','4x #forge:dusts/lanthanum','#forge:dusts/holmium')
    .EUt(122880)
    .duration(20)
    .itemOutputs('7x gtceu:zpm_magnetic_alloy_dust');
    event.recipes.gtceu.mixer('zpmxa')
    .itemInputs('9x #forge:dusts/hsss','3x #forge:dusts/naquadah','#forge:dusts/rhenium')
    .EUt(122880)
    .duration(20)
    .itemOutputs('13x gtceu:zpm_mechanical_alloy_dust');
    event.recipes.gtceu.mixer('zpmca')
    .itemInputs('4x #forge:dusts/europium','#forge:dusts/scandium')
    .EUt(122880)
    .duration(20)
    .itemOutputs('5x gtceu:zpm_conductive_alloy_dust');
    prefabRecipe(event, GTValues.ZPM, 'zpm');

    event.recipes.gtceu.mixer('uvma')
    .itemInputs('#forge:dusts/trineodymium','4x #forge:dusts/holmium','#forge:dusts/enriched_naquadah')
    .EUt(491520)
    .duration(20)
    .itemOutputs('6x gtceu:uv_magnetic_alloy_dust');
    event.recipes.gtceu.mixer('uvxa')
    .itemInputs('15x #forge:dusts/naquadria','4x #forge:dusts/tritanium','2x #forge:dusts/duranium','#forge:dusts/gadolinium')
    .EUt(491520)
    .duration(20)
    .itemOutputs('22x gtceu:uv_mechanical_alloy_dust');
    event.recipes.gtceu.mixer('uvca')
    .itemInputs('2x #forge:dusts/americium','#forge:dusts/lutetium')
    .EUt(491520)
    .duration(20)
    .itemOutputs('3x gtceu:uv_conductive_alloy_dust');
    prefabRecipe(event, GTValues.UV, 'uv');

    event.recipes.gtceu.mixer('hyperblend')
    .itemInputs('#forge:dusts/redstone','#forge:dusts/glowstone')
    .EUt(120)
    .duration(50)
    .itemOutputs('gtceu:hyperblend_dust');

    event.recipes.gtceu.mixer('energetic_silver')
    .itemInputs('gtceu:hyperblend_dust','#forge:dusts/silver')
    .EUt(120)
    .duration(100)
    .itemOutputs('gtceu:energetic_silver_dust');

    event.recipes.gtceu.mixer('energetic_alloy')
    .itemInputs('gtceu:hyperblend_dust','#forge:dusts/gold')
    .EUt(480)
    .duration(100)
    .itemOutputs('gtceu:energetic_alloy_dust');
    
});

function prefabRecipe(event, tier, tiername){
    event.recipes.gtceu.forming_press(`${tiername}_prefab`)
    .itemInputs(`${2*tier-2}x gtceu:${tiername}_mechanical_alloy_plate`,
        `gtceu:${tiername}_magnetic_alloy_plate`,
        `gtceu:${tiername}_conductive_alloy_plate`
    )
    .EUt(GTValues.V[tier])
    .duration(200)
    .itemOutputs(`4x gtceu:${tiername}_component_alloy_plate`)
}