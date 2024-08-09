import React, { useState } from 'react';
import './Rating.scss';

export default function Rating() {
  const [selectedRange, setSelectedRange] = useState<string>('전체');

  const ratingRanges = [
    { label: '전체', value: '전체' },
    { label: '4.8 - 5.0', value: '4.8-5.0' },
    { label: '4.5 - 4.8', value: '4.5-4.8' },
    { label: '4.0 - 4.5', value: '4.0-4.5' },
    { label: '3.0 - 4.0', value: '3.0-4.0' },
  ];

  const handleSelect = (value: string) => {
    setSelectedRange(value);
  };

  return (
    <div className="rating-container">
      <h3 className="rating-title">RATING</h3>
      {ratingRanges.map((range) => (
        <div key={range.value} className={`rating-option ${selectedRange === range.value ? 'selected' : ''}`}>
          <input type="radio" name="rating" value={range.value} checked={selectedRange === range.value} onChange={() => handleSelect(range.value)} id={range.value} />
          <span>{range.label}</span>
        </div>
      ))}
    </div>
  );
}
