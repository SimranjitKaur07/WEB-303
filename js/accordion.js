$(function () {
    $("#accordion > li > span").click(function() {
        $(this).toggleClass("active").next('div').slideToggle(250).closest('li').siblings().find('span').removeClass('active').next('div').slideUp(250);
    });
});