const { response } = require('express');
const Chat = require('../models/Chat');
const User = require('../models/User');
const mongoose = require('mongoose');
const Type = mongoose.Types;
const today= new Date();

const sendMessage = async(req, res = response) => {

    const { receiver, sender, text, id } = req.body;

    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var todayDate = date+' '+time;
    
    // Create establishment with model
    var newChat= new Chat({
          user1: Type.ObjectId(sender),
          user2: Type.ObjectId(receiver),
          messages:[{
          sender: Type.ObjectId(sender),
          receiver: Type.ObjectId(receiver),
          text: text,
          sendAt: todayDate,
          viewed:false
          }]
    })
    if(id==""){
    try{
    
        // Create DB establishment
        await newChat.save();

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
  else{
      console.log("gay")
    try{
        await Chat.findByIdAndUpdate({_id: Type.ObjectId(id)},{$push: {messages: newChat.messages[0]}})
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

        const sortByDate = arr => {
            const sorter = (a, b) => {
               return new Date(b.sendAt).getTime() - new Date(a.sendAt).getTime();
            }
            arr.sort(sorter);
         };
        
        ChatsReturn.forEach( chatE => {
            sortByDate(chatE.messages);
        } );

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

    for(let i=0; i< dbChat.messages.length;i++){
        //var Prueba= await Chat.find({messages:{ $elemMatch:{_id: dbChat.messages[i]._id}}});
        await Chat.updateOne(
            {
              _id: req.params.id,
              messages: {  $elemMatch:{_id: dbChat.messages[i]._id} }
            },
            { $set: { "messages.$.viewed" : true } });
    }

    var ChatReturned = await Chat.findById({_id: req.params.id},{messages:1});

    return res.json({
        ChatReturned
    });

};

const viewAMessage = async(req, res = response) => {

        await Chat.updateOne(
            {
              _id: req.body.id,
              messages: {  $elemMatch:{_id: req.body.idMessage} }
            },
            { $set: { "messages.$.viewed" : true } });
    

    return res.json({
        ok: true
    });

};

const obtainChat = async(req, res = response) => {

    const dbChat= await Chat.findById({_id: req.params.id});


    return res.json({
        ok: true,
        dbChat
    });

};

module.exports = {
    getAllUserChats,
    obtainChat,
    sendMessage,
    viewMessages,
    viewAMessage
}