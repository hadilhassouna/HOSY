const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drugs');
var db = mongoose.connection;
db.on('error',function(){
  console.log('connection error:')
});
db.once('open', function() {
  console.log( "we're connected!")
});
