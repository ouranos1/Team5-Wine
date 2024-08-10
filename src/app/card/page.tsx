'use client';
import React from 'react';
import Image from 'next/image';
//import styles from './page.module.css';
import Card from '@/components/carddetail/Card';

export default function Home() {
  const wineprice = 64990;
  return (
    <>
      <Card image="예시.png" wineName="Sentinel Carbernet Sauvignon 2016" wineDesc="Western Cape, South Africa" winePrice={wineprice} />
    </>
  );
}
