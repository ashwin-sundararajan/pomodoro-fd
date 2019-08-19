define(function() {
  function padZero(num) {
    if (num <= 9) return '0' + num;

    return '' + num;
  }
  return {
    formatDuration: function(timeElapsed) {
      var secondsElapsed = padZero(Math.round(timeElapsed / 1000) % 60);
      var minutesElapsed = padZero(Math.floor(timeElapsed / 60000));

      return minutesElapsed.concat(':', secondsElapsed);
    }
  };
});
