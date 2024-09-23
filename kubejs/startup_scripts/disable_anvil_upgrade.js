
const $EnchantmentHelper = Java.loadClass("net.minecraft.world.item.enchantment.EnchantmentHelper")
const $EnchantedBookItem = Java.loadClass("net.minecraft.world.item.EnchantedBookItem")

ForgeEvents.onEvent("net.minecraftforge.event.AnvilUpdateEvent", event => {
    var leftEnchantment = $EnchantmentHelper.getEnchantments(event.getLeft())
    var rightEnchantment = $EnchantmentHelper.getEnchantments(event.getRight())

    if(leftEnchantment.isEmpty() || rightEnchantment.isEmpty()) {
        return
    }
    
    var flag = false
    rightEnchantment.keySet().forEach(enchantment => {
        if(enchantment && (leftEnchantment.getOrDefault(enchantment, 0) == rightEnchantment.getOrDefault(enchantment, 1))) {
            flag = true
        }
    })

    if(flag) {
        event.setCanceled(true)
    }
})
