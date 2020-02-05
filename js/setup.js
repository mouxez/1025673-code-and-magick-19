'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardAmount = 4;

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var chooseRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var createRandomWizard = function () {
  var name = chooseRandomElement(WIZARD_NAMES) + ' ' + chooseRandomElement(WIZARD_SURNAMES);
  var coatColor = chooseRandomElement(WIZARD_COAT_COLORS);
  var eyesColor = chooseRandomElement(EYES_COLOR);
  return {name: name, coatColor: coatColor, eyesColor: eyesColor};
};

var randomWizard = [];
for (var i = 0; i < wizardAmount; i++) {
  randomWizard[i] = createRandomWizard(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COAT_COLORS, EYES_COLOR);
}

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var docFrag = document.createDocumentFragment();
for (var n = 0; n < randomWizard.length; n++) {
  docFrag.appendChild(renderWizard(randomWizard[n]));
}

similarListElement.appendChild(docFrag);
