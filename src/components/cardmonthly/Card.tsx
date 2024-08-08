"use client"

import React from 'react';
import './Card.scss';
import wine_bottle from '@/assets/icon/wine_bottle.svg';
import Stars from '../stars/StarsComponent'

interface CardProps {
    image: string | null;
    avgRating: number;
    name: string;
    size: 'L' | 'S';
}

const Cardmonthly: React.FC<CardProps> = ({ image, avgRating, name, size }) => {
    const stars = Math.round(avgRating);
    return (
        <div className={`card card-${size}`}>
            <img src={image !== null ? image : wine_bottle} alt="Wine bottle" className="card-image" />
            <div className="card-content">
                <div className="rating">{avgRating.toFixed(1)}</div>
                <Stars size='L' stars={avgRating} isEvent={false} />
                <div className="description">{name}</div>
            </div>
        </div>
    );
};

export default Cardmonthly;
