let hammer = (id , crush_id , countmin , countmax) =>({
    "type": "minecraft:block",
    "pools": [
        {
            "rolls": 1,
            "entries": [
                {
                    "type": "minecraft:alternatives",
                    "children": [
                        {
                            "type": "minecraft:item",
                            "name": crush_id,
                            "conditions": [
                                {
                                    "condition": "minecraft:match_tool",
                                    "predicate": {
                                        "tag":"factory:hammer",
                                    }
                                }
                            ],
                            "functions": [
                                {
                                    "function": "minecraft:set_count",
                                    "count": {
                                        "min": countmin,
                                        "max": countmax,
                                        "type": "minecraft:uniform"
                                    }
                                }
                            ]
                        },
                        {
                            "type": "minecraft:item",
                            "name": id,
                            "functions": [
                                {
                                    "function": "minecraft:explosion_decay"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})

ServerEvents.blockLootTables(event => {
    event.addSimpleBlock(`minecraft:oak_log`, Item.of(`oak_planks`, 2))

    let factory_hammer = ( id , crushed_id ) =>{
        event.addJson(id, hammer(id, crushed_id, 1,1))
    }

    factory_hammer(`minecraft:stone`, `minecraft:gravel`)
    factory_hammer(`minecraft:andesite`, `minecraft:gravel`)
    factory_hammer(`minecraft:granite`, `minecraft:gravel`)
    factory_hammer(`minecraft:diorite`, `minecraft:gravel`)
})