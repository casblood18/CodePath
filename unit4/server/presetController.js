import { pool } from './config/database.js';

// Get all presets
export const getAllPresets = async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM presets');
      res.json(result.rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Get preset by ID
  export const getPresetById = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query('SELECT * FROM presets WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Preset not found' });
      }
      res.json(result.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Create a new preset
  export const createPreset = async (req, res) => {
    const { preset_name, boots_name, boots_price, shirt_name, shirt_price, pants_name, pants_price, hat_name, hat_price } = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO presets (preset_name, boots_name, boots_price, shirt_name, shirt_price, pants_name, pants_price, hat_name, hat_price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
        [preset_name, boots_name, boots_price, shirt_name, shirt_price, pants_name, pants_price, hat_name, hat_price]
      );
      res.status(200).json(result.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send(' Creating issue Server error');
    }
  };
  
  // Edit a preset
  export const editPreset = async (req, res) => {
    const { id } = req.params;
    const { preset_name, boots_name, boots_price, shirt_name, shirt_price, pants_name, pants_price, hat_name, hat_price } = req.body;
    try {
      const result = await pool.query(
        'UPDATE presets SET preset_name = $1, boots_name = $2, boots_price = $3, shirt_name = $4, shirt_price = $5, pants_name = $6, pants_price = $7, hat_name = $8, hat_price = $9 WHERE id = $10 RETURNING *',
        [preset_name, boots_name, boots_price, shirt_name, shirt_price, pants_name, pants_price, hat_name, hat_price, id]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Preset not found' });
      }
      res.json(result.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Delete a preset
  export const deletePreset = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query('DELETE FROM presets WHERE id = $1 RETURNING *', [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Preset not found' });
      }
      res.json({ message: 'Preset deleted' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };