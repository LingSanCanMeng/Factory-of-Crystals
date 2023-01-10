ServerEvents.recipes(event => {
    //remove caveopolis woodenshears
    event.remove({output: `caveopolis:wooden_shears`})

    //去皮变木板
    event.custom({
        type: `lychee:block_interacting`,
        item_in: {
            tag: `forge:axes`
        },
        block_in: `minecraft:oak_log`,
        post: [
            {
                type: `place`,
                block: `minecraft:oak_planks`
            },
            {
                type: `damage_item`
            }
        ]
    })

    //remove create_mechanical_extruder:extruding
    event.remove({type: `create_mechanical_extruder:extruding`})

    //andesite casing
    event.remove({output: `create:andesite_casing`})

    event.custom({
        type: `create:item_application`,
        ingredients: [
            {
                tag: `minecraft:logs`
            },
            {
                item: `create:andesite_alloy`
            }
        ],
        results: [
            {
                item: `create:andesite_casing`
            }
        ]
    })

})