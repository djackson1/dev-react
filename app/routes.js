var path = require('path');

module.exports = function(app) {

  app.get('/api', function (req, res) {
    console.log('api call');

    res.send('/api');
  });

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  });
};