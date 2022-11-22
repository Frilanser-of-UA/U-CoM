
let gallerySlider = new Swiper('.gallery__slider', {
	touchStartPreventDefault: false,
	observer: true,
	observeParents: true,
	slidesPerView: 'auto',
	spaceBetween: 10,
	autoHeight: false,
	speed: 1800,
	freeMode: true,
	touchRatio: 1,
	simulateTouch: true,
	crabCursor: true,
	// Arrows
	navigation: {
		nextEl: '.navigation__btn_next',
		prevEl: '.navigation__btn_prev',
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});
let gallerySliderCenter = new Swiper('.gallery__slider-center', {
	touchStartPreventDefault: false,
	observer: true,
	observeParents: true,
	slidesPerView: 'auto',
	spaceBetween: 10,
	autoHeight: false,
	speed: 1800,
	freeMode: true,
	touchRatio: 1,
	simulateTouch: true,
	crabCursor: true,
	// Arrows
	navigation: {
		nextEl: '.navigation__btn_next-center',
		prevEl: '.navigation__btn_prev-center',
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});
let gallerySliderLarge = new Swiper('.gallery__slider-large', {
	touchStartPreventDefault: false,
	observer: true,
	observeParents: true,
	slidesPerView: 'auto',
	spaceBetween: 10,
	autoHeight: false,
	speed: 1800,
	freeMode: true,
	touchRatio: 1,
	simulateTouch: true,
	crabCursor: true,
	// Arrows
	navigation: {
		nextEl: '.navigation__btn_next-large',
		prevEl: '.navigation__btn_prev-large',
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});

