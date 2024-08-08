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
import { createAromaList } from '@/utils/AromaUtils';

interface ModalReviewProps extends ModalProps {
  wineName: string;
  ReviewData?: responseReviewBody;
}

export function ModalReview({ isModalOpen, closeModal, wineName, ReviewData }: ModalReviewProps) {
  const aromaList = createAromaList(ReviewData?.aroma.name);

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
        role="review"
      >
        <div className="review-content">
          <div className="review-title">
            {/* <p>와인이름과 별점 후기용</p> */}
            <div>
              <div>
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
            <WineTasteSlide />
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
