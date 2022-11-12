
window.onload = function () {
	document.addEventListener("click", documentActions);
	// Actions ( делегирование собитий click)
	function documentActions(e) {
		const targetElement = e.target;
		// ====== Меню
		if (targetElement.classList.contains('icon-menu')) {
			if (document.querySelector('.icon-menu')) {
				document.body.classList.toggle('_lock');
				document.querySelector('.menu__body').classList.toggle('active');
				document.querySelector('.icon-menu').classList.toggle('active');
			}
		} else if (!targetElement.closest('.menu__body') && document.querySelector('.menu__body.active')) {
			document.querySelector('.menu__body').classList.remove('active');
			document.querySelector('.icon-menu').classList.remove('active');
			if (document.querySelector('body._lock')) {
				document.body.classList.remove('_lock');
			}
		}
	}
}