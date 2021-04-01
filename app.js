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
app.use('/', express.static('./public'));
const PORT = process.env.PORT || 9000;
app.listen(PORT);
console.log(`Server listening on port express ${PORT}`)

//mongodb+srv://user:<password>@cluster0.bdfr1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//ssh -i <pemfilename> ec2-user@ec2-13-126-33-178.ap-south-1.compute.amazonaws.com