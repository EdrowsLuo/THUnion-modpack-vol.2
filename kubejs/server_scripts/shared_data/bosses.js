// priority: 100


/**
 * 
 * @param {string} name 名称，目前就填写中文翻译
 * @param {Internal.EntityType_} entityId 实体id
 * @param {number} healthMultiplier 血量倍率 
 */
function BossType(name, entityId, healthMultiplier) {
    this.name = name
    this.entityId = entityId
    this.healthMultiplier = healthMultiplier
    /**
     * @type {LootEntry[]}
     */
    this.extraDrop = []
    this.drygmy = false
    this.spawner = false
    this.allowFly = false
    this.mobYoinker = false
    this.deathReset = 3
    this.attributes = []
}

/**
 * 
 * @param {LootEntry[]} extraDrop 
 * @returns 
 */
BossType.prototype.withExtraDrop = function (extraDrop) {
    this.extraDrop = this.extraDrop.concat(extraDrop)
    return this
}

BossType.prototype.withExtraAttributes = function (attributes) {
    this.attributes = attributes
    return this
}

BossType.prototype.withDeathReset = function (deathReset) {
    this.deathReset = deathReset
    return this
}

BossType.prototype.enableDrygmy = function () {
    this.drygmy = true
    return this
}

BossType.prototype.enableSpawner = function () {
    this.spawner = true
    return this
}

BossType.prototype.enableFly = function () {
    this.allowFly = true
    return this
}

BossType.prototype.enableMobYoinker = function () {
    this.mobYoinker = true
    return this
}

/**
 * @type {BossType[]}
 */
const AllBosses = [
    new BossType("凋灵", "minecraft:wither", 1.0).enableDrygmy().enableFly()
    , new BossType("末影龙", "minecraft:ender_dragon", 1.0).enableDrygmy().enableFly()//.addDesc("当心闪电和爆炸"),
    , new BossType("暝煌龙", "alexscaves:luxtructosaurus", 40.0)//.addDesc("向原始洞穴的火山口扔出灾厄触媒"), // 24000
    , new BossType("撼地斯拉", "alexscaves:tremorzilla", 0.6).withDeathReset(-1).enableFly() // not a boss
    , new BossType("虚空蠕虫", "alexsmobs:void_worm", 10.0)//.addDesc("把神秘蠕虫扔进末地的虚空"), // 1600每节
    , new BossType("猪巫妖", "allthemodium:piglich", 1.0).withDeathReset(-1).enableFly().enableMobYoinker() // not a boss
    , new BossType("荒野奇美拉", "ars_nouveau:wilden_boss", 2.0)//,addDesc("在荒野召唤仪式中同时使用荒野尖刺、荒野之角和荒野翼膜"), // 2000 / 500每阶段
    , new BossType("宝箱怪", "artifacts:mimic", 10.0).withDeathReset(-1).enableFly().enableMobYoinker()// not a boss, 600
    , new BossType("无尽傀儡", "avaritia:infinity_golem", 1.0).withDeathReset(-1).enableFly().enableMobYoinker() // not a boss
    , new BossType("下界铁掌", "bosses_of_mass_destruction:gauntlet", 20.0)//.addDesc("在下界熔岩海附近的结构中，通过破坏远古雕纹黑石召唤"), // 5000
    , new BossType("暗夜巫妖", "bosses_of_mass_destruction:lich", 10.0).enableFly()//.addDesc("在主世界寒冷生物群系的巫妖塔上，把四颗灵魂之星放进祭坛召唤"), // 3000
    , new BossType("黑曜石柱", "bosses_of_mass_destruction:obsidilith", 30.0)//.addDesc("在末地外岛高空中的结构，向黑曜石祭坛放置末影之眼召唤"), // 9000
    , new BossType("虚空之花", "bosses_of_mass_destruction:void_blossom", 30.0)//.addDesc("在主世界底部的洞穴中生成"), // 10500
    , new BossType("末影守卫", "cataclysm:ender_guardian", 1.0)//.addDesc("末地的废弃堡垒底部地下二层生成"),
    , new BossType("焰魔", "cataclysm:ignis", 1.0)//.addDesc("下界的烈焰竞技场第三层，对烈焰祭坛使用炽燃余烬激活"),
    , new BossType("下界合金巨兽", "cataclysm:netherite_monstrosity", 1.0)//.addDesc("下界熔岩海上的灵魂锻造厂中间生成"),
    , new BossType("先驱者", "cataclysm:the_harbinger", 1.0)//.addDesc("主世界地下深处的远古工厂，使用下界之星唤醒"),
    , new BossType("利维坦", "cataclysm:the_leviathan", 1.0)//.addDesc("主世界大海深处的沉没之城，使用深渊祭品右键水底深渊祭坛生成"),
    , new BossType("远古遗魂", "cataclysm:ancient_remnant", 1.0)//.addDesc("位于主世界沙漠里的诅咒金字塔中心，使用沙漠项链唤醒。沙漠项链可以在诅咒金字塔中刷可疑的沙子获得"),
    , new BossType("混沌守卫", "draconicevolution:draconic_guardian", 1.0).withDeathReset(2).enableFly().enableMobYoinker()//.addDesc("感谢游玩本整合包！"),
    , new BossType("守卫凋灵", "draconicevolution:guardian_wither", 1.0).withDeathReset(-1).enableFly().enableMobYoinker() // not a boss
    , new BossType("幼年末影龙", "endertrigon:baby_ender_dragon", 1.0).withDeathReset(-1).enableFly().enableMobYoinker() // not a boss
    , new BossType("腐化英雄", "graveyard:lich", 1.0)//.addDesc("在海洋上方的空岛，使用三种骨杖残片和血瓶召唤"), // 12000
    , new BossType("明路巨兽", "jerotesvillage:bright_land_beast", 20.0)//.addDesc("在明路草原用明路鼓槌猛敲明路大鼓"), // 13000
    , new BossType("沉降领主", "jerotesvillage:sediment_lord", 30.0)//.addDesc("找到沉降墓穴中心的沉降领主棺"), // 5100
    , new BossType("紫沙鬼婆", "jerotesvillage:purple_sand_hag", 24.0)//.addDesc("击败女巫居所楼顶的大巫婆，并将邪恶的药剂放进鬼婆之锅"), // 3960
    , new BossType("蚀龙兽", "jerotesvillage:corrosiver", 40.0)//.addDesc("在苦寒之地吹响蚀龙兽号角"), // 7400
    , new BossType("宝石恶鳞", "jerotesvillage:gemstone_malignasaur", 25.0)//.addDesc("向无尽海洋的水中投入恶鳞饵叉"), // 8700
    , new BossType("bound witch of purgatory, Saphyra", "mokels_witch_boss:witchboss", 1.5).withDeathReset(2)//.addDesc("获得回到主世界的钥匙"), // 暮色闭门boss，400基础血量
    , new BossType("腐朽的王", "soulsweapons:accursed_lord_boss", 5.0)//.addDesc("在下界的红色下界砖结构中生成。或者对黑石基座使用凋零恶魔之心再次召唤"),
    , new BossType("混沌君主", "soulsweapons:chaos_monarch", 5.0)//.addDesc("对黑石基座使用不确定性的残片召唤"),
    , new BossType("昼从者", "soulsweapons:day_stalker", 20.0)//.addDesc("使用混沌宝珠召唤昼从者与夜伏者"),
    , new BossType("古英雄的遗骸", "soulsweapons:draugr_boss", 5.0)//.addDesc("在主世界和二轮世界的地表可以发现深板岩砖入口，击败后生成暗夜之影。或者对破旧的月光祭坛使用德拉古尔再次召唤"),
    , new BossType("陨落王者", "soulsweapons:moonknight", 5.0)//.addDesc("对破旧的月光祭坛使用日暮精粹召唤"),
    , new BossType("夜伏者", "soulsweapons:night_prowler", 20.0)//.addDesc("使用混沌宝珠召唤昼从者与夜伏者"),
    , new BossType("暗夜之影", "soulsweapons:night_shade", 5.0)//.addDesc("击败古英雄的遗骸后生成，死亡时会进行一次分裂"),
    , new BossType("复仇骑士", "soulsweapons:returning_knight", 5.0)//.addDesc("对破旧的月光祭坛使用迷失的灵魂召唤"),
    , new BossType("蜜蜂女王", "the_bumblezone:bee_queen", 100.0).enableDrygmy().withDeathReset(-1).enableFly().enableMobYoinker() // not a boss
    , new BossType("宇宙水晶实体", "the_bumblezone:cosmic_crystal_entity", 1.0).withDeathReset(-1).enableFly().enableMobYoinker() // not a boss
    , new BossType("娜迦", "twilightforest:naga", 1.0).withExtraDrop([
        LootEntry.of(
            "minecraft:diamond_hoe",
            `{RepairCost: 10, Damage: 0, Enchantments: [{lvl: 4s, id: "apotheosis:natures_blessing"}, {lvl: 2s, id: "minecraft:unbreaking"}], display: {Name: '{"text":"繁茂锄"}'}}`
        )
    ])//.addDesc("你的第一个暮色Boss"),
    , new BossType("巫妖", "twilightforest:lich", 1.0).withExtraDrop([
        LootEntry.of(
            "ars_nouveau:wand",
            `{"ars_nouveau:caster": {flavor: "", is_hidden: 0b, current_slot: 0, spell_count: 1, spells: {spell0: {name: "基础魔弹", recipe: {part3: "ars_nouveau:glyph_harm", size: 4, part0: "ars_nouveau:glyph_projectile", part1: "ars_nouveau:glyph_accelerate", part2: "ars_nouveau:glyph_accelerate"}, spellColor: {r: 255, b: 180, type: "ars_nouveau:constant", g: 25}, sound: {volume: 1.0f, soundTag: {id: "ars_nouveau:fire_family"}, pitch: 1.0f}}}, hidden_recipe: ""}, display: {Name: '{"text":"基础魔弹"}'}}`
        ).when(c => c.randomChance(0.5)),
        LootEntry.of(
            "ars_nouveau:caster_tome",
            `{"ars_nouveau:caster": {flavor: "", is_hidden: 0b, current_slot: 0, spell_count: 1, spells: {spell0: {name: "诱饵的代价", recipe: {size: 10, part0: "ars_nouveau:glyph_self", part1: "ars_nouveau:glyph_summon_decoy", part2: "ars_nouveau:glyph_duration_down", part3: "ars_nouveau:glyph_blink", part4: "ars_nouveau:glyph_freeze", part5: "ars_nouveau:glyph_extend_time", part6: "toomanyglyphs:glyph_amplify_three", part7: "ars_nouveau:glyph_invisibility", part8: "ars_nouveau:glyph_duration_down", part9: "ars_nouveau:glyph_duration_down"}, spellColor: {r: 255, b: 180, type: "ars_nouveau:constant", g: 25}, sound: {volume: 1.0f, soundTag: {id: "ars_nouveau:fire_family"}, pitch: 1.0f}}}, hidden_recipe: ""}, display: {Name: '{"text":"诱饵的代价"}'}}`
        ).when(c => c.randomChance(0.5))
    ])//.addDesc("需要一点魔法才能打破它的护盾"),
    , new BossType("米诺菇", "twilightforest:minoshroom", 1.0).withExtraDrop([
        LootEntry.of(
            "ars_nouveau:caster_tome",
            `{"ars_nouveau:caster": {flavor: "", is_hidden: 0b, current_slot: 0, spell_count: 1, spells: {spell0: {name: "地刺", recipe: {size: 10, part0: "ars_elemental:glyph_arc_projectile", part1: "ars_elemental:glyph_spike", part2: "ars_nouveau:glyph_amplify", part3: "ars_nouveau:glyph_aoe", part4: "ars_nouveau:glyph_aoe", part5: "ars_nouveau:glyph_aoe", part6: "ars_nouveau:glyph_aoe", part7: "ars_nouveau:glyph_pierce", part8: "ars_nouveau:glyph_pierce", part9: "ars_nouveau:glyph_pierce"}, spellColor: {r: 255, b: 180, type: "ars_nouveau:constant", g: 25}, sound: {volume: 1.0f, soundTag: {id: "ars_nouveau:fire_family"}, pitch: 1.0f}}}, hidden_recipe: ""}, display: {Name: '{"text":"地刺"}'}}`
        )
    ])//.addDesc("希望你还记得迷宫的入口在哪"),
    , new BossType("九头蛇", "twilightforest:hydra", 1.0).withExtraDrop([
        LootEntry.of(
            "ars_nouveau:caster_tome",
            `{"ars_nouveau:caster": {flavor: "", is_hidden: 0b, current_slot: 0, spell_count: 1, spells: {spell0: {name: "龙牌熔炉", recipe: {part3: "ars_nouveau:glyph_accelerate", part4: "ars_nouveau:glyph_smelt", size: 5, part0: "ars_nouveau:glyph_projectile", part1: "ars_nouveau:glyph_linger", part2: "ars_nouveau:glyph_dampen"}, spellColor: {r: 255, b: 180, type: "ars_nouveau:constant", g: 25}, sound: {volume: 1.0f, soundTag: {id: "ars_nouveau:fire_family"}, pitch: 1.0f}}}, hidden_recipe: ""}, display: {Name: '{"text":"龙牌熔炉"}'}}`
        )
    ])//.addDesc("美味的炭烤九头蛇肉排！"),
    , new BossType("幻影骑士", "twilightforest:knight_phantom", 1.0).withExtraDrop([
        LootEntry.of(
            "ars_nouveau:caster_tome",
            `{"ars_nouveau:caster": {flavor: "", is_hidden: 0b, current_slot: 0, spell_count: 1, spells: {spell0: {name: "狼魔术", recipe: {size: 10, part0: "ars_nouveau:glyph_self", part1: "ars_nouveau:glyph_freeze", part2: "ars_nouveau:glyph_extend_time", part3: "ars_nouveau:glyph_extend_time", part4: "ars_nouveau:glyph_extend_time", part5: "ars_nouveau:glyph_extend_time", part6: "ars_nouveau:glyph_extend_time", part7: "ars_nouveau:glyph_wither", part8: "ars_nouveau:glyph_snare", part9: "ars_nouveau:glyph_summon_wolves"}, spellColor: {r: 255, b: 180, type: "ars_nouveau:constant", g: 25}, sound: {volume: 1.0f, soundTag: {id: "ars_nouveau:fire_family"}, pitch: 1.0f}}}, hidden_recipe: ""}, display: {Name: '{"text":"狼魔术"}'}}`
        )
    ])//.addDesc("当心这些会穿墙的家伙"),
    , new BossType("暮初恶魂", "twilightforest:ur_ghast", 1.0).withExtraDrop([
        LootEntry.of(
            "ars_nouveau:caster_tome",
            `{"ars_nouveau:caster": {flavor: "", is_hidden: 0b, current_slot: 0, spell_count: 1, spells: {spell0: {name: "飞行陷阱", recipe: {size: 10, part0: "toomanyglyphs:glyph_ray", part1: "ars_nouveau:glyph_rune", part2: "ars_nouveau:glyph_launch", part3: "toomanyglyphs:glyph_amplify_two", part4: "ars_nouveau:glyph_slowfall", part5: "ars_nouveau:glyph_duration_down", part6: "ars_nouveau:glyph_duration_down", part7: "ars_nouveau:glyph_duration_down", part8: "ars_nouveau:glyph_delay", part9: "ars_nouveau:glyph_wind_shear"}, spellColor: {r: 255, b: 180, type: "ars_nouveau:constant", g: 25}, sound: {volume: 1.0f, soundTag: {id: "ars_nouveau:fire_family"}, pitch: 1.0f}}}, hidden_recipe: ""}, display: {Name: '{"text":"飞行陷阱"}'}}`
        )
    ])//.addDesc("也许我们需要找个地方避雨"),
    , new BossType("雪怪首领", "twilightforest:yeti_alpha", 1.0)//.addDesc("温暖的大雪怪"),
    , new BossType("冰雪女王", "twilightforest:snow_queen", 1.0)//.addDesc("就快成功了……只差一点点")
]

const AllBossesIDMap = {}
AllBosses.forEach(boss => {
    AllBossesIDMap[boss.entityId] = boss
})

/**
 * 
 * @param {Internal.Entity} entity 
 * @returns {BossType}
 */
function isBoss(entity) {
    return AllBossesIDMap[entity.type]
}

/**
 * 
 * @param {Internal.Entity} entity 
 */
function checkBoss(entity, handler) {
    let boss = isBoss(entity)
    if(boss) {
        return handler(boss)
    }
    return false
}
