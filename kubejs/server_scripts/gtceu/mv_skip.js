ServerEvents.recipes(event=>{
    ['white','light_gray','gray','black','brown','red','orange','yellow','lime','green','cyan','light_blue','blue','purple','magneta','pink'].forEach(
        color=>{coloredGlassLens(event,color)}
    );
});


function coloredGlassLens(event, color){
    event.recipes.gtceu.lathe(`kjs/lens_${color}`)
        .itemInputs(`minecraft:${color}_stained_glass`)
        .itemOutputs(`gtceu:${color}_glass_lens`,'gtceu:small_glass_dust')
        .duration(600)
        .EUt(120);

}