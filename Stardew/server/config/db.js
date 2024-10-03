require('dotenv').config({ path: '../../.env' });

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false // Required for secure connections
  },
});

const testConnection = async () => {
    try {
      const res = await pool.query('SELECT NOW()');
      console.log('Connection successful:', res.rows[0]);
    } catch (err) {
      console.error('Error connecting to the database:', err);
    }
  };
  
  testConnection();

module.exports = {
    query: (text, params) => pool.query(text, params),
};