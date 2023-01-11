ItemEvents.rightClicked(e => {
    const {player, server, hand, item} = e
    if (hand == `MAIN_HAND` && player.offHandItem === 'cryptopolis:hand_sieve'){
        if (player.mainHandItem === 'minecraft:dirt'){
            server.runCommandSilent(`loot give ${player.name.string} loot factory:dirt`)
            item.setCount(item.getCount() - 1)
        }
    }
})