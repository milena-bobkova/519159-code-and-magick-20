'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var wizardCoatElement = setup.querySelector('.wizard-coat');
  var wizardEyesElement = setup.querySelector('.wizard-eyes');
  var wizardFireballElement = setup.querySelector('.setup-fireball-wrap');

  var wizard = {
    onEyesChange: function () { },
    onCoatChange: function () { }
  };

  wizardCoatElement.addEventListener('click', function () {
    var input = document.querySelector('input[name=coat-color]');
    var newColor = window.util.getRandomElement(window.util.WizardData.COATS);
    wizardCoatElement.style.fill = newColor;
    input.value = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyesElement.addEventListener('click', function () {
    var input = document.querySelector('input[name=eyes-color]');
    var newColor = window.util.getRandomElement(window.util.WizardData.EYES);
    wizardEyesElement.style.fill = newColor;
    input.value = newColor;
    wizard.onEyesChange(newColor);
  });

  wizardFireballElement.addEventListener('click', function () {
    var input = document.querySelector('input[name=fireball-color]');
    var fireballColor = window.util.getRandomElement(window.util.WizardData.FIREBALL_COLOR);
    wizardFireballElement.style.fill = fireballColor;
    input.value = fireballColor;
  });

  window.wizard = {
    wizard: wizard
  };

})();
