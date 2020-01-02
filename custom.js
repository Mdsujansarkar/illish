$(function() {

    new WOW().init();
    $('#work').magnificPopup({
    	delegate: 'a',
    	type:'image'
    });
   $(".team-memeber").owlCarousel({
   	loop:true,
    margin:0,
    items:3,
    autoplay:true
   });

});

$(function() {

   $("#testimonial-parts").owlCarousel({
   	loop:true,
    margin:0,
    center: true,
    items:1,
    autoplay:true
   });
});
$(function() {

   $(".client-image").owlCarousel({
   	items:6,
   	autoplay: true,
   	smartSpeed: 700,
   	loop:true,
    autoplayHoverPause: true,
   });
});


