import { useState } from 'react';
import './WineTypes.scss';

export default function WineTypes() {
  const [selectedWineType, setSelectedWineType] = useState('');

  const handleWineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedWineType(e.target.value);
  };
  return (
    <div className="wine-types-container">
      <h3 className="wine-types-title">WINE TYPES</h3>
      <label className="radio-type">
        <input type="radio" value="red" checked={selectedWineType === 'red'} onChange={handleWineChange} />
        <span>Red</span>
      </label>
      <label className="radio-type">
        <input type="radio" value="white" checked={selectedWineType === 'white'} onChange={handleWineChange} />
        <span>White</span>
      </label>
      <label className="radio-type">
        <input type="radio" value="sparkling" checked={selectedWineType === 'sparkling'} onChange={handleWineChange} />
        <span>Sparkling</span>
      </label>
    </div>
  );
}
