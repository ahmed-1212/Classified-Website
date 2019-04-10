$(document).ready(function() {

            var scrollButton = $("#tap-up");
            $(window).scroll(function() {
                if ($(this).scrollTop() >= 630) {
                    scrollButton.show();
                } else {
                    scrollButton.hide();
                }
            });

            scrollButton.click(function() {
                $("html,body").animate({
                    scrollTop: 0
                }, 600);
            });
    
        
            
        });