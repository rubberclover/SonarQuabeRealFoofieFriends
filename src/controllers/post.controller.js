const { response } = require('express');
const Post = require('../models/Post');
const TagPost = require('../models/TagPost');
const Channel = require('../models/Channel');
const mongoose = require('mongoose');
const User = require('../models/User');
const { post } = require('../routers/auth.router');
const Type = mongoose.Types;
const today= new Date();

const createPost = async(req, res = response) => {

    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var todayDate = date+' '+time;

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
          user: user,
          likes: [],
          comments:[]
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
    try{

    var PostsReturn = await Post.findById({_id: req.params.id});

    var UsuariosEncontrados= [];

    UsuariosEncontrados.push(PostsReturn.user);

    llamadasEsperar = [];
    for(let i=0; i< UsuariosEncontrados.length;i++){
        llamadasEsperar.push(User.findById({_id: UsuariosEncontrados[i]})); 
    }
    for(let i=0; i< llamadasEsperar.length;i++){
        var UserFound = await llamadasEsperar[i];
        PostsReturn.user= UserFound;
    }
    
        return res.json({
            ok: true,
            PostsReturn
        });
    }catch (error) {
        console.log(error);
    
        return res.status(500).json({
            ok: false,
            msg: 'Talk with the administrator'
        });
        }
    /*Post.findById({_id: req.params.id}).then(function(post){
        res.send(post);
    });*/

}

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

        var PostsReturn= Posts;

        var UsuariosEncontrados= [];

        if(Posts != null){
            Posts.forEach( post => {
                UsuariosEncontrados.push(post.user);
            }); 
        }
        
    llamadasEsperar = [];
    for(let i=0; i< UsuariosEncontrados.length;i++){
        llamadasEsperar.push(User.findById({_id: UsuariosEncontrados[i]})); 
    }
    for(let i=0; i< llamadasEsperar.length;i++){
        var UserFound = await llamadasEsperar[i];
        PostsReturn[i].user= UserFound;
    }

        //res.send(Posts);  
        return res.json({
            //Posts,
            PostsReturn,
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

        var PostsReturn= Posts;

        var UsuariosEncontrados= [];

        Posts.forEach( post => {
        UsuariosEncontrados.push(post.user);
    } ); 

    llamadasEsperar = [];
    for(let i=0; i< UsuariosEncontrados.length;i++){
        llamadasEsperar.push(User.findById({_id: UsuariosEncontrados[i]})); 
    }
    for(let i=0; i< llamadasEsperar.length;i++){
        var UserFound = await llamadasEsperar[i];
        PostsReturn[i].user= UserFound;
    }

        //res.send(Posts);  
        return res.json({
            //Posts,
            PostsReturn,
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
    }
    else{
        var dbPosts = await Post.find();
    }   

    var PostsReturn= dbPosts;

    var UsuariosEncontrados= [];

    dbPosts.forEach( post => {
        UsuariosEncontrados.push(post.user);
    } ); 

    llamadasEsperar = [];
    for(let i=0; i< UsuariosEncontrados.length;i++){
        llamadasEsperar.push(User.findById({_id: UsuariosEncontrados[i]})); 
    }
    for(let i=0; i< llamadasEsperar.length;i++){
        var UserFound = await llamadasEsperar[i];
        PostsReturn[i].user= UserFound;
    }
    
        return res.json({
            ok: true,
            PostsReturn
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Talk with the administrator'
        });
    }
}

const getBestPosts = async(req, res = response) => {
    
    try{
    var dbPosts = await Post.find().sort({creationDate:-1}).limit(12);

    var PostsReturn= dbPosts;

    PostsReturn.sort((a, b) => parseFloat(b.likes.length) - parseFloat(a.likes.length));

    var UsuariosEncontrados= [];

    PostsReturn.forEach( post => {
        UsuariosEncontrados.push(post.user);
    } ); 

    llamadasEsperar = [];
    for(let i=0; i< UsuariosEncontrados.length;i++){
        llamadasEsperar.push(User.findById({_id: UsuariosEncontrados[i]})); 
    }
    for(let i=0; i< llamadasEsperar.length;i++){
        var UserFound = await llamadasEsperar[i];
        PostsReturn[i].user= UserFound;
    }
    
        return res.json({
            ok: true,
            PostsReturn
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

const likePost = async (req, res = response) => {
    const UserId = req.body.User;
    const PostToLike = req.body.Post;
    var PostUpdated=[];
    var newValue= false;
    var PostFounded=await Post.find({$and:[{_id: Type.ObjectId(PostToLike)},{likes: Type.ObjectId(UserId)}]});
    if(PostFounded.length>0){
        PostUpdated = await Post.findByIdAndUpdate({_id: Type.ObjectId(PostToLike)},{$pull:{likes: Type.ObjectId(UserId)}});
    }
    else{
        PostUpdated = await Post.findByIdAndUpdate({_id: Type.ObjectId(PostToLike)},{$push:{likes: Type.ObjectId(UserId)}});
        newValue = true;
    }

    return res.json({
       newValue
    });
}

const getLikesPost = async (req, res = response) => {
    const PostToLike = req.params.id;
    var PostFounded=await Post.find({_id: Type.ObjectId(PostToLike)},{likes:1});
    var LikesTotal= PostFounded[0].likes.length;

    return res.json({
       ok:true,
       Likes: LikesTotal
    });
}

const createComment = async (req, res = response) =>{

    let idComment=Type.ObjectId();
    const ahora= new Date();
    var date = ahora.getFullYear()+'-'+(ahora.getMonth()+1)+'-'+ahora.getDate();
    var time = ahora.getHours() + ":" + ahora.getMinutes() + ":" + ahora.getSeconds();
    var todayDate = date+' '+time;

    const { idPost,idUser, text} = req.body;

    const newPost= new Post({
        _id: idPost,
        title: "",
        content: "",
        creationDate: "",
        image: "",
        likes: [],
        comments:[{
            _id: idComment,
            idUser: idUser,
            comment: text,
            creationDate: todayDate
        }
        ]
  })

  try{
    await Post.findByIdAndUpdate({_id: Type.ObjectId(idPost)},{$push: {comments: newPost.comments[0]}})
        return res.status(201).json({
        ok: true,
        comment: newPost.comments[0]
    });
} catch (error) {
    console.log(error);

    return res.status(500).json({
        ok: false,
        msg: 'Please, talk with administrator'
    });
}
}

const getLastPosts = async(req, res = response) => {
    
    try{
    var dbPosts = await Post.find().sort({_id:-1}).limit(5);

    var PostsReturn= dbPosts;

    var UsuariosEncontrados= [];

    dbPosts.forEach( post => {
        UsuariosEncontrados.push(post.user);
    } ); 

    llamadasEsperar = [];
    for(let i=0; i< UsuariosEncontrados.length;i++){
        llamadasEsperar.push(User.findById({_id: UsuariosEncontrados[i]})); 
    }
    for(let i=0; i< llamadasEsperar.length;i++){
        var UserFound = await llamadasEsperar[i];
        PostsReturn[i].user= UserFound;
    }
    
        return res.json({
            ok: true,
            PostsReturn
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Talk with the administrator'
        });
    }
}

const getPostComments = async(req, res = response) => {
    
    try{  
        var postId= req.params.id;
        var dbPosts = await Post.findById({_id:Type.ObjectId(postId)},{comments:1});
        var Comentarios=dbPosts.comments;
        var Resultado= [];
        for(let i=0;i<Comentarios.length;i++){
        var dbUsers = await User.findById({_id: Type.ObjectId(Comentarios[i].idUser)},{username:1,userImage:1});
        Resultado.push({"_id": Comentarios[i]._id, "comment": Comentarios[i].comment, "creationDate": Comentarios[i].creationDate,"idUser": Comentarios[i].idUser,"username":dbUsers.username,"userImage":dbUsers.userImage});
        }
        return res.json({
            ok: true,
            Comments: Resultado
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
    getAllPostTags,
    likePost,
    getLikesPost,
    createComment,
    getLastPosts,
    getPostComments,
    getBestPosts
}