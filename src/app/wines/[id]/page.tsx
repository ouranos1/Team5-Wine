'use client';

import React, { useEffect, useState } from 'react';
import Card from '@/components/carddetail/Card';
import './page.scss';
import { wineDetail } from '@/api/Wine';
import { wineDetailType } from '@/types/WineProps';
import RatingAll from '@/components/ratingall/RatingAll';
import CardReview from '@/components/cardreview/CardReview';

interface PageProps {
  params: { id: string };
}

const App: React.FC<PageProps> = ({ params }) => {
  const id = parseInt(params.id, 10);
  const [detail, setDetail] = useState<wineDetailType | null>(null);
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
  }, [id]);

  return (
    <div className="page">
      {detail && (
        <>
          <Card image={detail.image} wineName={detail.name} wineDesc={detail.region} winePrice={detail.price} />
          <RatingAll score={score} avgRating={detail.avgRating} avgRatings={detail.avgRatings} reviewCount={detail.reviewCount} />
          {detail.reviews.map((review) => (
            <CardReview key={review.id} aromas={review.aroma} />
          ))}
        </>
      )}
    </div>
  );
};

export default App;
