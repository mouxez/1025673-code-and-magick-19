'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var FONT_GAP = 16;
var COLUMN_GAP = 50;
var barHeight = CLOUD_HEIGHT - 4 * FONT_GAP - 6 * GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + 4 * GAP, CLOUD_Y + GAP * 3);
  ctx.fillText('Список результатов:', CLOUD_X + 4 * GAP, CLOUD_Y + GAP * 4 + FONT_GAP);

  var maxTime = getMaxElement(times);

  var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var getRandomColors = function () {
    ctx.fillStyle = 'hsl(230,' + getRandomIntInclusive(1, 100) + '% , 50%)';
  };

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomColors(players[i]);
    }
    ctx.fillRect(CLOUD_X + GAP * 5 + (COLUMN_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - (barHeight * times[i] / maxTime) - GAP * 2, BAR_WIDTH, barHeight * times[i] / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP * 5 + (COLUMN_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - (barHeight * times[i] / maxTime) - GAP * 3);
    ctx.fillText(players[i], CLOUD_X + GAP * 5 + (COLUMN_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT);
  }
};
