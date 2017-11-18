jQuery(document).ready(function($) {
	$('.carousel').slick({
		autoplay: true,
		autoplaySpeed: 7000,
		nextArrow: '<button class="slick-arrow slick-next">next</button>',
		prevArrow: '<button class="slick-arrow  slick-prev">prev</button>',
		arrows: false,
	});
});