'use strict';

const express        = require('express');
const app            = express();
const path           = require('path');
const fs             = require('fs');

const serveStaticFilesOfDirectory = (dirname) => {
  fs.readdirSync(dirname).forEach(function(name){
    app.use(`/${name}`, express.static(path.join(__dirname, `/${dirname}/${name}`)));
  });
};
serveStaticFilesOfDirectory('visualization');

const server = require('http').Server(app);
server.listen(3000, function(){
  console.log('listening on *:3000');
});
