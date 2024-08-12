'use client';

import React from 'react';
import './Card.scss';
import { useState } from 'react';
import { CardProps } from '@/types/Card';
import CardCommon from '@/components/cardcommon/cardcommon';
import ModalWine from '@/components/modal/modalwine/ModalWine';
import SHDropdown from '../shdropdown/SHDropDown';

interface cardMylistProps extends CardProps {
  wineId: number;
}

const Card: React.FC<cardMylistProps> = ({ image, wineName, wineDesc, winePrice, wineId }) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const onClickEdit = () => {
    // console.log(reviewId + ' 수정하기');
    setIsModalOpen(true);
    toggleDropdown();
  };

  const onClickDelete = () => {
    // console.log(reviewId + ' 삭제하기');
    toggleDropdown();
  };

  const items = [
    { name: '수정하기', func: onClickEdit },
    { name: '삭제하기', func: onClickDelete },
  ];

  return (
    //<div className="hidden-card">
    <div className="card">
      <CardCommon image={image} wineName={wineName} wineDesc={wineDesc} winePrice={winePrice} />
      {/* <span className="options" onClick={toggleDropdown}>⋮</span> */}
      {/* <div className="soohyun-dropdown">{dropdown && <SHDropdown items={items} />}</div>
          <ModalWine isModalOpen={isModalOpen} closeModal={handleCloseModal}/>
    </div> */}
    </div>
  );
};

export default Card;
