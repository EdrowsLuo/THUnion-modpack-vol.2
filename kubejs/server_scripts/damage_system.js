
EntityEvents.hurt(event=>{
    if(event.getSource().getType()=="attributeslib:current_hp_damage"){
        event.cancel()
    }
    if(event.source.player && event.entity.isPlayer()) {
        event.damage = 0
    }
})
