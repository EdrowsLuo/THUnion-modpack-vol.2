
ServerEvents.recipes(event => {
    ['chicken','cod','cow','glow_squid','mooshroom','pig','rabbit','polar_bear','squid','snow_golem','sheep'].forEach(entity=>
        addModel(event, entity, 30, 100)
    );
    
    ['ars_nouveau/wilden_mobs','blaze','creeper','drowned','ghast','guardian','hoglin','magma_cube','phantom','skeleton','slime',
        'spider','twilightforest/death_tomb','twilightforest/deer','twilightforest/raven','twilight_forest/stable_ice_core','witch','zombie','zombified_piglin'
    ].forEach(entity=>
        addModel(event, entity, 120, 400)
    );
    
    ['elder_guardian','enderman','evoker','iron_golem','shulker','twilightforest/giant','twilightforest/kobold','twilightforest/goblin',
        'wither_skeleton','twilightforest/winter_wolf','twilightforest/redcap','twilightforest/helmet_crab','twilightforest/troll',
        'twilightforest/naga','twilightforest/minotaur','twilightforest/fire_beetle','twilightforest/carminite_golem','twilightforest/towerwood_borer',
        'vindicator','twilightforest/lich','twilightforest/yeti','twilightforest/wraith','twilightforest/skeleton_druid'
    ].forEach(entity=>
        addModel(event, entity, 480, 1600)
    );

    ['artifacts/mimic','wither','ender_dragon','warden','twilightforest/snow_queen','twilightforest/hydra','twilightforest/minoshroom','twilightforest/alpha_yeti'
    ].forEach(entity=>
        addModel(event, entity, 1920, 6400)
    );

    ['twilightforest/ur_ghast','allthemodium/piglich'
    ].forEach(entity=>
        addModel(event, entity, 7680, 25600)
    );
    
})

function addModel(event, entity, voltage, outputValue){
    event.recipes.gtceu.digital_well_of_suffer('dwos_'+entity)
        .outputFluids(Fluid.of('bloodmagic:life_essence_fluid',outputValue))
        .notConsumable(Item.of('hostilenetworks:data_model', {data_model:{id:'hostilenetworks:'+entity}}).weakNBT())
        .EUt(voltage)
        .duration(20);
}