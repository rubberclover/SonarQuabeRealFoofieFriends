const { Router } = require('express');
const { check } = require('express-validator');
const { createEvent,suscribeEvent,getAllEvents,obtainEvent, obtainUserEvent,unsuscribeEvent} = require('../controllers/event.controller');
const { validateFields } = require('../services/validate-params/validate-fields');

const router = Router();

// Create new event
router.post( '/new', [
    check('title', 'title is mandatory').not().isEmpty(),
    check('description', 'description is mandatory').not().isEmpty(),
    check('location', 'location is mandatory').not().isEmpty(),
    check('startHour', 'startHour is mandatory').not().isEmpty(),
    check('finishHour', 'finishHour is mandatory').not().isEmpty(),
    check('date', 'date is mandatory').not().isEmpty(),
    validateFields
], createEvent );

router.put('/:id', suscribeEvent);

router.get('/getAllEvents', getAllEvents);

router.get('/:id', obtainEvent);

router.get('/obtainUserEvent/:id', obtainUserEvent);

router.put('/unsuscribe/:id', unsuscribeEvent);





module.exports = router;