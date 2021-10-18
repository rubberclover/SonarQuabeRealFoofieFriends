const { response } = require('express');
const TagEstablishment = require('../models/TagEstablishment');
const Establishment = require('../models/Establishment');
const mongoose = require('mongoose');
const Type = mongoose.Types;


const createEstablishment = async(req, res = response) => {

    const { location, name, timeClose, timeOpen, type, image,geoposition,owner } = req.body;

    // Create establishment with model
    const newEstablishment= new Establishment({
          location: location,
          name: name,
          timeClose: timeClose,
          timeOpen: timeOpen,
          type: type,
          image: image,
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
        var dbEstablishment = await Establishment.find();
    
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

const getAllEstablishmentsFilter = async(req, res = response) => {
    try{
        if(req.body.type!=null){
            var EstablishmentObtained=[];
            const TagsBody = req.body.type;
            let i=0;
            while(i< TagsBody.length){
            var TagFound= await TagEstablishment.find({type: TagsBody[i]});
            let k=0;
            while(k< TagFound.length){
                var EstablishmentFound= await Establishment.find(
                { type: { $in: Type.ObjectId(TagFound[k]['_id']).valueOf()}});
                if(EstablishmentFound.length>0 ){
                    for(let h=0;h<EstablishmentFound.length;h++){
                        EstablishmentObtained.push(EstablishmentFound[h]);
                    }
                }
                k++;
            }
            i++;
            }
            let Found= false;
            let uniqueChars = [];
            EstablishmentObtained.forEach((c) => {
                for(let h=0;h<EstablishmentObtained.length;h++){
                    if (JSON.stringify(c) === JSON.stringify(EstablishmentObtained[h])) {
                    Found=true;
                    EstablishmentObtained.splice(h, 1);
                 }
                }
                if(Found){
                    uniqueChars.push(c);
                } 
            });
            EstablishmentObtained=EstablishmentObtained.concat(uniqueChars);
            return res.json({
                EstablishmentObtained
            });
        }
        else if(req.body.name!=null){
            var dbEstablishmentTag = await Establishment.find({
                name: { $in: [req.body.name]}});
            return res.json({
                dbEstablishmentTag
            });
        }

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
    getAllEstablishmentsFilter,
    obtainEstablishment,
    obtainOwnerEstablishment,
    getAllTags

}