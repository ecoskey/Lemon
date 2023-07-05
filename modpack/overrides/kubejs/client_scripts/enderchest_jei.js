console.info('Hiding custom Enderchest items in JEI');

onEvent('jei.hide.items', event => {
    event.hide(KJ('incomplete_smingularity'));
});