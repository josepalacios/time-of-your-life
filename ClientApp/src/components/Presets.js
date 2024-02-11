import React, { useEffect, useState } from 'react';
import './App.css'

const Presets = () => {
  const  PRESETS_URL = 'https://localhost:7154/clock/presets';
  const [presets, setPresets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch(PRESETS_URL)
          const result = await response.json()
          setPresets(result);
        } catch (error) {
          console.error('Error fetching presets:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
  }, []); 

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul className="my-list">
        {presets.map((preset) => (
          <li key={preset.presetId}>Font color: {preset.fontColor} Font Family: {preset.fontFamily} Title Font size: {preset.titleFontSize} 
            Clock Font Size: {preset.clockFontSize}</li>
        ))}
      </ul>
    </div>
  );
};

export default Presets;