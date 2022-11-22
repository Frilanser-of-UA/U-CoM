// ===============show img=========================
addEventListener("load", function () {
	let puzzles = document.querySelector('.puzzles');
	if (puzzles) {
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
	}
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


