ServerEvents.recipes(event => {
    banAll(event, ["l2archery:void_arrow"])
    event.remove({"id": "l2archery:upgrades/railgun"})
})