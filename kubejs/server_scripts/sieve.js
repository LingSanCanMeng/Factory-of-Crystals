BlockEvents.rightClicked(event => {
    const {player, server, block, hand} = event
    /*if (hand == 'MAIN_HAND' && event.player.mainHandItem === Item.of('minecraft:air')) {
        if (block.id === 'minecraft:dirt') {
            server.runCommandSilent(`loot spawn ${player.x} ${player.y} ${player.z} loot factory:test`)
        }
    }*/
})