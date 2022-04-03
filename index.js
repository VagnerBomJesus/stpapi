var express = require('express');
const port = process.env.PORT || 3030;
var app = express();
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render("./home/home");
});

app.use(express.static(__dirname + '/public'))

app.listen(port,function(){
    console.log(' Server is up and listening on port ' + port);
});