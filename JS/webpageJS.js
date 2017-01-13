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
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  	document.getElementById("timer-mobile").innerHTML = days + "d " + hours + "h "
  	+ minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "It has Begun";
    }
  	if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer-mobile").innerHTML = "It has Begun";
    }
  }, 1000);




	//On hover over tagline in pc, fade out and fade in the by line....
  $('#main-container .hero-overlay').hover(function (e) {
    console.log(e.target);
      $('#main-container .tagline').fadeOut(500);
      setTimeout(function () {
        $('#main-container .byline').fadeIn();
      }, 500);

  }, function(e) {
    console.log(e.target);
      $('#main-container .byline').fadeOut(500);
      setTimeout(function () {
        $('#main-container .tagline').fadeIn();
      }, 500);
      
  
  });
  

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


    //Implementing a separate timer, imported code, may be refactored

      var countDownDate = new Date("Feb 8, 2017 00:00:00").getTime();

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var cDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      var cHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var cMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var cSeconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Create Countdown
    var Countdown = {
      
      // Backbone-like structure
      $el: $('.countdown'),
      
      // Params
      countdown_interval: null,
      total_seconds     : 0,
      
      // Initialize the countdown  
      init: function() {
        
        // DOM
        this.$ = {
          days  : this.$el.find('.bloc-time.days .figure'),
          hours  : this.$el.find('.bloc-time.hours .figure'),
          minutes: this.$el.find('.bloc-time.min .figure'),
          seconds: this.$el.find('.bloc-time.sec .figure')
        };

        // Init countdown values
        this.values = {
            days  : cDays,
            hours  : cHours,
            minutes: cMinutes,
            seconds: cSeconds
        };
        
        // Initialize total seconds
        this.total_seconds = (this.values.days * 24 * 60 * 60) + (this.values.hours * 60 * 60) + (this.values.minutes * 60) + this.values.seconds;

        // Animate countdown to the end 
        this.count();    
      },
      
      count: function() {
        
        var that    = this,
            $day_1 = this.$.days.eq(0),
            $day_2 = this.$.days.eq(1),
            $hour_1 = this.$.hours.eq(0),
            $hour_2 = this.$.hours.eq(1),
            $min_1  = this.$.minutes.eq(0),
            $min_2  = this.$.minutes.eq(1),
            $sec_1  = this.$.seconds.eq(0),
            $sec_2  = this.$.seconds.eq(1);
        
            this.countdown_interval = setInterval(function() {

            if(that.total_seconds > 0) {

                --that.values.seconds;              

                if(that.values.minutes >= 0 && that.values.seconds < 0) {

                    that.values.seconds = 59;
                    --that.values.minutes;
                }

                if(that.values.hours >= 0 && that.values.minutes < 0) {

                    that.values.minutes = 59;
                    --that.values.hours;
                }

                if(that.values.days >= 0 && that.values.hours < 0) {

                    that.values.hours = 23;
                    --that.values.days;
                }

                // Update DOM values
                // Days
                that.checkHour(that.values.days, $day_1, $day_2);

                // Hours
                that.checkHour(that.values.hours, $hour_1, $hour_2);

                // Minutes
                that.checkHour(that.values.minutes, $min_1, $min_2);

                // Seconds
                that.checkHour(that.values.seconds, $sec_1, $sec_2);

                --that.total_seconds;
            }
            else {
                clearInterval(that.countdown_interval);
            }
        }, 1000);    
      },
      
      animateFigure: function($el, value) {
        
         var that         = this,
             $top         = $el.find('.top'),
             $bottom      = $el.find('.bottom'),
             $back_top    = $el.find('.top-back'),
             $back_bottom = $el.find('.bottom-back');

        // Before we begin, change the back value
        $back_top.find('span').html(value);

        // Also change the back bottom value
        $back_bottom.find('span').html(value);

        // Then animate
        TweenMax.to($top, 0.8, {
            rotationX           : '-180deg',
            transformPerspective: 300,
            ease                : Quart.easeOut,
            onComplete          : function() {

                $top.html(value);

                $bottom.html(value);

                TweenMax.set($top, { rotationX: 0 });
            }
        });

        TweenMax.to($back_top, 0.8, { 
            rotationX           : 0,
            transformPerspective: 300,
            ease                : Quart.easeOut, 
            clearProps          : 'all' 
        });    
      },
      
      checkHour: function(value, $el_1, $el_2) {
        
        var val_1       = value.toString().charAt(0),
            val_2       = value.toString().charAt(1),
            fig_1_value = $el_1.find('.top').html(),
            fig_2_value = $el_2.find('.top').html();

        if(value >= 10) {

            // Animate only if the figure has changed
            if(fig_1_value !== val_1) this.animateFigure($el_1, val_1);
            if(fig_2_value !== val_2) this.animateFigure($el_2, val_2);
        }
        else {

            // If we are under 10, replace first figure with 0
            if(fig_1_value !== '0') this.animateFigure($el_1, 0);
            if(fig_2_value !== val_1) this.animateFigure($el_2, val_1);
        }    
      }
    };

    // Let's go !
    Countdown.init();

	})
