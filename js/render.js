'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  /**
   * Заполняет шаблон данными из массива
   * @param {object} wizard - случайно сгенерированный персонаж
   * @return {*} - сгенерированный DOM-элемент
   */
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  /**
   * Рисует похожего волшебника
   * @param {object} data - данные для отрисовки волшебника
   */
  var createWizard = function (data) {
    var takeNumber = data.length > window.util.WizardData.WIZARDS_COUNT ? window.util.WizardData.WIZARDS_COUNT : data.length;
    similarListElement.innerHTML = '';

    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(renderWizard(data[i]));
    }
    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.render = {
    createWizard: createWizard
  };
})();
