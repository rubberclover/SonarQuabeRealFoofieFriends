const { response } = require('express');
const Chat = require('../models/Chat');
const User = require('../models/User');
const mongoose = require('mongoose');
const Type = mongoose.Types;
const today= new Date();

const sendMessage = async(req, res = response) => {

    const { receiver, sender, text, id, viewedUser } = req.body;

    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var todayDate = date+' '+time;
    //console.log(todayDate)

    if(viewedUser == "viewedUser1"){
        // Create Cat
        var newChat= new Chat({
            user1: Type.ObjectId(sender),
            user2: Type.ObjectId(receiver),
            messages:[{
                sender: Type.ObjectId(sender),
                receiver: Type.ObjectId(receiver),
                text: text,
                sendAt: todayDate,
                viewedUser1:true,
                viewedUser2:false
            }]
        })
    }
    else{
        // Create Cat
        var newChat= new Chat({
            user1: Type.ObjectId(sender),
            user2: Type.ObjectId(receiver),
            messages:[{
                sender: Type.ObjectId(sender),
                receiver: Type.ObjectId(receiver),
                text: text,
                sendAt: todayDate,
                viewedUser2:true,
                viewedUser1:false
            }]
        })
    }
    
    if(id=="new"){
        try{
            await newChat.save();
            //console.log(sender)
            //console.log(receiver);
            await User.findByIdAndUpdate({_id: Type.ObjectId(sender)},{$push: {chat: Type.ObjectId(newChat._id)}});
            await User.findByIdAndUpdate({_id: Type.ObjectId(receiver)},{$push: {chat: Type.ObjectId(newChat._id)}});
            //await Chat.findByIdAndUpdate({_id: Type.ObjectId(newChat._id)},{$push: {messages: newChat.messages[0]}});
    
            // Generate response
            return res.status(201).json({
                ok: true,
                message: newChat._id
            });
    
            
        } catch (error) {
            console.log(error);
    
            return res.status(500).json({
                ok: false,
                msg: 'Please, talk with administrator'
            });
        }
    }
    else{
        //El chat ya existe
        try{
            await Chat.findByIdAndUpdate({_id: Type.ObjectId(id)},{$push: {messages: newChat.messages[0]}})
                return res.status(201).json({
                ok: true,
                message: newChat.messages[0]
            });
        } catch (error) {
            console.log(error);

            return res.status(500).json({
                ok: false,
                msg: 'Please, talk with administrator'
            });
        }   
    }
}

const getAllUserChats = async(req, res = response) => {
    const UserId= req.params.id;
    try{  
        var dbUser = await User.findById({_id: Type.ObjectId(UserId)});

        var ChatsEncontrados;

        var ChatsReturn= [];

        ChatsEncontrados = dbUser.chat;
    
        llamadasEsperar = [];
        for(let i=0; i< ChatsEncontrados.length;i++){
            llamadasEsperar.push(Chat.findById({_id: ChatsEncontrados[i]})); 
        }
        for(let i=0; i< llamadasEsperar.length;i++){
            var ChatFound = await llamadasEsperar[i];
            ChatsReturn.push(ChatFound);
        }

        /*const sortByDate = arr => {
            const sorter = (a, b) => {
               return new Date(b.sendAt).getTime() - new Date(a.sendAt).getTime();
            }
            arr.sort(sorter);
         };
        
        ChatsReturn.forEach( chatE => {
            sortByDate(chatE.messages);
        } );*/

        return res.json({
            ok: true,
            ChatsReturn
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Talk with the administrator'
        });
    }
}

const viewMessages = async(req, res = response) => {

    const dbChat= await Chat.findById({_id: req.params.id});

    if(req.body.viewedUser == "viewedUser1"){
        for(let i=0; i< dbChat.messages.length;i++){
            //var Prueba= await Chat.find({messages:{ $elemMatch:{_id: dbChat.messages[i]._id}}});
            await Chat.updateOne(
                {
                  _id: req.params.id,
                  messages: {  $elemMatch:{_id: dbChat.messages[i]._id} }
                },
                { $set: { "messages.$.viewedUser1" : true } });
        }
    }
    else{
        for(let i=0; i< dbChat.messages.length;i++){
            //var Prueba= await Chat.find({messages:{ $elemMatch:{_id: dbChat.messages[i]._id}}});
            await Chat.updateOne(
                {
                  _id: req.params.id,
                  messages: {  $elemMatch:{_id: dbChat.messages[i]._id} }
                },
                { $set: { "messages.$.viewedUser2" : true } });
        }
    }

    var ChatReturned = await Chat.findById({_id: req.params.id});

    return res.json({
        ok: true,
        ChatReturned
    });

};

const viewAMessage = async(req, res = response) => {

    if(req.body.viewedUser == "viewedUser1"){
        await Chat.updateOne(
            {
              _id: req.body.id,
              messages: {  $elemMatch:{_id: req.body.idMessage} }
            },
            { $set: { "messages.$.viewedUser1" : true } });
    }
    else{
        await Chat.updateOne(
            {
              _id: req.body.id,
              messages: {  $elemMatch:{_id: req.body.idMessage} }
            },
            { $set: { "messages.$.viewedUser2" : true } });
    }

    return res.json({
        ok: true
    });

};

const obtainChat = async(req, res = response) => {
    let ChatReturned = null;
        ChatReturned = await Chat.findById({_id: req.params.id});
        if(ChatReturned != null)
            return res.json({
                ok: true,
                ChatReturned
            });

        return res.json({
            ok: false,
            ChatReturned: 'new'
        });
};

const obtainChatOtherUser = async(req, res = response) => {

    const dbUser= await User.findById(req.params.id);

    const dbChats= await Chat.find({_id: dbUser.chat});

    var Usuarios;

    var Mensajes;

    var ObjectReturn =[];

    for(let i=0;i<dbChats.length;i++){
        let Usuario = '';
        let idUser1 = "" + dbChats[i].user1;
        let idUser = "" + dbUser._id;
        if(idUser1 == idUser){
            Usuario = await User.findById(dbChats[i].user2);
            Usuarios=Usuario._id;}
        else{
            Usuario = await User.findById(dbChats[i].user1);
            Usuarios= Usuario._id;
        }
        //Mensajes=dbChats[i].messages[dbChats[i].messages.length-1];
        var UserAndMessage= {idUser:Usuarios, idChat:dbChats[i]._id};
        ObjectReturn.push(UserAndMessage);
        
    }
   
    return res.json({
        ok: true,
        ObjectReturn
    });

};

module.exports = {
    getAllUserChats,
    obtainChat,
    sendMessage,
    viewMessages,
    viewAMessage,
    obtainChatOtherUser
}