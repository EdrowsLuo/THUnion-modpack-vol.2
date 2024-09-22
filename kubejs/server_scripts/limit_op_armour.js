/**
 * 主要是删除meka套和无尽套
 * 允许龙研套，
 */


ServerEvents.recipes(event => {
    banAll(event, [
        "mekanism:mekasuit_helmet",
        "mekanism:mekasuit_bodyarmor",
        "mekanism:mekasuit_pants",
        "mekanism:mekasuit_boots",
        "mekanism:meka_tool",
        "mekanism:jetpack",
        "mekanism:jetpack_armored",
        "mekanism:free_runners",
        "mekanism:free_runners_armored",
        "avaritia:infinity_helmet",
        "avaritia:infinity_chestplate",
        "avaritia:infinity_pants",
        "avaritia:infinity_boots",
        "avaritia:infinity_bow",
        "avaritia:infinity_pickaxe",
        "avaritia:infinity_totem"
    ])
    
})