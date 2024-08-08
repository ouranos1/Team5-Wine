"use client";

import React from 'react';
import './RatingStart.scss';
import Stars from '../stars/StarsComponent';

interface CardProps {
    avgRating: number;
    reviewCount: number;
    size: 'L' | 'S';
    starSize: 22 | 17 | 12 | 9 | 8;
}

const RatingStart: React.FC<CardProps> = ({ avgRating, reviewCount, starSize, size }) => {
    return (
        <div className={`card card-${size}`}>
            <div className="rating">{avgRating.toFixed(1)}</div>
            <div className="card-content">
                <Stars starSize={starSize} stars={avgRating} isEvent={false} />
                <span>{reviewCount.toLocaleString()}개의 후기</span>
            </div>
        </div>
    );
};

export default RatingStart;
