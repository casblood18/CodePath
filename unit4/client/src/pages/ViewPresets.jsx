import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewPresets = ({ title }) => {
  const [presets, setPresets] = useState([]);

  useEffect(() => {
    const fetchPresets = async () => {
      const response = await fetch('http://localhost:3000/api/presets');
      const data = await response.json();
      setPresets(data);
    };
    fetchPresets();
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {presets.map((preset) => (
          <li key={preset.id}>
            <Link to={`/presets/${preset.id}`}>{preset.preset_name}</Link>
            <Link to={`/edit/${preset.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewPresets;
