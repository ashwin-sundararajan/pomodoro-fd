require.config({
  paths: {
    fresh_client: 'https://static.freshdev.io/fdk/2.0/assets/fresh_client'
  }
});

require(['fresh_client'], function() {
  window.app.initialized().then(function(client) {
    define('client', client);
    require(['modules/app'], function(appActivated) {
      client.events.on('app.activated', appActivated);
    });
  });
});
