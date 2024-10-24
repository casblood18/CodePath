import express from 'express';
import { getAllPresets, getPresetById, editPreset, deletePreset, createPreset } from './presetController.js';

const router = express.Router();

router.get('/presets', getAllPresets);
router.get('/presets/:id', getPresetById);
router.put('/presets/:id', editPreset);
router.delete('/presets/:id', deletePreset)
router.post('/presets', createPreset)

export default router;
