var display = require('./display.js')

function fileactions(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file)
    display(episodes)
}



module.exports = fileactions