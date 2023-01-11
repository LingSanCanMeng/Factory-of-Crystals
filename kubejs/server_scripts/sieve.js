BlockEvents.rightClicked(e => {
    const {player, server, block, hand, item} = e
    /*if (hand == `MAIN_HAND` && e.player.mainHandItem == `netherite_axe`) {
        if (block.id === `minecraft:dirt`) {
            server.runCommandSilent(`loot spawn ${player.x} ${player.y} ${player.z} loot factory:test`)
            player.addItemCooldown(`minecraft:netherite_axe`, 20)
            player.damageHeldItem()
        }
    }*/
    if (hand == `MAIN_HAND` && block.id === `factory:string_refining_sieve_block`){
        if (player.mainHandItem === 'minecraft:dirt'){
            server.runCommandSilent(`loot spawn ${player.x} ${player.y} ${player.z} loot factory:dirt`)
            item.setCount(item.getCount() - 1)
            e.cancel()
        }

        if (player.mainHandItem === 'minecraft:gravel'){
            server.runCommandSilent(`loot spawn ${player.x} ${player.y} ${player.z} loot factory:gravel`)
            item.setCount(item.getCount() - 1)
            e.cancel()
        }
    }
})