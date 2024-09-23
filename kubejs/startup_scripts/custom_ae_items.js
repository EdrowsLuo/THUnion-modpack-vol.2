
/**
 * 
 * @param {Internal.ItemLike_} coreItem 
 * @param {number} kilobytes 
 */
function AEComponent(coreItem, kilobytes, numberOfTypes) {
    this.coreItem = coreItem
    this.kilobytes = kilobytes
    this.numberOfTypes = numberOfTypes
}

global.AEComponentType = [
    new AEComponent("ae2:cell_component_1k", 1, 63),
    new AEComponent("ae2:cell_component_4k", 4, 63),
    new AEComponent("ae2:cell_component_16k", 16, 63),
    new AEComponent("ae2:cell_component_64k", 64, 63),
    new AEComponent("ae2:cell_component_256k", 256, 63),
    new AEComponent("ae2additions:cell_component_1024", 1024, 63),
    new AEComponent("ae2additions:cell_component_4096", 4096, 100),
    new AEComponent("ae2additions:cell_component_16384", 16384, 200),
    new AEComponent("ae2additions:cell_component_65536", 65536, 300)
]

// StartupEvents.registry("item", event => {
//     const $AEKeyType = Java.loadClass("appeng.api.stacks.AEKeyType")
//     const $BasicStorageCell = Java.loadClass("appeng.items.storage.BasicStorageCell")
//     const $StorageCell = Java.loadClass("com.the9grounds.aeadditions.item.storage.StorageCell")
//     const $Properties = Java.loadClass("net.minecraft.world.item.Item$Properties")

//     function createAdvancedCell(c) {
//         event.createCustom("kubejs:test_cell", () => new $BasicStorageCell(
//             new $Properties(),
//             "mekanism:basic_control_circuit",
//             "mekanism:cardboard_box",
//             2.5,
//             250,
//             1,
//             100,
//             $AEKeyType.items()
//         ))
//     }
// })