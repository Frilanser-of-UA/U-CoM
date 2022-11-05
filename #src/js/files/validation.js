// console.log('Init!');

// inputmask

const telSelector = document.querySelector('.reg-enter__form input[type="tel"]');
if (telSelector) {
	const inputMask = new Inputmask('+38 (999) 999-99-99');
	inputMask.mask(telSelector);
}

//Auktion buttons попап

let buttonAuctions = document.querySelectorAll('.price__buttons a').forEach(function (buttonAuctions) {
	if (!buttonAuctions.classList.contains('_hover')) {
		buttonAuctions.classList.add('_hover');
	}
});

let buttonAuctionBid = document.querySelector('.bid');
let buttonAuctionOffer = document.querySelector('.offer');
const phone_1 = document.querySelector('.input-volume');
const phone_2 = document.querySelector('.input-volume-2');
let form_1 = document.querySelector('#form-1');
let form_2 = document.querySelector('#form-2');
let formReg = document.querySelector('#form-reg');
let formEnter = document.querySelector('#form-enter');
if (form_1) {
	const validation = new JustValidate(form_1,
		{
			errorFieldCssClass: '_error',
			errorLabelCssClass: 'error-message',
			errorLabelStyle: {
			},
		}
	)

	validation
		.addField('.input-volume', [
			{
				rule: 'function',
				validator: function (a) {
					return Number(phone_1.value.replace(/\,/g, '.')) <= 200;
				},
				errorMessage: 'Обсяг не повинен перевищувати 200 тон (обсяг всього лоту)',
			},
			{
				rule: 'function',
				validator: function (a) {
					return Number(phone_1.value.replace(/\,/g, '.')) >= 1;
				},
				errorMessage: 'Мінімальний обсяг - 1 тона',
			},
		]).onSuccess((event) => {
			event.target.reset();
			let formClose = document.querySelector('.popup_callback-bid._active');
			formClose.classList.remove('_active');
			let popupBodyLock = document.querySelector('body');
			popupBodyLock.classList.remove('_lock');
			popupBodyLock.style.paddingRight = 0;
			let summ = document.querySelector('.form-popup__calck span');
			let enterNum = '<span>' + "0" + '</span>';
			summ.innerHTML = enterNum;
			event.preventDefault();
			buttonAuctionBid.classList.remove('_hover');
			if (!buttonAuctionBid.classList.contains('_hover')) {
				buttonAuctionBid.classList.add('_disabled');
			}
			let priceMessage = document.querySelector('.price__message_display');
			if (priceMessage) {
				priceMessage.classList.add('_active');
			}
		});

}
// ====================================================
if (form_2) {
	const validation_2 = new JustValidate(form_2,
		{
			errorFieldCssClass: '_error',
			errorLabelCssClass: 'error-message',
			errorLabelStyle: {
			},
		}
	)
	validation_2
		.addField('.input-volume-2', [
			{
				rule: 'function',
				validator: function () {
					return Number(phone_2.value.replace(/\,/g, '.')) <= 200;
				},
				errorMessage: 'Обсяг не повинен перевищувати 200 тон (обсяг всього лоту)',
			},
			{
				rule: 'function',
				validator: function () {
					return Number(phone_2.value.replace(/\,/g, '.')) >= 1;
				},
				errorMessage: 'Мінімальний обсяг - 1 тона',
			},
		])
		.addField('.input-price', [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Ведіть ціну',

			}
		]).onSuccess((event) => {
			event.target.reset();
			let formClose = document.querySelector('.popup_callback-offer._active');
			formClose.classList.remove('_active');
			let popupBodyLock = document.querySelector('body');
			popupBodyLock.classList.remove('_lock');
			popupBodyLock.style.paddingRight = 0;
			let summ = document.querySelector('.form-popup__calck_price span');
			let enterNum = '<span>' + "0" + '</span>';
			summ.innerHTML = enterNum;
			buttonAuctionOffer.classList.remove('_hover');
			if (!buttonAuctionOffer.classList.contains('_hover')) {
				buttonAuctionOffer.classList.add('_disabled');
				setTimeout(function () {
					buttonAuctionOffer.classList.remove('_disabled');
					buttonAuctionOffer.classList.add('_hover');
				}, 2500);
			}
		});
}
// ===============================
if (formReg) {
	const validationReg = new JustValidate(formReg,
		{
			errorFieldCssClass: '_error',
			errorLabelCssClass: 'error-message-form',
			errorLabelStyle: {
			},
		}
	)
	validationReg
		.addField('#company-name', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			}
		])
		.addField('#company-kod', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			},
			{
				rule: 'number',
				errorMessage: 'Тільки числове значення',
			},
			{
				rule: 'minLength',
				value: 8,
				errorMessage: 'Повинно бути 8 цифр',
			},
			{
				rule: 'maxLength',
				value: 8,
				errorMessage: 'Повинно бути 8 цифр',
			}
		])
		.addField('#company-iban', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			}
		])
		.addField('#user-name-1', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			}
		])
		.addField('#user-name-2', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			}
		])
		.addField('#user-name-3', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			}
		])
		.addField('#email', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			},
			{
				rule: 'email',
				errorMessage: 'Введіть коректний email',
			}
		])
		.addField('#tel', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			},
			{
				rule: 'function',
				validator: function () {
					const phone = telSelector.inputmask.unmaskedvalue();
					return phone.length === 10;
				},
				errorMessage: 'Ведіть корректний телефон',
			}
		])
		.addField('#password_1', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			},
			{
				rule: 'password',
				errorMessage: 'Мінімум вісім символів, мінімум одна буква и одна цифра',
			}
		])
		.addField('#password_2', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			},
			{
				validator: (value, fields) => {
					if (fields['#password_1'] && fields['#password_1'].elem) {
						const repeatPasswordValue = fields['#password_1'].elem.value;

						return value === repeatPasswordValue;
					}

					return true;
				},
				errorMessage: 'Пароль не співпадає',
			},
		])

		.onSuccess((event) => {
			event.target.reset();
		});
}
if (formEnter) {
	const validationEnter = new JustValidate(formEnter,
		{
			errorFieldCssClass: '_error',
			errorLabelCssClass: 'error-message-form',
			errorLabelStyle: {
			},
		}
	)
	validationEnter
		.addField('#email', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			},
			{
				rule: 'email',
				errorMessage: 'Введіть коректний email',
			}
		])
		.addField('#password_1', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			},
			{
				rule: 'password',
				errorMessage: 'Мінімум вісім символів, мінімум одна буква и одна цифра',
			}
		]).onSuccess((event) => {
			event.target.reset();
		});
}