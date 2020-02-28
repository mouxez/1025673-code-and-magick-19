'use strict';

(function () {
  window.colorize = function (element, input, array) {
    element.addEventListener('click', function () {
      var color = window.util.chooseRandomElement(array);
      input.value = color;
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    });
  };
})();
