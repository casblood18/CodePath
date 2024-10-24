import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const items = {
  boots: [
    { name: 'Leather Boots', price: 100 },
    { name: 'Cowboy Boots', price: 150 },
    { name: 'Combat Boots', price: 200 }
  ],
  shirts: [
    { name: 'Plaid Shirt', price: 50 },
    { name: 'Blue Vest', price: 75 },
    { name: 'Farmer Jacket', price: 120 }
  ],
  pants: [
    { name: 'Denim Pants', price: 60 },
    { name: 'Camo Pants', price: 90 },
    { name: 'Black Slacks', price: 110 }
  ],
  hats: [
    { name: 'Straw Hat', price: 80 },
    { name: 'Cowboy Hat', price: 120 },
    { name: 'Wizard Hat', price: 180 }
  ]
};

const EditPreset = ({ title }) => {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPreset = async () => {
      const response = await fetch(`http://localhost:3000/api/presets/${id}`);
      const data = await response.json();
      setFormData(data);
    };
    fetchPreset();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [category, index] = value.split(',');
    setFormData({ ...formData, [name]: items[category][index] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/presets/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          preset_name: formData.preset_name,
          boots_name: formData.boots.name,
          boots_price: formData.boots.price,
          shirt_name: formData.shirt.name,
          shirt_price: formData.shirt.price,
          pants_name: formData.pants.name,
          pants_price: formData.pants.price,
          hat_name: formData.hat.name,
          hat_price: formData.hat.price
        })
      });
      if (response.ok) {
        navigate('/presets');
      } else {
        console.error('Error updating preset');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="preset_name" 
          value={formData.preset_name || ''} 
          onChange={(e) => setFormData({ ...formData, preset_name: e.target.value })} 
        />

        <label>Boots</label>
        <select name="boots" value={`boots,${items.boots.findIndex(item => item.name === formData.boots_name)}`} onChange={handleChange}>
          {items.boots.map((item, index) => (
            <option key={index} value={`boots,${index}`}>
              {item.name} - ${item.price}
            </option>
          ))}
        </select>

        <label>Shirt</label>
        <select name="shirt" value={`shirts,${items.shirts.findIndex(item => item.name === formData.shirt_name)}`} onChange={handleChange}>
          {items.shirts.map((item, index) => (
            <option key={index} value={`shirts,${index}`}>
              {item.name} - ${item.price}
            </option>
          ))}
        </select>

        <label>Pants</label>
        <select name="pants" value={`pants,${items.pants.findIndex(item => item.name === formData.pants_name)}`} onChange={handleChange}>
          {items.pants.map((item, index) => (
            <option key={index} value={`pants,${index}`}>
              {item.name} - ${item.price}
            </option>
          ))}
        </select>

        <label>Hat</label>
        <select name="hat" value={`hats,${items.hats.findIndex(item => item.name === formData.hat_name)}`} onChange={handleChange}>
          {items.hats.map((item, index) => (
            <option key={index} value={`hats,${index}`}>
              {item.name} - ${item.price}
            </option>
          ))}
        </select>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditPreset;