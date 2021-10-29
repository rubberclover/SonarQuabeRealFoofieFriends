const { response } = require('express');
const Event = require('../models/Event');
const TagEvent = require('../models/TagEvent');
const User = require('../models/User');
const mongoose = require('mongoose');
const Type = mongoose.Types;
const today= new Date();
const url = require('url');

const createEvent = async(req, res = response) => {
    var dd = String(today.getDate()+ 1).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    const todayDate = mm + '/' + dd + '/' + yyyy;

    const { title, description, location, type, images, startDate, finishDate,userPublished } = req.body;
    
    // Create event with model
    const newEvent= new Event({
          creationDate: todayDate,
          title: title,
          description: description,
          location: location,
          type: type,
          startDate: startDate,
          finishDate: finishDate,
          userPublished: userPublished,
          userSuscriber: [],
          geoposition: {
             latitude: 0,
             longitude:0
          } ,
          images: [],
    })

    for(let i = 0;i<images.length;i++){
        newEvent.images.push(images[i]);
    }
    try{
        // Create DB event
        let Event = await newEvent.save();

        // Generate response
        return res.status(201).json({
            ok: true,
            eventId: Event._id
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
        const UserSuscriber = req.body.userSuscriber;
        User.findByIdAndUpdate({_id: UserSuscriber},{$push: {eventSuscriber: req.params.id}}).then(function(){
        Event.findByIdAndUpdate({_id: req.params.id},{$push:req.body}).then(function(){
        Event.findOne({_id: req.params.id}).then(function(event){
            
            return res.status(200).json({
                ok: true,
                eventId: event._id
            });
        });
   
    });
        });

}

const unsuscribeEvent = async(req, res = response) => {
    const UserSuscriber = req.body.userSuscriber;
    User.findByIdAndUpdate({_id: UserSuscriber},{$pull: {eventSuscriber: req.params.id}}).then(function(){
    Event.findOneAndUpdate({_id: req.params.id}, {$pull: {userSuscriber: req.body.userSuscriber}}).then(function(){
    Event.findOne({_id: req.params.id}).then(function(event){
        res.send(event)
    });

});

});

}

const getAllEvents = async(req, res = response) => {
    
    try{
        var dbEvents = await Event.find();
    
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

const getAllEventsFilter = async(req, res = response) => {
    var q = url.parse(req.url, true);
    let FindById=q.search;
    
    try{
        if(FindById!=null){
            let TagsBody=FindById.substring(1).split("&");
            const TagsFound = [];
            let k=0;
            while(k< TagsBody.length){
            TagsFound.push({"type":Type.ObjectId(TagsBody[k])})
            k++;    
            }
            var TagFound= await Event.find({$or: TagsFound });
            return res.json({
                TagFound
            });
        }
        
        else{
        var dbEvents = await Event.find();
        }
        // Read BD
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

    const UserEvents = await User.findById({_id: Type.ObjectId(req.params.id)});
    Event.find({_id: UserEvents.eventSuscriber}).then(function(event){
       res.send(event);
   });

};

/*const obtainUserEvent = async(req, res = response) => {

    Event.find({userSuscriber: req.params.id}).then(function(event){
        res.send(event);
    });

};*/

const getAllEventTags = async (req, res = response) => {
    try {
        // Read BD
        const dbTagEvent = await TagEvent.find();

        return res.status(200).json({
            ok: true,
            dbTagEvent
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
    createEvent,
    suscribeEvent,
    getAllEvents,
    obtainEvent,
    obtainUserEvent,
    unsuscribeEvent,
    getAllEventTags,
    getAllEventsFilter
}