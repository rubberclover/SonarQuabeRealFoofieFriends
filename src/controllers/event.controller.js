const { response } = require('express');
const Event = require('../models/Event');
const mongoose = require('mongoose');
const Type = mongoose.Types;
const today= new Date();

const createEvent = async(req, res = response) => {

    var dd = String(today.getDate()+ 1).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    const todayDate = mm + '/' + dd + '/' + yyyy;

    const { title, description, location, type, image, startHour, finishHour,date,userPublished } = req.body;
    
    // Create event with model
    const newEvent= new Event({
          _id: Type.ObjectId(),
          creationDate: todayDate,
          title: title,
          description: description,
          location: location,
          date: date,
          type: type,
          image: image,
          startHour: startHour,
          finishHour: finishHour,
          userPublished: userPublished,
          userSuscriber: [],
          geoposition: {
             latitude: 0,
             longitude:0
          }
    })

    try{
        
        // Create DB event
        await newEvent.save();

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

const suscribeEvent = async(req, res = response) => {

        Event.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        Event.findOne({_id: req.params.id}).then(function(event){
            res.send(event)
        });
   
    });

}

const getAllEvents = async(req, res = response) => {
    
    try{
        // Read BD
        const dbEvents = await Event.find();
    
        // Generate JWT
    
        return res.json({
            ok: true,
            dbEvents
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Talk with the administrator'
        });
    }
}

const obtainEvent = async(req, res = response) => {

    Event.findById({_id: req.params.id}).then(function(event){
        res.send(event);
    });

};

const obtainUserEvent = async(req, res = response) => {

    Event.find({userSuscriber: req.params.id}).then(function(event){
        res.send(event);
    });

};

module.exports = {
    createEvent,
    suscribeEvent,
    getAllEvents,
    obtainEvent,
    obtainUserEvent
}