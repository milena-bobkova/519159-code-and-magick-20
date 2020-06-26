'use strict';

(function () {
  var FORM_ACTION = 'https://javascript.pages.academy/code-and-magick';

  var userNameInput = document.querySelector('.setup-user-name');
  var setupWizardForm = document.querySelector('.setup-wizard-form');
  setupWizardForm.action = FORM_ACTION;

  var onInputPress = function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  };
  userNameInput.addEventListener('input', onInputPress);
})();
