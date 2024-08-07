"use client";

import React, { useEffect, useState } from 'react';
import Cardmonthly from '../../components/cardmonthly/Card';
import Cardmy from '../../components/cardmy/Card';
import { wineListAPI } from "@/api/Wine";
import { winListType } from "@/types/WineProps";


const App: React.FC = () => {
    const [wineList, setWineList] = useState<winListType[]>([]);

    useEffect(() => {
        const fetchWineList = async () => {
            try {
                const response = await wineListAPI(10);
                setWineList(response.list); // API 응답에서 wine 리스트를 설정
                console.log(response.list);
            } catch (error) {
                console.error("Error fetching wine list:", error);
            }
        };

        fetchWineList();
    }, []);

    return (
        <div>
            {wineList.map((wine) => (
                <Cardmonthly key={wine.id}
                    image={wine.image}
                    avgRating={wine.avgRating}
                    name={wine.name}
                    size="L" />
            ))}
            {/* <Cardmonthly
                image="/wine.png"
                avgRating={1.8}
                name="Ciel du Cheval Vineyard Collaboration Series II 2012"
                size="L"
            />
            <Cardmonthly
                image="/wine.png"
                avgRating={1.8}
                name="Ciel du Cheval Vineyard Collaboration Series II 2012"
                size="S"
            />
            <Cardmy
                avgRating={5.0}
                createdAt="2024-08-05T04:50:50.164Z"
                name="Sentinal Carbernet Sauvignon 2016"
                content="Deep maroon color, tasting notes of blackberry, dark chocolate, plum. Super jammy and bold with some smoky after notes. Big flavor. Amazing value (would pay three times the price for it), well balanced flavor. Could drink all day everyday with or without food. I need more immediately."
                size="L"
            />
            <Cardmy
                avgRating={5.0}
                createdAt="2024-08-05T04:50:50.164Z"
                name="Sentinal Carbernet Sauvignon 2016"
                content="Deep maroon color, tasting notes of blackberry, dark chocolate, plum. Super jammy and bold with some smoky after notes. Big flavor. Amazing value (would pay three times the price for it), well balanced flavor. Could drink all day everyday with or without food. I need more immediately."
                size="M"
            />
            <Cardmy
                avgRating={5.0}
                createdAt="2024-08-05T04:50:50.164Z"
                name="Sentinal Carbernet Sauvignon 2016"
                content="Deep maroon color, tasting notes of blackberry, dark chocolate, plum. Super jammy and bold with some smoky after notes. Big flavor. Amazing value (would pay three times the price for it), well balanced flavor. Could drink all day everyday with or without food. I need more immediately."
                size="S"
            /> */}
        </div>
    );
};

export default App;

