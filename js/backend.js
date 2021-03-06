'use strict';

(function () {
  var SAVE_URL = 'https://js.dump.academy/code-and-magick';
  var LOAD_URL = 'https://js.dump.academy/code-and-magick/data';
  var xhr = new XMLHttpRequest();

  var StatusCode = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
  };

  var save = function (data, onLoad, onError) {

    xhr.responseType = 'json';
    xhr.addEventListener('load', addResponseListener(onLoad, onError, xhr));
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.open('POST', SAVE_URL);
    xhr.send(data);
  };

  var load = function (onLoad, onError) {

    xhr.responseType = 'json';
    xhr.addEventListener('load', addResponseListener(onLoad, onError, xhr));
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    xhr.timeout = window.const.TIMEOUT_MS;
    xhr.open('GET', LOAD_URL);
    xhr.send();
  };

  var addResponseListener = function (onError, onLoad) {

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case StatusCode.OK:
          onLoad(xhr.response);
          break;
        case StatusCode.SERVER_ERROR:
          onError('Ошибка сервера');
          break;
        case StatusCode.SERVICE_UNAVAILABLE:
          onError('Сервер временно не доступен');
          break;
        case StatusCode.BAD_REQUEST:
          onError('Неверный запрос');
          break;
        case StatusCode.UNAUTHORIZED:
          onError('Пользователь не авторизован');
          break;
        case StatusCode.NOT_FOUND:
          onError('Не найдено');
          break;
        default:
          onError('Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText);
      }
    });
  };

  window.backend = {
    save: save,
    load: load
  };
})();
