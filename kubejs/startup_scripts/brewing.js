
MoreJSEvents.registerPotionBrewing(event => {
    // 限制飞行
    event.removeByPotion(null, null, "minecraft:slow_falling")
    event.addPotionBrewing("l2complements:storm_core", "minecraft:slow_falling")
})