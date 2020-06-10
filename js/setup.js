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

var WIZARDS_COUNT = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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
