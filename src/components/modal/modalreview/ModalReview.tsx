import BaseModal from '../modalbase/BaseModal';
import { ModalProps } from '@/types/ModalProps';
import Image from 'next/image';
import wineIcon from '@/assets/icon/wineIcon.svg';
import Input from '@/components/inputComponent/Input';
import SlideComponent from '@/components/slidecomponent/SlideComponent';

const wineTaste = {
  lightBold: {
    title: '바디감',
    leftOption: '가벼워요',
    rightOption: '진해요',
  },
  smoothTannic: {
    title: '타닌',
    leftOption: '부드러워요',
    rightOption: '떫어요',
  },
  drySweet: {
    title: '당도',
    leftOption: '드라이해요',
    rightOption: '달아요',
  },
  softAcidic: {
    title: '산미',
    leftOption: '안셔요',
    rightOption: '많이셔요',
  },
};

export function ModalReview({ isModalOpen, closeModal }: ModalProps, wineName: string) {
  return (
    <div>
      <BaseModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="리뷰 등록"
        closeButton={true}
        footerButtons={[
          <button key="1" onClick={closeModal}>
            리뷰 남기기
          </button>,
        ]}
        role="review"
      >
        <div>
          <div>
            {/* <p>와인이름과 별점 후기용</p> */}
            <div>
              <div>
                <Image src={wineIcon} alt="와인아이콘" />
                <div>
                  <p>{wineName}</p>
                  {/* 와인의 별점 추가 */}
                </div>
              </div>
              {/* <Input type="email" size="L" placeholder='후기를 작성해 주세요' /> */}
            </div>
          </div>
          <div>
            {/* <p>와인 맛 슬라이더</p> */}
            <p>와인의 맛은 어땠나요?</p>
            {Object.entries(wineTaste).map(([tasteKey, tasteOptions]) => (
              <SlideComponent key={tasteKey} SlideOptionTitle={tasteOptions.title} LeftOption={tasteOptions.leftOption} RightOption={tasteOptions.rightOption} />
            ))}
          </div>
          <div>{/* <p>와인 향 선택</p> */}</div>
        </div>
      </BaseModal>
    </div>
  );
}
