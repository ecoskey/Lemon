console.info('Registering custom Enderchest items');

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
    event.create('portal_core')
        .texture(KJ('item/portal_core'))
        .displayName('Portal Core').
        glow(true);

    event.create('incomplete_portal_core')
        .texture(KJ('item/incomplete_portal_core'))
        .displayName('Incomplete Portal Core');

    event.create('blue_portal_component')
        .texture(KJ('item/blue_portal_component'))
        .displayName('Blue Portal Component');

    event.create('orange_portal_component')
        .texture(KJ('item/orange_portal_component'))
        .displayName('Orange Portal Component');
})