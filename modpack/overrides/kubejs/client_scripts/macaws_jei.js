const garage = color => MCW_DOORS(`garage_${color}_door`);

onEvent('jei.hide.items', event => {
    event.hide(garage('white'));
    event.hide(garage('silver'));
    event.hide(garage('gray'));
    event.hide(garage('black'));
});