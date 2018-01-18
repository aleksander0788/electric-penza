function ready () {

	var slides = document.querySelectorAll('.slides .slide'),
		currentSlide = 0,
		buttonNext = document.getElementById('buttonNext'),
		buttonPrev = document.getElementById('buttonPrev'),
		nextClick = document.querySelector('.slides'),
		points = document.querySelectorAll('.point');
		
		for (var i = 0; i < points.length; i++) {
			points[i].onclick = function (i) {

				var pCounter = (i.target.title) - 1;
				slides[pCounter].className = 'slide showing';
				points[pCounter].className = 'point selected';
				currentSlide = pCounter;
				
				for (var j = 0; j < points.length; j++) {
					if (j == pCounter) {
						j++
					};
					if (j != pCounter & j != points.length) {
						points[j].className = 'point';
						
					};
					if (j != points.length) {
						slides[j].className = 'slide';
					};
				};
			};
		};

		nextClick.onclick = nextSlide;
		buttonNext.onclick = nextSlide;
		buttonPrev.onclick = prevSlide;

	function nextSlide () {
		pointNotSelected();
		slides[currentSlide].className = 'slide';
		currentSlide = (currentSlide + 1) % slides.length;
		slides[currentSlide].className = 'slide showing';
		pointSelected();
	}

	function prevSlide () {
		pointNotSelected();
		if (currentSlide == 0) {
			currentSlide = (slides.length - 1);
			slides[0].className = 'slide';
			return slides[currentSlide].className = 'slide showing', 
			pointSelected();
		};
		slides[currentSlide].className = 'slide';
		currentSlide = (currentSlide - 1) % slides.length;
		slides[currentSlide].className = 'slide showing';
		pointSelected();
	}

	function pointSelected () {
		points[currentSlide].className = 'point selected';
	}

	function pointNotSelected () {
		for (var f = 0; f < slides.length; f++) {
			if (slides[f] != currentSlide) {
				points[currentSlide].className = 'point';
			};
		};
	}
}

document.addEventListener("DOMContentLoaded", ready);
