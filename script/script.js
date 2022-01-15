$(function () {

    //index [ keyhole hover > img ]
    $(".click").mouseover(function () {
        $(".veil").fadeIn(300);
    });
    $(".click").mouseleave(function () {
        $(".veil").fadeOut(300);
    });

    //header category slide
    $(".scroller").simplyScroll();




    //click_ about rina
    $(".btn_aboutme").click(function () {
        $(".clickbg").fadeIn(300)
        $(".aboutme").fadeIn(300)
        $(".photo").fadeIn(3000)
    });
    $(".clickbg").click(function () {
        $(".clickbg").fadeOut(300)
        $(".aboutme").fadeOut(300)
        $(".photo").fadeOut(300)
    });

    //click_ Skill
    $(".btn_skill").click(function () {
        $(".clickbg").fadeIn(300)
        $(".skills").fadeIn(300)
    });
    $(".clickbg").click(function () {
        $(".clickbg").fadeOut(300)
        $(".skills").fadeOut(300)
    });

    //click_ portfolio
    $(".btn_port").click(function () {
        $(".clickbg").fadeIn(300)
        $(".port").fadeIn(500)
    });
    $(".clickbg").click(function () {
        $(".clickbg").fadeOut(300)
        $(".port").fadeOut(300)
    });

    //click_ contact me
    $(".btn_contact").click(function () {
        $(".clickbg").fadeIn(300)
        $(".qr").fadeIn(300)
    });
    $(".clickbg").click(function () {
        $(".clickbg").fadeOut(300)
        $(".qr").fadeOut(300)
    });





    //Nice Scroll
    $("html").niceScroll({
        cursorwidth: "15px",
        cursorborder: "3px solid black",
        cursorcolor: "none",
        cursoropacitymax: 0.7
    });
    $(".contents section div").niceScroll({
        cursorwidth: "10",
        cursorborder: "0",
        cursorcolor: "none"
    });
    $(".aboutme .info").niceScroll({
        cursorwidth: "10",
        cursorborder: "0px solid black",
        cursorcolor: "none"
    });



}); //end