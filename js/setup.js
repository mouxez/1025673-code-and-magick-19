'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardAmount = 4;

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var randomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var wizards = [
  {
    name: randomElement(WIZARD_NAMES) + ' ' + randomElement(WIZARD_SURNAMES),
    coatColor: randomElement(WIZARD_COAT_COLORS),
    eyesColor: randomElement(EYES_COLOR)
  },
  {
    name: randomElement(WIZARD_NAMES) + ' ' + randomElement(WIZARD_SURNAMES),
    coatColor: randomElement(WIZARD_COAT_COLORS),
    eyesColor: randomElement(EYES_COLOR)
  },
  {
    name: randomElement(WIZARD_NAMES) + ' ' + randomElement(WIZARD_SURNAMES),
    coatColor: randomElement(WIZARD_COAT_COLORS),
    eyesColor: randomElement(EYES_COLOR)
  },
  {
    name: randomElement(WIZARD_NAMES) + ' ' + randomElement(WIZARD_SURNAMES),
    coatColor: randomElement(WIZARD_COAT_COLORS),
    eyesColor: randomElement(EYES_COLOR)
  }
];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}
