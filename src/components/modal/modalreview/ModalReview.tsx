import BaseModal from '../modalbase/BaseModal';
import { ModalProps } from '@/types/ModalProps';
import Image from 'next/image';
import wineIcon from '@/assets/icon/wineIcon.svg';
import Input from '@/components/inputComponent/Input';
import '@/components/modal/modalreview/ModalReview.scss';
import WineTasteSlide from '@/components/wineTaste/WineTasteSlide';
// import { Aromas, toggleAromaSelection } from '@/utils/AromaUtils';
import { AromaTag } from '@/components/aromatag/AromaTag';
import { responseReviewBody } from '@/types/ReviewProps';
import { useState } from 'react';
import { createAromaList } from '@/utils/aromautils';
import { AromaName } from '@/types/Aroma';
import { SlideMode } from '@/types/SlideOption';

interface ModalReviewProps extends ModalProps {
  wineName: string;
  ReviewData?: responseReviewBody;
}

export function ModalReview({ isModalOpen, closeModal, wineName, ReviewData }: ModalReviewProps) {
  const aromatest: AromaName[] = ['CHERRY', 'OAK'];
  const aromaList = createAromaList(aromatest);

  return (
    <div className="modal-layer">
      <BaseModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={ReviewData ? '수정하기' : '리뷰 등록'}
        closeButton={true}
        footerButtons={[
          <button key="1" onClick={closeModal}>
            {ReviewData ? '수정하기' : '리뷰 남기기'}
          </button>,
        ]}
      >
        <div className="review-content">
          <div className="review-title">
            {/* <p>와인이름과 별점 후기용</p> */}
            <div className='a'>
              <div className='b'>
                <Image src={wineIcon} alt="와인아이콘" className="wine-icon" />
                <div>
                  <p>{wineName}</p>
                  <p>와인의 별점 추가</p>
                </div>
              </div>
              <Input type="email" size="L" placeholder="후기를 작성해 주세요" inputname="" />
            </div>
          </div>
          <div className="wine-taste">
            {/* <p>와인 맛 슬라이더</p> */}
            <p className="taste-title">와인의 맛은 어땠나요?</p>
            <WineTasteSlide SlideMode={ReviewData ? SlideMode.CREATE : SlideMode.EDIT} />
          </div>
          <div className="wine-aroma">
            {/* <p>와인 향 선택</p> */}
            <p className="wine-aroma-title">기억에 남는 향이 있나요?</p>
            <AromaTag option="edit" list={aromaList} />
          </div>
        </div>
      </BaseModal>
    </div>
  );
}
