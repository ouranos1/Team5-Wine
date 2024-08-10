"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import './Stars.scss';
import star_empty from '@/assets/icon/star_empty.svg';
import star_filled from '@/assets/icon/star_filled.svg';

interface StarsProps {
    stars: number;
    isEvent?: boolean;
}

// isEvent가 true인 경우: 클릭 별로 star 조정 가능
const Stars: React.FC<StarsProps> = ({ stars, isEvent = false, }) => {
    const [rating, setRating] = useState(stars);

    const handleStarClick = (index: number) => {
        if (isEvent) {
            setRating(index + 1);
        }
    };

    return (
        <div className="stars">
            {[...Array(5)].map((_, index) => (
                <span key={index} className={`star ${index < rating ? 'filled' : 'empty'}`} onClick={() => handleStarClick(index)}>
                    <Image src={index < rating ? star_filled : star_empty} alt="star" />
                </span>
            ))}
        </div>
    );
};

export default Stars;
