// Define the base URL for the API
const BASE_URL = 'http://localhost:5000/api'; 

// Function to get all locations
export const getAllLocations = async () => {
    console.log("GETTING ALL LOCATIONS")
    try {
        const response = await fetch(`${BASE_URL}/locations`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching locations:', error);
        throw error; 
    }
};

// Function to get a location by ID
export const getLocationById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/locations/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching location:', error);
        throw error; 
    }
};

// Function to get events by location ID
export const getEventsByLocation = async (locationId) => {
    try {
        const response = await fetch(`${BASE_URL}/events/location/${locationId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching events for location:', error);
        throw error; 
    }
};

export const getEventById = async (eventId) => {
    try {
        const response = await fetch(`${BASE_URL}/events/${eventId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error getting event by id:', error);
        throw error; 
    }
};