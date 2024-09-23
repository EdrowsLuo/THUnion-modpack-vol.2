const $BlockInfo=Java.loadClass('com.lowdragmc.lowdraglib.utils.BlockInfo');

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    let builder=event.create('beehive')
    .category('thunion')
    .setMaxIOSize(1,1,1,0)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    /**
     * @type {Internal.CustomMultiblockBuilder}
     */
    let builder=event.create('beehive', 'multiblock')
    
    builder.rotationState(RotationState.NON_Y_AXIS)
        .recipeType(GTRecipeTypes.get('beehive'))
        .workableCasingRenderer(
            "the_bumblezone:block/beehive_beeswax",
            "gtceu:block/machines/fermenter",
            false
        )
        
        .beforeWorking((machine,recipe)=>{
            try{
                if(recipe.data.getBoolean('queen')){
                    var meta=machine.self();
                    var level=meta.getLevel();
                    var pos=meta.getPos();
                    var facing=meta.getFrontFacing();
                    pos=pos.offset(facing.getOpposite().getNormal().multiply(3)).offset(0,1,0);
                    var result=false;
                    level.getEntitiesWithin(AABB.ofBlocks(pos.offset(3,3,3),pos.offset(-3,-3,-3))).forEach(entity=>{
                        if(entity.getType()==='the_bumblezone:bee_queen') result= true;
                    });
                    var te=level.getBlockEntity(pos);
                    if(te!=null){
                        if(te.getBlockState().getBlock().getId()==='ars_nouveau:mob_jar' && te.serializeNBT().toString().includes('the_bumblezone:bee_queen')){
                            result=true;
                        }
                    }
                    return result;
                }
            }catch(error){}
            return true;
        })
            
        .pattern(definition => FactoryBlockPattern.start()
	.aisle("#######", "##AAA##", "##BBB##", "##BBB##", "##BBB##", "##AAA##", "#######", "#######") 
	.aisle("##AAA##", "#AACAA#", "#B###B#", "#B###B#", "#B###B#", "#AA#AA#", "##AAA##", "#######") 
	.aisle("#AAAAA#", "AACCCAA", "B#####B", "B#####B", "B#####B", "AA###AA", "#AA#AA#", "##AAA##") 
	.aisle("#AAAAA#", "ACCCCCA", "B#####B", "B#####B", "B#####B", "A#####A", "#A###A#", "##AAA##") 
	.aisle("#AAAAA#", "AACCCAA", "B#####B", "B#####B", "B#####B", "AA###AA", "#AA#AA#", "##AAA##") 
	.aisle("##AAA##", "#AACAA#", "#B###B#", "#B###B#", "#B###B#", "#AA#AA#", "##AAA##", "#######") 
	.aisle("#######", "##A@A##", "##BBB##", "##BBB##", "##BBB##", "##AAA##", "#######", "#######") 
	.where("#", Predicates.any())
    .where("@", Predicates.controller(Predicates.blocks(definition.get())))
	.where("A", Predicates.blocks("the_bumblezone:beehive_beeswax").or(Predicates.autoAbilities(definition.getRecipeTypes())))
	.where("B", Predicates.blocks("minecraft:glass"))
	.where("C", Predicates.blocks("minecraft:honeycomb_block"))
	.build())
        
          
})


