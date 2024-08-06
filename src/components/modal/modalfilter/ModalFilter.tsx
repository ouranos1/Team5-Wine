import { useState } from 'react';
import BaseModal from '../modalbase/BaseModal';
import { ModalProps } from '@/types/ModalProps';
import SlideComponent from '@/components/slidecomponent/SlideComponent';
import { SildeOptionProps } from '@/types/SlideOption';
import './ModalFilter.scss';

export function ModalFilter({ isModalOpen, closeModal }: ModalProps) {
  const [selectedWine, setSelectedWine] = useState('');

  const priceOption: SildeOptionProps = {
    SlideOptionTitle: 'test옵션타이틀',
    LeftOption: '0',
    RightOption: '100,000',
    // value: 0,
  };

  const handleWineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedWine(e.target.value);
  };

  return (
    <BaseModal
      isOpen={isModalOpen}
      onClose={closeModal}
      title="필터"
      closeButton={true}
      footerButtons={[
        <button key="1" onClick={closeModal}>
          초기화
        </button>,
        <button key="2" onClick={closeModal}>
          필터 적용하기
        </button>,
      ]}
      role="review"
    >
      <div className="wine-types">
        <h3 className="wine-types-title">WINE TYPES</h3>
        <label className="radio-type">
          <input type="radio" value="red" checked={selectedWine === 'red'} onChange={handleWineChange} />
          <span>Red</span>
        </label>
        <label className="radio-type">
          <input type="radio" value="white" checked={selectedWine === 'white'} onChange={handleWineChange} />
          <span>White</span>
        </label>
        <label className="radio-type">
          <input type="radio" value="sparkling" checked={selectedWine === 'sparkling'} onChange={handleWineChange} />
          <span>Sparkling</span>
        </label>
      </div>
      <div className="price">
        <h3 className="price-title">RRICE</h3>
        <SlideComponent {...priceOption} />
      </div>
      <div className="rating">
        <h3 className="rating-title">RATING</h3>
      </div>
    </BaseModal>
  );
}
