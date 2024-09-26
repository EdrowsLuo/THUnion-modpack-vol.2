const $FlightHelper = Java.loadClass("cy.jdkdigital.noflyzone.util.FlightHelper")

ServerEvents.tags("worldgen/structure", event =>{
    event.add("noflyzone:worldgen/structure/blacklist", [/cataclysm:.+/])
})

/**
 * 
 * @param {Internal.Player} player 
 */
function stopFlying(player) {
    $FlightHelper.stopFlying(player)
    player.persistentData.flying = 0
}