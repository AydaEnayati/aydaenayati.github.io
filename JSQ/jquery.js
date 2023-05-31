$(document).ready(function () {

    $($("button")[0]).click(function () {
        $(".blur").removeClass("hidden");
        $(".search-modal").slideDown();
        $($("button")[1]).removeClass("hidden");
        $($("button")[0]).addClass("hidden");
        $($("button")[2]).removeClass("hidden");
        $($("button")[3]).addClass("hidden");
        $(".mobile-nav").addClass("hidden");
    });


    $($("button")[1]).click(function () {
        $(".blur").addClass("hidden");
        $(".search-modal").hide();
        $($("button")[0]).removeClass("hidden");
        $($("button")[1]).addClass("hidden");
    });

    $($("button")[2]).click(function () {
        $(".blur").removeClass("hidden");
        $(".search-modal").hide();
        $(".mobile-nav").removeClass("hidden");
        $($("button")[3]).removeClass("hidden");
        $($("button")[2]).addClass("hidden");
        $($("button")[0]).removeClass("hidden");
        $($("button")[1]).addClass("hidden");
    });


    $($("button")[3]).click(function () {
        $(".blur").addClass("hidden");
        $(".search-modal").hide();
        $(".mobile-nav").addClass("hidden");
        $($("button")[2]).removeClass("hidden");
        $($("button")[3]).addClass("hidden");
    });

});