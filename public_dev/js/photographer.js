$(function() {
    $(".loc-nav").on('click', '.loc', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(this).addClass('loc-selected').siblings('.loc').removeClass('loc-selected');
    });
})