$(function () {
    $('.bg-slide').mousemove(function (move) {
        var moveMouse = (move.pageX * -1 / 15);
        $('.bg-slide .slide12').css({
            'background-position': moveMouse + 'px 100%'
        });
    });
    //MOUSE LEAVE, ANIMATE BACKGROUND TO START POSITION
    $('.bg-slide').mouseleave(function () {
        $('.bg-slide .slide12').animate({
            'background-position': '50% 100%'
        });
    });

    $(".hover-both > li").mouseenter(function () {
        var className = $(this).attr('class');
        $("." + className).css({ background: "rgba(255,255,255,0.05)" });

    });
    $(".hover-both > li").mouseleave(function () {
        var className = $(this).attr('class');
        $("." + className).css({ background: "transparent" });

    });

    $("#nav-small").mouseenter(function () {
        $("#nav-large").show("slide", { direction: "left" }, 500);
        $("#logo1, #menu1, #contact1, #social").show("slide", { direction: "left" }, 500);
    });

    $("#header").mouseleave(function () {
        $("#logo1, #menu1, #contact1, #social, #nav-large").delay(100).hide("slide", { direction: "left" }, 500);
    });

    // Call Back
    function enableButton() {
        $("#switch, #switch1, #toggle-button-up, #toggle-button-down").removeAttr("disabled", "disabled");
        $("#pull-me-down").fadeTo(300, 0.2).fadeTo(300, 1.0).fadeTo(300, 0.2).fadeTo(300, 1.0).fadeTo(300, 0.2).fadeTo(300, 1.0).fadeTo(300, 0.2).fadeTo(300, 1.0).fadeTo(300, 0.2).fadeTo(300, 1.0).fadeTo(300, 0.2).fadeTo(300, 1.0).fadeTo(300, 0.2).fadeTo(300, 1.0);
        autoPull();
    }
    function autoPull() {
        $("#toggle-button-up").delay(2000).fadeOut(100);
        $("#toggle-button-down").delay(2000).fadeIn(100, bulbGlow);
        $("#switch").delay(2000).attr('disabled', 'disabled');
        $("#toggle-button-up").delay(2000).attr('disabled', 'disabled');
    }
    // Show Small Nav Bar
    function showmenu() {
        $("#nav-small").show("slide", { direction: "left" }, 500, scrollAllow);
        $("#logo, #menu, #contact, #arabic").show("slide", { direction: "left" }, 500);
    }

    // Show Watch Icon
    function showWatch() {
        $("#watch-video").fadeIn(1000, showmenu);
    }
    // Icons Flowing Out
    function showflowouts() {

        $(".vp, .hp, .ap, .wf, .mt, .vt").fadeIn(1000, showWatch);

    }
    // PULL ME DOWN
    $("#switch, #toggle-button-up").click(function () {
        $("#toggle-button-up").fadeOut(100);
        $("#toggle-button-down").fadeIn(100, bulbGlow);
        $("#switch").attr('disabled', 'disabled');
        $("#toggle-button-up").attr('disabled', 'disabled');

    });
    $("#toggle-button-down, #switch1").click(function () {
        $("#toggle-button-down").fadeOut(100);
        $("#toggle-button-up").fadeIn(100, bulbOff);
        $("#switch").removeAttr('disabled', 'disabled');
        $("#toggle-button-up").removeAttr('disabled', 'disabled');
    });


    function bulbGlow() {
        $("#bulb-1, #bulb-2, #bulb-3, #bulb-4, #bulb-5, #bulb-6, #bulb-7").fadeOut(0);
        $("#bulboff").delay(0).fadeIn(0);
        $("#bulbon").fadeIn(100, bulbOff1);
		
		 $("#bulb-1-full, #bulb-2-full, #bulb-3-full, #bulb-4-full, #bulb-5-full, #bulb-6-full, #bulb-7-full").fadeOut(0);
        $("#bulboff-full").delay(0).fadeIn(0);
        $("#bulbon-full").fadeIn(100, bulbOff1);

    };
    function bulbGlow1() {
        $("#bulbon").fadeIn(100, bulbOff2);
		$("#bulbon-full").fadeIn(100, bulbOff2);

    };
    function bulbGlow2() {
        $("#bulbon").fadeIn(100, showflowouts);
		$("#bulbon-full").fadeIn(100, showflowouts);

    };
    // Show Logo Slider
    function logoSlider() {
        $("#logo-slide").show("slide", { direction: "up" }, 1000, textSlider);
    };
    function textSlider() {
        $("#sager-text").fadeIn(1000, enableButton);
    };
    function bulbOff1() {
        $("#bulbon").fadeOut(0);
        $("#bulboff").delay(300).fadeIn(50, bulbGlow1);
    };
    function bulbOff2() {
        $("#bulbon").fadeOut(0);
        $("#bulboff").delay(700).fadeIn(50, bulbGlow2);
    };
    function bulbOff() {
        $("#bulbon").fadeOut(0);
        $(".vp, .hp, .ap, .wf, .mt, .vt").fadeOut(1000);
        $("#bulboff").fadeIn(100);
    };
	
	
	function bulbOff1() {
        $("#bulbon-full").fadeOut(0);
        $("#bulboff-full").delay(300).fadeIn(50, bulbGlow1);
    };
    function bulbOff2() {
        $("#bulbon-full").fadeOut(0);
        $("#bulboff-full").delay(700).fadeIn(50, bulbGlow2);
    };
    function bulbOff() {
        $("#bulbon-full").fadeOut(0);
        $(".vp, .hp, .ap, .wf, .mt, .vt").fadeOut(1000);
        $("#bulboff-full").fadeIn(100);
    };
	
    function bulb1() {

        $("#bulb-1").delay(300).fadeIn(500);
        $("#bulb-2").delay(600).fadeIn(500);
        $("#bulb-3").delay(900).fadeIn(500);
        $("#bulb-4").delay(1200).fadeIn(500);
        $("#bulb-5").delay(1500).fadeIn(500);
        $("#bulb-7").delay(1800).fadeIn(500);
        $("#bulb-6").delay(2100).fadeIn(500, logoSlider);
		
		$("#bulb-1-full").delay(300).fadeIn(500);
        $("#bulb-2-full").delay(600).fadeIn(500);
        $("#bulb-3-full").delay(900).fadeIn(500);
        $("#bulb-4-full").delay(1200).fadeIn(500);
        $("#bulb-5-full").delay(1500).fadeIn(500);
        $("#bulb-7-full").delay(1800).fadeIn(500);
        $("#bulb-6-full").delay(2100).fadeIn(500, logoSlider);


    };

    // Show Bulb
    function showBulb() {
        $("#bulb-container").show("blind", 1000, bulb1);
		$("#bulb-container-full").show("blind", 1000, bulb1);
    };
    // set effect from select menu value
    $(document).ready(function () {
         showBulb();
		 //scrollAllow()
        return true;
    });
	
	
var wow = new WOW({
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       0,          // distance to the element when triggering the animation (default is 0)
		mobile:       true,       // trigger animations on mobile devices (default is true)
		live:         true,       // act on asynchronously loaded content (default is true)
});
wow.init();	

var slider = $("#portfolio-slider").sliderTabs({
		  autoplay: false,
		  tabSlideSpeed:200,
		  transitionSpeed:2000,
		  tabArrows: false,
		  height:"310px",
		  position: "top"
});
	
});


var slider = $("#scaledmodal-slider").sliderTabs({
	  autoplay: false,
	  tabSlideSpeed:200,
	  transitionSpeed:2000,
	  tabArrows: false,
	  position: "top"
});

var iframe = $('#scaledmodal-slider ul li a').on('click',function(){ 
	  $(this).attr("src", "");     
	  $(".ui-slider-tab-content.selected iframe").each(function(){
	  var url = $(this).attr("src");
	  $(this).attr("src", "");
	  $(this).attr("src", url);  
})
});


var rightKey, leftKey, topKey, bottomKey;

function scrollAllow() {

    //Set up the triggers for the arrow keys
    $(document).keydown(function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        var keypressed = e.keyCode;
        if (e.keyCode == 37 && typeof leftKey === 'function') {
            leftKey();
        } else if (e.keyCode == 38 && typeof topKey === 'function') {
            topKey();
        } else if (e.keyCode == 39 && typeof rightKey === 'function') {
            rightKey();
        } else if (e.keyCode == 40 && typeof bottomKey === 'function') {
            bottomKey();
        }
    });

    parallax.add($("#home"))
			.add($("#studio"))
			.add($("#holography"))
			.add($("#productdes"))
			.add($("#services"))
			.add($("#corporate"))
			.add($("#animation"))
			.add($("#architectural"))
			.add($("#scaledmodal"))	
			.add($("#portfolio"))
			.add($("#contactus"))
			.add($("#join"));	
			//.add($("#wayfinding"))
			//.add($("#polytouch"))
			//.add($("#contactus"))
			
			//.add($("#join"))
			
			
			//.add($("#scaledmodal"));

    parallax.easing = 'linear';
    parallax.speed = 1200;
    parallax.scaling = 1;

    //Clears each page navigation on load
    parallax.preload = function () {
        rightKey = leftKey = topKey = bottomKey = "";
    };


    //Setting up page navigation

    function hexHover() {
        $("#service-hex-2").mouseenter(function () {
            $("#hex-2-text").show("slide", { direction: "right" }, 1000);
            $("#service-hex-hover-2").fadeIn(1000);

        });
        $("#service-hex-2").mouseleave(function () {
            $("#service-hex-hover-2").stop(true, true).fadeOut(500);
            $("#hex-2-text").stop(true, true).fadeOut(500);
        });
        $("#service-hex-3").mouseenter(function () {
            $("#hex-3-text").show("slide", { direction: "right" }, 1000);
            $("#service-hex-hover-3").fadeIn(1000);

        });
        $("#service-hex-3").mouseleave(function () {
            $("#service-hex-hover-3").stop(true, true).fadeOut(500);
            $("#hex-3-text").stop(true, true).fadeOut(500);
        });
        $("#service-hex-4").mouseenter(function () {
            $("#hex-4-text").show("slide", { direction: "right" }, 1000);
            $("#service-hex-hover-4").fadeIn(1000);

        });
        $("#service-hex-4").mouseleave(function () {
            $("#service-hex-hover-4").stop(true, true).fadeOut(500);
            $("#hex-4-text").stop(true, true).fadeOut(500);
        });
        $("#service-hex-5").mouseenter(function () {
            $("#hex-5-text").show("slide", { direction: "right" }, 1000);
            $("#service-hex-hover-5").fadeIn(1000);

        });
        $("#service-hex-5").mouseleave(function () {
            $("#service-hex-hover-5").stop(true, true).fadeOut(500);
            $("#hex-5-text").stop(true, true).fadeOut(500);
        });
        $("#service-hex-6").mouseenter(function () {
            $("#hex-6-text").show("slide", { direction: "right" }, 1000);
            $("#service-hex-hover-6").fadeIn(1000);

        });
        $("#service-hex-6").mouseleave(function () {
            $("#service-hex-hover-6").stop(true, true).fadeOut(500);
            $("#hex-6-text").stop(true, true).fadeOut(500);
        });
    }

   
    
    function navClick() {
		$(".std").bind('click', function () {
            parallax["studio"].bottom();

        });
        $(".hgy").bind('click', function () {
            parallax["holography"].bottom();
        });
		 $(".services").bind('click', function () {
            parallax["services"].bottom();
        });
		
		$(".animation").bind('click', function () {
            parallax["animation"].bottom();
        });
		
		$(".visual").bind('click', function () {
            parallax["architectural"].bottom();
        });
		
		$("._3dscale").bind('click', function () {
            parallax["scaledmodal"].bottom();
        });
		
		
        $(".pds").bind('click', function () {
            parallax["productdes"].bottom();

        });
		
        $(".cbs").bind('click', function () {
            parallax["corporate"].bottom();

        });
        $(".ps").bind('click', function () {
            parallax["portfolio"].bottom();

        });
        $(".jus").bind('click', function () {
            parallax["join"].bottom();

        });
       
        $(".contact").bind('click', function () {
            parallax["contactus"].bottom();
        });
        $(".home-icon ").bind('click', function () {
            parallax["home"].top();
        });
    }
	
    function resetMenu() {
        $(".std, .hgy, .products, .pds, .cbs, .ps, .services, .animation, .visual, ._3dscale, .multi, .contact").removeAttr("style", "background-color:rgba(255,255,255,0.05);");
    }

    function resetAllVideos() {
        mediaPlayer9 = document.getElementById('presenter-video');
        mediaPlayer9.pause();
        mediaPlayer4 = document.getElementById('product-des-video');
        mediaPlayer4.pause();
        mediaPlayer2 = document.getElementById('service-video-cont');
        mediaPlayer2.pause();
        //reset css
        $('#port-text-def').removeClass('active');
    }
	
	

    parallax.home.onload = function () {
        navClick();
		
		$('#home').bind('DOMMouseScroll mousewheel', function(e){
            if(e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
				//scroll down
				parallax["studio"].bottom();
                $("#home-wrap").fadeOut(100);
				console.log('Down');
            }
            else{
               //scroll up
				console.log('Up');
            }
        });
		
         resetMenu();
        $("#home-wrap").fadeIn();
		
		$(".wf, .std").bind('click', function () {
            parallax["studio"].bottom();
            $("#home-wrap").fadeOut(100);
        });
		//
		$(".vp, .hgy").bind('click', function () {
            parallax["holography"].bottom();
            $("#home-wrap").fadeOut(100);
        });
		//
		$(".hp, .animation").bind('click', function () {
            parallax["animation"].bottom();
            $("#home-wrap").fadeOut(100);
        });
		//
		$(".mt .services").bind('click', function () {
            parallax["services"].bottom();
            $("#home-wrap").fadeOut(100);
        });
		//
		$(".ap, .visual").bind('click', function () {
            parallax["architectural"].bottom();
            $("#home-wrap").fadeOut(100);
        });
		//
		$(".vt, ._3dscale").bind('click', function () {
            parallax["scaledmodal"].bottom();
            $("#home-wrap").fadeOut(100);
        });
		//
		$(".contact").bind('click', function () {
            parallax["contactus"].bottom();
            $("#home-wrap").fadeOut(100);
        });
		//
        $(document).keydown(function (e) {
            if (e.keyCode == 40 || e.keyCode == 39) {
                $("#home-wrap").hide(100);

            }
        });
        setBottom("studio", "studio");
    };

   
   //The STUDIO JS
	parallax.studio.onload = function () {
		resetAllVideos();
        $("#studio-cover").fadeIn(200);	
		
		$('#studio').bind('DOMMouseScroll mousewheel', function(e){
            if(e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
				//scroll down
				parallax["holography"].bottom();
                $("#studio-cover").fadeOut(500);
				console.log('Down');
            }
            else{
               //scroll up
			    parallax["home"].top();
                $("#studio-cover").fadeOut(500);
				console.log('Up');
            }
        });
		
		navClick();
		resetMenu();

        setTop("home", "Home");
		setBottom("holography", "holography");
    };
	//The STUDIO JS
	
	//HOLOGRAM
	parallax.holography.onload = function () {
        resetAllVideos();
        mediaPlayer9 = document.getElementById('presenter-video');
        mediaPlayer9.src = "media/3MB.mp4";
        if (document.location.href.indexOf("arabic") > -1)
            mediaPlayer9.src = "media/ffwebpresenter_a.mp4";
        mediaPlayer9.load();
        mediaPlayer9.play();
        mediaPlayer9.onended = function (e) {
            $("#play").fadeOut(0);
            $("#pause1").fadeIn(0);
        };

        $('#holography').removeAttr("style", "position:absolute");
        $("#holography-cover").fadeIn(200);
        
		$('#holography').bind('DOMMouseScroll mousewheel', function(e){
            if(e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
				//scroll down
				parallax["services"].bottom();
                mediaPlayer9.pause();
                $("#holography-cover").fadeOut(500);
				console.log('Down');
            }
            else{
               //scroll up
			    parallax["studio"].top();
				mediaPlayer9.pause();
                $("#holography-cover").fadeOut(500);
				console.log('Up');
            }
        });
		
		
        navClick();
        resetMenu();
        //vidThumb();
        $("#mac").show("slide", { direction: "up" }, 2000);
        $("#mac1").mouseenter(function () {
            /*$(".media-icon-hover").stop( true, true ).removeAttr("style", "visibility:hidden");*/
        });
        $("#mac1").mouseleave(function () {
            /*$(".media-icon-hover").stop( true, true ).attr("style","visibility:hidden");*/
        });

        $("#shadow").fadeIn(2000);
        /*
                $("#presenter").stop( true, true ).show("slide", {direction: "right"}, 3000);
        */
        $("#read-more").delay(3000).show();
        $(".products").attr("style", "background-color:rgba(255,255,255,0.05);");
        $(".heading1").fadeIn(1000);
        /*$( ".heading1" ).effect("scale", {percent: 150, scale: 'content',  origin: ["right", "top"]},1000);*/
        $("#read-more").click(function () {
            $("#holography-cover").fadeOut(500);
            parallax["productdes"].right();
            mediaPlayer9.pause();
            /*
				$("#presenter").hide("slide", {direction: "right"}, 3000);
				$("#read-more").hide();
				$("#holo-middle").hide("slide", {direction: "up"}, 1000);
				$("#shadow").delay(2000).css("opacity","0", 1000);
			*/
        });

        $("#mac1, .media-icon-hover, .vid-hover, .vid-hover1, .vid-hover2").click(function () {
            /*
				$( "#mac1, .media-icon-hover" ).fadeOut(500);
				$( "#mac2" ).fadeIn(500);
			*/


        });
        $("#play").click(function () {
            mediaPlayer9.pause();
            $("#play").fadeOut(0);
            $("#pause1").fadeIn(0);
        });
        $("#volume").click(function () {
            mediaPlayer9.volume = 0.0;
            $("#volume").fadeOut(0);
            $("#no-volume").fadeIn(0);

        });

        $("#pause1").click(function () {
            mediaPlayer9.play();
            $("#pause1").fadeOut(0);
            $("#play").fadeIn(0);


        });

        $("#no-volume").click(function () {
            mediaPlayer9.volume = 1.0;
            $("#no-volume").fadeOut(0);
            $("#volume").fadeIn(0);

        });
		
		var owl = $('#owl-demo');owl.owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			nav:true,
			dots: false,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:6
				}
			}
		});
        
        $(document).keydown(function (e) {
            if (e.keyCode == 40 || e.keyCode == 39 || e.keyCode == 38) {
                /*
                    
                    $("#presenter").hide("slide", {direction: "right"}, 3000);
                    $("#read-more").hide();
                    $("#holo-middle").hide("slide", {direction: "up"}, 1000);
                    $("#shadow").delay(2000).css("opacity","0", 1000);
                */
                mediaPlayer9.pause();
                $("#holography-cover").fadeOut(500);
            }
        });
		
		$(document).on("click", "#owl-demo a", function(){
            mediaPlayer9.pause();
			//var videoid = "Hc-jhhnE03Q";
			var videoid = $(this).attr("data-video");
			$("#mac2 iframe").remove();
			$('<iframe width="420" height="315" frameborder="0" allowfullscreen></iframe>')
				.attr("src", "http://www.youtube.com/embed/" + videoid)
				.appendTo("#mac2");
        })

        setTop("studio", "studio");
        setRight("productdes", "Home");
        setBottom("services", "Home");


    };
	
	//HOLOGRAM
	
	//product
	parallax.productdes.onload = function () {
        navClick();
        resetMenu();
        /*$(".pds").show();*/
        $(".products").attr("style", "background-color:rgba(255,255,255,0.05);");
        $(".heading2").fadeIn(1000);
        setLeft("holography", "Holography Projection");
        $("#arrow-product-des").bind('click', function () {
            parallax["holography"].left();
        });
        $(document).keydown(function (e) {
            if (e.keyCode == 37) {
                mediaPlayer4.pause();
            }
        });
    };
	//Product
	
	//SERVICES
	 parallax.services.onload = function () {
        resetAllVideos();
        mediaPlayer2 = document.getElementById('service-video-cont');
        $("#services-cover").fadeIn();
		
		$('#services').bind('DOMMouseScroll mousewheel', function(e){
            if(e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
				//scroll down
				parallax["animation"].bottom();
				mediaPlayer2.pause();
                $("#services-cover").fadeOut(500);
				console.log('Down');
            }
            else{
               //scroll up
			    parallax["holography"].top();
				mediaPlayer2.pause();
                $("#services-cover").fadeOut(500);
				console.log('Up');
            }
        });
		
        /*$(".cbs").show();*/
        $(".pds").hide();
        $(".ps, .jus").show();
        navClick();
        resetMenu();
        /* hexHover(); */
        $(".services").attr("style", "background-color:rgba(255,255,255,0.05);");
        $(".heading3").fadeIn(1000);
        $("#discover").bind('click', function () {
            parallax["corporate"].right();
            $("#services-cover").fadeOut(500);
        });


        $(document).keydown(function (e) {
            if (e.keyCode == 40 || e.keyCode == 39 || e.keyCode == 38) {
                $("#services-cover").fadeOut(500);
                mediaPlayer2.pause();
                $(mediaPlayer2).css('z-index', '-99');
            }
        });

        $("#service-hex-2, #service-video, #service-media").click(function () {
            mediaPlayer2.src = "media/videos/s_mobile.mp4";
            if (document.location.href.indexOf("arabic") > -1)
                mediaPlayer2.src = "media/videos/arabic/s_mobile.mp4";
            mediaPlayer2.load();            
            mediaPlayer2.play();
            $(mediaPlayer2).css('z-index', '1');

        });
		
        $("#service-hex-3").click(function () {
            mediaPlayer2.src = "media/videos/s_anim.mp4";
            if (document.location.href.indexOf("arabic") > -1)
                mediaPlayer2.src = "media/videos/arabic/s_anim.mp4";
            mediaPlayer2.load();
            mediaPlayer2.play();
            $(mediaPlayer2).css('z-index', '1');
        });
		
        $("#service-hex-4").click(function () {
            mediaPlayer2.src = "media/videos/s_vp.mp4";
            if (document.location.href.indexOf("arabic") > -1)
                mediaPlayer2.src = "media/videos/arabic/s_vp.mp4";
            mediaPlayer2.load();
            mediaPlayer2.play();
            $(mediaPlayer2).css('z-index', '1');
            /*
				$( "#service-vid-1, #service-vid-2, #service-vid-4, #service-vid-5" ).hide(500);
				$( "#service-vid-3" ).fadeIn(500);
			*/
        });
		
        $("#service-hex-5").click(function () {
            mediaPlayer2.src = "media/videos/s_web.mp4";
            if (document.location.href.indexOf("arabic") > -1)
                mediaPlayer2.src = "media/videos/arabic/s_web.mp4";
            mediaPlayer2.load();
            mediaPlayer2.play();
            $(mediaPlayer2).css('z-index', '1');
            /*
				$( "#service-vid-1, #service-vid-2, #service-vid-3, #service-vid-5" ).hide(500);
				$( "#service-vid-4" ).fadeIn(500);			*/

        });
		
        $("#service-hex-6").click(function () {
            mediaPlayer2.src = "media/videos/s_3dv.mp4";
            if (document.location.href.indexOf("arabic") > -1)
                mediaPlayer2.src = "media/videos/arabic/s_3dv.mp4";
            mediaPlayer2.load();
            mediaPlayer2.play();
            $(mediaPlayer2).css('z-index', '1');
            /*
				$( "#service-vid-1, #service-vid-2, #service-vid-3, #service-vid-4" ).hide(500);
				$( "#service-vid-5" ).fadeIn(500);			*/

        });

        $('#d_services').click(function () {
            $('#s1')[0].click();
            $('#s2')[0].click();
            $('#s3')[0].click();
            $('#s4')[0].click();
            $('#s5')[0].click();
        });

        setTop("holography", "Holography Projection");
        setRight("corporate", "Corporate Branding");
        setBottom("animation", "Animation");
    };
	//SERVICES
	
	//SERVICES CORPORATE
	parallax.corporate.onload = function () {
        resetAllVideos();
        $("#corp-1, #corp-2").show('slide', { direction: "up" }, 500);
        $("#corp-3").delay(500).show('slide', { direction: "up" }, 500);
        $("#corp-box1").delay(1000).show('slide', { direction: "right" }, 500);
        $("#corp-box2").delay(1500).show('slide', { direction: "right" }, 500);
        $("#corp-box3").delay(2000).show('slide', { direction: "right" }, 500);
        $("#corp-box4").delay(2500).show('slide', { direction: "right" }, 500);
        $("#corp-box5").delay(3000).show('slide', { direction: "right" }, 500);
        $("#corp-box6").delay(3500).show('slide', { direction: "right" }, 500);
        $("#corp-box7").delay(4000).show('slide', { direction: "right" }, 500);        
        $("#corp-4").delay(4500).show('slide', { direction: "up" }, 500);
        $(".services").attr("style", "background-color:rgba(255,255,255,0.05);");
        setLeft("services", "Services");
        /*$(".cbs").show();*/
        $("#arrow-corporate").bind('click', function () {
            parallax["services"].left();
        });		
        navClick();
        resetMenu();
		$(document).keydown(function (e) {
            if (e.keyCode == 37) {
                mediaPlayer2.pause();
            }
        });
    };
	//SERVICES CORPORATE
	
	//The ANIMATION PLACE JS
	parallax.animation.onload = function () {
        resetAllVideos();
		$(".animation").attr("style", "background-color:rgba(255,255,255,0.05);");
        $('#animation').removeAttr("style", "position:absolute");
        $("#animation-cover").fadeIn(200);	
        
		$('#animation').bind('DOMMouseScroll mousewheel', function(e){
            if(e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
				//scroll down
				parallax["architectural"].bottom();
                $("#animation-cover").fadeOut(500);
				console.log('Down');
            }
            else{
               //scroll up
			    parallax["services"].top();
                $("#animation-cover").fadeOut(500);
				console.log('Up');
            }
        });
		
		
		navClick();
        resetMenu();
		
		var owl = $('#animation-slider');owl.owlCarousel({
            autoplay:true,
			loop:true,
            nav:true,
            dots: true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            //responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
				
		$(document).on("click", "#animation-slider a", function(){
			//var videoid = "Hc-jhhnE03Q";
			var videoid = $(this).attr("data-video");
			$("#video-mac iframe").remove();
			$('<iframe width="420" height="315" frameborder="0" allowfullscreen></iframe>')
				.attr("src", "http://www.youtube.com/embed/" + videoid)
				.appendTo("#video-mac");
        })

        setTop("services", "services");
		setBottom("architectural", "architectural");
		

    };	
	//The  ANIMATION PLACE JS
	
	//The 3D Scale architectural visual presentations JS
	parallax.architectural.onload = function () {
        resetAllVideos();
        $("#architectural-cover").fadeIn(200);	
		
		$('#architectural').bind('DOMMouseScroll mousewheel', function(e){
            if(e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
				//scroll down
				parallax["scaledmodal"].bottom();
                $("#architectural-cover").fadeOut(500);
				console.log('Down');
            }
            else{
               //scroll up
			    parallax["animation"].top();
                $("#architectural-cover").fadeOut(500);
				console.log('Up');
            }
        });
		
		var owl = $('#visual-slider');
		$('#visual-slider').owlCarousel({
		  items: 1,
		  video: true,
		  loop:true,
		  autoplay: true,
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  slideTransition: 'linear',
		  autoplayTimeout: 0,
		  autoplaySpeed: 2500,
		  onInitialized: function() {
			if ($(".owl-item.active video", this.$element).length) {
			  $(".owl-item.active video", this.$element)[0].play();
			  owl.trigger('stop.owl.autoplay')
			  $(".owl-item.active video", this.$element).on('ended', function() {
				owl.trigger('play.owl.autoplay')
			  });
			}
		  },
		  onTranslated: function() {
			if ($(".owl-item.active video", this.$element).length) {
			  $(".owl-item.active video", this.$element)[0].play();
			  owl.trigger('stop.owl.autoplay')
			  $(".owl-item.active video", this.$element).on('ended', function() {
				owl.trigger('play.owl.autoplay')
			  });
			}
		  }
		});
		
		navClick();
        resetMenu();
		/**/

        setTop("animation", "animation");
		setBottom("scaledmodal", "scaledmodal");
		

    };
	//The  3D Scale architectural visual presentations JS
	
	
	//3D scaled models & visual presentations JS
	parallax.scaledmodal.onload = function () {
        resetAllVideos();
        $("#scaledmodal-cover").fadeIn(200);
		
		$('#scaledmodal').bind('DOMMouseScroll mousewheel', function(e){
            if(e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
				//scroll down
				parallax["portfolio"].bottom();
                $("#scaledmodal-cover").fadeOut(500);
				console.log('Down');
            }
            else{
               //scroll up
			    parallax["architectural"].top();
                $("#scaledmodal-cover").fadeOut(500);
				console.log('Up');
            }
        });
		
				
		navClick();
        resetMenu();	
		
		var slider = $("#scaledmodal-slider").sliderTabs({
		  autoplay: false,
		  tabSlideSpeed:200,
		  transitionSpeed:2000,
		});
		/**/	
        setTop("architectural", "Architectural");
		setBottom("portfolio", "Portfolio");
	
		

    };
	//3D scaled models & visual presentations JS
	
	
	//Portfolio And Testimonail
parallax.portfolio.onload = function () {
        resetAllVideos();
        $("#portfolio-cover").fadeIn(200);	
		
		

var $owl = $('.portfolio-test');
    $owl.owlCarousel({
        loop:true,
        video:true,
        lazyLoad:true,
        autoplay:true,
        nav:true,
        dots: false,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
           0:{
               items:1
           },
           600:{
               items:2
           },
           1000:{
               items:3
           }
        }
    });

		
		$('#portfolio').bind('DOMMouseScroll mousewheel', function(e){
            if(e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
				//scroll down
				parallax["contactus"].bottom();
                $("#portfolio-cover").fadeOut(500);
				console.log('Down');
            }
            else{
               //scroll up
			    parallax["scaledmodal"].top();
                $("#portfolio-cover").fadeOut(500);
				console.log('Up');
            }
        });
		
		
		navClick();
        resetMenu();


$("a[href='#portfolio-tab']").click(function(){
setTimeout(function(){
var $owl = $('#portfolio-owlcarousel');
$owl.trigger('destroy.owl.carousel');
$owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');
    $owl.owlCarousel({
        loop:true,
        video:true,
        lazyLoad:true,
            autoplay:true,
        nav:true,
        dots: false,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
           0:{
               items:1
           },
           600:{
               items:2
           },
           1000:{
               items:3
           }
        }
    });
},100)	
	});

$("a[href='#testimonail-tab']").click(function(){
setTimeout(function(){
var $owl = $('#testimonail-owlcarousel');
$owl.trigger('destroy.owl.carousel');
$owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');
	$owl.owlCarousel({
		loop:true,
		video:true,
		lazyLoad:true,
			autoplay:true,
		nav:true,
		dots: false,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsiveClass:true,
		responsive:{
		   0:{
		       items:1
		   },
		   600:{
		       items:2
		   },
		   1000:{
		       items:3
		   }
		}
	});
},100)

});
		

        setTop("scaledmodal", "scaledmodal");
		setBottom("contactus", "contactus Us");
	
		

    };
//Portfolio And Testimonail	

//CONTACT US
parallax.contactus.onload = function () {
        resetAllVideos();
		
		$('#contactus').bind('DOMMouseScroll mousewheel', function(e){
            if(e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
				//scroll down
				$('#ContactModal').modal('hide');
				$("#contactus-cover").fadeOut(500);
				console.log('Down');
            }
            else{
               //scroll up
			    parallax["portfolio"].top();
				$('#ContactModal').modal('hide');
                $("#contactus-cover").fadeOut(500);
				console.log('Up');
            }
        });
		
		
        navClick();
        resetMenu();
        $("#watch-port").click(function () {
            parallax["join"].right();
            $('#ContactModal').modal('hide');
        });
        $(".heading6").fadeIn(1000);

        $(".contact-image").mouseenter(function () {
            $(".contact-image-hover").fadeIn(500);

        });
        $(".contact-image").mouseleave(function () {
            $(".contact-image-hover").fadeOut(500);

        });
        $(document).keydown(function (e) {

            if (e.keyCode == 39 || e.keyCode == 38) {
                $('#ContactModal').modal('hide');
            }
        });
        setTop("portfolio", "Portfolio");
		setRight("join", "join");
       // var center = map.getCenter();
//        google.maps.event.trigger(map, "resize");
//        map.setCenter(center);
    };
//CONTACT US

//JOIN US
 parallax.join.onload = function () {
        resetAllVideos();
        $(".heading8").fadeIn(1000);
        $("#arrow-join").bind('click', function () {
            parallax["contactus"].left();
        });
		
        navClick();
        resetMenu();
        setLeft("contactus", "contactus Us");
    };
//JOIN US
	
	

    //Sets the correct triggers for the arrows, plus arrow keys
    function setRight(page, text) {
        $("#rightText").text(text);
        $("#rightControl").show().unbind('click').click(function () {
            parallax[page].right();
        });
        rightKey = function () {
            parallax[page].right();
        };
    }

    function setLeft(page, text) {
        $("#leftText").text(text);
        $("#leftControl").show().unbind('click').click(function () {
            parallax[page].left();
        });
        leftKey = function () {
            parallax[page].left();
        };
    }

    function setTop(page, text) {
        $("#topText").text(text);
        $("#topControl").show().unbind('click').click(function () {
            parallax[page].top();
        });
        topKey = function () {
            parallax[page].top();
        };
    }

    function setBottom(page, text) {
        $("#bottomText").text(text);
        $("#bottomControl").show().unbind('click').click(function () {
            parallax[page].bottom();
        });
        bottomKey = function () {
            parallax[page].bottom();
        };
    }

   parallax.home.show();
	//parallax.studio.show();
	//parallax.holography.show();
	//parallax.productdes.show();
    //parallax.services.show();
    //parallax.corporate.show();
	//parallax.animation.show();
	//parallax.architectural.show();
	//parallax.scaledmodal.show();
    //parallax.portfolio.show();

}