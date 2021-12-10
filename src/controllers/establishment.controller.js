const { response } = require('express');
const TagEstablishment = require('../models/TagEstablishment');
const Establishment = require('../models/Establishment');
const mongoose = require('mongoose');
const Type = mongoose.Types;


const createEstablishment = async(req, res = response) => {

    const { location, name, labour, weekend, type, image,geoposition,owner } = req.body;

    let idEstablishment=Type.ObjectId();
    // Create establishment with model
    const newEstablishment= new Establishment({
          _id: idEstablishment,
          location: location,
          name: name,
          labour: labour,
          weekend: weekend,
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

        var EstablishmentReturn = await Establishment.findById({_id: idEstablishment});

        // Generate response
        return res.status(201).json({
            ok: true,
            dbEstablishment: EstablishmentReturn,

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
/*
    tags:{
        tagsE: [] //listas de strings de id establishments //["",""]
        tagsC: []
        tagsD: []
    }
*/
/*
    in our application we consider establishments with the minimum of 1 type "E" but each establishment can have 0..* types "C" or "D"
*/
const getAllEstablishmentsFilter = async(req, res = response) => {
    try{
        var tagsE = await TagEstablishment.find({type: "E"}, {_id: 1}); //tagsE = [{_id:""},{_id:""}]
        var tagsESelected = [];
        var tagsCSelected = [];
        var tagsDSelected = [];
        if(req.body.tags!=null){
            if(req.body.tags.tagsE.length == 0){
                for(let i=0; i<tagsE.length;i++){
                    tagsESelected.push(tagsE[i]._id.valueOf());
                }
            }
            else
                tagsESelected = req.body.tags.tagsE;
            tagsCSelected = req.body.tags.tagsC;
            tagsDSelected = req.body.tags.tagsD;
            const TagsFoundE = [];
            const TagsFoundC = [];
            const TagsFoundD = [];
            let k=0;
            while(k< tagsESelected.length){
                TagsFoundE.push({"type":Type.ObjectId(tagsESelected[k])})
                k++;    
            }
            var EstablishmentEFound = await Establishment.find({$or: TagsFoundE});

            let listEC = [];
            if(tagsCSelected.length == 0){
                listEC = EstablishmentEFound;
            }
            else{
                tagsCSelected.forEach(tag =>{
                    let newList = EstablishmentEFound.filter(e => e.type.includes(Type.ObjectId(tag)));
                    newList.forEach(est =>{
                        if(!listEC.includes(est))
                            listEC.push(est);
                    })
                });
            }
            

            let listECD = [];
            if(tagsDSelected.length == 0){
                listECD = listEC;
            }
            else{
                tagsDSelected.forEach(tag =>{
                    let newList = listEC.filter(e => e.type.includes(Type.ObjectId(tag)));
                    newList.forEach(est =>{
                        if(!listECD.includes(est))
                            listECD.push(est);
                    })
                });
            }
            
            return res.json({
                ok: true,
                dbEstablishment: listECD
            });
        }

        else if(req.body.direccion!=null){
            var dbEstablishmentTag = await Establishment.find({
                direccion: { $in: [req.body.direccion]}});
            return res.json({
                ok: true,
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