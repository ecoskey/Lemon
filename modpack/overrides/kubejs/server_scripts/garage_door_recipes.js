console.info('Removing Macaw\'s garage door recipes');

onEvent('recipes', event => {
    event.remove({ output: MCW_DOORS('garage_white_door') });
    event.remove({ output: MCW_DOORS('garage_silver_door') });
    event.remove({ output: MCW_DOORS('garage_gray_door') });
    event.remove({ output: MCW_DOORS('garage_black_door') });
})