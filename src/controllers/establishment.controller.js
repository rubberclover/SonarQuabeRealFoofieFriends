const { response } = require('express');
const TagEstablishment = require('../models/TagEstablishment');
const Establishment = require('../models/Establishment');


const createEstablishment = async(req, res = response) => {

    const { location, name, timeClose, timeOpen, type, rating, image,geoposition,owner } = req.body;

    // Create establishment with model
    const newEstablishment= new Establishment({
          location: location,
          name: name,
          timeClose: timeClose,
          timeOpen: timeOpen,
          type: type,
          image: image,
          rating: rating,
          owner: owner,
          geoposition: {
             latitude: 0,
             longitude:0
          }
    })

    try{
    
        // Create DB establishment
        await newEstablishment.save();

        // Generate response
        return res.status(201).json({
            ok: true,
        });

     
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Please, talk with administrator'
        });
    }

}

const getAllEstablishments = async(req, res = response) => {
    
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

const obtainEstablishment = async(req, res = response) => {

    Establishment.findById({_id: req.params.id}).then(function(establishment){
        res.send(establishment);
    });

};

const obtainOwnerEstablishment = async(req, res = response) => {

    Establishment.find({owner: req.params.id}).then(function(establishment){
        res.send(establishment);
    });

};

const getAllTags = async (req, res = response) => {
    try {
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
    createEstablishment,
    getAllEstablishments,
    obtainEstablishment,
    obtainOwnerEstablishment,
    getAllTags

}