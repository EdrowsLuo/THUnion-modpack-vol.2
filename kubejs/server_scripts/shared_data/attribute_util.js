// priority: 100

const $AttributeModifier = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier")

/**
 * @param {Internal.Attribute_} target
 * @param {string} name 
 * @param {Internal.AttributeModifier$Operation_} operation 
 */
function VariableAttributeModifier(target, name, uuid, operation){
    this.target = target
    this.name = name
    this.operation = operation
    this.uuid = UUID.fromString(uuid)
    this.defaultValue = 0
}

/**
 * 如果实体没有这个修改器，则初始化这个修改器
 * @param {Internal.LivingEntity} entity 
 */
VariableAttributeModifier.prototype.initValue = function(entity, value) {
    if(!entity.attributes.hasModifier(this.target, this.uuid)) {
        let attribute = entity.getAttribute(this.target)
        attribute.addTransientModifier(new $AttributeModifier(this.uuid, this.name, value, this.operation))
    }
}


VariableAttributeModifier.prototype.withDefaultValue = function(value) {
    this.defaultValue = value
    return this
}

VariableAttributeModifier.prototype.initDefault = function(entity) {
    this.initValue(entity, this.defaultValue)
}
