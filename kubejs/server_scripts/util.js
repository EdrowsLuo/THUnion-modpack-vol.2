/**
 * 创建一个不消耗的工具手使用配方
 * @param {*} output
 * @param {*} input
 * @param {*} tool 使用的工具（不消耗）
 * @returns 
 */
function ifiniDeploying(output, input, tool) {
	return {
		"type": "create:deploying",
		"ingredients": [
			Ingredient.of(input).toJson(),
			Ingredient.of(tool).toJson()
		],
		"results": [
			Item.of(output).toResultJson()
		],
		"keepHeldItem": true
	}
}


function getEntitiesByItemId(level, item_id) {
    return level.getEntities().getAll().filter(item => item.type == "minecraft:item" && item.item.id == item_id)
}

function distanceToSqr(entity, x, y, z) {
    const d = entity.x - x;
    const e = entity.y - y;
    const f = entity.z - z;
    return d * d + e * e + f * f;
}

function moveHalfBlock(entity) {
    entity.x += 0.5
    entity.z += 0.5
}

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
