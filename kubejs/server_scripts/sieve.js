BlockEvents.rightClicked(event => {
    const {player, server, block, hand} = event
    if (hand == 'MAIN_HAND' && event.player.mainHandItem === 'minecraft:netherite_axe') {
        if (block.id === 'minecraft:dirt') {
            server.runCommandSilent(`loot spawn ${player.x} ${player.y} ${player.z} loot factory:test`)
            player.addItemCooldown('minecraft:netherite_axe', 20)
            player.damageHeldItem()
        }
    }
})