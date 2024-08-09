"use client";

import React, { useEffect, useState } from 'react';
import GNB from '@/components/gnb/GNB';
import Card from '@/components/cardComponent/CardDetail'; // Card 컴포넌트가 임포트되어야 합니다.
import { wineDetail } from "@/api/Wine";
import { wineDetailType } from "@/types/WineProps";
import RatingStart from "@/components/ratingstart/RatingStart";

const App: React.FC = () => {
    const [detail, setDetail] = useState<wineDetailType>();
    const [size, setSize] = useState<'L' | 'S'>('L');

    useEffect(() => {
        const fetchWineMy = async () => {
            try {
                const response = await wineDetail(35);
                setDetail(response);
                console.log(response);
            } catch (error) {
                console.error("Error fetching wine list:", error);
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
            <GNB />
            {detail && (
                <>
                    {/* <Card size="L" image={detail.image} wineName={detail.name} wineDesc={detail.region} winePrice={detail.price} /> */}
                    <RatingStart size={size} starSize={size === 'L' ? 17 : 12} avgRating={detail.avgRating} reviewCount={detail.reviewCount} />
                </>
            )}
        </>
    );
};

export default App;