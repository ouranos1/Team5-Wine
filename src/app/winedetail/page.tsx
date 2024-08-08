"use client";

import React, { useEffect, useState } from 'react';
import Cardmonthly from '../../components/cardmonthly/Card';
import Cardmy from '../../components/cardmy/Card';
import { wineListAPI, wineDetail } from "@/api/Wine";
import { winListType, wineDetailType } from "@/types/WineProps";


const App: React.FC = () => {
    const [wineList, setWineList] = useState<winListType[]>([]);
    const [detail, setDetail] = useState<wineDetailType>();

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

        const fetchWineMy = async () => {
            try {
                const response = await wineDetail(35);
                setDetail(response);
                console.log(response);
            } catch (error) {
                console.error("Error fetching wine list:", error);
            }
        };



        fetchWineList();
        fetchWineMy();
    }, []);

    //const whiteWineList = wineList.filter(wine => wine.type === 'WHITE');

    return (
        <div>
            {wineList.map((wine) => (
                <Cardmonthly key={wine.id}
                    image={wine.image}
                    avgRating={wine.avgRating}
                    name={wine.name}
                    size="L" />
            ))}
            {detail !== undefined ? detail.reviews.map((d) => (
                <Cardmy key={d.id}
                    rating={d.rating}
                    createdAt={d.createdAt}
                    name={detail.name}
                    content={d.content}
                    size="L" />
            )) : ""}
        </div>
    );
};

export default App;

