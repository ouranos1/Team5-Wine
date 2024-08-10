'use client'

import React from 'react';
import './RatingAll.scss';
import { wineDetail } from "@/api/Wine";
import { wineDetailType } from "@/types/WineProps";
import Button from '../button/Button';
import RatingBar from '../ratingbar/RatingBar';
import RatingStart from '../ratingstart/RatingStart';

interface RatingAllProps {
    score: 1 | 2 | 3 | 4 | 5;
    avgRating: number;
    avgRatings: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
    };
    reviewCount: number;
    size: 'L' | 'S';
}

const RatingAll: React.FC<RatingAllProps> = ({ score, avgRating, avgRatings, reviewCount, size }) => {

    return (
        <>
            <div>
                <RatingStart size={size} starSize={size === 'L' ? 17 : 12} avgRating={avgRating} reviewCount={reviewCount} />
                <Button text={'리뷰 남기기'} />
            </div>
            <div>
                <RatingBar score={5} avgRatings={avgRatings} reviewCount={reviewCount} />
                <RatingBar score={4} avgRatings={avgRatings} reviewCount={reviewCount} />
                <RatingBar score={3} avgRatings={avgRatings} reviewCount={reviewCount} />
                <RatingBar score={2} avgRatings={avgRatings} reviewCount={reviewCount} />
                <RatingBar score={1} avgRatings={avgRatings} reviewCount={reviewCount} />
            </div>
        </>
    );
};

export default RatingAll;

