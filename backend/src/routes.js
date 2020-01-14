const { Router } = require('express');
const DevController = require('./controllers/DevController')
const routes = Router();


// Desenvolvedores
routes.post('/devs', DevController.store);
routes.delete('/dev', DevController.delete);
routes.get('/devs', DevController.devs);


module.exports = routes;