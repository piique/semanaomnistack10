const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const routes = Router();

// Desenvolvedores
routes.post('/devs', DevController.store);
routes.delete('/dev', DevController.destroy);
routes.get('/devs', DevController.index);

routes.get('/search', SearchController.index);

routes.post('/analise_dados', DevController.analise_dados)

module.exports = routes;
