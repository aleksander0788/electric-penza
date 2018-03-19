jQuery(document).ready(function($) {

	if ($('.carousel')) {
		$('.carousel').slick({
			autoplay: true,
			autoplaySpeed: 7000,
			nextArrow: '<button class="slick-arrow slick-next">next</button>',
			prevArrow: '<button class="slick-arrow  slick-prev">prev</button>',
			arrows: false,
		});
	}

});



jQuery(document).ready(function($) {


	console.log('hi there');

});

$(document).ready(function() {

	$('.gallery__list').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});

});