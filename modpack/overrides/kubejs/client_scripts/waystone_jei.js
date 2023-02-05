console.info('Hiding Waystone items in JEI')

onEvent('jei.hide.items', event => {
    //i know this is bad but i couldn't find an easy way of hiding items by mod id

    event.hide('waystones:waystone');
    event.hide('waystones:mossy_waystone');
    event.hide('waystones:sandy_waystone');

    event.hide('waystones:warp_plate');
    event.hide('waystones:portstone');

    event.hide('waystones:sharestone');
    event.hide('waystones:white_sharestone');
    event.hide('waystones:orange_sharestone');
    event.hide('waystones:magenta_sharestone');
    event.hide('waystones:light_blue_sharestone');
    event.hide('waystones:yellow_sharestone');
    event.hide('waystones:lime_sharestone');
    event.hide('waystones:pink_sharestone');
    event.hide('waystones:gray_sharestone');
    event.hide('waystones:light_gray_sharestone');
    event.hide('waystones:cyan_sharestone');
    event.hide('waystones:purple_sharestone');
    event.hide('waystones:blue_sharestone');
    event.hide('waystones:brown_sharestone');
    event.hide('waystones:green_sharestone');
    event.hide('waystones:red_sharestone');
    event.hide('waystones:black_sharestone');

    event.hide('waystones:return_scroll');
    event.hide('waystones:bound_scroll');
    event.hide('waystones:warp_scroll');

    event.hide('waystones:attuned_shard');
    event.hide('waystones:warp_dust');

    event.hide('waystones:warp_stone');
})