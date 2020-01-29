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

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + 4 * GAP, CLOUD_Y + GAP * 3);
  ctx.fillText('Список результатов:', CLOUD_X + 4 * GAP, CLOUD_Y + GAP * 4 + FONT_GAP);

  ctx.fillStyle = '#000';
  ctx.fillText('1200', CLOUD_X + COLUMN_GAP + GAP, CLOUD_X - GAP);
  ctx.fillText('You', CLOUD_X + COLUMN_GAP + GAP, CLOUD_HEIGHT);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + COLUMN_GAP + GAP, CLOUD_X, BAR_WIDTH, barHeight);

  ctx.fillStyle = '#000';
  ctx.fillText('1200', CLOUD_X + 2 * COLUMN_GAP + GAP + BAR_WIDTH, CLOUD_X - GAP);
  ctx.fillText('Ann', CLOUD_X + 2 * COLUMN_GAP + GAP + BAR_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = '#0770ff';
  ctx.fillRect(CLOUD_X + 2 * COLUMN_GAP + GAP + BAR_WIDTH, CLOUD_X, BAR_WIDTH, barHeight);

  ctx.fillStyle = '#000';
  ctx.fillText('1200', CLOUD_X + 3 * COLUMN_GAP + GAP + 2 * BAR_WIDTH, CLOUD_X - GAP);
  ctx.fillText('Max', CLOUD_X + 3 * COLUMN_GAP + GAP + 2 * BAR_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = '#0990ff';
  ctx.fillRect(CLOUD_X + 3 * COLUMN_GAP + GAP + 2 * BAR_WIDTH, CLOUD_X, BAR_WIDTH, barHeight);

  ctx.fillStyle = '#000';
  ctx.fillText('1200', CLOUD_X + 4 * COLUMN_GAP + GAP + 3 * BAR_WIDTH, CLOUD_X - GAP);
  ctx.fillText('Alex', CLOUD_X + 4 * COLUMN_GAP + GAP + 3 * BAR_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = '#0350ff';
  ctx.fillRect(CLOUD_X + 4 * COLUMN_GAP + GAP + 3 * BAR_WIDTH, CLOUD_X, BAR_WIDTH, barHeight);
};
