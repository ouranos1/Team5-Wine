"use client";

import React from 'react';
import './Card.scss';

interface ReviewCardProps {
    avgRating: number;
    createdAt: string;
    name: string;
    content: string;
    size: 'L' | 'M' | 'S';
}

const Cardmy: React.FC<ReviewCardProps> = ({ avgRating, createdAt, name, content, size }) => {
    const stars = Math.round(avgRating);
    const formattedDate = new Date(createdAt).toISOString().split('T')[0]; // 날짜를 YYYY-MM-DD 형식으로 변환

    return (
        <div className={`review-card review-card-${size}`}>
            <div className="review-header">
                <div className="rating-container">
                    <span className="rating">★ {avgRating.toFixed(1)}</span>
                    <span className="time">{formattedDate}</span>
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
