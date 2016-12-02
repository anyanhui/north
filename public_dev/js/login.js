$(function() {
    $('.header-user').on('click', 'a', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(".mask").show();
    });
    $('.form-close').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(".mask").hide();
    });
})