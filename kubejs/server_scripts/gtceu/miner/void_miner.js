ServerEvents.recipes(event=>{
    event.shaped(
        'gtceu:void_miner',
        [
            'MMM',
            'WHW',
            'CSC'
        ], {
        C: '#gtceu:circuits/ev',
        H: `gtceu:ev_machine_hull`,
        M: 'gtceu:ev_electric_motor',
        S: 'gtceu:ev_sensor',
        W: 'gtceu:aluminium_single_cable'
    })

    var overallCounter=0;
    var tieredDrill=['steel','aluminium','stainless_steel','titanium','tungsten_steel','naquadah_alloy','duranium','neutronium'];

    function addOreRecipe(list, baseMat, posYmin, posYmax, tier, voltage){
        var builder=event.recipes.gtceu.void_miner(`miner_${overallCounter}`);
        overallCounter++;
        builder.circuit(overallCounter)//posY(posYmin,posYmax) //stone area
        .notConsumable(`gtceu:${tieredDrill[tier-1]}_drill_head`)
        .EUt(voltage)
        .dimension('allthemodium:mining')
        .inputFluids(Fluid.of('gtceu:drilling_fluid',100))
        .duration(200);

        list.forEach(ore=>{
            builder.chancedOutput(`gtceu:${baseMat}${ore}_ore`,1000,1000);
        });
    }

    

    var t8en=[
        'duranium',
        'tritanium',
        'neutronium'
    ];

    var t7en=[
        'naquadria',
        'europium',
        'americium',
        'trinium'
    ];

    var t6en=[
        'rhodium',
        'ruthenium',
        'osmium',
        'iridium',
        'enriched_naquadah'
    ];

    var t5en=[
        'scheelite',
        'tungstate',
        'lithium',
        'platinum',
        'palladium',
        'cooperite'
    ];

    var t4en=[
        'ilmenite',
        'aluminium',
        'naquadah',
        'plutonium',
        'chromite',
        'pitchblende',
        'uraninite'
    ];

    var t4ne=[
        'bastnasite',
        'monazite',
        'neodymium',
        'beryllium',
        'emerald',
        'wulfenite',
        'powellite',
        'molybdenum',
        'molybdenite'
    ];

    var t3ne=[
        'tetrahedrite',
        'stibnite',
        'electrotine',
        'saltpeter',
        'alunite',
        'quartzite',
        'certus_quartz',
        'barite',
        'topaz',
        'blue_topaz',
        'chalcocite',
        'bornite',
        'nether_quartz',
        'sphalerite',
        'sulfur'
    ];
    var t3ds=[
        'bentonite',
        'olivine',
        'grossular',
        'spessartine',
        'tantalite',
        'pyrolusite',
        'kyanite',
        'bauxite',
        'mica',
        'pollucite'
    ];
    var t2ds=[
        'soapstone',
        'talc',
        'glauconite_sand',
        'pentlandite',
        'lazurite',
        'sodalite',
        'calcite',
        'lapis',
        'galena',
        'silver',
        'lead',
        'red_garnet',
        'yellow_garnet',
        'amethyst',
        'opal',
        'apatite',
        'tricalcium_phosphate',
        'pyrochlore',
        'oilsands',
        'graphite',
        'diamond'
    ];
    var t1ow=[
        'goethite',
        'yellow_garnet',
        'malachite',
        'hematite',
        'chalcopyrite',
        'coal',
        'iron',
        'copper',
        'pyrite',
        'magnetite',
        'vanadium_magnetite',
        'gold',
        'tin',
        'cassiterite',
        'granitic_mineral_sand',
        'basaltic_mineral_sand',
        'gypsum',
        'fullers_earth',
        'asbestos',
        'garnet_sand',
        'diatomite'
    ];

    var t2ow=[
        'zeolite',
        'realgar',
        'salt',
        'rock_salt',
        'lepidolite',
        'spodumene',
        'redstone',
        'cinnabar',
        'ruby',
        'pyrope',
        'almandine',
        'sapphire',
        'green_sapphire'
    ];

    addOreRecipe(t1ow,'',128,256,1,30);
    addOreRecipe(t2ow,'',128,256,2,120);
    addOreRecipe(t2ds,'deepslate_',64,128,2,120);
    addOreRecipe(t3ds,'deepslate_',64,128,3,480);
    addOreRecipe(t3ne,'netherrack_',0,64,3,480);
    addOreRecipe(t4ne,'netherrack_',0,64,4,1920);
    addOreRecipe(t4en,'endstone_',-64,0,4,1920);
    addOreRecipe(t5en,'endstone_',-64,0,5,7680);
    addOreRecipe(t6en,'endstone_',-64,0,6,30720);
    addOreRecipe(t7en,'endstone_',-64,0,7,122880);
    addOreRecipe(t8en,'endstone_',-64,0,8,491520);
    
})