
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
// ================================================
// ================================================
// ================================================
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
// ===============map item=========================

document.querySelectorAll('.map-ua__item').forEach(function (link, index) {
	link.addEventListener('click', function () {
		let posItem = this.getBoundingClientRect();
		let mapUa = document.querySelector('.map-ua').getBoundingClientRect();
		let mapPopup = document.querySelector('.map-ua__popup');
		mapPopup.style.display = "block";
		let mapPopupXY = mapPopup.getBoundingClientRect();
		mapPopup.style.top = (posItem.top + (mapPopupXY.height / 5)) - mapUa.top + 'px';
		mapPopup.style.left = (posItem.left + (mapPopupXY.width / 2.85)) - mapUa.left + 'px';
		if (this.classList.contains('active')) {
			this.classList.add('active');
		} else {
			const activeLink = document.querySelector('.map-ua__item.active');
			if (activeLink) {
				activeLink.classList.remove('active');
			}
			this.classList.add('active');
		}
	});
});


