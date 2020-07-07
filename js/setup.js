'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var form = document.querySelector('.setup-wizard-form');

  var eyesColor = window.util.DefaultColor.EYES_COLOR;
  var coatColor = window.util.DefaultColor.COAT_COLOR;
  var wizards = [];

  /**
   * Ранжирует волшебников в зависимости от цвета одежды и глаз
   * @param {*} wizard - маг
   * @param {string} coat - цвет одежды
   * @param {string} eyes - цвет глаз
   * @return {number} - баллы
   */
  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  }

  /**
   * Ранжирует волшебников по имени
   * @param {string} left - первое имя
   * @param {string} right - второе имя
   * @return {number} - баллы
   */
  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  /**
   * Меняет отрисовку похожих волшебников
   */
  var updateWizards = function () {
    var updatedWizards = wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    });
    window.render.createWizard(updatedWizards);
  };

  window.wizard.wizard.onEyesChange = window.util.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.wizard.wizard.onCoatChange = window.util.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  /**+
   * Функция загрузки данных похожих волшебников в случае успешной
   * загрузки данных с сервера
   * @param {array} - массив похожих волшебников
   */
  var onSuccessEvent = function (data) {
    wizards = data;
    updateWizards();
  };

  var onFormSubmit = function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    });
    evt.preventDefault();
  };

  form.addEventListener('submit', onFormSubmit);

  window.backend.load(onSuccessEvent, window.util.onErrorEvent);

  window.stup = {
    updateWizards: updateWizards
  };
})();

