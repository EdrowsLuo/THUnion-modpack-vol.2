ServerEvents.recipes(event=>{
    event.shaped(
        Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:magnetic_caves"}'),
        [
            'SAS',
            'SBS',
            'SCS'
        ], {
        S: 'minecraft:stone',
        A: 'minecraft:iron_ingot',
        B: 'minecraft:redstone',
        C: 'minecraft:lapis_lazuli'
    });
    event.shaped(
        Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:toxic_caves"}'),
        [
            'SAS',
            'SBS',
            'SAS'
        ], {
        S: 'minecraft:stone',
        A: 'create_new_age:thorium',
        B: 'alltheores:uranium_ingot'
    });
    event.shaped(
        Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:abyssal_chasm"}'),
        [
            'SAS',
            'SAS',
            'SAS'
        ], {
        S: 'minecraft:stone',
        A: '#minecraft:fishes'
    });
    event.shaped(
        Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:forlorn_hollows"}'),
        [
            'SAS',
            'SBS',
            'SCS'
        ], {
        S: 'minecraft:stone',
        A: 'minecraft:granite',
        B: 'minecraft:andesite',
        C: 'minecraft:diorite'
    });
    event.shaped(
        Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:primordial_caves"}'),
        [
            'SAS',
            'SAS',
            'SAS'
        ], {
        S: 'minecraft:stone',
        A: 'minecraft:grass'
    });
    event.shaped(
        'alexscaves:spelunkery_table',
        [
            'SAS',
            'SBS',
            'SCS'
        ], {
        S: 'minecraft:stone',
        A: 'minecraft:crafting_table',
        B: 'minecraft:writable_book',
        C: 'minecraft:cartography_table'
    });
});