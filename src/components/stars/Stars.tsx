"use client";

import React from 'react';
import './Stars.scss';

interface Stars {
    stars: number
}

const Stars: React.FC<Stars> = ({ stars }) => {
    return (
        <div className="stars">
            <span>{'★'.repeat(stars)}</span>
            <span className="empty-stars">{'★'.repeat(5 - stars)}</span>
        </div>
    );
};

export default Stars;
