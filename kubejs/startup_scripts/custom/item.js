StartupEvents.registry('item',event=>{
    event.create('kubejs:optic_processor_assembly')
    .texture('kubejs:item/optic_processor_assembly')
    .tooltip(Component.translate(`item.kubejs.optic_processor_assembly.desc`));

    event.create('kubejs:optic_processor_computer')
    .texture('kubejs:item/optic_processor_computer')
    .tooltip(Component.translate(`item.kubejs.optic_processor_computer.desc`));

    event.create('kubejs:optic_processor_mainframe')
    .texture('kubejs:item/optic_processor_mainframe')
    .tooltip(Component.translate(`item.kubejs.optic_processor_mainframe.desc`));
})