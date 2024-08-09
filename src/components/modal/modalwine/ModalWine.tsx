'use client';

import Input from '@/components/inputComponent/Input';
import BaseModal from '../modalbase/BaseModal';
import { ModalProps } from '@/types/ModalProps';
import ImageUpload from './imagecomponent/ImageUpload';
import { useState } from 'react';
import './ModalWine.scss';

export default function ModalWine({ isModalOpen, closeModal }: ModalProps) {
  const [wineName, setWineName] = useState('');
  const [price, setPrice] = useState('');
  const [origin, setOrigin] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleWineNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWineName(e.target.value);
  };

  const handleOriginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrigin(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleWineRegistration = () => {
    console.log({ wineName, price, origin, imageUrl });
    closeModal();
  };

  return (
    <BaseModal
      isOpen={isModalOpen}
      onClose={closeModal}
      title="와인 등록"
      closeButton={false}
      footerButtons={[
        <button key="1" onClick={closeModal}>
          취소
        </button>,
        <button key="2" onClick={handleWineRegistration}>
          와인 등록하기
        </button>,
      ]}
      role="wine"
    >
      <Input type="text" size="L" placeholder="와인 이름 입력" inputname="와인 이름" value={wineName} onChange={handleWineNameChange} />
      <Input type="text" size="L" placeholder="가격 입력" inputname="가격" value={price} onChange={handlePriceChange} />
      <Input type="text" size="L" placeholder="원산지 입력" inputname="원산지" value={origin} onChange={handleOriginChange} />
      <ImageUpload onImageUpload={setImageUrl} />
    </BaseModal>
  );
}
