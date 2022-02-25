$(document).ready(function(){
  $("#home .owl-carousel").owlCarousel({
	  items:1,
	  dots:false,
	  nav:true,
	  autoplay:true,
	  autoplayTimeout:5000,
	  autoplaySpeed:1000,
	  loop:true
  });
  
  $("#project .owl-carousel").owlCarousel({
	  items:3,
	  dots:false,
	  nav:true,
	  autoplay:true,
	  autoplayTimeout:5000,
	  autoplaySpeed:1000,
	  loop:true,
	  margin:15
  });
  
  $("#blog .owl-carousel").owlCarousel({
	  items:2,
	  dots:false,
	  nav:true,
	  autoplay:true,
	  autoplayTimeout:5000,
	  autoplaySpeed:1000,
	  loop:true,
	  margin:15
  });
});

$(document).ready(function() {
  $('.zoom').magnificPopup({
	  type:'image',
	  gallery:{
		  enabled:true,
	  },
	  zoom:{
		  enabled:true,
		  duration:500
	  }
	});
});