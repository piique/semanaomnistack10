const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number], // arrays de números - apenas 2 numeros (latitude e longitude)
        index: '2dsphere',
    }
});

module.exports = PointSchema;