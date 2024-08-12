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


    $("#contact_form [type=submit]").click(function (e) {
        let __that = $(this).parent()
        let __data = {};
            __data['name'] = __that.find('[name=name]').val()
            __data['email'] = __that.find('[name=email]').val()
            __data['message'] = __that.find('[name=message]').val()

        $.ajax({
            url: './contact-submit.php',
            type: 'POST',
            data: __data,
            dataType: "json",

            success: (response) => {
                alert(response.message)
            },

            error: (err) => {
                alert(err.responseJSON.message)
            }
        });

        e.preventDefault();
        e.stopPropagation();
        return false;
    });
})
