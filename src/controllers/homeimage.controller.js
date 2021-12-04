const { response } = require('express');
const HomeImage = require('../models/HomeImage');
const mongoose = require('mongoose');
const Type = mongoose.Types;
const today= new Date();

const getAllHomeImage = async (req, res = response) => {
    try {
        // Read BD
        const dbHomeImage = await HomeImage.findOne();

        return res.status(200).json({
            ok: true,
            dbHomeImage
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Talk with the administrator'
        });
    }
}


module.exports = {
    getAllHomeImage
}