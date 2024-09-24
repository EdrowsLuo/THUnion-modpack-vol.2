
EntityEvents.death("minecraft:player", event => {
    event.player.persistentData.totemUsed = 0
})
