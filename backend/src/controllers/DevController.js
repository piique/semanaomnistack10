const axios = require('axios'); // ferramenta para consumir outras api (utilizada para consumir api do github)
const Dev = require('../models/Dev');

/*  
    index - mostrar lista
    show - mostrar apenas um
    store - criar novo
    update - updatar
    destroy - exluir
*/

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body; // recebe techs como string separando cada uma por virgula

    let dev = await Dev.findOne({ github_username });
    if (dev) {
      return res.json({ message: 'Usuário já cadastrado', dev });
    }

    const apiResponse = await axios.get(
      `https://api.github.com/users/${github_username}`
    );
    const { name = login, avatar_url, bio } = apiResponse.data; // name = login - se não existir name, pega valor de login

    const techsArray = techs.split(',').map(tech => tech.trim());

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location,
    });

    return res.json(dev);
  },

  async destroy(req, res) {
    const { id } = req.body;

    const dev = await Dev.findByIdAndDelete(id);

    if (dev) {
      return res.json(dev);
    } else {
      return res.status(400).json({ error: 'User not found to delete' });
    }
  },

  async devs(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },
};
