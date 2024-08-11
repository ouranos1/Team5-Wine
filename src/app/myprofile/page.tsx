'use client';

import Input from '@/components/inputComponent/Input';
import '@/components/slidecomponent/SlideComponent.scss';
import {ModalReview} from '@/components/modal/modalreview/ModalReview';
import { useEffect, useState, useMemo } from 'react';
import "@/app/myprofile/page.scss";

function MyProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const userData = useMemo(() => {
    const userString = localStorage.getItem("User");
    try {
      return userString ? JSON.parse(userString) : null;
    }
    catch(e) {
      console.log("로컬스토리지의 유저데이터 불러오기 에러");
    }
  }, []);

  console.log(userData); 

  return (
    <div className='myprofile-layer'>
      {/* 전체 데이터 */}
      <button onClick={openModal}>test</button>
      <ModalReview isModalOpen={isModalOpen} closeModal={closeModal} wineName="test와인" />
      <div className='user-profile-data'>{/* 사용자 프로필 및 닉네임 수정 창 */}
        <div>
          {/* <Image /> */}
          <p className='user-nickname'>{userData.nickname}</p>
          <p className='user-email'>{userData.email}</p>
          <div>
            <p>닉네임</p>
            <input />
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
