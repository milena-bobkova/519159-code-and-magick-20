'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUDS_NUMBER = 5;
  var DIAMETER = CLOUD_WIDTH / CLOUDS_NUMBER;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 50;
  var TEXT_WIDTH = 40;
  var BAR_HEIGHT = 150;

  var renderCloudSquare = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y + CLOUD_HEIGHT / 2);
    ctx.fillRect(x, y + CLOUD_HEIGHT / 2, CLOUD_WIDTH, CLOUD_HEIGHT / 2);
    ctx.closePath();
    ctx.fill();
  };

  var renderCloudRound = function (ctx, x, y, width, heigth, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x + DIAMETER, y + heigth / 2);
    ctx.arc(x + DIAMETER, y + heigth / 2, DIAMETER, 0, Math.PI * 2, true);
    ctx.moveTo(x + DIAMETER * 1.5, y + heigth / 2 - DIAMETER / 2);
    ctx.arc(x + DIAMETER * 1.5, y + heigth / 2 - DIAMETER / 2, DIAMETER, 0, Math.PI * 2, true);
    ctx.moveTo(x + DIAMETER * 2.5, y + heigth / 2 - DIAMETER / 2 - GAP);
    ctx.arc(x + DIAMETER * 2.5, y + heigth / 2 - DIAMETER / 2 - GAP, DIAMETER, 0, Math.PI * 2, true);
    ctx.moveTo(x + DIAMETER * 3.5, y + heigth / 2 - DIAMETER / 2);
    ctx.arc(x + DIAMETER * 3.5, y + heigth / 2 - DIAMETER / 2, DIAMETER, 0, Math.PI * 2, true);
    ctx.moveTo(x + DIAMETER * 4, y + heigth / 2);
    ctx.arc(x + DIAMETER * 4, y + heigth / 2, DIAMETER, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloudRound(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
    renderCloudSquare(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
    renderCloudRound(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff');
    renderCloudSquare(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'top';
    ctx.fillText('Ура вы победили!', CLOUD_WIDTH / 2, CLOUD_Y + GAP * 2);
    ctx.fillText('Список результатов:', CLOUD_WIDTH / 2, CLOUD_Y + GAP * 4);

    var maxTime = window.util.getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      var playersHeight = (BAR_HEIGHT * times[i]) / maxTime;
      times[i] = Math.round(times[i]);

      ctx.fillStyle = '#000';
      ctx.fillText(players[i], CLOUD_X + FONT_GAP + (TEXT_WIDTH + FONT_GAP) * i, CLOUD_HEIGHT - GAP);
      ctx.fillText(times[i], CLOUD_X + FONT_GAP + (TEXT_WIDTH + FONT_GAP) * i, CLOUD_HEIGHT - GAP * 3 - playersHeight);
      ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(245, ' + (Math.floor(Math.random() * 100)) + '%' + ', 50%)';
      ctx.fillRect(CLOUD_X + FONT_GAP + (TEXT_WIDTH + FONT_GAP) * i, CLOUD_HEIGHT - GAP - playersHeight, TEXT_WIDTH, playersHeight);
    }
  };
})();
