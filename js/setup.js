'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIRE_BALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizardAmount = 4;

var chooseRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var createRandomWizard = function () {
  var name = chooseRandomElement(WIZARD_NAMES) + ' ' + chooseRandomElement(WIZARD_SURNAMES);
  var coatColor = chooseRandomElement(WIZARD_COAT_COLORS);
  var eyesColor = chooseRandomElement(EYES_COLORS);
  return {name: name, coatColor: coatColor, eyesColor: eyesColor};
};

var randomWizard = [];
for (var i = 0; i < wizardAmount; i++) {
  randomWizard[i] = createRandomWizard(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COAT_COLORS, EYES_COLORS);
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

var fragment = document.createDocumentFragment();
for (var j = 0; j < randomWizard.length; j++) {
  fragment.appendChild(renderWizard(randomWizard[j]));
}

similarListElement.appendChild(fragment);

// открытие-закрытие модального окна
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && evt.target !== document.querySelector('.setup-user-name')) {
    closePopup();
  }
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

// проверяет корректтость данных
var MIN_NAME_LENGTH = 2;
var userNameInput = setup.querySelector('.setup-user-name');
userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < MIN_NAME_LENGTH) {
    target.setCustomValidity(
        'Имя должно состоять минимум из ' + MIN_NAME_LENGTH + '-х символов');
  } else {
    target.setCustomValidity('');
  }
});

// изменяет цвет мантии
var wizardCoat = document.querySelector('.wizard-coat');
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = chooseRandomElement(WIZARD_COAT_COLORS);
  // доработка записи в свойство value скрытого инпута
});

// изменяет цвет глаз
var wizardEyes = document.querySelector('.wizard-eyes');
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = chooseRandomElement(EYES_COLORS);
  // доработка записи в свойство value скрытого инпута
});

// изменяет цвет файербола
var setupFireball = document.querySelector('.setup-fireball-wrap');
setupFireball.addEventListener('click', function () {
  setupFireball.style.background = chooseRandomElement(FIRE_BALL_COLORS);
  // доработка записи в свойство value скрытого инпута
});
