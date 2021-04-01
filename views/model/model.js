var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name: {
        type: String,
    },
    status: {
        type : String,
    },
    
}, {timestamp: true});

module.exports = mongoose.model('Task', TaskSchema);