/*jshint esversion: 6 */
const https = require("https");
const express= require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function (req, res){
  fetch('https://api.wazirx.com/api/v2/tickers')
    .then(res => res.json())
    .then((out) => {
      console.log(out);
      var data = out;
      console.log(data.linkwrx.name);
      res.render(__dirname+"/views/index.ejs",{data:data});
}).catch(err => console.error(err));

});





app.listen(process.env.PORT||3000, function (){
  console.log("The server is running successfully.");
});
