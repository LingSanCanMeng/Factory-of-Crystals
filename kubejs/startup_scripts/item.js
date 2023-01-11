StartupEvents.registry(`item`, e => {
    e.create(`factory:shard_of_shards`).displayName(`万物碎片`).texture(`factory:item/shard_of_shards`)

    //hammer
    e.create(`factory:wooden_hammer`, `pickaxe`).tier(`wood`).displayName(`木质粉碎锤`).maxDamage(64).texture(`factory:item/hammers/wooden_hammer`)
    e.create(`factory:stone_hammer`, `pickaxe`).tier(`stone`).displayName(`石质粉碎锤`).maxDamage(128).texture(`factory:item/hammers/stone_hammer`)
    e.create(`factory:iron_hammer`, `pickaxe`).tier(`iron`).displayName(`铁质粉碎锤`).maxDamage(256).texture(`factory:item/hammers/iron_hammer`)
    e.create(`factory:diamond_hammer`, `pickaxe`).tier(`diamond`).displayName(`钻石质粉碎锤`).maxDamage(512).texture(`factory:item/hammers/diamond_hammer`)
    e.create(`factory:netherite_hammer`, `pickaxe`).tier(`netherite`).displayName(`下界合金质粉碎锤`).maxDamage(1024).texture(`factory:item/hammers/netherite_hammer`)

    //leaf string
    e.create(`leaf_string`).displayName(`叶子绳`).texture(`minecraft:item/string`).color(0, 0x3E651F)

    //b bucks
    e.create('factory:b_bucks').displayName(`1元硬币`)

    //handheld sieve && mesh
    e.create('cryptopolis:hand_sieve').displayName('手持筛子')
    e.create('cryptopolis:mesh').displayName('筛网')
})