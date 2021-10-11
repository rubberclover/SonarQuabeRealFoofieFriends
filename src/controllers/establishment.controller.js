const { response } = require('express');
const Event = require('../models/Establishment');
const mongoose = require('mongoose');
const Establishment = require('../models/Establishment');
const Type = mongoose.Types;

const createEstablishment = async(req, res = response) => {

    const { location, name, timeClose, timeOpen, type, rating, image,geoposition,owner } = req.body;
    
    // Create establishment with model
    const newEstablishment= new Establishment({
          _id: Type.ObjectId(),
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
        if(req.body.type!=null){
        var dbEstablishments = await Establishment.find({
            type: { $in: [req.body.type]}});
        return res.json({
            dbEstablishments
        });
    }
        
        else{
        var dbEstablishments = await Establishment.find();
        }
        // Read BD
        // Generate JWT
    
        return res.json({
            ok: true,
            dbEstablishments
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

module.exports = {
    createEstablishment,
    getAllEstablishments,
    obtainEstablishment,
    obtainOwnerEstablishment
}