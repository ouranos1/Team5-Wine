"use client";

import React from 'react';
import './RatingStart.scss';
import Stars from '../stars/StarsComponent';

interface CardProps {
    avgRating: number;
    reviewCount: number;
    starSize: 22 | 17 | 12 | 9 | 8;
    size: 'L' | 'S';
}

const RatingStart: React.FC<CardProps> = ({ avgRating, reviewCount, starSize, size }) => {
    return (
        <div className={`start-card start-card-${size}`}>
            <div className="start-rating">{avgRating.toFixed(1)}</div>
            <div className="start-card-content">
                <Stars size={'L'} starSize={starSize} stars={avgRating} isEvent={false} />
                <span className="start-review">{reviewCount.toLocaleString()}개의 후기</span>
            </div>
        </div>
    );
};

export default RatingStart;
