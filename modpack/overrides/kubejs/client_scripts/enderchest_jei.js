console.info('Hiding custom Enderchest items in JEI');

onEvent('jei.hide.items', event => {
    event.hide('kubejs:incomplete_portal_core');
})