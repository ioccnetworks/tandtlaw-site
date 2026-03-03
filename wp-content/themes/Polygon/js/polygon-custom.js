jQuery(document).ready(function($) {

jQuery(".more-link").text(polygonparticleground.divi_polygon_read_more_button_text);

// makes sure the whole site is loaded
jQuery(window).load(function () {
		"use strict";
		// will first fade out the loading animation
		jQuery(".status").fadeOut();
		// will fade out the whole DIV that covers the website.
		jQuery(".preloader").delay(1000).fadeOut("slow");
});
		

 
/* mobile menu fixed on scroll */
jQuery(window).load(function($) {
 var mbwidth = parseInt(polygonparticleground.divi_polygon_switch_to_mobile_menu);
 if ( jQuery(window).width() <= mbwidth ){	
 	jQuery('.mobile_menu_bar').click(function(){ 
		jQuery('body').toggleClass('mobilemenuscroll');
		//jQuery('#mobile_menu').css( 'min-height',(jQuery(window).height()/17)+'vh');
		//jQuery('#mobile_menu').css( 'max-height',(jQuery(window).height()/34)+'vh');
		jQuery('#mobile_menu').css( 'min-height',(jQuery(window).height())+'px');
		jQuery('#mobile_menu').css( 'max-height','100vh');
	 });
 }
 
});

if (jQuery('#main-footer').find(".poly_sign_up_section").length > 0 ){
	if( jQuery('#main-footer .poly_sign_up_section').css('padding-top') ){
			var paddingtop_container = parseInt(jQuery('#main-footer .poly_sign_up_section').css('padding-top')) + 48;
			jQuery('#main-content .container:first-child').css({
						'paddingTop' : paddingtop_container
			});
	}
}	
								
if( jQuery('body').find('#polygon-particles-js').length >0 ){
	
if ( polygonparticleground.divi_polygon_interactivity == 'on' ){					

particlesJS('polygon-particles-js',
  
  {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": polygonparticleground.divi_polygon_dot_color
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": polygonparticleground.divi_polygon_dot_color
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": polygonparticleground.divi_polygon_bulb_size,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": polygonparticleground.divi_polygon_line_color,
        "opacity": 0.9,
        "width": polygonparticleground.divi_polygon_line_width,
      },
      "move": {
        "enable": true,
        "speed":  polygonparticleground.divi_polygon_speed,
        "direction": "left",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 80,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 100,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 100
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    
  }

);

}else{
	
	particlesJS('polygon-particles-js',
  
  {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": polygonparticleground.divi_polygon_dot_color
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": polygonparticleground.divi_polygon_dot_color
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": polygonparticleground.divi_polygon_bulb_size,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": polygonparticleground.divi_polygon_line_color,
        "opacity": 0.9,
        "width": polygonparticleground.divi_polygon_line_width,
      },
      "move": {
        "enable": true,
        "speed":  polygonparticleground.divi_polygon_speed,
        "direction": "left",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 300,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 100
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    
  }

);

	
}


}

$action = jQuery('#et_pb_call_to_action_section'); 
if ( $action.length ) { 
  jQuery(window).scroll(function() {
    var scroll = jQuery(window).scrollTop(),
      objectPosition = $action.offset().top - 500;

    if (scroll > objectPosition) {
      jQuery('body').addClass("et_highlight_cta");
    } else {
      jQuery('body').removeClass("et_highlight_cta");
    }
  });
}

});



jQuery(window).load(function($) {
 var mbwidth = parseInt(polygonparticleground.divi_polygon_switch_to_mobile_menu);						
 if ( jQuery(window).width() <= mbwidth ){	
			jQuery('#mobile_menu li').removeClass('anima');
			jQuery('body').removeClass('et_primary_nav_dropdown_animation_flip');
			jQuery('body').removeClass('et_secondary_nav_dropdown_animation_fade'); 
 }
});