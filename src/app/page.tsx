'use client';
import Header from '@/assets/png/lg_01.png';
import WineRecommended from '@/assets/png/lg_02.png';
import wineDetails from '@/assets/png/lg_03.png';
import wineReviews from '@/assets/png/lg_04.png';
import Image from 'next/image';
import './page.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowHeader(true);
    }, 500);
    setTimeout(() => {
      setShowDetail(true);
    }, 1000);
  }, []);

  return (
    <>
      <div className="landing-container">
        <div className={`header ${showHeader ? 'show' : ''}`}>
          <Image src={Header} alt="헤더 이미지" />
        </div>

        <div className={`wine-container ${showDetail ? 'show' : ''}`}>
          <div className="section recommended-wines">
            <Image src={WineRecommended} alt="추천와인 이미지" />
          </div>

          <div className="section wine-details">
            <Image src={wineDetails} alt="추천상세 이미지" />
          </div>

          <div className="section reviews">
            <Image src={wineReviews} alt="와인리뷰 이미지" />
          </div>
        </div>

        <div className="button-container">
          <div className="button-container">
            <Link href="/wines" className="button-more">
              와인 보러가기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
