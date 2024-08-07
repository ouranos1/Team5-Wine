import BaseModal from '../modalbase/BaseModal';
import { ModalProps } from '@/types/ModalProps';
import './ModalFilter.scss';
import PriceSlider from './slidercomponent/PriceSlider';
import Rating from './ratingcomponent/Rating';
import WineTypes from './typescomponent/WineTypes';

export function ModalFilter({ isModalOpen, closeModal }: ModalProps) {
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
      role="filter"
    >
      <WineTypes />
      <PriceSlider />
      <Rating />
    </BaseModal>
  );
}
