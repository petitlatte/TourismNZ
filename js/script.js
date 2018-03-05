 $(document).ready(function(){

//responsive nav bar js

$(function(){
	$(".headC").click(function(){
		$(".headB").slideToggle();
	});
});


//slide show js

$('.slider-container').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  // arrows: false,
  dots:true,
});

});