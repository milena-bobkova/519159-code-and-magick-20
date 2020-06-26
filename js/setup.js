'use strict';

(function () {
  var setup = document.querySelector('.setup');

  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  /**
   * Создает массив данных похожих персонажей
   * @param {number} count - количество персонажей
   * @return {array} - массив данных похожих персонажей
   */

  var generateWizardsData = function (count) {
    var characters = [];

    for (var i = 0; i < count; i++) {
      characters.push({
        name: window.util.getRandomElement(window.util.WizardData.NAMES) + ' ' + window.util.getRandomElement(window.util.WizardData.SURNAMES),
        coatColor: window.util.getRandomElement(window.util.WizardData.COATS),
        eyesColor: window.util.getRandomElement(window.util.WizardData.EYES)
      });
    }
    return characters;
  };
  var wizards = generateWizardsData(window.util.WizardData.WIZARDS_COUNT);

  /**
   * Заполняет шаблон данными из массива
   * @param {object} wizard - случайно сгенерированный персонаж
   * @return {*} - сгенерированный DOM-элемент
   */
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  /** Вставляет сгенерированные DOM-элементы в документ
   * @param {array} characters - массив данных похожих персонажей
   * @return {object} - сгенерированные DOM-элементы
   */
  var renderWizards = function (characters) {
    var fragment = document.createDocumentFragment();
    characters.forEach(function (wizard) {
      fragment.appendChild(renderWizard(wizard));
    });
    return fragment;
  };
  var wizardsFragment = renderWizards(wizards);

  similarListElement.appendChild(wizardsFragment);

  setup.querySelector('.setup-similar').classList.remove('hidden');
})();
