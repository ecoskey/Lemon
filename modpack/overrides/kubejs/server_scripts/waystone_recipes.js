console.info('Modifying Waystone recipes')

onEvent('recipes', event => {
	event.remove({mod: 'waystones'});
})