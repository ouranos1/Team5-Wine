"use client";

import React, { useEffect, useState } from 'react';
import GNB from '@/components/gnb/GNB';
import Card from '@/components/cardComponent/CardDetail'
import { wineDetail } from "@/api/Wine";
import { wineDetailType } from "@/types/WineProps";
import RatingStart from "@/components/detailcomponent/detailSH";

const App: React.FC = () => {
    const [detail, setDetail] = useState<wineDetailType>();

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
    }, []);

    return (
        <>
            <GNB />
            {/* {detail !== undefined ? <Card size={'L'} image={detail.image} wineName={detail.name} wineDesc={detail.region} winePrice={detail.price} /> : ""} */}
            {detail !== undefined ? <RatingStart size={30} avgRating={detail.avgRating} reviewCount={detail.reviewCount} /> : ""}
        </>
    );
};

export default App;

