StartupEvents.registry(`item`, e => {
    e.create('factory:infinity').displayName('无限').maxStackSize(1).glow(true)

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

    //mesh
    e.create('cryptopolis:mesh').displayName('筛网')
    e.create(`factory:string_refining_sieve`).displayName('线细化筛网').texture('minecraft:block/white_wool')
    e.create(`factory:iron_refining_sieve`).displayName('铁细化筛网').texture('minecraft:block/gray_wool')
    e.create(`factory:gold_refining_sieve`).displayName('金细化筛网').texture('minecraft:block/yellow_wool')
    e.create(`factory:diamond_refining_sieve`).displayName('钻石细化筛网').texture('minecraft:block/light_blue_wool')
    e.create(`factory:blaze_refining_sieve`).displayName('烈焰细化筛网').texture('minecraft:block/orange_wool')

    //blaze_brass && chorus_chrome
    e.create('create:blaze_brass').displayName('烈焰合金')
    e.create('create:chorus_chrome').displayName('紫颂合金')

    //andesite alloy
    e.create('create:andesite_alloy_plate').displayName('安山合金板')
    e.create('create:andesite_alloy_nugget').displayName('安山合金粒')
    e.create('create:andesite_alloy_gear').displayName('安山合金齿轮')
})