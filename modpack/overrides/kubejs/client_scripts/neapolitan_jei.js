console.info('Hiding neopolitan chocolate in JEI');

onEvent('jei.hide.items', event => {
    event.hide('neapolitan:chocolate_bar');
})