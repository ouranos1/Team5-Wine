'use client';
import React, { useState, useEffect } from 'react';
import './page.scss';
import { ModalFilter } from '@/components/modal/modalfilter/ModalFilter';
import Input from '@/components/inputcomponent/Input';
import SearchBar from '@/components/searchbarcomponent/SearchBar';
import useWindowWidth from '@/hook/useWindowWidth';
import Button from '@/components/button/Button';
import cardwine from '@/components/cardwine/Card';
import rightIcon from '@/assets/icon/type=right.svg';
import Image from 'next/image';
import cardmonthly from '@/components/cardmonthly/CardMonthly';
import { wineListAPI, wineDetail, bestWine } from '@/api/Wine';
import { winListType, wineDetailType } from '@/types/WineProps';

const WineListPage: React.FC = () => {
  const [wineList, setWineList] = useState<winListType[]>([]);
  const condition1 = useWindowWidth() > 1024;
  /*const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [wines, setWines] = useState<wine[]>(newWines);
 
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);*/
  useEffect(() => {
    const fetchWineList = async () => {
      try {
        const response = await wineListAPI(999999);
        setWineList(response.list);
        console.log(response.list);
      } catch (error) {
        console.error('Error fetching wine list:', error);
      }
    };

    fetchWineList();
  }, []);

  return (
    <div className="page">
      <div className="up-page">
        <h2 className="recommend">이번 달 추천 와인</h2>
        <div className="wines"></div>
        <div className="circle">
          <Image src={rightIcon} alt="right-icon" width={24} height={24} />
        </div>
      </div>
      {condition1 && (
        <div className="모달">
          <Button text="와인 등록하기" />
        </div>
      )}
      <div className="페이지하단">
        <div className="인풋">
          {!condition1 && <img className="필터버튼" />}
          <SearchBar placeholder="" />
        </div>
        <div className="카드와인들"></div>
      </div>
    </div>
  );
};

export default WineListPage;
/*
<ModalFilter isModalOpen closeModal={closeModal} showButton={false} setWines={newWines} />
      <div className='페이지하단'>
        <div className='인풋'>
          {!condition1&&(<img className='필터버튼'/>)}
          <SearchBar placeholder=''/>
        </div>
        <div className='카드와인들'></div>
      </div>
*/
