$(document).ready(function(){



    $(".open-menu").on("click", function (e) {
        e.preventDefault();
        if ($(".menu").hasClass("opened")) {
            $(".menu").removeClass("opened");
        } else {
            $(".menu").addClass("opened");
        }
    });

    (function($) {
        "use strict";
    
        // manual carousel controls
        $('.next').click(function(){ $('.carousel').carousel('next');return false; });
        $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
        
    })(jQuery);


});