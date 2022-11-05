const reatingItemsList = document.querySelectorAll('.rating__item-form');
const reatingItemsArray = Array.prototype.slice.call(reatingItemsList);

reatingItemsArray.forEach(item =>
	item.addEventListener('click', () => {
		const { itemValue } = item.dataset;
		item.parentNode.dataset.totalValue = itemValue;
	})
);