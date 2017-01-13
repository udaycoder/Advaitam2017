jQuery(document).ready(function($){
	var countDownDate = new Date("Feb 8, 2017 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("Timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
	document.getElementById("Timer-mobile").innerHTML = days + "d " + hours + "h "
	+ minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Timer").innerHTML = "It has Begun";
  }
	if (distance < 0) {
    clearInterval(x);
    document.getElementById("Timer-mobile").innerHTML = "It has Begun";
  }
}, 1000);

var timeout;

	$('.overlay-pc').fadeIn('slow');
	$("body").mousemove(function() {
  $('.overlay-pc').fadeOut("slow");
	$('.link_tags').fadeIn("slow");
	clearTimeout(timeout);
  timeout = setTimeout(function(){$('.link_tags').fadeOut("fast");$('.overlay-pc').fadeIn('slow');}, 1000);
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
