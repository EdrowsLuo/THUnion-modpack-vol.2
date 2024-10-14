StartupEvents.registry('item',event=>{
    event.create('kubejs:optic_processor_assembly')
    .texture('kubejs:item/optic_processor_assembly')
    .tooltip(Component.translate(`item.kubejs.optic_processor_assembly.desc.0`))
    .tooltip(Component.translate(`item.kubejs.optic_processor_assembly.desc.1`));

    event.create('kubejs:optic_processor_computer')
    .texture('kubejs:item/optic_processor_computer')
    .tooltip(Component.translate(`item.kubejs.optic_processor_computer.desc.0`))
    .tooltip(Component.translate(`item.kubejs.optic_processor_computer.desc.1`));

    event.create('kubejs:optic_processor_mainframe')
    .texture('kubejs:item/optic_processor_mainframe')
    .tooltip(Component.translate(`item.kubejs.optic_processor_mainframe.desc.0`))
    .tooltip(Component.translate(`item.kubejs.optic_processor_mainframe.desc.1`));

    event.create('kubejs:optic_soc_wafer')
    .texture('kubejs:item/optic_soc_wafer');

    event.create('kubejs:optic_soc')
    .texture('kubejs:item/optic_soc');

    event.create('kubejs:optic_soc_enlightened')
    .texture('kubejs:item/optic_soc_enlightened');

    ['capacitor','diode','inductor','resistor','transistor'].forEach(smd=>{
        event.create(`kubejs:optic_smd_${smd}`)
        .texture(`kubejs:item/optic_smd_${smd}`);
    })

    event.create('kubejs:optic_processor_singularity')
    .texture('kubejs:item/optic_processor_singularity')
    .tooltip(Component.translate(`item.kubejs.optic_processor_singularity.desc.0`))
    .tooltip(Component.translate(`item.kubejs.optic_processor_singularity.desc.1`));

})