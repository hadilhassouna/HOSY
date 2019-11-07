var express = require('express');
const app = express();
var bodyParser = require('body-parser');

var db = require("../database/db.js")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res) {
  // db.findDrug(drug+"".trim(),function(err,result){
  // console.log("description")
});

app.post('/',function(req,res){
  // console.log(req.body);
  // db.DrugsTracker(req.body);
  // // res.send("");
});

app.listen(5000,function(){
 console.log('listening on port 5000');
});
