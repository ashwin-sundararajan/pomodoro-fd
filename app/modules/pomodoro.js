define(['modules/utils'], function(utils) {
  var startTime;
  var intervalId;
  var elem;

  return {
    init: function(element) {
      elem = element;
    },
    startTimer: function() {
      startTime = Date.now();
      if (intervalId) {
        clearInterval(intervalId);
      }

      intervalId = setInterval(this.updateView, 1000);
    },
    updateView: function() {
      elem.textContent = utils.formatDuration(Date.now() - startTime);
    },
    pauseTimer: function() {
      if (intervalId) {
        clearInterval(intervalId);
      }
    },
    resumeTimer: function() {
      intervalId = setInterval(this.updateView, 1000);
    },
    resetTimer: function() {
      this.pauseTimer();
      startTime = undefined;
      elem.textContent = '--:--';
    }
  };
});
