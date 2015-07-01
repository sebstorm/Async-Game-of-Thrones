var fs = require('fs');
var fileActions = require('./game.js')
fs.readFile("./GotEpisodes.json", 'utf8', fileActions);

