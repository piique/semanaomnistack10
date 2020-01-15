const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res) {
    // Buscar todos os devs em um raio de 10km
    // Filtrar por tecnologias
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseStringAsArray(techs);
    
    const devs = await Dev.find({
      
    });

    return res.json({ devs: [] });

  },
};
