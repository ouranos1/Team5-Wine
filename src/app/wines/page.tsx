"use client";

import React, { useEffect, useState } from 'react';
import Cardmonthly from '../../components/cardmonthly/Card';
import Cardmy from '../../components/cardmy/Card';
import { wineListAPI } from "@/api/Wine";
import { winListType } from "@/types/WineProps";

const App: React.FC = () => {
    const [wineList, setWineList] = useState<winListType[]>([]);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

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

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getSize = () => {
        return windowWidth < 768 ? "S" : "L";  // Assuming 768px as the breakpoint for mobile
    };

    const getStarSize = (size: string) => {
        return size === "S" ? 17 : 22;
    };

    const size = getSize();

    return (
        <div>
            {wineList.map((wine) => (
                <Cardmonthly key={wine.id}
                    starSize={getStarSize(size)}
                    image={wine.image}
                    avgRating={wine.avgRating}
                    name={wine.name}
                    size={size} />
            ))}
        </div>
    );
};

export default App;
