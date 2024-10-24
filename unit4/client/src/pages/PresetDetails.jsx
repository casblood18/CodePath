import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PresetDetails = ({ title }) => {
  const { id } = useParams();
  const [preset, setPreset] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPreset = async () => {
      const response = await fetch(`http://localhost:3000/api/presets/${id}`);
      const data = await response.json();
      setPreset(data);
    };
    fetchPreset();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/presets/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        navigate('/presets');
      } else {
        console.error('Error deleting preset');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <h2>{preset.preset_name}</h2>
      <p>Boots: {preset.boots_name} - ${preset.boots_price}</p>
      <p>Shirt: {preset.shirt_name} - ${preset.shirt_price}</p>
      <p>Pants: {preset.pants_name} - ${preset.pants_price}</p>
      <p>Hat: {preset.hat_name} - ${preset.hat_price}</p>
      <button onClick={handleDelete}>Delete Preset</button>
    </div>
  );
};

export default PresetDetails;