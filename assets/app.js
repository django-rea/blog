$( document ).ready(function() {
    $('.icon-grid').click(function () {
        $(this).toggleClass('active')
        $('.sidebar_menu').toggleClass('active')
        $('.page-content').toggleClass('active')
    })
});