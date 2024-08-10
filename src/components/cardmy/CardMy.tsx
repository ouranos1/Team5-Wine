"use client";

import React from 'react';
import './CardMy.scss';

interface ReviewCardProps {
    rating: number;
    createdAt: string;
    name: string;
    content: string;
}

const Cardmy: React.FC<ReviewCardProps> = ({ rating, createdAt, name, content }) => {
    const stars = Math.round(rating);
    const formattedDate = new Date(createdAt).toISOString().split('T')[0]; // 날짜를 YYYY-MM-DD 형식으로 변환

    return (
        <div className="review-card">
            <div className="review-header">
                <div className="rating-container">
                    <span className="rating">★ {rating.toFixed(1)}</span>
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
