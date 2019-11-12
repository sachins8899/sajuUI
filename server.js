//Install express server
const express = require('express');
const path = require('path');

const app = express();

const fs = require('fs');


fs.readdir(__dirname, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log("We are Here : - "+file); 
    });
});

console.log('Jai Ho Mata Di:'+ __dirname);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + 'dist/sajuui'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/sajuui/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);