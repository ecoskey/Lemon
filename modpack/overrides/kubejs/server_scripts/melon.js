console.log('Adding melon slice recipes');

onEvent('recipes', event => {
    event.shapeless(
        Item.of(MC('melon_slice'), 6), 
        [MC('melon')]
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