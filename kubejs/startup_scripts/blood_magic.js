
// Tier 6 BloodMagic Alter
ForgeModEvents.onEvent("net.minecraftforge.fml.event.lifecycle.FMLLoadCompleteEvent", event => {
    const $BloodMagicAPI = Java.loadClass("wayoftime.bloodmagic.impl.BloodMagicAPI")
    $BloodMagicAPI.INSTANCE.registerAltarComponent(Block.getBlock("avaritia:neutron").defaultBlockState(), "CRYSTAL")
})
