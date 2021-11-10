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
        var dbUser = await User.findById({_id:Type.ObjectId(UserId)});
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

const obtainUserEventsSubscribedById = async(req, res = response) => {
    const UserId= req.params.id;
    try{
    var dbUser = await User.findById({_id: Type.ObjectId(UserId)});
    var EventsFound=[];
    
    for(let i=0; i< dbUser.eventSuscriber.length;i++){
        EventsFound.push( await Event.findById({_id: Type.ObjectId(dbUser.eventSuscriber[i])})); 
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

const obtainUserPostsById = async(req, res = response) => {
    const UserId= req.params.id;
    try{
    var dbUser = await User.findById({_id: Type.ObjectId(UserId)});
    var PostsFound=[];
    
    for(let i=0; i< dbUser.post.length;i++){
        PostsFound.push( await Post.findById({_id: Type.ObjectId(dbUser.post[i])})); 
    }
        return res.json({
            PostsFound
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
        var newValue= false;
        var UserFavFounded= await User.find({$and:[{_id: Type.ObjectId(UserId)},{postFavorite: Type.ObjectId(UserFavPost)}]});
        if(UserFavFounded.length>0){
            UserUpdated = await User.findByIdAndUpdate({_id: Type.ObjectId(UserId)},{$pull:{postFavorite: Type.ObjectId(UserFavPost)}});
        }
        else{
            UserUpdated = await User.findByIdAndUpdate({_id: Type.ObjectId(UserId)},{$push:{postFavorite: Type.ObjectId(UserFavPost)}});
            newValue = true;
        }

        return res.json({
            newValue
        });
}

const setEstablishmentFavorite = async(req, res = response) => {
 
    const UserId = req.body.user;
    const UserFavEvent = req.body.establishmentFavorite;
    var UserUpdated=[];
    var newValue= false;
    var UserFavFounded=await User.find({$and:[{_id: Type.ObjectId(UserId)},{establishmentFavorite: Type.ObjectId(UserFavEvent)}]});
    if(UserFavFounded.length>0){
        UserUpdated = await User.findByIdAndUpdate({_id: Type.ObjectId(UserId)},{$pull:{establishmentFavorite: Type.ObjectId(UserFavEvent)}});
    }
    else{
        UserUpdated = await User.findByIdAndUpdate({_id: Type.ObjectId(UserId)},{$push:{establishmentFavorite: Type.ObjectId(UserFavEvent)}});
        newValue = true;
    }

    return res.json({
       newValue
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

const getUserByTerm = async(req, res = response) => {
    try{ 
        
        var dbUsers = await User.find({},{_id:1,name:1,userImage:1});
        var UsersToReturn=[];
        // Read BD
        
        if(req.params.term!=null){

            const inputTerm = req.params.term;

            if(dbUsers.length > 0) {

                dbUsers.forEach( user => {
                    if( user.name.toLowerCase().includes(inputTerm.toLowerCase()) ) {
                        UsersToReturn.push(user);
                    }
                } );
            }

        }

        return res.json({
            ok: true,
            UsersToReturn
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Talk with the administrator'
        });
    }
}

const getAllUserFavPost = async(req, res = response) => {
    
    const UserId= req.params.id;
    try{
    var dbUser = await User.findById({_id: Type.ObjectId(UserId)});
    var PostsFound=[];
    
    for(let i=0; i< dbUser.postFavorite.length;i++){
        PostsFound.push( await Post.findById({_id: Type.ObjectId(dbUser.postFavorite[i])})); 
    }
        return res.json({
            ok: true,
            PostsFound
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Talk with the administrator'
        });
    }
}

const getAllUserFavEstablishment = async(req, res = response) => {
    
    const UserId= req.params.id;
    try{
    var dbUser = await User.findById({_id: Type.ObjectId(UserId)});
    var EstablishmentFound=[];
    
    for(let i=0; i< dbUser.establishmentFavorite.length;i++){
        EstablishmentFound.push( await Establishment.findById({_id: Type.ObjectId(dbUser.establishmentFavorite[i])})); 
    }
        return res.json({
            ok: true,
            EstablishmentFound
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Talk with the administrator'
        });
    }
}

const userHasThisPostFav = async(req, res = response) => {
    
    const UserId= req.body.UserId;
    const PostId= req.body.PostId;
    try{
    var dbUser = await User.find({_id: Type.ObjectId(UserId), postFavorite: Type.ObjectId(PostId)});
    var Founded=false;
    if(dbUser.length>0){
    Founded=true;
    }
        return res.json({
            Founded
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Talk with the administrator'
        });
    }
}

const userHasThisEstablishmentFav = async(req, res = response) => {
    
    const UserId= req.body.UserId;
    const PostId= req.body.EstablishmentId;
    try{
    var dbUser = await User.find({_id: Type.ObjectId(UserId), establishmentFavorite: Type.ObjectId(PostId)});
    var Founded=false;
    if(dbUser.length>0){
    Founded=true;
    }
        return res.json({
            Founded
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Talk with the administrator'
        });
    }
}

const followUser = async(req, res = response) => {
 
    const UserId = req.body.userId;
    const UserToFollow = req.body.userToFollow;
    var UserUpdated=[];
    var newValue= false;
    var UserFollowFounded= await User.find({$and:[{_id: Type.ObjectId(UserId)},{following: Type.ObjectId(UserToFollow)}]});
    if(UserFollowFounded.length>0){
        UserUpdated = await User.findByIdAndUpdate({_id: Type.ObjectId(UserId)},{$pull:{following: Type.ObjectId(UserToFollow)}});
    }
    else{
        UserUpdated = await User.findByIdAndUpdate({_id: Type.ObjectId(UserId)},{$push:{following: Type.ObjectId(UserToFollow)}});
        newValue = true;
    }

    return res.json({
        newValue
    });
}

const isFollowingUser = async(req, res = response) => {
 
    const UserId = req.body.userId;
    const UserToFollow = req.body.userToFollow;
    var newValue= false;
    var UserFollowFounded= await User.find({$and:[{_id: Type.ObjectId(UserId)},{following: Type.ObjectId(UserToFollow)}]});
    if(UserFollowFounded.length>0){
        newValue = true;
    }

    return res.json({
        newValue
    });
}

module.exports = {
    obtainUser,
    getAllUsers,
    setPostFavorite,
    setEstablishmentFavorite,
    obtainUserById,
    obtainUserEventsById,
    obtainUserEventsSubscribedById,
    getAllUserFavEstablishment,
    obtainUserPostsById,
    getAllUserFavPost,
    getUserByTerm,
    userHasThisPostFav,
    userHasThisEstablishmentFav,
    followUser,
    isFollowingUser
}