'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIRE_BALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardCoatColor = document.querySelector('input[name=coat-color]');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardEyesColor = document.querySelector('input[name=eyes-color]');
  var setupFireball = document.querySelector('.setup-fireball-wrap');
  var fireballColor = document.querySelector('input[name=fireball-color]');

  var createRandomWizard = function () {
    var name = window.util.chooseRandomElement(WIZARD_NAMES) + ' ' + window.util.chooseRandomElement(WIZARD_SURNAMES);
    var coatColor = window.util.chooseRandomElement(WIZARD_COAT_COLORS);
    var eyesColor = window.util.chooseRandomElement(EYES_COLORS);
    return {name: name, coatColor: coatColor, eyesColor: eyesColor};
  };

  // отображает окно случайных магов
  document.querySelector('.setup-similar').classList.remove('hidden');

  var randomWizard = [];
  for (var i = 0; i < window.const.WIZARD_AMOUNT; i++) {
    randomWizard[i] = createRandomWizard(WIZARD_NAMES, WIZARD_SURNAMES, window.colorize.WIZARD_COAT_COLORS, window.colorize.EYES_COLORS);
  }

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  // убрано на время тестирования backend.js
  //
  // for (var j = 0; j < randomWizard.length; j++) {
  //   fragment.appendChild(renderWizard(randomWizard[j]));
  // }
  // similarListElement.appendChild(fragment);

  // изменяет цвет мантии
  window.colorize(wizardCoat, wizardCoatColor, WIZARD_COAT_COLORS);

  // изменяет цвет глаз
  window.colorize(wizardEyes, wizardEyesColor, EYES_COLORS);

  // изменяет цвет файербола
  window.colorize(setupFireball, fireballColor, FIRE_BALL_COLORS);

  window.renderWizard = renderWizard;
})();
