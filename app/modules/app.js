define(['client', 'modules/pomodoro'], function(client, pomodoro) {
  return function appActivated() {
    console.log('app activated');

    pomodoro.init(document.getElementById('time-display'));

    document.getElementById('start').addEventListener('click', function() {
      pomodoro.startTimer();
    });
    document.getElementById('pause').addEventListener('click', function() {
      pomodoro.pauseTimer();
    });
    document.getElementById('stop').addEventListener('click', function() {
      pomodoro.resetTimer();
    });
  };
});
