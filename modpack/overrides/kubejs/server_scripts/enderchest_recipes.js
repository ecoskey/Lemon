console.info('Modifying Enderchest recipes');

onEvent('recipes', event => {
    // removing old recipes
    event.remove({ output: EC('ender_chest') });
    event.remove({ output: EC('ender_bag') });

    event.shaped(
        Item.of(KJ('blue_portal_component'), 1),
        [
            'DBD',
            'BPB',
            'DBD'
        ],
        {
            D: MC('diamond'),
            B: MC('blue_dye'),
            P: MC('ender_pearl')
        }
    );

    event.shaped(
        Item.of(KJ('orange_portal_component'), 1),
        [
            'DOD',
            'OPO',
            'DOD'
        ],
        {
            D: MC('diamond'),
            O: MC('orange_dye'),
            P: MC('ender_pearl')
        }
    );

    /* let portalCoreIntermediate = KJ('incomplete_portal_core';
    event.recipes.createSequencedAssembly(
        KJ('portal_core',
        CR('sturdy_sheet',
        [
            event.recipes.createDeploying(portalCoreIntermediate, [portalCoreIntermediate, KJ('blue_portal_component']),
            event.recipes.createDeploying(portalCoreIntermediate, [portalCoreIntermediate, KJ('orange_portal_component']),
            event.recipes.createPressing(portalCoreIntermediate, portalCoreIntermediate)
        ]
    ).transitionalItem(portalCoreIntermediate).loops(1); */

    event.custom({
        type: CR('sequenced_assembly'),
        ingredient: {
            item: CR('sturdy_sheet')
        },
        transitionalItem: {
            item: KJ('incomplete_portal_core')
        },
        sequence: [
            {
                type: CR('deploying'),
                ingredients: [
                    {
                        item: KJ('incomplete_portal_core')
                    },
                    {
                        item: KJ('blue_portal_component')
                    }
                ],
                results: [
                    {
                        item: KJ('incomplete_portal_core')
                    }
                ]
            },
            {
                type: CR('deploying'),
                ingredients: [
                    {
                        item: KJ('incomplete_portal_core')
                    },
                    {
                        item: KJ('orange_portal_component')
                    }
                ],
                results: [
                    {
                        item: KJ('incomplete_portal_core')
                    }
                ]
            },
            {
                type: CR('pressing'),
                ingredients: [
                    {
                        item: KJ('incomplete_portal_core')
                    }
                ],
                results: [
                    {
                        item: KJ('incomplete_portal_core')
                    }
                ]
            }
        ],
        results: [
            {
                item: KJ('portal_core'),
                chance: 100
            }
        ],
        loops: 1
    })

    event.custom({
        type: CR('sequenced_assembly'),
        ingredient: {
            item: CR('sturdy_sheet')
        },
        transitionalItem: {
            item: KJ('incomplete_portal_core')
        },
        sequence: [
            {
                type: CR('deploying'),
                ingredients: [
                    {
                        item: KJ('incomplete_portal_core')
                    },
                    {
                        item: KJ('orange_portal_component')
                    }
                ],
                results: [
                    {
                        item: KJ('incomplete_portal_core')
                    }
                ]
            },
            {
                type: CR('deploying'),
                ingredients: [
                    {
                        item: KJ('incomplete_portal_core')
                    },
                    {
                        item: KJ('blue_portal_component')
                    }
                ],
                results: [
                    {
                        item: KJ('incomplete_portal_core')
                    }
                ]
            },
            {
                type: CR('pressing'),
                ingredients: [
                    {
                        item: KJ('incomplete_portal_core')
                    }
                ],
                results: [
                    {
                        item: KJ('incomplete_portal_core')
                    }
                ]
            }
        ],
        results: [
            {
                item: 'kubejs:portal_core',
                chance: 100
            }
        ],
        loops: 1
    })

    event.shaped(
        EC('ender_chest'),
        [
            'RWR',
            'OCO',
            'RNR'
        ],
        {
            R: MC('blaze_rod'),
            W: '#minecraft:wool',
            O: MC('obsidian'),
            C: KJ('portal_core'),
            N: MC('netherite_ingot')
        }
    );

    event.shaped(
        EC('ender_bag'),
        [
            'RNR',
            ' C ',
            'RWR'
        ],
        {
            R: MC('blaze_rod'),
            W: '#minecraft:wool',
            C: KJ('portal_core'),
            N: MC('netherite_ingot')
        }
    );
})