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

    //remove botania recipes
    event.remove({mod: `botania`})

    //wooden shears
    event.remove({output: `woodenshears:wooden_shears`})
    event.recipes.minecraft.crafting_shaped(`woodenshears:wooden_shears`, [
        ` b `,
        `a b`,
        `aa `
    ], {
        a: `oak_planks`,
        b: `stick`
    })

    //leaf string
    event.recipes.minecraft.crafting_shaped(`kubejs:leaf_string`, [
        `aaa`
    ], {
        a: `#minecraft:leaves`
    })

    //remove wooden chests
    event.remove({output: `#forge:chests/wooden`})
    
    //oak log
    event.recipes.minecraft.crafting_shaped(`oak_log`, [
        `aaa`,
        `aba`,
        `aaa`
    ], {
        a: `oak_planks`,
        b: `kubejs:leaf_string`
    })
    
    //chest
    event.recipes.minecraft.crafting_shaped(Item.of(`chest`, 4), [
        `aaa`,
        `a a`,
        `aaa`
    ], {
        a: `oak_log`
    })

    //dirt
    event.recipes.minecraft.crafting_shaped(`dirt`, [
        `aaa`,
        `aba`,
        `aaa`
    ], {
        a: `#minecraft:leaves`,
        b: `bone_meal`
    })

    //mesh
    event.recipes.minecraft.crafting_shaped(`cryptopolis:mesh`, [
        `aaa`,
        `aaa`,
        `aaa`
    ], {
        a: `#forge:string`
    })

    //string_refining_sieve
    event.custom({
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
    event.recipes.minecraft.crafting_shapeless('factory:iron_refining_sieve', ['factory:string_refining_sieve', '#forge:ingots/iron'])
    event.recipes.minecraft.crafting_shapeless('factory:gold_refining_sieve', ['factory:iron_refining_sieve', '#forge:ingots/gold'])
    event.recipes.minecraft.crafting_shapeless('factory:diamond_refining_sieve', ['factory:gold_refining_sieve', 'diamond'])
    event.recipes.minecraft.crafting_shapeless('factory:blaze_refining_sieve', ['factory:diamond_refining_sieve', 'create:blaze_brass'])

    //refining_sieve_block
    event.recipes.minecraft.crafting_shaped('factory:string_refining_sieve_block', [
        ' a ',
        'aaa',
        'aa '
    ], {
        a: 'factory:string_refining_sieve'
    })
    event.recipes.minecraft.crafting_shaped('factory:iron_refining_sieve_block', [
        ' a ',
        'aaa',
        'aa '
    ], {
        a: 'factory:iron_refining_sieve'
    })
    event.recipes.minecraft.crafting_shaped('factory:gold_refining_sieve_block', [
        ' a ',
        'aaa',
        'aa '
    ], {
        a: 'factory:gold_refining_sieve'
    })
    event.recipes.minecraft.crafting_shaped('factory:diamond_refining_sieve_block', [
        ' a ',
        'aaa',
        'aa '
    ], {
        a: 'factory:diamond_refining_sieve'
    })
    event.recipes.minecraft.crafting_shaped('factory:blaze_refining_sieve_block', [
        ' a ',
        'aaa',
        'aa '
    ], {
        a: 'factory:blaze_refining_sieve'
    })

    //cauldron
    event.custom({
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
    event.custom({
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

    //andesite alloy
    event.remove({output: 'create:andesite_alloy'})
    event.recipes.minecraft.crafting_shaped('create:andesite_alloy_block',[
        'aa',
        'aa'
    ], {
        a: 'create:andesite_alloy'
    })
    event.recipes.minecraft.crafting_shaped('create:andesite_alloy',[
        'aa',
        'aa'
    ], {
        a: 'create:andesite_alloy_nugget'
    })
    event.recipes.minecraft.crafting_shapeless('4x create:andesite_alloy', ['create:andesite_alloy_block'])
    event.recipes.minecraft.crafting_shapeless('4x create:andesite_alloy_nugget', ['create:andesite_alloy'])
    event.recipes.minecraft.crafting_shaped('create:andesite_alloy', [
        'aba',
        'bab',
        'aba'
    ], {
        a: 'andesite',
        b: '#forge:ingots/iron'
    })

    //clay
    event.custom({
        type: 'lychee:block_interacting',
        item_in: {
            item: 'minecraft:water_bucket'
        },
        block_in: 'factory:dust',
        post: [
            {
                type: 'place',
                block: 'minecraft:clay'
            },
            {
                type: 'drop_item',
                item: 'minecraft:bucket'
            }
        ]
    })

    //sail frame
    event.recipes.minecraft.crafting_shaped('16x create:sail_frame', [
        'aaa',
        'aba',
        'aaa'
    ],{
        a: 'stick',
        b: 'create:andesite_alloy'
    })

    //replace flower pot
    event.replaceInput({type: 'minecraft:crafting_shaped', mod:'botanypots'}, 'minecraft:flower_pot', '#minecraft:planks')
    event.replaceInput({mod: 'botanypots'}, 'minecraft:hopper', 'woodenhopper:wooden_hopper')

    //andesite alloy gear
    event.recipes.minecraft.crafting_shaped('create:andesite_alloy_gear', [
        ' a ',
        'aba',
        ' a '
    ], {
        a: 'create:andesite_alloy',
        b: '#forge:nuggets/iron'
    })
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'create:andesite_alloy_plate'
        },
        loops: 8,
        results: [
            {
                item: 'create:andesite_alloy_gear',
                count: 8
            }
        ],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'create:unprocessed_andesite_alloy_gear'
                    },
                    {
                        item: 'create:andesite_alloy'
                    }
                ],
                results: [
                    {
                        item: 'create:unprocessed_andesite_alloy_gear'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'create:unprocessed_andesite_alloy_gear'
                    },
                    {
                        item: 'create:andesite_alloy'
                    }
                ],
                results: [
                    {
                        item: 'create:unprocessed_andesite_alloy_gear'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'create:unprocessed_andesite_alloy_gear'
                    },
                    {
                        item: 'create:andesite_alloy_nugget'
                    }
                ],
                results: [
                    {
                        item: 'create:unprocessed_andesite_alloy_gear'
                    }
                ]
            }
        ],
        transitionalItem: Item.of('create:unprocessed_andesite_alloy_gear').toJson()
    })

    //andesite alloy plate
    event.custom({
        type: 'create:pressing',
        ingredients: [
            Item.of('create:andesite_alloy').toJson()
        ],
        results: [
            Item.of('create:andesite_alloy_plate').toJson()
        ]
    })

    event.recipes.minecraft.crafting_shapeless('factory:andesite_machine', ['create:andesite_casing', 'create:andesite_alloy_gear', 'create:shaft'])

    //press
    event.remove({output: 'create:mechanical_press'})
    event.recipes.minecraft.smithing('create:mechanical_press', 'factory:andesite_machine', '#forge:storage_blocks/iron')

    //mixer
    event.remove({output: 'create:mechanical_mixer'})
    event.recipes.minecraft.smithing('create:mechanical_mixer', 'factory:andesite_machine', 'create:whisk')

    //andesite funnel
    event.remove({output: 'create:andesite_funnel'})
    event.recipes.minecraft.stonecutting(Item.of('create:andesite_funnel', 4), 'factory:andesite_machine')

    //molten andesite alloy
    event.custom({
        type: 'create:mixing',
        heatRequirement: 'superheated',
        ingredients: [
            Ingredient.of('#forge:nuggets/iron').toJson(),
            Item.of('andesite').toJson()
        ],
        results: [
            Fluid.of('factory:molten_andesite_alloy', 144).toJson()
        ]
    })
    event.custom({
        type: 'create:compacting',
        ingredients: [
            Fluid.of('factory:molten_andesite_alloy', 144).toJson()
        ],
        results: [
            Item.of('create:andesite_alloy').toJson()
        ]
    })

    //soil
    event.custom({
        type: 'botanypots:soil',
        input: Item.of('stone').toJson(),
        display: {
            block: 'stone'
        },
        categories: ['sp'],
        growthModifier: 1
    })

    //cobblestone botany
    event.custom({
        type: 'botanypots:crop',
        seed: {
            type: "forge:nbt",
            item: "extendedcrafting:singularity",
            nbt: {
                Id: "extendedcrafting:cobblestone"
            }
        },
        categories: ['sp'],
        growthTicks: 100,
        display: {
            block: 'minecraft:cobblestone'
        },
        drops: [
            {
                chance: 1,
                output: Item.of('cobblestone').toJson()
            }
        ]
    })
})