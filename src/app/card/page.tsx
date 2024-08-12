/*'use client';
import React from 'react';
//import Image from 'next/image';
import Card from '@/components/cardwine/Card';

export default function Cardpage() {
  const wineprice = 64990;
  const review = 'Cherry, cocoa, vanilla and clove - beautiful red fruit driven Amarone. Low acidity and medium tannins. Nice long velvety finish.';
  return (
    <>
      <Card image="예시.png" wineName="Sentinel Carbernet Sauvignon 2016" wineDesc="Western Cape, South Africa" winePrice={wineprice} review={review} />
    </>
  );
}*/
'use client';
import React from 'react';
import Image from 'next/image';
//import styles from './page.module.css';
import Input from '@/components/inputComponent/Input';

export default function Home() {
  return (
    <>
      <Input type="email" placeholder="Enter your email address" inputname="Email" />
    </>
  );
}
