$(function() {
    $(".packages-cate, .packages-city, .packages-filter").on('click', '.tag', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(this).addClass('packages-cate-on').siblings('.tag').removeClass('packages-cate-on');
    });
})