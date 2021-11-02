const { response } = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const Post = require('../models/Post');
const Establishment = require('../models/Establishment');
const Event = require('../models/Event');
const Type = mongoose.Types;

const obtainUser = async(req, res = response) => {

    try{
    var dbUser = await User.find();
    if(req.body.name!=null){

        const inputTerm = req.body.name;
        const usersFiltered = [];


            dbUser.forEach( user => {
                if( user.name.toLowerCase().includes(inputTerm.toLowerCase()) 
                    || user.email.toLowerCase().includes(inputTerm.toLowerCase()) ) {
                    usersFiltered.push(user);
                }
            } );

             
       dbUser = usersFiltered;
    }

    return res.json({
        dbUser
    });
    }
    catch (error) {
        console.log(error);
    
        return res.status(500).json({
            ok: false,
            msg: 'Talk with the administrator'
        });
    }

};

const obtainUserById = async(req, res = response) => {
    const UserId= req.params.id;
    try{
        var dbUser = await User.find({id:Type.ObjectId(UserId)});
        return res.json({
            dbUser
        });
        }
        catch (error) {
            console.log(error);
        
            return res.status(500).json({
                ok: false,
                msg: 'Talk with the administrator'
            });
        }    
};

const obtainUserEventsById = async(req, res = response) => {
    const UserId= req.params.id;
    try{
    var dbUser = await User.findById({_id: Type.ObjectId(UserId)});
    var EventsFound=[];
    
    for(let i=0; i< dbUser.eventPublished.length;i++){
        EventsFound.push( await Event.findById({_id: Type.ObjectId(dbUser.eventPublished[i])})); 
    }
        return res.json({
            EventsFound
        });
        }
        catch (error) {
            console.log(error);
        
            return res.status(500).json({
                ok: false,
                msg: 'Talk with the administrator'
            });
        }    
};

const setPostFavorite = async(req, res = response) => {
 
        const UserId = req.body.user;
        const UserFavPost = req.body.postFavorite;
        var UserUpdated=[];
        var UserFavFounded= await User.find({$and:[{_id: Type.ObjectId(UserId)},{postFavorite: Type.ObjectId(UserFavPost)}]});
        if(UserFavFounded.length>0){
            UserUpdated = await User.findByIdAndUpdate({_id: Type.ObjectId(UserId)},{$pull:{postFavorite: Type.ObjectId(UserFavPost)}});
        }
        else{
            UserUpdated = await User.findByIdAndUpdate({_id: Type.ObjectId(UserId)},{$push:{postFavorite: Type.ObjectId(UserFavPost)}})
        }

        return res.json({
           UserUpdated
        });
}

const setEstablishmentFavorite = async(req, res = response) => {
 
    const UserId = req.body.user;
    const UserFavEvent = req.body.establishmentFavorite;
    var UserUpdated=[];
    var UserFavFounded=await User.find({$and:[{_id: Type.ObjectId(UserId)},{establishmentFavorite: Type.ObjectId(UserFavEvent)}]});
    if(UserFavFounded.length>0){
        UserUpdated = await User.findByIdAndUpdate({_id: Type.ObjectId(UserId)},{$pull:{establishmentFavorite: Type.ObjectId(UserFavEvent)}});
    }
    else{
        UserUpdated = await User.findByIdAndUpdate({_id: Type.ObjectId(UserId)},{$push:{establishmentFavorite: Type.ObjectId(UserFavEvent)}})
    }

    return res.json({
       UserUpdated
    });
}

const getAllUsers = async(req, res = response) => {
    
    try{  
        var dbUsers = await User.find();
    
        return res.json({
            ok: true,
            dbUsers
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
    obtainUser,
    getAllUsers,
    setPostFavorite,
    setEstablishmentFavorite,
    obtainUserById,
    obtainUserEventsById
}