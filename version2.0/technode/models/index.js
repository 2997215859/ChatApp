var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/techNode');
export.User = mongoose.model('User',require('./user'));
