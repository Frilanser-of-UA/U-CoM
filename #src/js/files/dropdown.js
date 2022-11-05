// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__btn');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__item');

	// Клик по кнопке. Открыть/Закрыть select
	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('visible');
		this.classList.toggle('active');
	});

	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			if (this.classList.contains('not-visible')) {
				this.classList.remove('not-visible');
			} else {
				const activeLink = dropDownList.querySelector('.dropdown__item.not-visible');
				if (activeLink) {
					activeLink.classList.remove('not-visible');
				}
				this.classList.add('not-visible');
			}
			dropDownBtn.focus();
			dropDownList.classList.remove('visible');
			dropDownBtn.classList.remove('active');
			if (e.target.classList.contains('label')) {
				dropDownBtn.classList.remove('selected');
			} else {
				dropDownBtn.classList.add('selected');

			}
		});
	});

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('active');
			dropDownList.classList.remove('visible');
		}
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('active');
			dropDownList.classList.remove('visible');
		}
	});
});

const dropdownMob = document.querySelector('.filter__button-mob');
if (dropdownMob) {
	dropdownMob.addEventListener("click", function (e) {
		dropdownMob.classList.toggle('visible-mob');
		document.querySelector('.filter__body').classList.toggle('visible-mob')
	});
}
// ============================================
document.querySelectorAll('.lang').forEach(function (langWrapper) {
	const langBtn = langWrapper.querySelector('.lang__button');
	const langList = langWrapper.querySelector('.lang__body');
	const langListItems = langList.querySelectorAll('.lang__item');

	// Клик по кнопке. Открыть/Закрыть select
	langBtn.addEventListener('click', function (e) {
		langList.classList.toggle('visible');
		this.classList.toggle('active');
	});

	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	langListItems.forEach(function (langListItem) {
		langListItem.addEventListener('click', function (e) {
			e.stopPropagation();
			langBtn.innerText = this.innerText;
			if (this.classList.contains('not-visible')) {
				this.classList.remove('not-visible');
			} else {
				const activeLink = langList.querySelector('.lang__item.not-visible');
				if (activeLink) {
					activeLink.classList.remove('not-visible');
				}
				this.classList.add('not-visible');
			}
			langBtn.focus();
			langList.classList.remove('visible');
			langBtn.classList.remove('active');
		});
	});

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== langBtn) {
			langBtn.classList.remove('active');
			langList.classList.remove('visible');
		}
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			langBtn.classList.remove('active');
			langList.classList.remove('visible');
		}
	});
});