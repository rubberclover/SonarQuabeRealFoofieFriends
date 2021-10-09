const { response } = require('express');
const Establishment = require('../models/Establishment');

const getAllEstablishments = async(req, res = response ) => {


    try{
        // Read BD
        const dbEstablishment = await Establishment.find();
    
        // Generate JWT
    
        return res.json({
            ok: true,
            dbEstablishment
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Talk with the administrator'
        });
    }

}

const createEstablishment = async(req, res = response) => {

    const { name } = req.body;

    try {
        // Verify the name
        const establishment = await Establishment.findOne({ name });

        if ( establishment ) {
            return res.status(400).json({
                ok: false,
                msg: 'A establishment with this name already exists'
            });
        }

        // Create establishment with model
        const dbEstablishment = new Establishment( req.body );
        
        // Create DB user
        await dbEstablishment.save();

        // Generate response
        return res.status(201).json({
            ok: true,
            id: dbEstablishment.id,
            location: dbEstablishment.location,
            name: dbEstablishment.name,
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
    getAllEstablishments,
    createEstablishment
}