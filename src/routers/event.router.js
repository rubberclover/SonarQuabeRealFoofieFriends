const { Router } = require('express');
const { check } = require('express-validator');
const { createEvent,suscribeEvent,getAllEvents,obtainEvent, obtainUserEvent,unsuscribeEvent, getAllEventTags} = require('../controllers/event.controller');
const { validateFields } = require('../services/validate-params/validate-fields');

const router = Router();

// Create new event
router.post('/new',
    [
        check('title', 'title is mandatory').not().isEmpty(),
        check('description', 'description is mandatory').not().isEmpty(),
        check('location', 'location is mandatory').not().isEmpty(),
        check('startDate', 'startDate is mandatory').not().isEmpty(),
        check('finishDate', 'finishDate is mandatory').not().isEmpty(),
        validateFields
    ],
    createEvent);

router.put('/:id', suscribeEvent);

router.get('/getAllEvents', getAllEvents);

router.get('/getEvent/:id', obtainEvent);

router.get('/obtainUserEvent/:id', obtainUserEvent);

router.put('/unsuscribe/:id', unsuscribeEvent);

router.get('/getAllEventsTags', getAllEventTags);





module.exports = router;