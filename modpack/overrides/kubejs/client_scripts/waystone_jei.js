console.info('Hiding Waystone items in JEI')

const waystoneIds = [
    'waystone',
    'mossy_waystone',
    'sandy_waystone',
    'warp_plate',
    'portstone',
    'sharestone',
    'white_sharestone',
    'orange_sharestone',
    'magenta_sharestone',
    'light_blue_sharestone',
    'yellow_sharestone',
    'lime_sharestone',
    'pink_sharestone',
    'gray_sharestone',
    'light_gray_sharestone',
    'cyan_sharestone',
    'purple_sharestone',
    'blue_sharestone',
    'brown_sharestone',
    'green_sharestone',
    'red_sharestone',
    'black_sharestone',
    'return_scroll',
    'bound_scroll',
    'warp_scroll',
    'attuned_shard',
    'warp_dust',
    'warp_stone'
].map(WS)

onEvent('jei.hide.items', event => waystoneIds.forEach(event.hide));