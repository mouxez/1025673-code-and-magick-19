'use strict';

(function () {
  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.key === window.const.ESC_KEY && evt.target !== window.userNameInput) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.key === window.const.ENTER_KEY) {
        action();
      }
    },
    chooseRandomElement: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  };
})();
