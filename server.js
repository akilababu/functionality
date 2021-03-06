ar express = require('express');
var app = module.exports = express.createServer();                                   
app.configure(function(){
app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});


app.get('/', function(req, res){
    res.render('index', {
            title: 'Express'
                });
});

app.listen(3000);