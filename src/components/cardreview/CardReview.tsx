"use client"

import React from 'react';
import { useEffect, useState } from 'react';
import './CardReview.scss';
import Image from 'next/image';
import { AromaTag } from '@/components/aromatag/AromaTag';
import { Aroma, AromaName } from '@/types/Aroma';
import { reviewDetailType } from '@/types/ReviewProps'
import { createAromaList } from '@/utils/aromautils';
import { SlideMode } from '@/types/SlideOption';
import { id } from '@/types/Id'
import WineTasteSlide from '@/components/wineTaste/WineTasteSlide';
import { searchReviewsAPI } from '@/api/Review'
import defaultprofile from '@/assets/icon/defaultprofile.webp'

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
                <div className="soohyun-card">
                    <div className="soohyun-header">
                        {detail.user.image ?
                            <img src={detail.user.image} className="soohyun-image" /> :
                            <Image src={defaultprofile} alt="와인아이콘" className="soohyun-image" />
                        }
                        <span className="soohyun-nickname">{detail.user.nickname}</span>
                        <span className="soohyun-date">{new Date(detail.createdAt).toISOString().split('T')[0]}</span>
                    </div>
                    <div className="soohyun-aroma">
                        <AromaTag option="view" list={createAromaList(detail.aroma)} /></div>
                    <div className="soohyun-content">
                        {detail.content}
                    </div>
                    <div className="soohyun-taste">
                        <WineTasteSlide tasteValue={[detail.lightBold, detail.smoothTannic, detail.drySweet, detail.softAcidic]} SlideMode={SlideMode.VIEW} />
                    </div>
                </div>

            }
        </>
    );
};

export default CardReview;
