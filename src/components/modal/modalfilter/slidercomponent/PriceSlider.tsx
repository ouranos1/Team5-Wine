import React, { useState } from 'react';
import './PriceSlider.scss';

export default function PriceSlider() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const priceRange = { min: 0, max: 100000 };

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), maxPrice);
    setMinPrice(value);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), minPrice);
    setMaxPrice(value);
  };

  return (
    <div className="slider-container">
      <h3 className="slider-title">RRICE</h3>
      <div className="slider-value  ">
        <div>₩ {minPrice}</div> <div>₩ {maxPrice}</div>
      </div>
      <div className="slider">
        <input
          type="range"
          min={priceRange.min}
          max={priceRange.max}
          value={minPrice}
          className="slider-thumb"
          style={{
            '--value': `${((minPrice - priceRange.min) / (priceRange.max - priceRange.min)) * 100}%`,
          }}
          onChange={handleMinChange}
        />
        <input
          type="range"
          min={priceRange.min}
          max={priceRange.max}
          value={maxPrice}
          className="slider-thumb"
          style={{
            '--value': `${((maxPrice - priceRange.min) / (priceRange.max - priceRange.min)) * 100}%`,
          }}
          onChange={handleMaxChange}
        />
      </div>
    </div>
  );
}
