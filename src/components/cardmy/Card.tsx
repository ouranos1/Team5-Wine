"use client";

import React from 'react';
import './Card.scss';

interface ReviewCardProps {
    avgRating: number;
    time: string;
    name: string;
    content: string;
}

const Cardmy: React.FC<ReviewCardProps> = ({ avgRating, time, name, content }) => {
    const stars = Math.round(avgRating);
    return (
        <div className="review-card">
            <div className="review-header">
                <div className="rating-container">
                    <span className="rating">★ {avgRating.toFixed(1)}</span>
                    <span className="time">{time}</span>
                </div>
                <span className="options">⋮</span>
            </div>
            <div className="review-body">
                <h3 className="title">{name}</h3>
                <p className="description">{content}</p>
            </div>
        </div>
    );
};

export default Cardmy;
