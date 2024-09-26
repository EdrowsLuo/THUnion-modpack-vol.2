const $FlightHelper = Java.loadClass("cy.jdkdigital.noflyzone.util.FlightHelper")

ServerEvents.tags("worldgen/structure", event =>{
    event.add("noflyzone:worldgen/structure/blacklist", [/cataclysm:.+/])
})

/**
 * 禁止飞行，并且之后一段时间内都禁止飞行
 * @param {Internal.Player} player 
 */
function stopFlying(player, timelimitS) {
    if(player.creative) return
    $FlightHelper.stopFlying(player)
    player.persistentData.flying = 0
    if(timelimitS != -1) {
        player.persistentData.flying_disabled_until = (player.persistentData.playTimeS | 0) + timelimitS
    }
}