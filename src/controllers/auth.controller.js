const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../services/helpers/auth.helper/jwt');



const createUser = async(req, res = response) => {

    const { email, name, password, username, userImage, description} = req.body;

    if(userImage=="" || userImage == undefined){
        req.body.userImage="https://res.cloudinary.com/rffsmedia/image/upload/v1635521972/UserImage/585e4beacb11b227491c3399_pmwbkw.png"}
    try {
        // Verify the email
        const user = await User.findOne({ email });

        if ( user ) {
            return res.status(400).json({
                ok: false,
                msg: 'A user with this email already exists'
            });
        }

        const nameuser = await User.findOne({ username });

        if ( nameuser ) {
            return res.status(400).json({
                ok: false,
                msg: 'A user with this username already exists'
            });
        }

        // Create user with model
        const dbUser = new User( req.body );

        // Hashear password
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync( password, salt );

        // Generate JWT
        const token = await generateJWT( dbUser.id, name );
        
        // Create DB user
        await dbUser.save();

        // Generate response
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            email,
            token
        });

     
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Please, talk with administrator'
        });
    }

}

const loginUser = async(req, res = response) => {

    const { email, password } = req.body;

    try {
        
        const dbUser = await User.findOne({ email });

        if(  !dbUser ) {
            return res.status(201).json({
                ok: false,
                msg: 'Email doesnt exist'
            });
        }

        // Confirm if the password is matched
        const validPassword = bcrypt.compareSync( password, dbUser.password );

        if ( !validPassword ) {
            return res.status(201).json({
                ok: false,
                msg: 'The password is invalid'
            });
        }

        // Generate JWT
        const token = await generateJWT( dbUser.id, dbUser.name );

        // Server response
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            token
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Talk with the administrator'
        });
    }

}

const revalidateToken = async(req, res = response ) => {

    const { uid } = req;

    // Read BD
    const dbUser = await User.findById(uid);

    // Generate JWT
    const token = await generateJWT( uid, dbUser.name );

    return res.json({
        ok: true,
        uid, 
        name: dbUser.name,
        email: dbUser.email,
        token
    });

}

const checkEmail = async(req, res = response) => {

    try{
    var EmailToFind= req.params.email;
    var Results= [];
    const dbUser = await User.find({email: EmailToFind});
    if(dbUser.length>0){
        Results = dbUser;
    }
    return res.json({
        User: Results
    });
} catch (error) {
    console.log(error);
    return res.status(500).json({
        ok: false,
        msg: 'Please, talk with administrator'
    });
}

}

const checkUserName = async(req, res = response) => {

    try{
    var UsernameToFind= req.params.username;
    var Results= [];
    const dbUser = await User.find({username: UsernameToFind});
    if(dbUser.length>0){
        Results = dbUser;
    }
    return res.json({
        User: Results
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
    createUser,
    loginUser,
    revalidateToken,
    checkEmail,
    checkUserName
}