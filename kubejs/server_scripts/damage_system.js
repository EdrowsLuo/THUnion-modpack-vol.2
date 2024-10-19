
EntityEvents.hurt(event=>{
    if(event.getSource().getType()=="attributeslib:current_hp_damage"){
        event.cancel()
    }
    if(event.source.player && event.entity.isPlayer() && event.player.offHandItem.id != "minecraft:skeleton_skull") {
        if(event.source.player.UUID != event.entity.UUID) {
            event.cancel()
        }
    }
})
