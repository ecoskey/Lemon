console.info('Modifying Enderchest recipes');

onEvent('recipes', event => {
    // removing old recipes
    event.remove({ output: EC('ender_chest') });
    event.remove({ output: EC('ender_bag') });

    event.custom({
        type: CR('mechanical_crafting'),
        pattern: [
            'BMB',
            'S S',
        ],
        key: {
            'B': { item: CR('brass_ingot') },
            'M': { item: CR('precision_mechanism') },
            'S': { item: CR('sturdy_sheet') }
        },
        result: { item: KJ('top_dimensional_casing') },
        acceptMirrored: true
    })

    event.custom({
        type: CR('mechanical_crafting'),
        pattern: [
            'S S',
            'ENE',
        ],
        key: {
            'E': { item: CR('electron_tube') },
            'N': { item: MC('netherite_ingot') },
            'S': { item: CR('sturdy_sheet') }
        },
        result: { item: KJ('bottom_dimensional_casing') },
        acceptMirrored: true
    })

    event.custom({
        type: CR('mixing'),
        ingredients: [
            {
                item: MC('sugar')
            },
            {
                item: MC('sugar')
            },
            {
                item: CR('wheat_flour')
            },
            {
                fluid: MC('water'),
                amount: 250
            }
        ],
        results: [
            {
                item: KJ('graham_cracker'),
                count: 4
            }
        ],
        heatRequirement: 'heated'
    })

    event.custom({
        type: CR('mixing'),
        ingredients: [
            {
                fluid: 'create_confectionery:black_chocolate',
                amount: 250
            },
            {
                item: MC('black_concrete_powder')
            },
            {
                item: CR('powdered_obsidian')
            }
        ],
        results: [
            {
                fluid: KJ('darkest_chocolate'),
                amount: 125
            }
        ],
        heatRequirement: 'superheated'
    })

    event.custom({
        type: CR('compacting'),
        ingredients: [
            {
                fluid: KJ('darkest_chocolate'),
                amount: 250
            }
        ],
        results: [
            {
                item: KJ('bar_of_darkest_chocolate')
            }
        ]
    })

    event.custom({
        type: CR('mixing'),
        ingredients: [
            {
                item: KJ('bar_of_darkest_chocolate')
            }
        ],
        results: [
            {
                fluid: KJ('darkest_chocolate'),
                amount: 250
            }
        ],
        heatRequirement: 'superheated'
    })

    event.custom({
        type: CR('sequenced_assembly'),
        ingredient: {
            item: KJ('graham_cracker')
        },
        transitionalItem: {
            item: KJ('incomplete_smingularity')
        },
        sequence: [
            {
                type: CR('deploying'),
                ingredients: [
                    {
                        item: KJ('incomplete_smingularity')
                    },
                    {
                        item: 'create_confectionery:marshmallow'
                    }
                ],
                results: [
                    {
                        item: KJ('incomplete_smingularity')
                    }
                ]
            },
            {
                type: CR('deploying'),
                ingredients: [
                    {
                        item: KJ('incomplete_smingularity')
                    },
                    {
                        item: KJ('bar_of_darkest_chocolate')
                    }
                ],
                results: [
                    {
                        item: KJ('incomplete_smingularity')
                    }
                ]
            },
            {
                type: CR('deploying'),
                ingredients: [
                    {
                        item: KJ('incomplete_smingularity')
                    },
                    {
                        item: KJ('graham_cracker')
                    }
                ],
                results: [
                    {
                        item: KJ('incomplete_smingularity')
                    }
                ]
            },
            {
                type: CR('pressing'),
                ingredients: [
                    {
                        item: KJ('incomplete_smingularity')
                    }
                ],
                results: [
                    {
                        item: KJ('incomplete_smingularity')
                    }
                ]
            }
        ],
        results: [
            {
                item: KJ('smingularity')
            }
        ],
        loops: 1
    })

    event.custom({
        type: CR('mechanical_crafting'),
        pattern: [
            'T',
            'S',
            'B'
        ],
        key: {
            'T': { item: KJ('top_dimensional_casing') },
            'S': { item: KJ('smingularity') },
            'B': { item: KJ('bottom_dimensional_casing') }
        },
        result: { item: KJ('portal_core') },
        acceptMirrored: true
    })

    event.custom({
        type: CR('item_application'),
        ingredients: [
            {
                item: MC('chest')
            },
            {
                item: KJ('portal_core')
            }
        ],
        results: [
            {
                item: EC('ender_chest')
            }
        ]
    })

    event.shapeless(
        Item.of(EC('ender_bag'), 1), 
        [
            {
                item: KJ('portal_core')
            },
            {
                item: 'quark:ravager_hide'
            }
        ]
    )
})