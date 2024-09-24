

ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingUseTotemEvent", event => {
    if(event.entity.isPlayer()) {
        let player = event.entity
        let totemUsed = player.persistentData.totemUsed || 0
        if(totemUsed == 0) {
            player.tell("§6§l本次轮回已经受到了图腾的诅咒！")
            player.persistentData.totemUsed = 1
        } else {
            player.tell("§4§l命运不再眷顾于你")
            event.setCanceled(true)
        }
    }
})


