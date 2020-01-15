const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const routes = Router();

// Desenvolvedores
routes.post('/devs', DevController.store);
routes.delete('/dev', DevController.destroy);
routes.get('/devs', DevController.index);

routes.post('/search', SearchController.index);

module.exports = routes;
