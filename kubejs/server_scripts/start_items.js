PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has(`start_item`)){
        event.player.stages.add(`start_item`)
        event.player.give(`ftbquests:book`)
        event.player.give(Item.of(`minecraft:soul_torch`, `{RepairCost:0,display:{Name:\`{\"text\":\"加速火把\"}\`}}`))
    }
})