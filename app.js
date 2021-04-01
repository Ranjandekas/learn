/*var http = require('http');

http.createServer(function(req, res){
res.write('Hello World!');
res.end();
}).listen(8080, function() {
console.log(`Server listening on port http 8080`)
})*/


var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    Task = require('./views/model/model');
    var routes = require('./views/route/route');
    app.use(express.json());
mongoose.connect('mongodb+srv://test:test@cluster0.bdfr1.mongodb.net/testdb?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true},
      () => console.log(" Mongoose is connected")
)



app.use(routes);
app.listen(8080);
console.log(`Server listening on port express 8080`)

//mongodb+srv://user:<password>@cluster0.bdfr1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority