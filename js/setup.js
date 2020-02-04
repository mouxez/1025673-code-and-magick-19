'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var randomColor = function () {
  return Math.floor(Math.random() * WIZARD_COAT_COLOR.length);
};

var randomEyes = function () {
  return Math.floor(Math.random() * eyesColor.length);
};

var randomName = function () {
  return Math.floor(Math.random() * WIZARD_NAMES.length);
};

var wizards = [
  {
    name: WIZARD_NAMES[randomName()] + WIZARD_SURNAMES[randomName()],
    coatColor: WIZARD_COAT_COLOR[randomColor()],
    eyesColor: eyesColor[randomEyes()]
  },
  {
    name: WIZARD_NAMES[randomName()] + WIZARD_SURNAMES[randomName()],
    coatColor: WIZARD_COAT_COLOR[randomColor()],
    eyesColor: eyesColor[randomEyes()]
  },
  {
    name: WIZARD_NAMES[randomName()] + WIZARD_SURNAMES[randomName()],
    coatColor: WIZARD_COAT_COLOR[randomColor()],
    eyesColor: eyesColor[randomEyes()]
  },
  {
    name: WIZARD_NAMES[randomName()] + WIZARD_SURNAMES[randomName()],
    coatColor: WIZARD_COAT_COLOR[randomColor()],
    eyesColor: eyesColor[randomEyes()]
  }
];

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}

// var setupSimilarList = document.querySelector('.setup-similar-list');
// var docFrag = document.createDocumentFragment();

// for (var n = 0; n < 14; n++) {
//   var newWizard = document.createElement('div');
//   newWizard.className = 'element';
//   newWizard.innerHTML = n;
//   docFrag.appendChild(newWizard);
// }
// setupSimilarList.appendChild(docFrag);
