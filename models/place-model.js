const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    distance: { type: String, required: true },
    duration: { type: String, required: true },
    price: { type: String, required: true },
});

const Place = new model("Place", serviceSchema);

module.exports = Place;