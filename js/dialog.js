'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');

  setupOpenIcon.tabIndex = 0;
  setupClose.tabIndex = 0;

  var setupStartTop = setup.style.top;
  var setupStartLeft = setup.style.left;

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var onPopupOpenEnterPress = function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  };

  var onPopupCloseEnterPress = function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  };

  var openPopup = function () {
    setup.classList.remove('hidden');

    setupOpen.removeEventListener('keydown', onPopupOpenEnterPress);
    setupClose.addEventListener('keydown', onPopupCloseEnterPress);
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.style.top = setupStartTop;
    setup.style.left = setupStartLeft;

    setup.classList.add('hidden');

    setupOpen.addEventListener('keydown', onPopupOpenEnterPress);
    setupClose.removeEventListener('keydown', onPopupCloseEnterPress);
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', openPopup);
  setupClose.addEventListener('click', closePopup);

  var setupWizardForm = document.querySelector('.setup-wizard-form');
  var wizardCoatColor = setupWizardForm.querySelector('.wizard-coat');
  var wizardEyesColor = setupWizardForm.querySelector('.wizard-eyes');
  var fireballColor = setupWizardForm.querySelector('.setup-fireball-wrap');

  var wizardCoatColorSetup = setupWizardForm.querySelector('input[name="coat-color"]');
  var wizardEyesColorSetup = setupWizardForm.querySelector('input[name="eyes-color"]');
  var fireballColorSetup = setupWizardForm.querySelector('input[name="fireball-color"]');

  var onFireballClick = function () {
    fireballColor.style.backgroundColor = fireballColorSetup.value = window.util.getRandomElement(window.util.WizardData.FIREBALL_COLOR);
  };

  var onWizardCoatClick = function () {
    wizardCoatColor.style.fill = wizardCoatColorSetup.value = window.util.getRandomElement(window.util.WizardData.COATS);
  };

  var onWizarEyesClick = function () {
    wizardEyesColor.style.fill = wizardEyesColorSetup.value = window.util.getRandomElement(window.util.WizardData.EYES);
  };

  fireballColor.addEventListener('click', onFireballClick);
  wizardCoatColor.addEventListener('click', onWizardCoatClick);
  wizardEyesColor.addEventListener('click', onWizarEyesClick);

  window.dialogModule = {
    opemPopup: openPopup,
    closePopup: closePopup
  };
})();
