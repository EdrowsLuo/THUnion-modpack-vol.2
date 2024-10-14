
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
            level.runCommandSilent(`fill ${pos1.x} ${pos1.y} ${pos1.z} ${pos2.x} ${pos2.y} ${pos2.z} air replace twilightforest:green_force_field`);
            level.runCommandSilent(`fill ${pos1.x} ${pos1.y} ${pos1.z} ${pos2.x} ${pos2.y} ${pos2.z} air replace twilightforest:blue_force_field`);
            // level.runCommandSilent(`setblock ${pos2.x+8} ${pos2.y} ${pos2.z+8} chest[facing=west]{Items:[{id:"mokels_witch_boss:totem_of_rot_and_decay",Count:1,Slot:13}]}`);
            let chestPos = pos2.offset(8, 0, 8)
            level.setBlockAndUpdate(chestPos, Block.getBlock("minecraft:chest").defaultBlockState())
            let chest = level.getBlock(chestPos)
            chest.setEntityData(`{Items:[{id:"mokels_witch_boss:totem_of_rot_and_decay",Count:1,Slot:13}]}`)
            level.runCommandSilent(`fill ${pos2.x+7} ${pos2.y+1} ${pos2.z+7} ${pos2.x+9} ${pos2.y+2} ${pos2.z+9} minecraft:white_wool`);
            level.runCommandSilent(`setblock ${pos2.x+8} ${pos2.y+1} ${pos2.z+8} minecraft:spawner{Delay:0, ignore_light:1, SpawnData:{entity:{id:"irons_spellbooks:necromancer", Attributes:[{Name:generic.max_health,Base:60}],Health:60}}}`);
        }
    }

});

// EntityEvents.drops(event=>{
//     var entity=event.getEntity();
//     if(entity.getType()=='mokels_witch_boss:witchboss'){
//         event.addDrop(Item.of("twilightforest:twilight_portal_miniature_structure"));
//     }
// });

LootJS.modifiers(event => {
    event.addEntityLootModifier("mokels_witch_boss:witchboss")
        .addLoot(LootEntry.of("twilightforest:twilight_portal_miniature_structure"))
})

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


ServerEvents.tags("item", event => {
    event.get("twilightforest:portal/activator").removeAll()
    event.get("twilightforest:portal/activator").add("twilightforest:twilight_portal_miniature_structure")
})
