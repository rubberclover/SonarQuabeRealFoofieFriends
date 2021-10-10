const { Router } = require('express');
const { getAllEstablishments, getAllTags } = require('../controllers/establishment.controller');

const router = Router();

// Recover Establishments
router.get( '/getAllEstablishments', getAllEstablishments );
router.get( '/getAllTags', getAllTags );


module.exports = router;