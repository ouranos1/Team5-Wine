// Rating.tsx
import React from 'react';
import './Rating.scss';

interface RatingProps {
  selectedRating: null | number;
  setSelectedRating: (value: null | number) => void;
}

export default function Rating({ selectedRating, setSelectedRating }: RatingProps) {
  const ratingOptions = [
    { label: '전체', value: null },
    { label: '4.8 - 5.0', value: 4.8 },
    { label: '4.5 - 4.8', value: 4.5 },
    { label: '4.0 - 4.5', value: 4.0 },
    { label: '3.0 - 4.0', value: 3.0 },
  ];

  const handleRatingChange = (value: null | number) => {
    setSelectedRating(value);
  };

  return (
    <div className="rating-container">
      <h3 className="rating-title">RATING</h3>
      {ratingOptions.map(({ label, value }) => (
        <label className="rating-option" key={label}>
          <input type="radio" value={label} checked={selectedRating === value} onChange={() => handleRatingChange(value)} />
          <span>{label}</span>
        </label>
      ))}
    </div>
  );
}
