const { response } = require('express');
const Post = require('../models/Post');
const mongoose = require('mongoose');
const Type = mongoose.Types;
const today= new Date();

const createPost = async(req, res = response) => {

    var dd = String(today.getDate()+ 1).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    const todayDate = mm + '/' + dd + '/' + yyyy;

    const { title, content, creationDate, tagPost, image, user } = req.body;
    
    // Create post with model
    const newPost= new Post({
          _id: Type.ObjectId(),
          title: title,
          content: content,
          creationDate: todayDate,
          tagPost: tagPost,
          image: image,
          user: user
    })

    try{
        
        // Create DB post
        await newPost.save();

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

module.exports = {
    createPost
}