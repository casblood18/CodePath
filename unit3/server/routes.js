import express from 'express';
import { getAllLocations, getLocationById, getEventsByLocation, getEventById } from './controllers/locationController.js';

const router = express.Router();

router.get('/locations', getAllLocations);
router.get('/locations/:id', getLocationById);
router.get('/events/location/:locationId', getEventsByLocation);
router.get('/events/:id', getEventById);

export default router;
