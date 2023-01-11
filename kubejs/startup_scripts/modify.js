ItemEvents.modification(e => {
    e.modify(`woodenshears:wooden_shears`, item => {
        item.maxDamage = 512
    })
})