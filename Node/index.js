

var id3 = require('id3js');
var mysql = require("mysql");
var express = require('express')
var app = express()
var fs=require('fs')
var filenames;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});


app.get('/', function (req, res) {
 
fs.readFile('./HTML/files/examples/dashboard.php', function (err, html) {
    if (err) {
        throw err; 
    }
    res.redirect("http://localhost/admin/material-dashboard-html-v1.1.1/examples/dashboard.php");
    
//res.write(html)   
});


});





app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

const fileUpload = require('express-fileupload');
 
// default options 
app.use(fileUpload());
 
app.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
var fs = require("fs");


// Synchronous read
var data = fs.readFileSync('count.txt');
var cnt=parseInt(data.toString());
console.log(cnt);
cnt++;
fs.writeFile('count.txt', cnt,  function(err) {
   if (err) {
      return console.error(err);
   }
}
);


  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
  let sampleFile = req.files.sampleFile;
 
  // Use the mv() method to place the file somewhere on your server 
  console.log("FILE NAME IS "+req.files.sampleFile.name);
  filenames=req.files.sampleFile.name;
  sampleFile.mv("song/"+cnt+".mp3", function(err) {
    if (err)
      return res.status(500).send(err);
    res.send('File uploaded!');




id3({ file: "./song/"+cnt+".mp3", type: id3.OPEN_LOCAL }, function(err, tags) {
    // tags now contains your ID3 tags
    console.log(tags);




    var employee = { title: tags.title,album: tags.album, artist: tags.artist, filename:cnt+'.mp3', count:0};
con.query('INSERT INTO playlist SET ?', employee, function(err,res){
  if(err) throw err;

  console.log("data added to db");
});
    
});


    
  });
});








