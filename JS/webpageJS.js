jQuery(document).ready(function($){
	$('.overlay-pc').fadeIn('slow');
	$("body").mousemove(function() {
  $('.overlay-pc').fadeOut("slow");
	$('.link_tags').fadeIn("slow");
}
);
		$(window).on('scroll', function() {

				var y_scroll_pos = window.pageYOffset;
				var total_y=$(window).outerHeight(true);
				var screen_per=(y_scroll_pos/total_y)*100;
				var scroll_beg = 0;
                var scroll_end= 15;
                console.log(screen_per);
				if(screen_per >= scroll_beg && screen_per <= scroll_end){
            		$("#TagLine-mobile").fadeIn();
				}
        		if(screen_per > scroll_end){
            		$("#TagLine-mobile").fadeOut();
        		}

		});

	})
