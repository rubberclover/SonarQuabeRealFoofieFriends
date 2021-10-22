const { response } = require('express');
const Post = require('../models/Post');
const Channel = require('../models/Channel');
const mongoose = require('mongoose');
const User = require('../models/User');
const Type = mongoose.Types;
const today= new Date();

const createPost = async(req, res = response) => {

    var dd = String(today.getDate()+ 1).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    const todayDate = mm + '/' + dd + '/' + yyyy;

    const { title, content, tagPost, image, user, channel } = req.body;
    let idPost=Type.ObjectId();
    
    // Create post with model
    const newPost= new Post({
          _id: idPost,
          title: title,
          content: content,
          creationDate: todayDate,
          tagPost: Type.ObjectId(tagPost),
          image: image,
          user: user
    })

    try{
        await newPost.save();
        await Channel.findOneAndUpdate({_id: Type.ObjectId(channel)}, {$push: {post: idPost}});
        await User.findOneAndUpdate({_id: Type.ObjectId(user)},{$push: {post: idPost}});
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

const obtainPost = async(req, res = response) => {

    Post.findById({_id: req.params.id}).then(function(post){
        res.send(post);
    });

};

const obtainChannelPost=async(req, res = response) => {
try{
    var dbChannels = await Channel.findById({_id: req.params.id});
    var Posts=[];
    const PostId = dbChannels.post;
    let i=0;
    while(i< PostId.length){
    var PostFound= await Post.findById({_id: Type.ObjectId(PostId[i]).valueOf()});
    Posts.push(PostFound);
    i++;
    }
    //res.send(Posts);  
    return res.json({
        Posts,
        dbChannels
    });
}
catch (error) {
    console.log(error);

    return res.status(500).json({
        ok: false,
        msg: 'Talk with the administrator'
    });
}
}

const getAllPosts = async(req, res = response) => {
    
    try{
        if(req.body.tagPost!=null){
        var dbPosts = await Post.find({
            tagPost: { $in: [req.body.tagPost]}});
        return res.json({
            dbPosts
        });
    }   
        var dbPosts = await Post.find();
    
        return res.json({
            ok: true,
            dbPosts
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
    createPost,
    obtainPost,
    getAllPosts,
    obtainChannelPost
}