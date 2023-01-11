StartupEvents.registry(`block`, e => {
    let machine = (name, layer) => {
        let id = name.toLowerCase()
        e.create(`factory:` + id + `_machine`)
            .model('kubejs:block/' + id + '_machine')
            .material('lantern')
            .hardness(3.0)
            .displayName(name + ' Machine')
            .notSolid()
            .renderType(layer)
    }

    machine('Andesite', "solid")
    machine('Brass', "translucent")
    machine('Copper', "cutout")

    e.create(`factory:string_refining_sieve_block`).displayName('线细化筛网块')
    e.create(`factory:iron_refining_sieve_block`).displayName('铁细化筛网块')
    e.create(`factory:gold_refining_sieve_block`).displayName('金细化筛网块')
    e.create(`factory:diamond_refining_sieve_block`).displayName('钻石细化筛网块')
    e.create(`factory:blaze_refining_sieve_block`).displayName('烈焰细化筛网块')

    //andesite alloy block
    e.create('create:andesite_alloy_block').displayName('安山合金块')

    //dust
    e.create('factory:dust').material('sand').displayName('尘土')
})