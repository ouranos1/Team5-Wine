'use client';

import Input from '@/components/inputComponent/Input';
import '@/components/slidecomponent/SlideComponent.scss';
import { useEffect, useState } from 'react';

function MyProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // useEffect(() => {
    // async function tt() {
      // await signUpAPI(test);
      //    const test:signResponse = await signInAPI(test2);
      // await refreshToken(refreshtest);
    // }
    // tt();
  // }, []);

  return (
    <div className='myprofile-layer'>
      {/* 전체 데이터 */}
      {/* <button onClick={openModal}>test</button>
      <ModalReview isModalOpen={isModalOpen} closeModal={closeModal} wineName="test와인" /> */}
      <div className='user-profile-data'>{/* 사용자 프로필 및 닉네임 수정 창 */}
        <div>
          {/* <Image /> */}
          <p>사용자닉네임</p>
          <div>
            <p>닉네임</p>
            {/* <Input /> */}
            <button>변경하기</button>
          </div>
        </div>
      </div>
      <div>
        {/* 사용자 작성 후기와 와인 보여줄창 */}
        <div>{/* 내가 쓴 후기, 내가 등록한 와인 */}
          <p>내가 쓴 후기</p>
          <p>내가 등록한 와인</p>
          <p>총 몇개</p>
        </div>
        <div>{/* 리뷰목록, 와인목록 */}
          {/* 반복문을 통해 유저 아이디를 통해 가지고온 데이터 */}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
