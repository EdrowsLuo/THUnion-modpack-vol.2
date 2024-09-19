
/**
 * 
 * @param {Internal.VillagerTradingEventJS} event 
 * @param {Internal.VillagerProfession_} prof 
 * @param {*} targetLevel 
 * @param {Internal.Item_} itemStack 
 */
function removeTradeWithOutput(event, prof, targetLevel, itemStack) {
    event.forEachTrades((listing, level, pro) => {
        if (pro.name() == prof) {
            if (level == targetLevel) {
                let toRemove = []
                listing.forEach(trade => {
                    if (trade.getOffer(null, null).result.id == itemStack) {
                        console.log(`trade ${prof} lv${level} ${itemStack} removed: ${trade}`)
                        toRemove.push(trade)
                    }
                })
                toRemove.forEach(t => listing.remove(t))
            }
        }
    })
}
