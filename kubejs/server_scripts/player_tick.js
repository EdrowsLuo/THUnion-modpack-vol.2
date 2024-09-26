

PlayerEvents.tick(event => {
    let player = event.player
    let tickCount = player.persistentData.tickCounter | 0
    tickCount += 1
    if(tickCount >= 120) {
        tickCount = 0
    }
    player.persistentData.tickCounter = tickCount

    if(tickCount % 20 === 0) {
        player.persistentData.flying = $FlightHelper.isFlying(player)
    }
})
