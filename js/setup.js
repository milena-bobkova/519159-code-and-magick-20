'use strict';

var WIZARD = {
  NAMES: [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристофор',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ],
  SURNAMES: [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ],
  COATS: [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ],
  EYES: [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ]
};

var FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var WIZARDS_COUNT = 4;

var FORM_ACTION = 'https://javascript.pages.academy/code-and-magick';

var userDialog = document.querySelector('.setup');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

/**
 * выбирает случайный элемент из массива
 * @param {array} array - случайный массив
 * @return {*} - случайный элемент массива
 */

var getRandomElement = function (array) {
  var random = Math.floor(Math.random() * array.length);
  return array[random];
};

var generateWizardsData = function () {
  var wizards = [];

  for (var i = 0; i < WIZARDS_COUNT; i++) {
    wizards.push({
      name: getRandomElement(WIZARD.NAMES) + ' ' + getRandomElement(WIZARD.SURNAMES),
      coatColor: getRandomElement(WIZARD.COATS),
      eyesColor: getRandomElement(WIZARD.EYES)
    });
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var wizards = generateWizardsData();
var renderWizards = function () {
  var fragment = document.createDocumentFragment();
  wizards.forEach(function (wizard) {
    fragment.appendChild(renderWizard(wizard));
  });
  return fragment;
};

var fragment = renderWizards(wizards);

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
var userNameInput = userDialog.querySelector('.setup-user-name');
var setupWizardForm = userDialog.querySelector('.setup-wizard-form');

setupOpenIcon.tabIndex = 0;
setupClose.tabIndex = 0;

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && document.activeElement !== userNameInput) {
    evt.preventDefault();
    closePopup();
  }
};

var onPopupOpenEnterPress = function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
};

var onPopupCloseEnterPress = function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');

  setupOpen.removeEventListener('keydown', onPopupOpenEnterPress);
  setupClose.addEventListener('keydown', onPopupCloseEnterPress);
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');

  setupOpen.addEventListener('keydown', onPopupOpenEnterPress);
  setupClose.removeEventListener('keydown', onPopupCloseEnterPress);
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', openPopup);
setupClose.addEventListener('click', closePopup);

setupWizardForm.action = FORM_ACTION;

userNameInput.addEventListener('input', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var wizardCoatColor = setupWizardForm.querySelector('.wizard-coat');
var wizardEyesColor = setupWizardForm.querySelector('.wizard-eyes');
var fireballColor = setupWizardForm.querySelector('.setup-fireball-wrap');

var wizardCoatColorSetup = setupWizardForm.querySelector('input[name="coat-color"]');
var wizardEyesColorSetup = setupWizardForm.querySelector('input[name="eyes-color"]');
var fireballColorSetup = setupWizardForm.querySelector('input[name="fireball-color"]');

var onFireballClick = function () {
  fireballColor.style.backgroundColor = fireballColorSetup.value = getRandomElement(FIREBALL_COLOR);
};

var onWizardCoatClick = function () {
  wizardCoatColor.style.fill = wizardCoatColorSetup.value = getRandomElement(WIZARD.COATS);
};

var onWizarEyesClick = function () {
  wizardEyesColor.style.fill = wizardEyesColorSetup.value = getRandomElement(WIZARD.EYES);
};

fireballColor.addEventListener('click', onFireballClick);
wizardCoatColor.addEventListener('click', onWizardCoatClick);
wizardEyesColor.addEventListener('click', onWizarEyesClick);
