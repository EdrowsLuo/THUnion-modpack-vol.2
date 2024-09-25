

const BOSS_HEALTH_MULTIPLIER = new VariableAttributeModifier(
    "minecraft:generic.max_health", 
    "BOSS_HEALTH_MULTIPLIER", 
    "31be8b44-54ab-42e4-9309-244cf5926f8d",
    "multiply_total")

AllBosses.forEach(boss => {
    EntityEvents.spawned(boss.entityId, event => {
        /**
         * @type {Internal.LivingEntity}
         */
        let entity = event.entity

        if(boss.healthMultiplier != 1.0) {
            BOSS_HEALTH_MULTIPLIER.initValue(entity, boss.healthMultiplier - 1)
            entity.setHealth(entity.getMaxHealth())
        }
    })
})


