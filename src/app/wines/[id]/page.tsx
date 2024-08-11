'use client';

import React, { useEffect, useState } from 'react';
import GNB from '@/components/gnb/GNB';
import Card from '@/components/cardComponent/CardDetail';
import './page.scss';
import { wineDetail } from '@/api/Wine';
import { wineDetailType } from '@/types/WineProps';
import RatingAll from '@/components/ratingall/RatingAll';
import CardReview from '@/components/cardreview/CardReview';

interface PageProps {
    params: { id: string };
}

const App: React.FC = ({ params }: PageProps) => {
    const id = parseInt(params.id, 10);
    const [detail, setDetail] = useState<wineDetailType>();
    const [size, setSize] = useState<'L' | 'Group63' | 'S'>('S');
    const [score, setScore] = useState<1 | 2 | 3 | 4 | 5>(1);

    useEffect(() => {
        const fetchWineMy = async () => {
            try {
                const response = await wineDetail(id);
                setDetail(response);
            } catch (error) {
                console.error('Error fetching wine list:', error);
            }
        };
        fetchWineMy();

        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSize('S');
            } else {
                setSize('L');
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className='page'>
                <GNB />
                {detail && (
                    <>
                        <Card size={size} image={detail.image} wineName={detail.name} wineDesc={detail.region} winePrice={detail.price} />
                        <RatingAll size={size} score={score} avgRating={detail.avgRating} avgRatings={detail.avgRatings} reviewCount={detail.reviewCount} />
                        {detail.reviews.map((review) => {
                            return <CardReview key={review.id} aromas={review.aroma} />;
                        })}
                    </>
                )}
            </div>
        </>
    );
};

export default App;
