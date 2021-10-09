const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../services/validate-params/auth.validate/validate-fields');
const { getAllEstablishments, createEstablishment } = require('../controllers/establishment.controller');

const router = Router();

// Recover Establishments
router.get( '/getAllEstablishments', getAllEstablishments );

// Create new Establishment
router.post( '/new', [
    check('location', 'location is mandatory').not().isEmpty(),
    check('name', 'name is mandatory').not().isEmpty(),
    check('type', 'type is mandatory').not().isEmpty(),
    check('timeClose', 'timeClose is mandatory').not().isEmpty(),
    check('timeOpen', 'timeOpen is mandatory').not().isEmpty(),
    check('geoposition', 'geoposition is mandatory').not().isEmpty(),
    check('owner', 'owner is mandatory').not().isEmpty(),
    validateFields
], createEstablishment );


module.exports = router;