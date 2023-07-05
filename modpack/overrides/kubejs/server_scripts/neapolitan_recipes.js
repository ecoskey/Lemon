console.info('Modifying Neapolitan recipes');

onEvent('recipes', event => {

    //replace neapolitan chocolate w/ create chocolate
    event.replaceInput(
        { input: NP('chocolate_bar') },
        NP('chocolate_bar'),
        CR('bar_of_chocolate')
    );

    event.replaceOutput(
        { output: NP('chocolate_bar') },
        NP('chocolate_bar'),
        CR('bar_of_chocolate')
    );

    event.remove({ id: NP('milk/milk_bucket_from_bottles') });
    event.remove({ id: NP('chocolate/chocolate_bar') })
});