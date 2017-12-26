/*****************
*
*    Theme Name: 'prsonal site'
*    Theme URL: 'http://mohammadrahmani.com'
*    Author: Mohammad Rahmani
*    Author URL: http://mohammadrahmani.com
*
*/

$(document).ready(function () {
    let scrollCount = 0;
    let navbar_default = $('#header');

    $(this).scroll(function () {
        let scroll = $(this).scrollTop();
        if ($(this).scrollTop() >= 300) {
            navbar_default.css({
                "background": "linear-gradient(120deg, #100D7E, #9E39FF)",
                "transition": "all 5s"
            });

            if (scroll > scrollCount) {
                navbar_default.css({ "top": "-100px" });
            } else {
                navbar_default.css({ "top": "0px" });
            }

            scrollCount = scroll;
        } else if ($(this).scrollTop() <= 300) {
            navbar_default.css({ "background": "rgba(255, 255, 255, 0.10)", "border": "1px solid rgba(255,255,255,0.03)"});
        }
    });
});