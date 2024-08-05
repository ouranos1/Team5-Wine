"use client"

import React from 'react';
import './Card.scss';

interface CardProps {
    imageUrl: string;
    rating: number;
    description: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, rating, description }) => {
    const stars = Math.round(rating);
    return (
        <div className="card">
            <img src={imageUrl} alt="Wine bottle" className="card-image" />
            <div className="card-content">
                <div className="rating">{rating.toFixed(1)}</div>
                <div className="stars">
                    <span>{'★'.repeat(stars)}</span>
                    <span className="empty-stars">{'★'.repeat(5 - stars)}</span>
                </div>
                <div className="description">{description}</div>
            </div>
        </div>
    );
};

export default Card;
