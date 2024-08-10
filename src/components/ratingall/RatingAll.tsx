'use client'

import React from 'react';
import './RatingAll.scss';
import { wineDetail } from '@/api/Wine';
import { wineDetailType } from '@/types/WineProps';
import Button from '@/components/button/Button';
import RatingBar from '@/components/ratingbar/RatingBar';
import RatingStart from '@/components/ratingstart/RatingStart';
import { ModalReview } from '@/components/modal/modalreview/ModalReview';

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
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className='allContainer'>
                <div className='allSubContainer'>
                    <div className='allStartContainer'>
                        <RatingStart size={size} starSize={size === 'L' ? 17 : 12} avgRating={avgRating} reviewCount={reviewCount} />
                    </div>
                    <div className='allButton'>
                        <Button text={'리뷰 남기기'} onClick={handleOpenModal} />
                    </div>
                </div>
                <div className='allRatingBars'>
                    <RatingBar score={5} avgRatings={avgRatings} reviewCount={reviewCount} />
                    <RatingBar score={4} avgRatings={avgRatings} reviewCount={reviewCount} />
                    <RatingBar score={3} avgRatings={avgRatings} reviewCount={reviewCount} />
                    <RatingBar score={2} avgRatings={avgRatings} reviewCount={reviewCount} />
                    <RatingBar score={1} avgRatings={avgRatings} reviewCount={reviewCount} />
                </div>
            </div >
            <ModalReview
                isModalOpen={isModalOpen}
                closeModal={handleCloseModal}
                wineName="와인 이름"
            />
        </>
    );
};

export default RatingAll;

