const { response } = require('express');
const Establishment = require('../models/Establishment');
const TagEstablishment = require('../models/TagEstablishment');

const getAllEstablishments = async(req, res = response ) => {


    try{
        // Read BD
        const dbEstablishment = await Establishment.find();
    
        return res.json({
            ok: true,
            dbEstablishment
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Talk with the administrator'
        });
    }

}

const getAllTags = async(req, res = response ) => {
    try{
        // Read BD
        const dbTagEstablishment = await TagEstablishment.find();
    
        return res.status(200).json({
            ok: true,
            dbTagE: dbTagEstablishment.filter(tag => tag.type === 'E'),
            dbTagC: dbTagEstablishment.filter(tag => tag.type === 'C'),
            dbTagD: dbTagEstablishment.filter(tag => tag.type === 'D')
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
    getAllEstablishments,
    getAllTags

}