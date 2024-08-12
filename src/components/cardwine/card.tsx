'use client';

import React from 'react';
import './Card.scss';
import { CardProps } from '@/types/Card';
import CardCommon from '../cardcommon/cardcommon';

const Card: React.FC<CardProps> = ({ size, image, wineName, wineDesc, winePrice, review }) => {
  return (
    //<div className="hidden-card">
    <div className="card" data-size={size}>
      <div className="up-card">
        <CardCommon image={image} wineName={wineName} wineDesc={wineDesc} winePrice={winePrice} />
      </div>
      <hr />
      <div className="down-card">
        <div className="review-name">최신 후기</div>
        <p className="review-detail">{review}</p>
      </div>
    </div>
    //</div>
  );
};

export default Card;
