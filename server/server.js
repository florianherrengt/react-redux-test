require('babel/register');
var boot = require('loopback-boot');
var app = require('./loopback-server.js');
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

