const { response } = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const Post = require('../models/Post');
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

const setPostFavorite = async(req, res = response) => {
 
        const UserId = req.body.user;
        const UserFavPost = req.body.postFavorite;
        const UserUpdated=[];
        var UserFavFounded= await User.findOne({_id: Type.ObjectId(UserId)},{postFavorite: Type.ObjectId(UserFavPost)});
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

const setEventFavorite = async(req, res = response) => {
 
    const UserId = req.body.user;
    const UserFavEvent = req.body.eventFavorite;
    const UserUpdated=[];
    var UserFavFounded= await User.findOne({_id: Type.ObjectId(UserId)},{eventFavorite: Type.ObjectId(UserFavEvent)});
    if(UserFavFounded.length>0){
        UserUpdated = await User.findByIdAndUpdate({_id: Type.ObjectId(UserId)},{$pull:{eventFavorite: Type.ObjectId(UserFavEvent)}});
    }
    else{
        UserUpdated = await User.findByIdAndUpdate({_id: Type.ObjectId(UserId)},{$push:{eventFavorite: Type.ObjectId(UserFavEvent)}})
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
    setEventFavorite
}