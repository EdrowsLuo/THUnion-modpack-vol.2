ServerEvents.recipes(event => {



    event.shaped(
        'gtceu:beehive',
        [
            'BDB',
            'HJH',
            'BDB'
        ], {
        B: 'minecraft:beehive',
        D: 'gtceu:hv_robot_arm',
        J: 'the_bumblezone:royal_jelly_bottle',
        H: 'minecraft:honeycomb_block'
    });

    event.recipes.gtceu.beehive('test_1')
        .circuit(1)
        .duration(100)
        .EUt(120)
        .addData('queen',false)
        .itemOutputs('minecraft:honey_bottle');

    event.recipes.gtceu.beehive('test_2')
        .circuit(2)
        .duration(100)
        .EUt(1920)
        .addData('queen',true)
        .itemOutputs('the_bumblezone:royal_jelly_bottle');
    
    });