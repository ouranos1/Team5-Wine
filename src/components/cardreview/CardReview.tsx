"use client"

import React from 'react';
import { useEffect, useState } from 'react';
import './CardReview.scss';
import { AromaTag } from '@/components/aromatag/AromaTag';
import { Aroma, AromaName } from '@/types/Aroma';
import { reviewDetailType } from '@/types/ReviewProps'
import { createAromaList } from '@/utils/aromautils';
import { SlideMode } from '@/types/SlideOption';
import { id } from '@/types/Id'
import WineTasteSlide from '@/components/wineTaste/WineTasteSlide';
import { searchReviewsAPI } from '@/api/Review'

interface ReviewProps {
    reviewId: id;
}

const CardReview: React.FC<ReviewProps> = ({ reviewId }) => {
    const [detail, setDetail] = useState<reviewDetailType>();

    useEffect(() => {
        const fetchWineDetail = async () => {
            try {
                const response = await searchReviewsAPI(reviewId);
                setDetail(response);
                console.log(response);
            } catch (error) {
                console.error('Error fetching wine details:', error);
            }
        };
        fetchWineDetail();
    }, [reviewId]);

    return (
        <>
            {detail &&
                <div>
                    <div>
                        {detail.user.nickname}
                        {new Date(detail.createdAt).toISOString().split('T')[0]}
                    </div>
                    <div>
                        <AromaTag option="view" list={createAromaList(detail.aroma)} />
                    </div>
                    <div>
                        {detail.content}
                    </div>
                    <div>
                        <WineTasteSlide tasteValue={[detail.lightBold, detail.smoothTannic, detail.drySweet, detail.softAcidic]} SlideMode={SlideMode.VIEW} />
                    </div>
                </div>
            }
        </>
    );
};

export default CardReview;
