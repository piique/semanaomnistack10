const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@lowstore-7lyq0.mongodb.net/week10?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use(cors({ origin: 'http://localhost:3000' })); // deixa sem argumento libera acesso externo para todo tipo de aplicação
app.use(express.json());
app.use(routes);

app.listen(3001, () => {
  console.log('Server is running');
});
