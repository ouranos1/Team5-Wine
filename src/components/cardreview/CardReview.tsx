"use client"

import React from 'react';
import './CardReview.scss';
import { AromaTag } from '@/components/aromatag/AromaTag';
import { Aroma, AromaName } from '@/types/Aroma';
import { createAromaList } from '@/utils/aromautils';


interface ReviewProps {
    aromas: AromaName[]
}

const CardReview: React.FC<ReviewProps> = ({ aromas }) => {
    const aromaList = createAromaList(aromas);

    return (
        <>
            <AromaTag option="view" list={aromaList} />
        </>
    );
};

export default CardReview;
