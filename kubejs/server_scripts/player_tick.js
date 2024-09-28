

PlayerEvents.tick(event => {
    let player = event.player
    let tickCount = player.persistentData.tickCounter | 0
    tickCount += 1
    if(tickCount >= 120) {
        tickCount = 0
    }

    player.persistentData.tickCounter = tickCount

    if(tickCount % 20 === 0) {
        let playTimeS = (player.persistentData.playTimeS | 0) + 1
        player.persistentData.playTimeS = playTimeS


        player.persistentData.flying = $FlightHelper.isFlying(player)

        if((!player.creative) && player.persistentData.flying && player.persistentData.flying_disabled_until >= playTimeS) {
            stopFlying(player, -1)
        }
    }
})


PlayerEvents.inventoryChanged("tombstone:soul_receptacle", event => {
    event.item.shrink(event.item.count)
})

