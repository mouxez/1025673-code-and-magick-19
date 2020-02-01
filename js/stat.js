'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var FONT_GAP = 16;
var barHeight = 150;
var BAR_INDENT = 90;
var INDENT_LEFT = 150;
var GAP_TOP = 40;

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

var getRandomColors = function () {
  return 'hsl(230,' + Math.round(Math.random() * 100) + '% , 50%)';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', INDENT_LEFT - GAP, GAP_TOP);
  ctx.fillText('Список результатов:', INDENT_LEFT - GAP, GAP_TOP + GAP + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomColors(players[i]);

    ctx.fillRect(INDENT_LEFT + BAR_INDENT * i, CLOUD_HEIGHT - (barHeight * times[i] / maxTime) - FONT_GAP, BAR_WIDTH, barHeight * times[i] / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), INDENT_LEFT + BAR_INDENT * i, CLOUD_HEIGHT - (barHeight * times[i] / maxTime) - FONT_GAP - GAP);
    ctx.fillText(players[i], INDENT_LEFT + BAR_INDENT * i, CLOUD_HEIGHT);
  }
};
