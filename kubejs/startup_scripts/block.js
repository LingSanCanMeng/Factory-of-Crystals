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

    e.create('factory:sieve').displayName('筛子')
})