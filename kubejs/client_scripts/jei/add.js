// priority: 0

JEIEvents.addItems(event => {
    const tiers = ["elite", "ultra", "creative"]

    event.add(`botanypots:terracotta_botany_pot`)
    event.add(`botanypots:terracotta_hopper_botany_pot`)

    tiers.forEach(tier => {
        event.add(`botanypotstiers:${tier}_terracotta_botany_pot`)
        event.add(`botanypotstiers:${tier}_terracotta_hopper_botany_pot`)
    })
})