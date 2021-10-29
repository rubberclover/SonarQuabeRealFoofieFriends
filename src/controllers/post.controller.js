const { response } = require('express');
const Post = require('../models/Post');
const TagPost = require('../models/TagPost');
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

const obtainChannelPostByTerm=async(req, res = response) => {
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

        if(req.body.title!=null){

            // console.log(req.body.title);

            const inputTerm = req.body.title;
            const postsFiltered = [];

            if(Posts.length > 0) {

                Posts.forEach( post => {
                    if( post.title.toLowerCase().includes(inputTerm.toLowerCase()) 
                        || post.content.toLowerCase().includes(inputTerm.toLowerCase()) ) {
                        postsFiltered.push(post);
                    }
                } );

                Posts = postsFiltered;
            }

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

// const obtainChannelPostByTerm=async(req, res = response) => {
// try{
//     if(req.params.id!=null){
//     var dbChannels = await Channel.findById({_id: req.params.id});
//     var PostFound;
//     var Posts=[];
//     const PostId = dbChannels.post;
//     let i=0;
//     while(i< PostId.length){
//     if(req.body.title!=null){
//     PostFound= await Post.find({_id: Type.ObjectId(PostId[i]).valueOf() , title: {$regex: req.body.title,$options:'i'}});
//     }
//     else{
//     PostFound= await Post.findById({_id: Type.ObjectId(PostId[i]).valueOf()});}
//     if(PostFound.length!=0){ Posts.push(PostFound);}
//     i++;
//     }
//   }
//     //res.send(Posts);  
//     return res.json({
//         Posts,
//         dbChannels
//     });
// }
// catch (error) {
//     console.log(error);

//     return res.status(500).json({
//         ok: false,
//         msg: 'Talk with the administrator'
//     });
// }
// }

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

const getAllPostTags = async (req, res = response) => {
    try {
        // Read BD
        const dbTagPost = await TagPost.find();

        return res.status(200).json({
            ok: true,
            dbTagPost
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
    obtainChannelPost,
    obtainChannelPostByTerm,
    getAllPostTags
}