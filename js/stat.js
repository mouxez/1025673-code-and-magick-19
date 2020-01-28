'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 130, 35);
  ctx.fillText('Список результатов:', 130, 55);

  ctx.fillStyle = '#000';
  ctx.fillText('You', 160, 270);
  ctx.fillText('2345', 160, 90);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(160, 100, 40, 150);

  ctx.fillStyle = '#000';
  ctx.fillText('Ann', 250, 270);
  ctx.fillText('1234', 250, 140);
  ctx.fillStyle = '#0770ff';
  ctx.fillRect(250, 150, 40, 100);

  ctx.fillStyle = '#000';
  ctx.fillText('Max', 340, 270);
  ctx.fillText('1534', 340, 120);
  ctx.fillStyle = '#0990ff';
  ctx.fillRect(340, 130, 40, 120);

  ctx.fillStyle = '#000';
  ctx.fillText('Alex', 430, 270);
  ctx.fillText('1734', 430, 110);
  ctx.fillStyle = '#0350ff';
  ctx.fillRect(430, 120, 40, 130);
};
