ServerEvents.recipes(event => {
    /** @type {Internal.Item_[]} */
    let trophy = [
        "twilightforest:lich_trophy",
        "twilightforest:naga_trophy",
        "twilightforest:hydra_trophy",
        "twilightforest:ur_ghast_trophy",
        "twilightforest:quest_ram_trophy",
        "twilightforest:alpha_yeti_trophy",
        "twilightforest:minoshroom_trophy",
        "twilightforest:snow_queen_trophy",
        "twilightforest:knight_phantom_trophy",
    ]

    trophy.forEach(t => {
        event.recipes.minecraft.crafting_shapeless("2x twilighttweaks:time_powder", [t])
    })
    
})