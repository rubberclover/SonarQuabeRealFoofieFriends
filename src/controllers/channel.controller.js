const { response } = require('express');
const Channel = require('../models/Channel');
const mongoose = require('mongoose');
const Type = mongoose.Types;
const today= new Date();

const createChannel = async(req, res = response) => {

    const { description, name, user, image } = req.body;

    // Create establishment with model
    const newChannel= new Channel({
          description: description,
          name: name,
          image: image,
          user: user,
          post: []
    })

    try{
    
        // Create DB establishment
        await newChannel.save();

        // Generate response
        return res.status(201).json({
            ok: true
        });

     
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Please, talk with administrator'
        });
    }

}

const obtainChannel = async(req, res = response) => {

    Channel.findById({_id: req.params.id}).then(function(channel){
        res.send(channel);
    });

};

const getAllChannels = async(req, res = response) => {
    
    try{ 
        
        var dbChannels = await Channel.find();
        // Read BD
        
    
        // Generate JWT
    
        return res.json({
            ok: true,
            dbChannels
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Talk with the administrator'
        });
    }
}

const getChannelsByTerm = async(req, res = response) => {
    
    try{ 
        
        var dbChannels = await Channel.find();
        var Channels=[];
        // Read BD
        
        if(req.body.title!=null){

            console.log(req.body.title);

            const inputTerm = req.body.title;

            if(dbChannels.length > 0) {

                dbChannels.forEach( channel => {
                    if( channel.name.toLowerCase().includes(inputTerm.toLowerCase()) ) {
                        Channels.push(channel);
                    }
                } );
            }

        }

        return res.json({
            ok: true,
            Channels
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
    createChannel,
    getAllChannels,
    obtainChannel,
    getChannelsByTerm
}