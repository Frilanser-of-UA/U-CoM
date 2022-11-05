var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('html').classList.add('_touch');
}
; //Функция которая определяет точскрин или десктоп
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});; //Работа с картинками webP
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();; //Работа с картинками ibg
let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}

; //Slide toggle slide-toggle
window.addEventListener("load", function () {
	if (document.querySelector('.wrapper')) {
		setTimeout(function () {
			document.querySelector('.wrapper').classList.add('_loaded');
		}, 0);
	}
});

let unlock = true;
; //load-wrapper
//=================
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================; //body-lock
//ActionsOnHash
if (location.hash) {
	const hsh = location.hash.replace('#', '');
	if (document.querySelector('.popup_' + hsh)) {
		popup_open(hsh);
	} else if (document.querySelector('div.' + hsh)) {
		_goto(document.querySelector('.' + hsh), 500, '');
	}
}; //ActionsOnHash

// =====================scroll header fixed====================
let lastScroll = 0;
const defaultOffset = 80;
const header = document.querySelector('.header');
const buttonUpp = document.querySelector('.button-up');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('_fixed');
window.addEventListener('scroll', () => {
	if (buttonUpp) {
		if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
			//scroll down
			header.classList.add('_fixed');
			buttonUpp.classList.add('_fixed');
		}
		else if (scrollPosition() < lastScroll && containHide()) {
			//scroll up
			header.classList.remove('_fixed');
			buttonUpp.classList.remove('_fixed');
		}
		lastScroll = scrollPosition();
		const scrolled = window.scrollY;
		if (scrolled >= 150) {
			header.classList.add('_bg');
			buttonUpp.classList.add('_hidden');
		}
		else if (scrolled < 1) {
			header.classList.remove('_bg');
			buttonUpp.classList.remove('_hidden');
		}
	}
});
// =========================================================

window.onload = function () {
	document.addEventListener("click", documentActions);
	// Actions ( делегирование собитий click)
	function documentActions(e) {
		const targetElement = e.target;
		// ====== Поиск
		if (targetElement.classList.contains('search-form__icon')) {
			document.querySelector('.search-form').classList.add('active');
			document.querySelector('.menu__body').classList.add('search-active');
			document.querySelector('.header__items').classList.add('search-active');
		} else if (targetElement.closest('.search-form__close')) {
			document.querySelector('.search-form').classList.remove('active');
			document.querySelector('.menu__body').classList.remove('search-active');
			document.querySelector('.header__items').classList.remove('search-active');
			document.querySelector('.search-form__input').value = "";
		}
		if (targetElement.classList.contains('phone__button')) {
			if (window.innerWidth <= 768 || isMobile.any()) {
				document.querySelector('.phone').classList.toggle('active');
			}
		} else if (!targetElement.closest('.phone') && document.querySelector('.phone.active')) {
			document.querySelector('.phone').classList.remove('active');
		}
	}
};
// =========================================================
const tableBody = document.querySelector('.table__body');
if (tableBody) {
	new SimpleBar(tableBody,
		{
			autoHide: false,
			forceVisible: true | 'x' | 'y',
			scrollbarMinSize: 25,
			scrollbarMaxSize: 209,
		});
}

const scrollUpp = document.querySelector('.button-up');
if (scrollUpp) {
	const updateDashotoffset = () => { };
	scrollUpp.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});
}
// =====================================================
let formBtn = document.querySelector('.form__button');
let leftBlock = document.querySelector('.callback__left');
if (formBtn) {
	formBtn.addEventListener("click", function () {
		leftBlock.classList.add('success')
	});
}

let formBtnPopup = document.querySelector('.form-popup__btn');
let bodyPopup = document.querySelector('.popup__body');
let successfullPopup = document.querySelector('.popup__successfull');
if (formBtnPopup) {
	formBtnPopup.addEventListener("click", function () {
		successfullPopup.classList.add('success-popup')
		bodyPopup.classList.add('not-visible')
	});
}


let comentsBtn = document.querySelector('.product__button');
let commentBlock = document.querySelector('.product__comment');
let formContentBtn = document.querySelector('.form-comment__button');
let contentSuccessfull = document.querySelector('.product__successfull');
if (comentsBtn) {
	comentsBtn.addEventListener("click", function () {
		commentBlock.classList.add('visible')
		comentsBtn.classList.add('not-visible')
	});
}
if (formContentBtn) {
	formContentBtn.addEventListener("click", function () {
		commentBlock.classList.remove('visible');
		contentSuccessfull.classList.add('success');
	});
}
// ============== fixed block===========================
function getWindowWidth() {
	return window.screen.width;
}
if (getWindowWidth() > 1365) {
	(function () {
		let a = document.querySelector('#sticky'), b = null, P = 0;
		if (a) {
			window.addEventListener('scroll', Ascroll, false);
			document.body.addEventListener('scroll', Ascroll, false);
			function Ascroll() {
				if (b == null) {
					let Sa = getComputedStyle(a, ''), s = '';
					for (let i = 0; i < Sa.length; i++) {
						if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
							s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
						}
					}
					b = document.createElement('div');
					b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
					a.insertBefore(b, a.firstChild);
					let l = a.childNodes.length;
					for (let i = 1; i < l; i++) {
						b.appendChild(a.childNodes[1]);
					}
					a.style.height = b.getBoundingClientRect().height + 'px';
					a.style.padding = '0';
					a.style.border = '0';
				}
				let Ra = a.getBoundingClientRect(),
					R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#wrap').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
				if ((Ra.top - P) <= 0) {
					if ((Ra.top - P) <= R) {
						b.className = 'stop';
						b.style.top = - R + 'px';
					} else {
						b.className = 'sticky';
						b.style.top = P + 'px';
					}
				} else {
					b.className = '';
					b.style.top = '';
				}
				window.addEventListener('resize', function () {
					a.children[0].style.width = getComputedStyle(a, '').width
				}, false);
			}
		}

	})()
}


let sectionBox = document.querySelector('.first-all');
let sectionBg = document.querySelector('.first-all__bg');
if (sectionBox) {
	if (sectionBg) {
		let imgBg = sectionBg.getElementsByTagName('img');
		if (imgBg.length > 1) {
			sectionBox.classList.add('not-bg');
		}
	}
	if (!sectionBg) {
		sectionBox.classList.add('not-bg');
	}
}


// ================================================
document.querySelectorAll('.filter-blog__item').forEach(function (link, index) {
	link.addEventListener('click', function () {
		if (this.classList.contains('active')) {
			this.classList.remove('active');
		} else {
			const activeLink = document.querySelector('.filter-blog__item.active');
			if (activeLink) {
				activeLink.classList.remove('active');
			}
			this.classList.add('active');
		}
	});
});
// ================================================
// ===============show img=========================
addEventListener("load", function () {

	class PolySwitch {
		constructor(root, delay = 1000, index = 0) {
			this.root = root;
			this.delay = delay;
			this.index = index;
			this.children = [...root.children];
			this.setActiveElement(0);
			this.timeout = setTimeout(this.loop.bind(this), this.delay);
			// Для остановки при наведению
			// this.eventHandler = this.eventHandler.bind(this);
			// this.root.addEventListener("pointerover", this.eventHandler);
			// this.root.addEventListener("pointerout", this.eventHandler);
			// this.root.addEventListener("click", this.eventHandler);
		}

		loop() {
			this.setActiveElement();
			this.timeout = setTimeout(this.loop.bind(this), this.delay);
		}
		// Для остановки при наведению
		// eventHandler(event) {
		// 	if (event.type === "pointerover") {
		// 		clearTimeout(this.timeout);
		// 	}

		// 	if (event.type === "pointerout") {
		// 		this.timeout = setTimeout(this.loop.bind(this), this.delay);
		// 	}

		// 	if (event.type === "click") {
		// 		const target = event.target.closest(".item");
		// 		if (target) {
		// 			const addIndex = this.children.indexOf(target) - this.index;
		// 			this.setActiveElement(addIndex);
		// 		}

		// 	}
		// }
		// смена направления setActiveElement(addIndex = -1)
		setActiveElement(addIndex = 1) {
			this.children[this.index].classList.remove("show");
			this.index = (this.index + addIndex + this.children.length) % this.children.length;
			this.children[this.index].classList.add("show");
		}
	}

	new PolySwitch(document.querySelector("#images-1"), 4000, 2);
	new PolySwitch(document.querySelector("#images-2"), 4200, 2);
	new PolySwitch(document.querySelector("#images-3"), 3800, 2);
	new PolySwitch(document.querySelector("#images-4"), 4400, 2);
	//  new PolySwitch(document.querySelector(".list"));
})

