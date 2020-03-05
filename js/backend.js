'use strict';

(function () {
  var TIMEOUT_MS = 10000;
  var WIZARDS_COUNT = 4;
  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.setup-similar-list');

  var statusCode = {
    OK: 200,
    badRequest: 400,
    unauthorized: 401,
    notFound: 404,
    serverError: 500,
    serviceUnavailable: 503
  };

  var save = function (data, onLoad, onError) {

    var SAVE_URL = 'https://js.dump.academy/code-and-magick';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onLoad(xhr.response);
    });
    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case statusCode.OK:
          onLoad(xhr.response);
          break;
        case statusCode.serverError:
          onError('Ошибка сервера');
          break;
        case statusCode.serviceUnavailable:
          onError('Сервер временно не доступен');
          break;
        default:
          onError('Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.open('POST', SAVE_URL);
    xhr.send(data);
  };

  var load = function (onLoad, onError) {

    var LOAD_URL = 'https://js.dump.academy/code-and-magick/data';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case statusCode.OK:
          onLoad(xhr.response);
          break;
        case statusCode.badRequest:
          onError('Неверный запрос');
          break;
        case statusCode.unauthorized:
          onError('Пользователь не авторизован');
          break;
        case statusCode.notFound:
          onError('Не найдено');
          break;
        default:
          onError('Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.timeout = TIMEOUT_MS;
    xhr.open('GET', LOAD_URL);
    xhr.send();
  };

  // выводит загруженных магов
  var onSuccessLoad = function (wizards) {

    for (var l = 0; l < WIZARDS_COUNT; l++) {
      fragment.appendChild(window.renderWizard(wizards[l]));
    }
    similarListElement.appendChild(fragment);
    window.setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var onErrorLoad = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red; border-radius: 10%;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.top = '20%';
    node.style.fontSize = '40px';
    node.style.color = '#000000';
    node.style.width = '300px';
    node.style.height = '300px';
    node.style.fontStyle = 'italic';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };
  load(onSuccessLoad, onErrorLoad);
  window.save = save;
})();
