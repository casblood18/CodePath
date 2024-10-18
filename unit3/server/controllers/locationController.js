import { pool } from '../config/database.js';

// Get all locations
export const getAllLocations = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM locations');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get a location by ID
export const getLocationById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM locations WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Location not found' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get events by location ID
export const getEventsByLocation = async (req, res) => {
    const { locationId } = req.params;
    try {
        const result = await pool.query('SELECT * FROM events WHERE location_id = $1', [locationId]);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get ALL events from Location' });
    }
};

export const getEventById = async (req, res) => {
    const { eventId } = req.params;
    try {
        const result = await pool.query('SELECT * FROM events WHERE id = $1', [eventId]);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get event by ID' });
    }
};