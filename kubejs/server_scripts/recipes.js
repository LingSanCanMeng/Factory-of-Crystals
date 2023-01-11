ServerEvents.recipes(e => {
    //remove caveopolis woodenshears
    e.remove({output: `caveopolis:wooden_shears`})

    //去皮变木板
    e.custom({
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
    e.remove({type: `create_mechanical_extruder:extruding`})

    //andesite casing
    e.remove({output: `create:andesite_casing`})

    e.custom({
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

    //remove botania recipes
    e.remove({mod: `botania`})

    //wooden shears
    e.remove({output: `woodenshears:wooden_shears`})
    e.recipes.minecraft.crafting_shaped(`woodenshears:wooden_shears`, [
        ` b `,
        `a b`,
        `aa `
    ], {
        a: `oak_planks`,
        b: `stick`
    })

    //leaf string
    e.recipes.minecraft.crafting_shaped(`kubejs:leaf_string`, [
        `aaa`
    ], {
        a: `#minecraft:leaves`
    })

    //remove wooden chests
    e.remove({output: `#forge:chests/wooden`})
    
    //oak log
    e.recipes.minecraft.crafting_shaped(`oak_log`, [
        `aaa`,
        `aba`,
        `aaa`
    ], {
        a: `oak_planks`,
        b: `kubejs:leaf_string`
    })
    
    //chest
    e.recipes.minecraft.crafting_shaped(Item.of(`chest`, 4), [
        `aaa`,
        `a a`,
        `aaa`
    ], {
        a: `oak_log`
    })

    //dirt
    e.recipes.minecraft.crafting_shaped(`dirt`, [
        `aaa`,
        `aba`,
        `aaa`
    ], {
        a: `#minecraft:leaves`,
        b: `bone_meal`
    })

    //mesh
    e.recipes.minecraft.crafting_shaped(`cryptopolis:mesh`, [
        `aaa`,
        `aaa`,
        `aaa`
    ], {
        a: `#forge:string`
    })
})