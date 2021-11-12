const { response } = require('express');
const Event = require('../models/Event');
const TagEvent = require('../models/TagEvent');
const User = require('../models/User');
const mongoose = require('mongoose');
const Type = mongoose.Types;
const today= new Date();
const url = require('url');
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var todayDate = date+' '+time;

const createEvent = async(req, res = response) => {

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

    var EventsReturn= dbEvents;

    var TagsEncontrados= [];

    dbEvents.forEach( event => {
        TagsEncontrados.push(event.type);
    } ); 

    llamadasEsperar = [];
    for(let i=0; i< TagsEncontrados.length;i++){
        llamadasEsperar.push(TagEvent.findById({_id: TagsEncontrados[i]})); 
    }
    for(let i=0; i< llamadasEsperar.length;i++){
        var EventFound = await llamadasEsperar[i];
        EventsReturn[i].type = EventFound;
    }
    
        return res.json({
            ok: true,
            events: EventsReturn
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Talk with the administrator'
        });
    }
}

const getAllEventsFromNow = async(req, res = response) => {
    
    try{
        var dbEvents = await Event.find({finishDate:{$gte: todayDate}});

    var EventsReturn= dbEvents;

    var TagsEncontrados= [];

    dbEvents.forEach( event => {
        TagsEncontrados.push(event.type);
    } ); 

    llamadasEsperar = [];
    for(let i=0; i< TagsEncontrados.length;i++){
        llamadasEsperar.push(TagEvent.findById({_id: TagsEncontrados[i]})); 
    }
    for(let i=0; i< llamadasEsperar.length;i++){
        var EventFound = await llamadasEsperar[i];
        EventsReturn[i].type = EventFound;
    }
    
        return res.json({
            ok: true,
            events: EventsReturn
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
            var EventsReturn= TagFound;

            var TagsEncontrados= [];
        
            EventsReturn.forEach( event => {
                TagsEncontrados.push(event.type);
            } ); 
        
            llamadasEsperar = [];
            for(let i=0; i< TagsEncontrados.length;i++){
                llamadasEsperar.push(TagEvent.findById({_id: TagsEncontrados[i]})); 
            }
            for(let i=0; i< llamadasEsperar.length;i++){
                var EventFound = await llamadasEsperar[i];
                EventsReturn[i].type = EventFound;
            }
            
            return res.json({
                ok: true,
                events: EventsReturn
            });
        }
        
        else{
        var dbEvents = await Event.find();
        }
        // Read BD
        // Generate JWT

        var EventsReturn= dbEvents;

        var TagsEncontrados= [];
    
        dbEvents.forEach( event => {
            TagsEncontrados.push(event.type);
        } ); 
    
        llamadasEsperar = [];
        for(let i=0; i< TagsEncontrados.length;i++){
            llamadasEsperar.push(TagEvent.findById({_id: TagsEncontrados[i]})); 
        }
        for(let i=0; i< llamadasEsperar.length;i++){
            var EventFound = await llamadasEsperar[i];
            EventsReturn[i].type = EventFound;
        }
    
        return res.json({
            ok: true,
            EventsReturn
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
    var dbEvents = await Event.findById({_id: req.params.id});
    
    var EventsReturn= dbEvents;

    var TagsEncontrados= [];

    TagsEncontrados.push(EventsReturn.type);

    llamadasEsperar = [];
    usuarioEvento = [];
    
        llamadasEsperar.push(TagEvent.findById({_id: TagsEncontrados})); 
        usuarioEvento.push(User.findById({_id: EventsReturn.userPublished})); 

    for(let i=0; i< llamadasEsperar.length;i++){
        var EventFound = await llamadasEsperar[i];
        var UserFound = await usuarioEvento[i];
        EventsReturn.type = EventFound;
        EventsReturn.userPublished= UserFound;
    }

    return res.json({
        ok: true,
        EventsReturn
    });

};

const obtainUserEvent = async(req, res = response) => {

    const UserEvents = await User.findById({_id: Type.ObjectId(req.params.id)});
    const EventSuscribe = await Event.find({_id: UserEvents.eventSuscriber});

    var TagsEncontrados= [];

    EventSuscribe.forEach( event => {
        TagsEncontrados.push(event.type);
    } ); 

    llamadasEsperar = [];
    for(let i=0; i< TagsEncontrados.length;i++){
        llamadasEsperar.push(TagEvent.findById({_id: TagsEncontrados[i]})); 
    }
    for(let i=0; i< llamadasEsperar.length;i++){
        var EventFound = await llamadasEsperar[i];
        EventSuscribe[i].type = EventFound;
    }
    const EventPublish = await Event.find({_id: UserEvents.eventPublished});

    var TagsEncontrados= [];

    EventPublish.forEach( event => {
        TagsEncontrados.push(event.type);
    } ); 

    llamadasEsperar = [];
    for(let i=0; i< TagsEncontrados.length;i++){
        llamadasEsperar.push(TagEvent.findById({_id: TagsEncontrados[i]})); 
    }
    for(let i=0; i< llamadasEsperar.length;i++){
        var EventFound = await llamadasEsperar[i];
        EventPublish[i].type = EventFound;
    }
    return res.json({
        ok: true,
        EventPublish,
        EventSuscribe
    });

};


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

const getAllEventsFilterFromNow = async(req, res = response) => {
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
            var TagFound= await Event.find({$or: TagsFound, finishDate:{$gte: todayDate}});
            var EventsReturn= TagFound;

        var TagsEncontrados= [];
    
        EventsReturn.forEach( event => {
            TagsEncontrados.push(event.type);
        } ); 
    
        llamadasEsperar = [];
        for(let i=0; i< TagsEncontrados.length;i++){
            llamadasEsperar.push(TagEvent.findById({_id: TagsEncontrados[i]})); 
        }
        for(let i=0; i< llamadasEsperar.length;i++){
            var EventFound = await llamadasEsperar[i];
            EventsReturn[i].type = EventFound;
        }
            
            return res.json({
                ok: true,
                events: EventsReturn
            });
        }
        
        else{
        var dbEvents = await Event.find({finishDate:{$gte: todayDate}});
        }
        // Read BD
        // Generate JWT

        var EventsReturn= dbEvents;

        var TagsEncontrados= [];
    
        dbEvents.forEach( event => {
            TagsEncontrados.push(event.type);
        } ); 
    
        llamadasEsperar = [];
        for(let i=0; i< TagsEncontrados.length;i++){
            llamadasEsperar.push(TagEvent.findById({_id: TagsEncontrados[i]})); 
        }
        for(let i=0; i< llamadasEsperar.length;i++){
            var EventFound = await llamadasEsperar[i];
            EventsReturn[i].type = EventFound;
        }
    
        return res.json({
            ok: true,
            EventsReturn
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Talk with the administrator'
        });
    }
}

/*async function addType(array){
    var TagsEncontrados= [];
    
    EventsReturn.forEach( event => {
        TagsEncontrados.push(event.type);
    } ); 

    llamadasEsperar = [];
    for(let i=0; i< TagsEncontrados.length;i++){
        llamadasEsperar.push(TagEvent.findById({_id: TagsEncontrados[i]})); 
    }
    for(let i=0; i< llamadasEsperar.length;i++){
        var EventFound = await llamadasEsperar[i];
        EventsReturn[i].type = EventFound;
    }
}*/


module.exports = {
    createEvent,
    suscribeEvent,
    getAllEvents,
    obtainEvent,
    obtainUserEvent,
    unsuscribeEvent,
    getAllEventTags,
    getAllEventsFilter,
    getAllEventsFromNow,
    getAllEventsFilterFromNow
}