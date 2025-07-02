// priority: 0

ServerEvents.recipes(event => {
    MakeTeleportationCore(event)
    MakeOreCore(event)
    MakeMechanicalCore(event)
    MakeCraftCore(event)
    MakeGoldenSweetBerries(event)
})

LootJS.modifiers((event) => {
    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.05)
        .addLoot(LootEntry.of("kubejs:treasure_core"));
    event.addEntityLootModifier("artifacts:mimic")
        .randomChance(0.8)
        .addLoot(LootEntry.of("kubejs:treasure_core"),);
});

ItemEvents.firstRightClicked("ars_nouveau:green_archwood_leaves", event => {
    if(event.item.count >= 32 && playerInBiome(event.player, "alexscaves:primordial_caves")) {
        event.item.shrink(32)
        event.player.give("kubejs:growth_core")

        let player = event.player
        event.level.runCommandSilent(`particle minecraft:glow ${player.x} ${player.eyeY} ${player.z} 1 1 1 0.1 100 normal`);
    }
})

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
function MakeGoldenSweetBerries(event) {
    event.recipes.create.mechanical_crafting(
        "kubejs:golden_sweet_berries",
        [
            "12345",
            "67890",
            "AB*CD",
            "EFGHI",
            "JKLMN"
        ],
        autoPatternId("*1234567890ABCDEFGHIJKLMN",[
            "create_confectionery:ruby_chocolate_glazed_berries",
            "draconicevolution:dragon_heart",
            "mekanism:pellet_antimatter",
            "alexsmobs:void_worm_eye",
            "alexscaves:tremorzilla_egg",
            "biggerreactors:ludicrite_block",
            "bigger_ae2:digital_singularity_flux_storage_cell",
            "gtceu:ev_world_accelerator",
            "the_bumblezone:essence_of_the_bees",
            "deeperdarker:sonorous_staff",
            "jerotesvillage:second_round_world_teleport_stone",
            "cataclysm:void_forge",
            "cataclysm:abyssal_egg",
            "draconicevolution:wyvern_core",
            "tomeofblood:archmage_tome_of_blood",
            "apotheosis:library",
            "soulsweapons:frostmourne",
            "umapyoi:crystal_rainbow",
            "allthecompressed:allthemodium_block_2x",
            "bosses_of_mass_destruction:charged_ender_pearl",
            "celestial_artifacts:life_etching",
            "l2complements:eternal_anvil",
            "l2complements:space_shard",
            "aquaculture:neptunium_block",
            "irons_spellbooks:dragonskin_spell_book"
        ])
    )
}


function MakeTeleportationCore(event) {
    event.remove({ output: "mekanism:teleportation_core"})
    event.custom({
        "type":"lychee:item_inside",
        "item_in": { "item": "kubejs:mechanical_core" },
        "block_in": { "blocks": ["minecraft:nether_portal"] },
        "post":  {  "type": "drop_item",  "item": "mekanism:teleportation_core"}
    })
}

function MakeOreCore(event) {
    event.shaped(
        "kubejs:ore_core_uncompleted",
        [
            "ABC",
            "DEF",
            "GHI"
        ],
        autoPatternId(
            "ABCDEFGHI",
            [
                "#forge:ores/copper",
                "#forge:ores/iron",
                "#forge:ores/gold",
                "#forge:ores/diamond",
                "#forge:ores/aluminum",
                "#forge:ores/lead",
                "#forge:ores/nickel",
                "#forge:ores/osmium",
                "#forge:ores/zinc",
                "#forge:ores/redstone",
            ]
        )
    )

    event.custom({
        "type": "lychee:block_crushing",
        "item_in": [
            { "item": "kubejs:ore_core_uncompleted" },
            { "item": "create:sand_paper"}
        ],
        "post": [
            {
                "type": "drop_item",
                "item": "kubejs:ore_core",
                "count": 2
            }
        ]
    })
}

function MakeMechanicalCore(event) {
    event.recipes.create.crushing(
        Item.of("kubejs:mechanical_core", 16),
        "create:mechanical_arm"
    )
}

function MakeCraftCore(event) {
    event.recipes.create.mechanical_crafting('kubejs:craft_core', 
    [
        'D'
    ], 
    {
        D: "create:mechanical_crafter"
    })
}

