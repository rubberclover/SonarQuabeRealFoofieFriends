const { Router } = require('express');
const { check } = require('express-validator');
const { createEstablishment,getAllEstablishments,obtainEstablishment,obtainOwnerEstablishment,getAllTags } = require('../controllers/establishment.controller');
const { validateFields } = require('../services/validate-params/validate-fields');
const router = Router();

router.post( '/new', [
    check('location', 'location is mandatory').not().isEmpty(),
    check('name', 'name is mandatory').not().isEmpty(),
    check('timeClose', 'timeClose is mandatory').not().isEmpty(),
    check('timeOpen', 'timeOpen is mandatory').not().isEmpty(),
    validateFields
], createEstablishment );


router.get('/getAllEstablishments', getAllEstablishments);

router.get('/getEstablishment/:id', obtainEstablishment);

router.get('/obtainOwnerEstablishment/:id', obtainOwnerEstablishment);

router.get('/getAllTags', getAllTags);


module.exports = router;