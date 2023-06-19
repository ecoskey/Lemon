console.log('Adding melon slice recipes');

onEvent('recipes', event => {
    event.shapeless(
        Item.of(mc('melon_slice'), 6), 
        [mc('melon')]
    );

    event.custom({
        type: CR('cutting'),
        ingredients: { item: MC('melon') },
        results: { 
            item: MC('melon_slice'),
            count: 9
        },
        processingTime: 20
    });

});