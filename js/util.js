'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var WizardData = {
    WIZARDS_COUNT: 4,
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
    ],
    FIREBALL_COLOR: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ]
  };

  /**
   * Методы для работы с событиями с клавиатуры
   * @param {*} evt - объект события
   * @param {function} action - действие, выполняемое в случае произошедшего события
   */

  var isEscEvent = function (evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  };

  var isEnterEvent = function (evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  };

  /**
 * Выбирает случайный элемент из массива
 * @param {array} array - случайный массив
 * @return {*} - случайный элемент массива
 */
  var getRandomElement = function (array) {
    var random = Math.floor(Math.random() * array.length);
    return array[random];
  };

  /**
   * Выбирает элемент с максимальным значением из массива
   * @param {array} elements  - массив значений
   * @return {number} - максимальное значение
   */
  var getMaxElement = function (elements) {
    var maxElement = elements[0];

    for (var i = 1; i < elements.length; i++) {
      if (elements[i] > maxElement) {
        maxElement = elements[i];
      }
    }

    return maxElement;
  };

  window.util = {
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    getRandomElement: getRandomElement,
    getMaxElement: getMaxElement,
    WizardData: WizardData
  };
})();
