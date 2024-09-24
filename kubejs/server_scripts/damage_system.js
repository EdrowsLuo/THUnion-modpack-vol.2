
EntityEvents.hurt(event=>{
    if(event.getSource().getType()=="attributeslib:current_hp_damage"){
        event.cancel()
    }
})
