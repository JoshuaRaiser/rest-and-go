const mongoose = require('mongoose')
//module.exports = mongoose.connect('mongodb://joshuaraiser:dxtdpr1596@ds127436.mlab.com:27436/db_restandgo')

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

var mongodbUri = 'mongodb://joshuaraiser:dxtdpr1596@ds127436.mlab.com:27436/db_restandgo';

mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.
  console.log('conectado');
});
