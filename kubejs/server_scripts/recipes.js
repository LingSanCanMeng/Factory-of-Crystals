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

    //string_refining_sieve
    e.custom({
        type: 'lychee:block_interacting',
        item_in: {
            item: 'cryptopolis:mesh'
        },
        block_in: 'oak_log',
        post: [
            {
                type: 'place',
                block: 'stripped_oak_log'
            },
            {
                type: 'drop_item',
                item: 'factory:string_refining_sieve'
            }
        ]
    })

    //refining_sieve
    e.recipes.minecraft.crafting_shapeless('factory:iron_refining_sieve', ['factory:string_refining_sieve', '#forge:ingots/iron'])
    e.recipes.minecraft.crafting_shapeless('factory:gold_refining_sieve', ['factory:iron_refining_sieve', '#forge:ingots/gold'])
    e.recipes.minecraft.crafting_shapeless('factory:diamond_refining_sieve', ['factory:gold_refining_sieve', 'diamond'])
    e.recipes.minecraft.crafting_shapeless('factory:blaze_refining_sieve', ['factory:diamond_refining_sieve', 'create:blaze_brass'])

    //refining_sieve_block
    e.recipes.minecraft.crafting_shaped('factory:string_refining_sieve_block', [
        ' a ',
        'aaa',
        'aa '
    ], {
        a: 'factory:string_refining_sieve'
    })
    e.recipes.minecraft.crafting_shaped('factory:iron_refining_sieve_block', [
        ' a ',
        'aaa',
        'aa '
    ], {
        a: 'factory:iron_refining_sieve'
    })
    e.recipes.minecraft.crafting_shaped('factory:gold_refining_sieve_block', [
        ' a ',
        'aaa',
        'aa '
    ], {
        a: 'factory:gold_refining_sieve'
    })
    e.recipes.minecraft.crafting_shaped('factory:diamond_refining_sieve_block', [
        ' a ',
        'aaa',
        'aa '
    ], {
        a: 'factory:diamond_refining_sieve'
    })
    e.recipes.minecraft.crafting_shaped('factory:blaze_refining_sieve_block', [
        ' a ',
        'aaa',
        'aa '
    ], {
        a: 'factory:blaze_refining_sieve'
    })

    //cauldron
    e.custom({
        type: 'lychee:block_interacting',
        item_in: {
            tag: 'minecraft:saplings'
        },
        block_in: 'minecraft:cauldron',
        post: [
            {
                type: 'place',
                block: {
                    blocks: ['minecraft:water_cauldron'],
                    state: {
                        level: '3'
                    }
                }
            }
        ]
    })
    e.custom({
        type: 'lychee:block_interacting',
        item_in: {
            tag: 'forge:stone'
        },
        block_in: 'minecraft:cauldron',
        post: [
            {
                type: 'place',
                block: 'minecraft:lava_cauldron'
            }
        ]
    })
})