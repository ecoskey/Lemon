console.info('Modifying Neapolitan recipes');

onEvent('recipes', event => {

    //replace neapolitan chocolate w/ create chocolate
    event.replaceInput(
        { input: 'neapolitan:chocolate_bar' },
        'neapolitan:chocolate_bar',
        'create:bar_of_chocolate'
    );

    event.replaceOutput(
        { output: 'neapolitan:chocolate_bar' },
        'neapolitan:chocolate_bar',
        'create:bar_of_chocolate'
    );

    event.remove({ id: 'neapolitan:milk/milk_bucket_from_bottles' });
});