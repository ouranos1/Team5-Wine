//app 에서 사용한다고 가정

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
                const response = await wineListAPI(999999);
                setWineList(response.list);
                console.log(response.list);
            } catch (error) {
                console.error("Error fetching wine list:", error);
            }
        };

        fetchWineList();
    }, []);

    //const whiteWineList = wineList.filter(wine => wine.type === 'WHITE'); ->??? 이 부분은 나중에 바꾸겠음

    return (
        <div>
            {wineList.map((wine) => (
                <Cardmonthly key={wine.id}
                    starSize={17}
                    image={wine.image}
                    avgRating={wine.avgRating}
                    name={wine.name}
                    size="L" />
            ))}
        </div>
    );
};

export default App;

