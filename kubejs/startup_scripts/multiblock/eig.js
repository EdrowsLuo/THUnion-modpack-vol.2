GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    let builder=event.create('eig_input')
    .category('thunion')
    .setMaxIOSize(2, 9, 0, 0)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.TURBINE);
})
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    let builder=event.create('eig_output')
    .category('thunion')
    .setMaxIOSize(2, 1, 0, 0)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.TURBINE);
})
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    let builder=event.create('eig_working')
    .category('thunion')
    .setMaxIOSize(2, 1, 0, 0)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.TURBINE);
})


GTCEuStartupEvents.registry('gtceu:machine', event => {
    const $GTRecipeCapabilities=Java.loadClass('com.gregtechceu.gtceu.common.data.GTRecipeCapabilities');
    const $ContentModifier=Java.loadClass('com.gregtechceu.gtceu.api.recipe.content.ContentModifier');
	
	/**
     * @type {Internal.CustomMultiblockBuilder}
     */
    let builder=event.create('eig', 'multiblock')

	
    for(let i=0;i<=10;i++) builder.tooltips(Component.translatable(`desc.${builder.id}.${i}`));
    builder.rotationState(RotationState.NON_Y_AXIS)

        .recipeTypes([GTRecipeTypes.get('eig_input'),GTRecipeTypes.get('eig_output'),GTRecipeTypes.get('eig_working')])
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/machines/distillery",
            false
        )
		.alwaysTryModifyRecipe(true)
		
		.recipeModifiers(true,[
			(/** @type {Internal.IWorkableMultiController} */ machine,/** @type {Internal.GTRecipe} */ recipe,params,result)=>{
				console.log(recipe.getType());
				console.log(recipe.id);


				var circuitId=0;
				
					machine.getParts().forEach(part=>{
						part.getRecipeHandlers().forEach(trait=>{
							if(trait.getHandlerIO().toString()==='IN' && trait.getCapability()==$GTRecipeCapabilities.ITEM){
								trait.getContents().forEach((/** @type {Internal.ItemStack} */ content)=>{
									try{
										if(content.id==='gtceu:programmed_circuit'){
											circuitId=content.getNbt().getShort("Configuration");
										}
										
									}catch(error){console.log(error);}
								})
							}
						})
					})
				
				console.log(circuitId);
				if(circuitId==1){

					recipe.outputs.clear();
					var parallel=machine.self().getHolder().self().persistentData.getInt('current_parallel');
					if(parallel>=64){
						return null;
					}else{
						recipe.duration=1;
						return recipe;
					}
				}else if(circuitId==3){
					recipe.outputs.clear();
					var t=0;
					machine.self().getHolder().self().persistentData.getAllKeys().forEach(key=>{
						console.log(key);
						if(key.indexOf('gtceu')!=-1){
							var count=machine.self().getHolder().self().persistentData.getInt(key);
							for(var i=1;i<=count;i++){
								var cr=GTRecipeTypes.get('eig_input').getRecipe(machine.getRecipeLogic().getRecipeManager(),key).copy();
								var eu=cr.tickInputs.get($GTRecipeCapabilities.EU).get(0).content;
								t+=eu;
								var currentOutput=recipe.outputs.get($GTRecipeCapabilities.ITEM);
								if(currentOutput==null){
									recipe.outputs.put($GTRecipeCapabilities.ITEM,cr.getOutputContents($GTRecipeCapabilities.ITEM));
								}else{
									currentOutput.addAll(cr.getOutputContents($GTRecipeCapabilities.ITEM));
									recipe.outputs.put($GTRecipeCapabilities.ITEM,currentOutput);
								}
							}
						}
					})
					console.log(t);
					recipe.tickInputs.replace($GTRecipeCapabilities.EU,recipe.copyContents(recipe.tickInputs,$ContentModifier.addition(t)).get($GTRecipeCapabilities.EU));
					recipe=GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK).apply(machine,recipe,params,result);
					return recipe;
				}else if(circuitId==2){
					recipe.outputs.clear();
					var toRemove=[];
					if(machine.self().getHolder().self().persistentData.getInt('current_parallel')<=0){
						return null;
					}
					machine.self().getHolder().self().persistentData.getAllKeys().forEach(key=>{
						if(key.indexOf('gtceu')!=-1){
							var count=machine.self().getHolder().self().persistentData.getInt(key);
							for(var i=1;i<=count;i++){
								var cr=GTRecipeTypes.get('eig_input').getRecipe(machine.getRecipeLogic().getRecipeManager(),key).copy();
								console.log(cr);
								var currentOutput=recipe.outputs.get($GTRecipeCapabilities.ITEM);
								if(currentOutput==null){
									recipe.outputs.put($GTRecipeCapabilities.ITEM,cr.getInputContents($GTRecipeCapabilities.ITEM));
								}else if(cr.getInputContents($GTRecipeCapabilities.ITEM)!=null){
									currentOutput.addAll(cr.getInputContents($GTRecipeCapabilities.ITEM));
									recipe.outputs.put($GTRecipeCapabilities.ITEM,currentOutput);
								}
							}
							toRemove.push(key);
						}
						
					})
					toRemove.forEach(key=>{
						machine.self().getHolder().self().persistentData.remove(key);
					})
					machine.self().getHolder().self().persistentData.putInt('current_parallel',0);
					return recipe;
				}
				return null;
			}
		])
		.afterWorking(machine=>{
			var recipe=machine.getRecipeLogic().lastOriginRecipe;
			var circuitId=0;
			machine.getParts().forEach(part=>{
				part.getRecipeHandlers().forEach(trait=>{
					if(trait.getHandlerIO().toString()==='IN' && trait.getCapability()==$GTRecipeCapabilities.ITEM){
						trait.getContents().forEach((/** @type {Internal.ItemStack} */ content)=>{
							try{
								if(content.id==='gtceu:programmed_circuit'){
									circuitId=content.getNbt().getShort("Configuration");
								}
							}catch(error){console.log(error);}
						})
					}
				})
			})
			console.log(circuitId);
			if(circuitId==1){
				var parallel=machine.self().getHolder().self().persistentData.getInt('current_parallel');
				if(parallel<64){
					var id=recipe.id;
					if(id.toString().indexOf('dummy')==-1){
						machine.self().getHolder().self().persistentData.putInt('current_parallel',parallel+1);
						var count=machine.self().getHolder().self().persistentData.getInt(id);
						machine.self().getHolder().self().persistentData.putInt(id,count+1);
					}	
					
				}
			}
		})
		.pattern(definition => FactoryBlockPattern.start()
	.aisle("###############", "###############", "###############", "###############", "#####BBBBB#####", "####BBBBBBB####", "####BBBBBBB####", "####BBBBBBB####", "####CCCCCCC####", "####CCCCCCC####", "#####CCCCC#####", "###############", "###############", "###############", "###############") 
	.aisle("###############", "###############", "######BBB######", "####BBBBBBB####", "###BBBDDDBBB###", "###BBDDDDDBB###", "##BBADDADDABB##", "##BBEFFEFFEBB##", "##CC#######CC##", "###CC#####CC###", "###CCC###CCC###", "####CCCCCCC####", "######CCC######", "###############", "###############") 
	.aisle("###############", "######BBB######", "####BBBBBBB####", "###BBDDDDDBB###", "##BBDDDDDDDBB##", "##BDDDDDDDDDB##", "#BBDDDDDDDDDBB#", "#BBFFFFFFFFFBB#", "#CC#########CC#", "##C#########C##", "##CC#######CC##", "###CC#####CC###", "####CCCCCCC####", "######CCC######", "###############") 
	.aisle("###############", "####BBBBBBB####", "###BBDDDDDBB###", "##BDDDDDDDDDB##", "#BBDDDDDDDDDBB#", "#BDDDDDDDDDDDB#", "#BDDDDDDDDDDDB#", "#BFFFFFFFFFFFB#", "#C###########C#", "#C###########C#", "#CC#########CC#", "##C#########C##", "###CC#####CC###", "####CCCCCCC####", "###############") 
	.aisle("#####BBBBB#####", "###BBBDDDBBB###", "##BBDDDDDDDBB##", "#BBDDDDDDDDDBB#", "#BDDDDDDDDDDDB#", "BBDDDDDDDDDDDBB", "BADDADDADDADDAB", "BEFFEFFEFFEFFEB", "C#############C", "CC###########CC", "#C###########C#", "#CC#########CC#", "##CC#######CC##", "###CCC###CCC###", "#####CCCCC#####") 
	.aisle("####BBBBBBB####", "###BBDDDDDBB###", "##BDDDDDDDDDB##", "#BDDDDDDDDDDDB#", "BBDDDDDDDDDDDBB", "BDDDDDDDDDDDDDB", "BDDDDDDDDDDDDDB", "BFFFFFFFFFFFFFB", "C#############C", "C#############C", "CC###########CC", "#C###########C#", "##C#########C##", "###CC#####CC###", "####CCCCCCC####") 
	.aisle("####BBBBBBB####", "##BBDDDDDDDBB##", "#BBDDDDDDDDDBB#", "#BDDDDDDDDDDDB#", "BDDDDDDDDDDDDDB", "BDDDDDDDDDDDDDB", "BDDDDDDDDDDDDDB", "BFFFFFFFFFFFFFB", "C#############C", "C#############C", "C#############C", "#C###########C#", "#CC#########CC#", "##CC#######CC##", "####CCCCCCC####") 
	.aisle("####BBBBBBB####", "##BBDDDDDDDBB##", "#BBDDDDDDDDDBB#", "#BDDDDDDDDDDDB#", "BDDDDDDDDDDDDDB", "BDDDDDDDDDDDDDB", "BADDADDADDADDAB", "BEFFEFFEFFEFFEB", "C#############C", "C#############C", "C#############C", "#C###########C#", "#CC#########CC#", "##CC#######CC##", "####CCCCCCC####") 
	.aisle("####BBBBBBB####", "##BBDDDDDDDBB##", "#BBDDDDDDDDDBB#", "#BDDDDDDDDDDDB#", "BDDDDDDDDDDDDDB", "BDDDDDDDDDDDDDB", "BDDDDDDDDDDDDDB", "BFFFFFFFFFFFFFB", "C#############C", "C#############C", "C#############C", "#C###########C#", "#CC#########CC#", "##CC#######CC##", "####CCCCCCC####") 
	.aisle("####BBBBBBB####", "###BBDDDDDBB###", "##BDDDDDDDDDB##", "#BDDDDDDDDDDDB#", "BBDDDDDDDDDDDBB", "BDDDDDDDDDDDDDB", "BDDDDDDDDDDDDDB", "BFFFFFFFFFFFFFB", "C#############C", "C#############C", "CC###########CC", "#C###########C#", "##C#########C##", "###CC#####CC###", "####CCCCCCC####") 
	.aisle("#####BBBBB#####", "###BBBDDDBBB###", "##BBDDDDDDDBB##", "#BBDDDDDDDDDBB#", "#BDDDDDDDDDDDB#", "BBDDDDDDDDDDDBB", "BADDADDADDADDAB", "BEFFEFFEFFEFFEB", "C#############C", "CC###########CC", "#C###########C#", "#CC#########CC#", "##CC#######CC##", "###CCC###CCC###", "#####CCCCC#####") 
	.aisle("###############", "####BBBBBBB####", "###BBDDDDDBB###", "##BDDDDDDDDDB##", "#BBDDDDDDDDDBB#", "#BDDDDDDDDDDDB#", "#BDDDDDDDDDDDB#", "#BFFFFFFFFFFFB#", "#C###########C#", "#C###########C#", "#CC#########CC#", "##C#########C##", "###CC#####CC###", "####CCCCCCC####", "###############") 
	.aisle("###############", "######BBB######", "####BBBBBBB####", "###BBDDDDDBB###", "##BBDDDDDDDBB##", "##BDDDDDDDDDB##", "#BBDDDDDDDDDBB#", "#BBFFFFFFFFFBB#", "#CC#########CC#", "##C#########C##", "##CC#######CC##", "###CC#####CC###", "####CCCCCCC####", "######CCC######", "###############") 
	.aisle("###############", "###############", "######BBB######", "####BBBBBBB####", "###BBBDDDBBB###", "###BBDDDDDBB###", "##BBADDADDABB##", "##BBEFFEFFEBB##", "##CC#######CC##", "###CC#####CC###", "###CCC###CCC###", "####CCCCCCC####", "######CCC######", "###############", "###############") 
	.aisle("###############", "###############", "###############", "###############", "#####BBBBB#####", "####BBBBBBB####", "####BBB@BBB####", "####BBBBBBB####", "####CCCCCCC####", "####CCCCCCC####", "#####CCCCC#####", "###############", "###############", "###############", "###############") 
	.where("A", Predicates.blocks("minecraft:glowstone"))
	.where("#", Predicates.any())
	.where("B", Predicates.blocks("gtceu:clean_machine_casing").or(Predicates.autoAbilities(definition.getRecipeTypes())))
	.where("@", Predicates.controller(Predicates.blocks(definition.get())))
	.where("C", Predicates.blocks("minecraft:glass"))
	.where("D", Predicates.blocks("minecraft:dirt"))
	.where("E", Predicates.blocks("minecraft:water"))
	.where("F", Predicates.blocks("farmersdelight:rich_soil_farmland"))
	.build());
});
