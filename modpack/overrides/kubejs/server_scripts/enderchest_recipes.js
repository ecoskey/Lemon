console.info('Modifying Enderchest recipes');

onEvent('recipes', event => {
    // removing old recipes
    event.remove({output: 'enderchests:ender_chest'});
    event.remove({output: 'enderchests:ender_bag'});

    event.shaped(
        'kubejs:blue_portal_component',
        [
            'DBD',
            'BPB',
            'DBD'
        ],
        {
            D: 'minecraft:diamond',
            B: 'minecraft:blue_dye',
            P: 'minecraft:ender_pearl'
        }
    );

    event.shaped(
        'kubejs:orange_portal_component',
        [
            'DOD',
            'OPO',
            'DOD'
        ],
        {
            D: 'minecraft:diamond',
            O: 'minecraft:orange_dye',
            P: 'minecraft:ender_pearl'
        }
    );

    let portalCoreIntermediate = 'kubejs:incomplete_portal_core';
    event.recipes.createSequencedAssembly(
        'kubejs:portal_core',
        'create:sturdy_sheet',
        [
            event.recipes.createDeploying(portalCoreIntermediate, [portalCoreIntermediate, 'kubejs:blue_portal_component']),
            event.recipes.createDeploying(portalCoreIntermediate, [portalCoreIntermediate, 'kubejs:orange_portal_component']),
            event.recipes.createPressing(portalCoreIntermediate, portalCoreIntermediate)
        ]
    ).transitionalItem(portalCoreIntermediate).loops(1);

    event.shaped(
        'enderchests:ender_chest',
        [
            'RWR',
            'OCO',
            'RNR'
        ],
        {
            R: 'minecraft:blaze_rod',
            W: '#minecraft:wool',
            O: 'minecraft:obsidian',
            C: 'kubejs:portal_core',
            N: 'minecraft:netherite_ingot'
        }
    );

    event.shaped(
        'enderchests:ender_bag',
        [
            'RNR',
            ' C ',
            'RWR'
        ],
        {
            R: 'minecraft:blaze_rod',
            W: '#minecraft:wool',
            C: 'kubejs:portal_core',
            N: 'minecraft:netherite_ingot'
        }
    );
})