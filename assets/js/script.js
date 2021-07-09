/*=================================================================

Template name: Doesi
Version: 1.0
Author: SITLBD      
Author url: https://www.sitlbd.com/ 
Developer: Najmul Huda Eimon
Coordinator: Asif Mahmud

[Table of Content]

01. Preloader
02: Scroll to top button
03: Background image
04: Sticky menubar
05: progress bar
06: client slider
07. Project image show
08: Menu
09: Venobox video play
10. contact page Google Map
11: Wow js
 
====================================================================*/

  $(function(){
    "use strict";

    /*================================================================
      01. Preloader
    =================================================================*/
    $( document ).ready(function() {
        setTimeout(()=>{
            $('.preloader').fadeOut()
        }, 250)
    });
    /*=====================================================================
        02: Scroll to top button
    =======================================================================*/

    $('.top-btn').on('click',function(){
        $('html').animate({
            scrollTop: 0
        },1000);
    });

    $(window).on('scroll',function(){
        var $scroll = $(this).scrollTop();

        if($scroll > 300){
            $('.top-btn').addClass('show');
        }else{
            $('.top-btn').removeClass('show');
        }
    });

    /*=====================================================================
        03: Background image
    ======================================================================*/
   let imageTarget = $('[data-img]');
   imageTarget.css('background', function(){
       return 'url('+this.getAttribute('data-img')+') no-repeat center'
   });
   imageTarget.css('backgroundSize', 'cover');

   /*================================================================
        04: Sticky menubar
    =================================================================*/

    // var $navOffset = $('.menubar').offset().top;
    $(window).on('scroll',function(){
        var $scroll = $(this).scrollTop();

      //  if($scroll > $navOffset){
       if($scroll > 250){
           $('.menubar').addClass('sticky');
       }else{
           $('.menubar').removeClass('sticky');
       }
   });


    /*=====================================================================
        05: progress bar
    ======================================================================*/
   $(".count-item").appear(function () {
      var color = $(this).find('.chart').data('color');
      var percent = $(this).find('.chart').data('percent');
      $(this).find('.chart').easyPieChart({
          barColor: function(percent) {
            var ctx = this.renderer.getCtx();
            var canvas = this.renderer.getCanvas();
            var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
                gradient.addColorStop(0, "#2a3bd8");
                gradient.addColorStop(1, "#5075ef");
            return gradient;
          },
          trackColor: '#f5f5f5',
          scaleColor: false,
          scaleLength: 5,
          lineWidth: 15,
          size: 170,
          lineCap: 'round',
          animate: 1500
      });
  });


    /*=====================================================================
        06: client slider
    ======================================================================*/
  var swiper = new Swiper('.client-slider', {
    observer: true,
    observeParents: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    autoPlay: 3000,
    breakpoints: {
        1920: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        }
    }
    
  });

    /*======================================================================
        07. Project image show
    =======================================================================*/

    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        }
      });
  
  
    /*=====================================================================
        08: Menu
    ======================================================================*/
    $('.header-menu a[href="#"]').on("click", function (e) {
        e.preventDefault();
    });

    /*=====================================================================
        09: Venobox video play
   ======================================================================*/
   $('.venobox').venobox();

    /*=========================================================
        10. contact page Google Map
    ==========================================================*/

    if($('#map').length !==0){
            
      var googleMapSelector = $('#map');
      var latitude = $('.google-map-wrapper').attr('data-latitude');
      var longitude = $('.google-map-wrapper').attr('data-longitude');
      var zoome = $('.google-map-wrapper').attr('data-zoom');
      var zoomtoNum = Number(zoome);
      var mapmarker = $('.google-map-wrapper').attr('data-marker');
      var myCenter = new google.maps.LatLng(latitude, longitude);

      function initialize() {
          var mapProp = {
              center: myCenter,
              zoom: zoomtoNum,
              scrollwheel: false,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              styles: [
                      {
                          "featureType": "landscape.man_made",
                          "elementType": "geometry",
                          "stylers": [
                              {
                                  "color": "#f7f1e0"
                              }
                          ]
                      },
                      {
                          "featureType": "landscape.natural",
                          "elementType": "geometry",
                          "stylers": [
                              {
                                  "color": "#d0e3b4"
                              }
                          ]
                      },
                      {
                          "featureType": "landscape.natural.terrain",
                          "elementType": "geometry",
                          "stylers": [
                              {
                                  "visibility": "off"
                              }
                          ]
                      },
                      {
                          "featureType": "poi",
                          "elementType": "labels",
                          "stylers": [
                              {
                                  "visibility": "off"
                              }
                          ]
                      },
                      {
                          "featureType": "poi.business",
                          "elementType": "all",
                          "stylers": [
                              {
                                  "visibility": "off"
                              }
                          ]
                      },
                      {
                          "featureType": "poi.medical",
                          "elementType": "geometry",
                          "stylers": [
                              {
                                  "color": "#fbd3da"
                              }
                          ]
                      },
                      {
                          "featureType": "poi.park",
                          "elementType": "geometry",
                          "stylers": [
                              {
                                  "color": "#bde6ab"
                              }
                          ]
                      },
                      {
                          "featureType": "road",
                          "elementType": "geometry.stroke",
                          "stylers": [
                              {
                                  "visibility": "off"
                              }
                          ]
                      },
                      {
                          "featureType": "road",
                          "elementType": "labels",
                          "stylers": [
                              {
                                  "visibility": "off"
                              }
                          ]
                      },
                      {
                          "featureType": "road.highway",
                          "elementType": "geometry.fill",
                          "stylers": [
                              {
                                  "color": "#ffe36f"
                              }
                          ]
                      },
                      {
                          "featureType": "road.highway",
                          "elementType": "geometry.stroke",
                          "stylers": [
                              {
                                  "color": "#efd151"
                              }
                          ]
                      },
                      {
                          "featureType": "road.arterial",
                          "elementType": "geometry.fill",
                          "stylers": [
                              {
                                  "color": "#ffffff"
                              }
                          ]
                      },
                      {
                          "featureType": "road.local",
                          "elementType": "geometry.fill",
                          "stylers": [
                              {
                                  "color": "black"
                              }
                          ]
                      },
                      {
                          "featureType": "transit.station.airport",
                          "elementType": "geometry.fill",
                          "stylers": [
                              {
                                  "color": "#cfb2db"
                              }
                          ]
                      },
                      {
                          "featureType": "water",
                          "elementType": "geometry",
                          "stylers": [
                              {
                                  "color": "#a2daf2"
                              }
                          ]
                      }
                  ]
          };
          var map = new google.maps.Map( document.getElementById('map'), mapProp );
          var marker = new google.maps.Marker({
              position: myCenter,
              icon: mapmarker,
          });
          marker.setMap(map);

         
      }
      if (googleMapSelector.length) {
          google.maps.event.addDomListener(window, 'load', initialize);
      }
  }

    /*=====================================================================
      11: Wow js
    ======================================================================*/
    new WOW().init({
        boxClass:     'wow',      
        animateClass: 'animated', 
        offset:       0,          
        mobile:       true,       
        live:         true,       
        scrollContainer: null,    
        resetAnimation: true,     
      });
    
});