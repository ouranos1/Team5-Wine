import BaseModal from '../modalbase/BaseModal';
import { ModalProps } from '@/types/ModalProps';
import Image from 'next/image';
import wineIcon from '@/assets/icon/wineIcon.svg';
import Input from '@/components/inputComponent/Input';
import '@/components/modal/modalreview/ModalReview.scss';
import WineTasteSlide from '@/components/wineTaste/WineTasteSlide';
import { AromaTag } from '@/components/aromatag/AromaTag';
import { responseReviewBody } from '@/types/ReviewProps';
import { useState } from 'react';
import { createAromaList } from '@/utils/aromautils';
import { AromaName } from '@/types/Aroma';
import { SlideMode } from '@/types/SlideOption';
import Stars from '@/components/stars/StarsComponent';
import { addReviewsAPI } from '@/api/Review';
import { connect } from 'http2';
interface ModalReviewProps extends ModalProps {
  wineName: string;
  winId: number;
  ReviewData?: responseReviewBody;
}

// export interface createReviewBody {
//   rating: number;
//   lightBold: number;
//   smoothTannic: number;
//   drySweet: number;
//   softAcidic: number;
//   aroma: AromaName[];
//   content: string;
//   wineId: number;
// }

export function ModalReview({ isModalOpen, closeModal, wineName, winId, ReviewData }: ModalReviewProps) {
  const aromatest: AromaName[] = ['CHERRY', 'OAK'];
  const aromaList = createAromaList(aromatest);
  const [rating, setRating] = useState(0);
  const [slideValue, setSlideValue] = useState<number[]>();
  const [selectedAromas, setSelectedAromas] = useState<AromaName[]>(ReviewData?.aroma || []);
  // const [wineRating, setWineRating] = useState(ReviewData?.rating || 0);

  const [reviewContent, setReviewContent] = useState(ReviewData?.content || '');
  const [wineRating, setWineRating] = useState(ReviewData?.rating || 0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };
  const handleSliceValueChange = (newSlideValue: number[]) => {
    setSlideValue(newSlideValue);
  };
  const handleAromaChange = (newAromas: AromaName[]) => {
    setSelectedAromas(newAromas);
  };

  function postReview() {
    if (rating && slideValue && reviewContent) {
      const resquestBody = {
        rating: rating,
        lightBold: slideValue[0],
        smoothTannic: slideValue[1],
        drySweet: slideValue[2],
        softAcidic: slideValue[3],
        aroma: selectedAromas,
        content: reviewContent,
        wineId: 35,
      };
      addReviewsAPI(resquestBody);
    }
  }

  return (
    <div className="modal-layer">
      <BaseModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={ReviewData ? '수정하기' : '리뷰 등록'}
        closeButton={true}
        footerButtons={[
          <button key="1" onClick={postReview}>
            {ReviewData ? '수정하기' : '리뷰 남기기'}
          </button>,
        ]}
      >
        <div className="review-content">
          <div className="review-title">
            {/* <p>와인이름과 별점 후기용</p> */}
            <div>
              <div>
                <Image src={wineIcon} alt="와인아이콘" className="wine-icon" />
                <div className="name-and-star">
                  <p>{wineName}</p>
                  <Stars stars={5} isEvent={true} onRatingChange={handleRatingChange} />
                </div>
              </div>
              <Input type="email" placeholder="후기를 작성해 주세요" inputname="" onChange={(e) => setReviewContent(e.target.value)} />
            </div>
          </div>
          <div className="wine-taste">
            {/* <p>와인 맛 슬라이더</p> */}
            <p className="taste-title">와인의 맛은 어땠나요?</p>
            <WineTasteSlide SlideMode={ReviewData ? SlideMode.CREATE : SlideMode.EDIT} onSlideChange={handleSliceValueChange} />
          </div>
          <div className="wine-aroma">
            {/* <p>와인 향 선택</p> */}
            <p className="wine-aroma-title">기억에 남는 향이 있나요?</p>
            <AromaTag option="edit" list={aromaList} onChange={handleAromaChange} />
          </div>
        </div>
      </BaseModal>
    </div>
  );
}
