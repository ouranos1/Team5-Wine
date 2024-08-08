"use client"

import React from 'react';
import './detailSH.scss';
import Stars from '../stars/StarsComponent';

interface CardProps {
    avgRating: number;
    reviewCount: number;
    size: number;
}

const RatingStart: React.FC<CardProps> = ({ avgRating, reviewCount, size }) => {
    const stars = Math.round(avgRating);
    return (
        <div className={`card`} style={{ fontSize: size }}>
            <div className="rating">{avgRating.toFixed(1)}</div>
            <div className="card-content">
                <Stars size={size} stars={avgRating} isEvent={false} />
                <span>{reviewCount}개의 후기</span>
            </div>
        </div>
    );
};

export default RatingStart;
