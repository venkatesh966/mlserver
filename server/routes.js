var path = require('path');
var cors = require('cors')
module.exports = function(app) {
    app.use('/api/auth', require('./api/auth'));
    app.use('/api/admin', require('./api/admin'));
    app.use('/api/traineddata', require('./api/trainedData'));
    // app.use('/api/bookarray', require('./api/bookarray'));
}