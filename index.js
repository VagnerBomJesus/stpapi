var express = require('express');
const port = process.env.PORT || 3030;
let api = require('./routes/index');
var app = express();
require('./db/mongoose')
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render("./home/home");
});
app.get('/404',function(req,res){
    res.render("./home/404");
});

//app.use('/', api);
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))

app.listen(port,function(){
    console.log(' Server is up and listening on port ' + port);
});