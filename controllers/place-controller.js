const Place = require("../models/place-model");

const places = async (req, res) => {
    try {
        const response = await Place.find();
        if (!response) {
            // Handle the case where no document was found
            res.status(404).json({ msg: "No service found" });
            return;
        }
        // console.log(response);
        res.status(200).json({ msg: response });
    } catch (error) {
        console.log(`services: ${error}`);
    }
};

const searchfun = async (req, res) => {
    let result = await Place.find({
        "$or": [
            { title: { $regex: req.params.key } }
        ]
    });
    res.send(result);
}

module.exports = { places, searchfun };