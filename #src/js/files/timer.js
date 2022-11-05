// timer
(function () {
	//  Страница загружена
	countTime();
	//  Если меньше 9, добавьте префикс: 01 \ 02 ....
	function checkTime(_zero) {
		return _zero > 9 ? _zero : '0' + _zero;
	}
	function countTime() {
		let t = document.querySelectorAll('.timer').forEach(function (t) {
			//  Крайний срок. Год, месяц, день, час, минута, секунда - После установки времени окончания - таймер автоматически отключается.
			let dateStr = t.getAttribute('data-date');
			//Получить текущее время  
			let date = new Date();
			let now = date.getTime();
			//Установить крайний срок  
			let endDate = new Date(dateStr);
			let end = endDate.getTime();
			//Разница во времени    
			let leftTime = end - now;
			//Определите переменные d, h, m, s, чтобы сохранить время обратного отсчета  
			let h, m, s;

			//  Считайте дни, часы, минуты, секунды
			if (leftTime >= 0) {
				h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
				m = Math.floor(leftTime / 1000 / 60 % 60);
				s = Math.floor(leftTime / 1000 % 60);
				//Назначьте обратный отсчет для div 
				let timeH = '<span class="timer__item">' + checkTime(h) + '</span>';
				let timeM = '<span class="timer__item">' + checkTime(m) + '</span>';
				let timeS = '<span class="timer__item">' + checkTime(s) + '</span>';
				let timeIcon = '<span class="timer__item">' + '🔥' + '</span>';
				let f = timeIcon + timeH + ':' + timeM + ':' + timeS;
				t.innerHTML = f;
				//Рекурсивно вызывать метод countTime каждую секунду для отображения динамических эффектов времени  
				setTimeout(countTime, 1000);
			} else {
				let timeH = '<span class="timer__item">' + '00' + '</span>';
				let timeM = '<span class="timer__item">' + '00' + '</span>';
				let timeS = '<span class="timer__item">' + '00' + '</span>';
				let timeIcon = '<span class="timer__item">' + '🔥' + '</span>';
				let f = timeIcon + timeH + ':' + timeM + ':' + timeS;
				t.innerHTML = f;
			}
		});
	}
})();