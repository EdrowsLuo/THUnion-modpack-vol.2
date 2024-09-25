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
    this.extraDrop = []
    this.drygmy = false
    this.spawner = false
    this.deathReset = 3
    this.attributes = []
}

/**
 * 
 * @param {Internal.Item_[]} extraDrop 
 * @returns 
 */
BossType.prototype.withExtraDrop = function(extraDrop) {
    this.extraDrop = extraDrop
    return this
}

BossType.prototype.withExtraAttributes = function(attributes) {
    this.attributes = attributes
    return this
}

BossType.prototype.withDeathReset = function(deathReset) {
    this.deathReset = deathReset
    return this
}

BossType.prototype.enableDrygmy = function() {
    this.drygmy = true
    return this
}

BossType.prototype.enableSpawner = function() {
    this.spawner = true
    return this
}

/**
 * @type {BossType[]}
 */
const AllBosses = [
    new BossType("凋灵", "minecraft:wither", 1.0),
    new BossType("末影龙", "minecraft:ender_dragon", 1.0),
    new BossType("暝煌龙", "alexscaves:luxtructosaurus", 40.0), // 24000
    new BossType("擎天龙", "alexscaves:atlatitan", 0.6).withDeathReset(-1), // not a boss
    new BossType("撼地斯拉", "alexscaves:tremorzilla", 0.6).withDeathReset(-1), // not a boss
    new BossType("虚空蠕虫", "alexsmobs:void_worm", 10.0), // 1600每节
    new BossType("猪巫妖", "allthemodium:piglich", 1.0).withDeathReset(-1), // not a boss
    new BossType("荒野奇美拉", "ars_nouveau:wilden_boss", 2.0), // 2000 / 500每阶段
    new BossType("宝箱怪", "artifacts:mimic", 10.0).withDeathReset(-1), // not a boss, 600
    new BossType("无尽傀儡", "avaritia:infinity_golem", 1.0).withDeathReset(-1), // not a boss
    new BossType("下界铁掌", "bosses_of_mass_destruction:gauntlet", 20.0), // 5000
    new BossType("暗夜巫妖", "bosses_of_mass_destruction:lich", 10.0), // 3000
    new BossType("黑曜石柱", "bosses_of_mass_destruction:obsidilith", 30.0), // 9000
    new BossType("虚空之花", "bosses_of_mass_destruction:void_blossom", 30.0), // 10500
    new BossType("末影守卫", "cataclysm:ender_guardian", 1.0),
    new BossType("焰魔", "cataclysm:ignis", 1.0),
    new BossType("下界合金巨兽", "cataclysm:netherite_monstrosity", 1.0),
    new BossType("先驱者", "cataclysm:the_harbinger", 1.0),
    new BossType("利维坦", "cataclysm:the_leviathan", 1.0),
    new BossType("远古遗魂", "cataclysm:ancient_remnant", 1.0),
    new BossType("混沌守卫", "draconicevolution:draconic_guardian", 1.0).withDeathReset(2),
    new BossType("守卫凋灵", "draconicevolution:guardian_wither", 1.0).withDeathReset(-1), // not a boss
    new BossType("幼年末影龙", "endertrigon:baby_ender_dragon", 1.0).withDeathReset(-1), // not a boss
    new BossType("腐化英雄", "graveyard:lich", 30.0), // 12000
    new BossType("明路巨兽", "jerotesvillage:bright_land_beast", 20.0), // 13000
    new BossType("沉降领主", "jerotesvillage:sediment_lord", 30.0), // 5100
    new BossType("紫沙鬼婆", "jerotesvillage:purple_sand_hag", 24.0), // 3960
    new BossType("蚀龙兽", "jerotesvillage:corrosiver", 40.0), // 7400
    new BossType("宝石恶鳞", "jerotesvillage:gemstone_malignasaur", 25.0), // 8700
    new BossType("bound witch of purgatory, Saphyra", "mokels_witch_boss:witchboss", 1.0).withDeathReset(2), // 暮色闭门boss，400基础血量
    new BossType("腐朽的王", "soulsweapons:accursed_lord_boss", 5.0),
    new BossType("混沌君主", "soulsweapons:chaos_monarch", 5.0),
    new BossType("昼从者", "soulsweapons:day_stalker", 5.0),
    new BossType("古英雄的遗骸", "soulsweapons:draugr_boss", 5.0),
    new BossType("陨落王者", "soulsweapons:moonknight", 5.0),
    new BossType("夜伏者", "soulsweapons:night_prowler", 5.0),
    new BossType("暗夜之影", "soulsweapons:night_shade", 5.0),
    new BossType("复仇骑士" ,"soulsweapons:returning_knight", 5.0),
    new BossType("蜜蜂女王", "the_bumblezone:bee_queen", 100.0).enableDrygmy().withDeathReset(-1), // not a boss
    new BossType("宇宙水晶实体", "the_bumblezone:cosmic_crystal_entity", 1.0).withDeathReset(-1), // not a boss
    new BossType("娜迦", "twilightforest:naga", 1.0),
    new BossType("巫妖", "twilightforest:lich", 1.0),
    new BossType("米诺菇", "twilightforest:minoshroom", 1.0),
    new BossType("九头蛇", "twilightforest:hydra", 1.0),
    new BossType("幻影骑士", "twilightforest:knight_phantom", 1.0),
    new BossType("暮色恶魂", "twilightforest:ur_ghast", 1.0),
    new BossType("雪怪首领", "twilightforest:yeti_alpha", 1.0),
    new BossType("冰雪女王", "twilightforest:snow_queen", 1.0)
]

const AllBossesIDMap = {}
AllBosses.forEach(boss => {
    AllBossesIDMap[boss.entityId] = boss
})

/**
 * 
 * @param {Internal.Entity} entity 
 */
function isBoss(entity) {
    return AllBossesIDMap[entity]
}