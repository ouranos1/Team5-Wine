'use client';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { bestWine } from '@/api/Wine';
import Cardmonthly from '@/components/cardmonthly/CardMonthly';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CardProps {
  id: number;
  image: string | null;
  avgRating: number;
  name: string;
}
const WineCarousel: React.FC = () => {
  const [wines, setWines] = useState<CardProps[]>([]);

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const response = await bestWine();
        setWines(response.data);
      } catch (error) {
        console.error('와인 데이터 로딩 실패:', error);
      }
    };

    fetchWines();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {wines.map((wine) => (
        <Cardmonthly key={wine.id} image={wine.image} avgRating={wine.avgRating} name={wine.name} />
      ))}
    </Slider>
  );
};

export default WineCarousel;
