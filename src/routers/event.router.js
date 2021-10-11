const { Router } = require('express');
const { check } = require('express-validator');
const { createEvent,suscribeEvent,getAllEvents,obtainEvent, obtainUserEvent,unsuscribeEvent, getAllEventTags} = require('../controllers/event.controller');
const { validateFields } = require('../services/validate-params/validate-fields');

const router = Router();

// Create new event
router.post( '/new', [], createEvent );

router.put('/:id', suscribeEvent);

router.get('/getAllEvents', getAllEvents);

router.get('/getEvent/:id', obtainEvent);

router.get('/obtainUserEvent/:id', obtainUserEvent);

router.put('/unsuscribe/:id', unsuscribeEvent);

router.get('/getAllEventsTags', getAllEventTags);





module.exports = router;