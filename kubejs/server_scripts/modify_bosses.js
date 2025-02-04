
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
        boss.attributes.forEach(attr => {
            attr.initDefault(entity)
        })
    })

    if(!boss.allowFly) {
        EntityEvents.hurt(boss.entityId, event => {
            if(event.source.player) {
                let player = event.source.player
                if(player.creative) return
                if(player.persistentData.flying) {
                    player.tell("§6给我下来！")
                    stopFlying(player, 20)
                }
            }
        })
    }
})

ServerEvents.tags("entity_type", event => {
    AllBosses.forEach(boss => {
        if(!boss.drygmy) {
            event.add("ars_nouveau:drygmy_blacklist", boss.entityId)
            event.add("ars_nouveau:jar_blacklist", boss.entityId)
            event.add("ars_nouveau:jar_release_blacklist", boss.entityId)
        }
    })

    // let lines = ["=======[Apotheosis Spawner Blacklist]======="]
    // AllBosses.forEach(boss => {
    //     if(!boss.spawner) {
    //         lines.push(`    ${boss.entityId}`)
    //     }
    // })
    // lines.push("=======[Apotheosis Spawner Blacklist End]=======")
    
    // console.log(lines.join("\n"))

    // lines = ["=======[Death But Three]======="]
    // let db3 = []
    // AllBosses.forEach(boss => {
    //     if(boss.deathReset != -1) {
    //         db3.push(`"${boss.entityId};${boss.deathReset}"`)
    //     }
    // })
    // lines.push(db3.join(", "))
    // lines.push("=======[Death But Three End]=======")
    
    // console.log(lines.join("\n"))
})

LootJS.modifiers(event => {
    AllBosses.forEach(boss => {
        if(boss.extraDrop.length > 0) {
            let builder = event.addEntityLootModifier(boss.entityId)
            builder.addLoot(boss.extraDrop)
        }

        if(boss.deathReset > 0) {
            event.addEntityLootModifier(boss.entityId).randomChance(0.33).addLoot(LootEntry.of("kubejs:battle_core"))
        }
    })
})
