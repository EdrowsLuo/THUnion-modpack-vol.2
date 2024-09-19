
const basementBlocks=['twilightforest:blue_force_field','twilightforest:green_force_field','twilightforest:blue_castle_rune_brick','twilightforest:yellow_castle_rune_brick'];

ServerEvents.recipes(event=>{
    event.remove({output:'mokels_witch_boss:totem_of_rot_and_decay'});
});

BlockEvents.rightClicked(event=>{
    var block=event.getBlock();
    var level=event.getLevel();
    var hand=event.getHand();
    if(level.isClientSide() || hand.toString()=='OFF_HAND') return;
    var pos=block.getPos();

    if(block.getId()=='twilightforest:violet_force_field'){
        pos=findMaxCorner(level,pos,1,block=>block.getId()=='twilightforest:violet_force_field');
        level.runCommandSilent(`fill ${pos.x} ${pos.y} ${pos.z} ${pos.x-20} ${pos.y-11} ${pos.z-20} air replace twilightforest:violet_force_field`);
        level.getEntitiesWithin(AABB.of(pos.x,pos.y,pos.z,pos.x-20,pos.y-11,pos.z-20))
            .filter(entity=>entity.getType()=='minecraft:armor_stand')
            .forEach(entity=>entity.kill());
        level.runCommandSilent(`summon mokels_witch_boss:witchhat ${pos.x-10} ${pos.y-11} ${pos.z-10}`);
        level.runCommandSilent(`particle minecraft:glow ${pos.x-10} ${pos.y-11} ${pos.z-10} 1 1 1 0 100 normal`);
    }
    else if(block.getId()=='twilightforest:green_force_field' || block.getId()=='twilightforest:blue_force_field'){
        var pos1=findMaxCorner(level,pos,1,block=>basementBlocks.indexOf(block.getId())!=-1);
        var pos2=findMaxCorner(level,pos,-1,block=>basementBlocks.indexOf(block.getId())!=-1);
        if(pos1.x-pos2.x==16 && pos1.y-pos2.y==6 && pos1.z-pos2.z==16){
            level.runCommandSilent(`fill ${pos1.x} ${pos1.y} ${pos1.z} ${pos2.x} ${pos2.y} ${pos2.z} air`);
            level.runCommandSilent(`setblock ${pos2.x+8} ${pos2.y} ${pos2.z+8} chest[facing=west]{Items:[{id:"mokels_witch_boss:totem_of_rot_and_decay",Count:1,Slot:13}]}`);

        }
    }

});

EntityEvents.drops(event=>{
    var entity=event.getEntity();
    if(entity.getType()=='mokels_witch_boss:witchboss'){
        event.addDrop(Item.of('twilightforest:experiment_115'));
    }
});

function findMaxCorner(level, pos,offset, predicate ){
    if(!predicate(level.getBlock(pos))) return pos;
    while(
        predicate(level.getBlock(pos.offset(offset,0,0)))
        ||
        predicate(level.getBlock(pos.offset(0,offset,0))) 
        ||
        predicate(level.getBlock(pos.offset(0,0,offset)))
    ){
        if(predicate(level.getBlock(pos.offset(offset,0,0)))){
            pos=pos.offset(offset,0,0);
        }
        if(predicate(level.getBlock(pos.offset(0,offset,0)))){
            pos=pos.offset(0,offset,0);
        }
        if(predicate(level.getBlock(pos.offset(0,0,offset)))){
            pos=pos.offset(0,0,offset);
        }
    }
    return pos;
}
