const DIMENSION_HEALTH_MULTIPLIER = new VariableAttributeModifier(
    "minecraft:generic.max_health",
    "DIMENSION_HEALTH_MULTIPLIER",
    "1f9a1c25-dc6a-49ed-8303-71670d7e6076",
    "multiply_total")

const DIMENSION_DAMEGE_MULTIPLIER = new VariableAttributeModifier(
    "minecraft:generic.attack_damage",
    "DIMENSION_DAMEGE_MULTIPLIER",
    "d60a24b6-b58a-467a-b6aa-1ae9733b3454",
    "multiply_total")

EntityEvents.spawned(event => {
    /** @type {Internal.LivingEntity} */
    let entity = event.entity
    if (!entity || !entity.isLiving() || entity.isPlayer()) return

    if (event.level.dimension == "overworldmirror:overworld") {
        let health = 2, damage = 2
        let modify = false
        if(entity.isAnimal()) {
            health = 10
            modify = true
        }
        if(entity.isMonster()) {
            modify = true
        }
        if(isBoss(entity)) {
            damage = 4
            health = 4
            modify = true
        }
        if(modify) {
            DIMENSION_HEALTH_MULTIPLIER.initValue(entity, health)
            DIMENSION_DAMEGE_MULTIPLIER.initValue(entity, damage)
            entity.setHealth(entity.getMaxHealth())
        }
    }
})

