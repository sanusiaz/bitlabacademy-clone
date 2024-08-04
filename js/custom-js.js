jQuery(function ($) {
    $(document).ready(function () {

        $("body.loading").removeClass("loading");

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
})
