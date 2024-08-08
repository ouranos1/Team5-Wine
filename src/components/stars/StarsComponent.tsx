"use client";

import React, { useState } from 'react';
import './Stars.scss';

interface StarsProps {
    stars: number;
    isEvent?: boolean;
}

// isEvent 가 true 경우 : 클릭 별로 star 조정 가능
const Stars: React.FC<StarsProps> = ({ stars, isEvent = false }) => {
    const [rating, setRating] = useState(stars);

    const handleStarClick = (index: number) => {
        if (isEvent) {
            setRating(index + 1);
        }
    };

    return (
        <div className="stars">
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    className={`star ${index < rating ? 'filled' : 'empty'}`}
                    onClick={() => handleStarClick(index)}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default Stars;
