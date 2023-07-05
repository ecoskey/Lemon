console.info('Registering custom Enderchest items');

onEvent('item.registry', event => {
    event.create('portal_core')
        .texture(KJ('item/portal_core'))
        .displayName('Portal Core')
        .tooltip('§o§7Reality can be whatever I want...§r')
        .rarity('epic')
        .glow(true);
    
    event.create('top_dimensional_casing')
        .texture(KJ('item/top_dimensional_casing'))
        .displayName('Top Dimensional Casing');

    event.create('bottom_dimensional_casing')
        .texture(KJ('item/bottom_dimensional_casing'))
        .displayName('Bottom Dimensional Casing');

    event.create('smingularity')
        .texture(KJ('item/smingularity'))
        .displayName('S\'mingularity')
        .tooltip('§o§7Surprisingly inedible.§r')
        .rarity('rare')
        .glow(true);

    event.create('incomplete_smingularity')
        .texture(KJ('item/incomplete_smingularity'))
        .displayName('Incomplete S\'mingularity');

    event.create('graham_cracker')
        .texture(KJ('item/graham_cracker'))
        .displayName('Graham Cracker')
        .food(food => food
            .hunger(3)
            .saturation(1)
            .fastToEat()
        );

    event.create('bar_of_darkest_chocolate')
        .texture(KJ('item/bar_of_darkest_chocolate'))
        .displayName('Bar of Darkest Chocolate');
})

onEvent('fluid.registry', event => {
    event.create('darkest_chocolate')
        .thickTexture(0x1a1106)
        .displayName('Darkest Chocolate')
        .noBucket()
        .noBlock()
        .rarity('epic')
})