const notebleRoutes = require('./notable_routes');

module.exports = function(app,db){
    notebleRoutes(app,db);
};