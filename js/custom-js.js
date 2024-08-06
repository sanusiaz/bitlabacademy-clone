jQuery(function ($) {
    $(document).ready(function () {

        $("body.loading").removeClass("loading");
        $(".faq_wrapper p").hide();
        $(".controls .pause").hide();

        let __video = $("video[id=intro_video]");

        // trigger play button
        __video.parent().find(".controls .play").click(function () {
            __video.trigger('play');
            __video.parent().find(".controls .play").hide();
            __video.parent().find(".controls .pause").show();

        })


        // trigger pause button
        __video.parent().find(".controls .pause").click(function () {
            __video.trigger('pause');

            __video.parent().find(".controls .pause").hide();
            __video.parent().find(".controls .play").show();
        })
    })


    // Frequently asked questions
    $(".faq_wrapper .head").click(function () {
        let __that = $(this).parent()
        $(".faq_wrapper p").hide();
        $(".faq_wrapper svg").removeClass('rotate_svg');
        __that.find("p").toggle()
        __that.find("svg").addClass('rotate_svg')
    })
})
