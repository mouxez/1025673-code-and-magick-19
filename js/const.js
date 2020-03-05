'use strict';

(function () {
  var WIZARD_AMOUNT = 4;
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var FRAGMENT = document.createDocumentFragment();
  var TIMEOUT_MS = 10000;
  var WIZARDS_COUNT = 4;
  var OK_REQUEST = 200;
  var BAD_REQUEST = 400;
  var UNAUTHORIZED = 401;
  var NOT_FOUND = 404;
  var SERVER_ERROR = 500;
  var SERVICE_UNAVAILABLE = 503;
  var ERROR_POPUP = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red; border-radius: 10%;';

  window.const = {
    WIZARD_AMOUNT: WIZARD_AMOUNT,
    ESC_KEY: ESC_KEY,
    ENTER_KEY: ENTER_KEY,
    FRAGMENT: FRAGMENT,
    TIMEOUT_MS: TIMEOUT_MS,
    WIZARDS_COUNT: WIZARDS_COUNT,
    OK_REQUEST: OK_REQUEST,
    BAD_REQUEST: BAD_REQUEST,
    UNAUTHORIZED: UNAUTHORIZED,
    NOT_FOUND: NOT_FOUND,
    SERVER_ERROR: SERVER_ERROR,
    SERVICE_UNAVAILABLE: SERVICE_UNAVAILABLE,
    ERROR_POPUP: ERROR_POPUP
  };
})();
