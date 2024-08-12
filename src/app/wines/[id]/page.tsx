'use client';

import React, { useEffect, useState } from 'react';
import Card from '@/components/carddetail/Card';
import './page.scss';
import { wineDetail } from '@/api/Wine';
import { wineDetailType } from '@/types/WineProps';
import RatingAll from '@/components/ratingall/RatingAll';
import CardReview from '@/components/cardreview/CardReview';
import { ModalReview } from '@/components/modal/modalreview/ModalReview';

interface PageProps {
    params: { id: string };
}

const App: React.FC<PageProps> = ({ params }) => {
    const id = parseInt(params.id, 10);
    const [detail, setDetail] = useState<wineDetailType | null>(null);
    const [score, setScore] = useState<1 | 2 | 3 | 4 | 5>(1);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    useEffect(() => {
        const fetchWineDetail = async () => {
            try {
                const response = await wineDetail(id);
                setDetail(response);
                console.log(response);
            } catch (error) {
                console.error('Error fetching wine details:', error);
            }
        };
        fetchWineDetail();
    }, [id, isModalOpen]);

    const handleOpenModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='wine-page'>
            {detail && (
                <div className='wine-content'>
                    <div className='wine-card'> <Card image={detail.image} wineName={detail.name} wineDesc={detail.region} winePrice={detail.price} /></div>
                    <div className='a'>
                        <div className='rating-section'><RatingAll score={score} avgRating={detail.avgRating} avgRatings={detail.avgRatings} reviewCount={detail.reviewCount} handleOpenModal={handleOpenModal} /> </div>
                        <div className='review-title'>리뷰 목록</div>
                        {detail.reviewCount > 0 ? detail.reviews.map((review) => (
                            <CardReview key={review.id} reviewId={review.id} />
                        )) :
                            <div className='no-reviews'>리뷰 없음냥</div>}
                        <div className='modal-review'>
                            <ModalReview
                                isModalOpen={isModalOpen}
                                closeModal={handleOpenModal}
                                wineName="와인 이름"
                                wineId={id}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default App;
