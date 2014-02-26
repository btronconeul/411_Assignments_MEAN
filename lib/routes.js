'use strict';

var projects = require('./controllers/projects'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    session = require('./controllers/session');

var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  //Project API
  app.get('/api/projects', projects.all);
  app.post('/api/projects', projects.create);
  app.get('/api/projects/:id', projects.show);
  //TODO Implement when ready
  //app.put('api/projects/:projectId',projects.update);
  //app.del('api/projects/:projectId', projects.destroy);
  //Users API
  app.post('/api/users', users.create);
  app.put('/api/users', users.changePassword);
  app.get('/api/users/me', users.me);
  app.get('/api/users/:id', users.show);
  //Session API
  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });
  
  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};