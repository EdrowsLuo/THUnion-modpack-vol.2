const $PotionBuilder = Java.loadClass("dev.latvian.mods.kubejs.misc.PotionBuilder")

MoreJSEvents.registerPotionBrewing(event => {
    // 限制飞行
    event.removeByPotion(null, null, "minecraft:slow_falling")
    event.removeByPotion(null, null, "apotheosis:flying")
    event.removeByPotion(null, null, "apotheosis:long_flying")
    event.removeByPotion(null, null, "apotheosis:extra_long_flying")
    event.addPotionBrewing("l2complements:storm_core", "minecraft:awkward", "minecraft:slow_falling")
    event.addPotionBrewing("minecraft:popped_chorus_fruit", "apotheosis:levitation", 'ars_nouveau:flight')
    event.addPotionBrewing("ars_nouveau:manipulation_essence", 'ars_nouveau:flight', 'ars_nouveau:long_flight')
    event.addPotionBrewing("ars_nouveau:manipulation_essence", 'ars_nouveau:long_flight', 'ars_nouveau:extra_long_flight')
})

StartupEvents.registry("minecraft:potion", event => {
    event.createCustom('ars_nouveau:flight', () => new $PotionBuilder('ars_nouveau:flight').effect('ars_nouveau:flight', 15*60*20).createObject())
    event.createCustom('ars_nouveau:long_flight', () => new $PotionBuilder('ars_nouveau:long_flight').effect('ars_nouveau:flight', 30*60*20).createObject())
    event.createCustom('ars_nouveau:extra_long_flight', () => new $PotionBuilder('ars_nouveau:extra_long_flight').effect('ars_nouveau:flight', 60*60*20).createObject())
})