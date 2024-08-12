'use client';
import React from 'react';
import Image from 'next/image';
//import styles from './page.module.css';
import Card from '@/components/cardwine/card';
import RatingStart from '@/components/ratingstart/RatingStart';
import Stars from '@/components/stars/StarsComponent';

export default function Cardpage() {
  const avgRating = 4.7;
  const reviewCount = 47;
  const wineprice = 64990;
  const review = 'Cherry, cocoa, vanilla and clove - beautiful red fruit driven Amarone. Low acidity and medium tannins. Nice long velvety finish.';
  return (
    <>
      <Card image="예시.png" wineName="Sentinel Carbernet Sauvignon 2016" wineDesc="Western Cape, South Africa" winePrice={wineprice} review={review} />
      <RatingStart avgRating={avgRating} reviewCount={reviewCount} />
    </>
  );
}
