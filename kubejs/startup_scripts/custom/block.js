StartupEvents.registry('block', event => {
    event.create('blood_casing') 
      .hardness(10.0)
      .resistance(5.0) 
      .requiresTool(true) 
      .tagBlock('minecraft:mineable/pickaxe') 
      .tagBlock('minecraft:needs_iron_tool');
    event.create('force_field_casing') 
      .hardness(10.0)
      .resistance(5.0) 
      .requiresTool(true) 
      .tagBlock('minecraft:mineable/pickaxe') 
      .tagBlock('minecraft:needs_iron_tool'); 
    event.create('twisted_fusion_casing') 
      .hardness(10.0)
      .resistance(5.0) 
      .requiresTool(true) 
      .tagBlock('minecraft:mineable/pickaxe') 
      .tagBlock('minecraft:needs_iron_tool'); 
    
  })