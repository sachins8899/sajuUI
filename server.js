//Install express server
const express = require('express');
const path = require('path');

const app = express();

console.log('Jai Ho Mata Di:'+ __dirname);

const fs = require('fs');

fs.readdir(__dirname, (err, files) => {
  files.forEach(file => {
    console.log("ko - "+file);
  });
});


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/sajuUI'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/sajuUI/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);