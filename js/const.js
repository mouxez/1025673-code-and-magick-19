'use strict';

(function () {
  var WIZARD_AMOUNT = 4;
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var FRAGMENT = document.createDocumentFragment();
  var TIMEOUT_MS = 10000;
  var WIZARDS_COUNT = 4;
  var ERROR_POPUP = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red; border-radius: 10%;';

  window.const = {
    WIZARD_AMOUNT: WIZARD_AMOUNT,
    ESC_KEY: ESC_KEY,
    ENTER_KEY: ENTER_KEY,
    FRAGMENT: FRAGMENT,
    TIMEOUT_MS: TIMEOUT_MS,
    WIZARDS_COUNT: WIZARDS_COUNT,
    ERROR_POPUP: ERROR_POPUP
  };
})();
