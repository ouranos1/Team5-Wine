'use client';

import SlideComponent from '@/components/slidecomponent/SlideComponent';
import { SildeOptionProps, SlideMode } from '@/types/SlideOption';
import '@/components/slidecomponent/SlideComponent.scss';
import { signUpAPI, signInAPI, refreshToken } from '@/api/Auth';
import { useEffect, useState } from 'react';
import { signUpRequestBody, signInRequestBody, signResponse } from '@/types/AuthProps';
import { ModalReview } from '@/components/modal/modalreview/ModalReview';

function MyProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    async function tt() {
      // await signUpAPI(test);
      //    const test:signResponse = await signInAPI(test2);
      // await refreshToken(refreshtest);
    }
    tt();
  }, []);
  //

  return (
    <div>
      {/* <button onClick={openModal}>test</button>
      <ModalReview isModalOpen={isModalOpen} closeModal={closeModal} wineName="test와인" /> */}
      <div>
        {/* 전체 데이터 */}
        <div>{/* 사용자 프로필 및 닉네임 수정 창 */}</div>
        <div>
          {/* 사용자 작성 후기와 와인 보여줄창 */}
          <div>{/* 내가 쓴 후기, 내가 등록한 와인 */}</div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
