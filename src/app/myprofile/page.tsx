'use client';

import Input from '@/components/inputComponent/Input';
import '@/components/slidecomponent/SlideComponent.scss';
import { ModalReview } from '@/components/modal/modalreview/ModalReview';
import { useEffect, useState, useMemo } from 'react';
import '@/app/myprofile/page.scss';
import Button from '@/components/button/Button';
import Image from 'next/image';
import defaultprofile from '@/assets/icon/defaultprofile.webp';
import { ImageAPI } from '@/api/Image';
import { useSession } from 'next-auth/react';

function changeNickName() {
  console.log('닉네임변경');
}

function MyProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // const userData = useMemo(() => {
  //   const userString = localStorage.getItem('User');
  //   try {
  //     return userString ? JSON.parse(userString) : null;
  //   } catch (e) {
  //     console.log('로컬스토리지의 유저데이터 불러오기 에러');
  //   }
  // }, []);

  // console.log(userData);

  // const session = useSession();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const token = localStorage.getItem('accessToken');
    if (file && token) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await ImageAPI(formData);
        setSelectedImage(response.url);
      } catch (error) {
        console.error('이미지 업로드 실패:', error);
      }
    }
  };

  // const currentImage = selectedImage || userData.image || defaultprofile;
  const currentImage = selectedImage || defaultprofile;

  return (
    <div className="myprofile-layer">
      {/* 전체 데이터 */}
      <button onClick={openModal}>test</button>
      <ModalReview isModalOpen={isModalOpen} closeModal={closeModal} wineName="test와인" />
      <div className="user-profile-data">
        {/* 사용자 프로필 및 닉네임 수정 창 */}
        <div className="user-data">
          <div className="user-image-layer">
            <Image src={currentImage} width={164} height={164} alt="유저프로필" />
            <label>
              +
              <input id="" type="file" className="user-image-input" onChange={handleFileChange} />
            </label>
          </div>
          <p className="user-nickname">유저 닉네임</p>
          <p className="user-email">유저 이메일</p>
          <div className="user-edit">
            <Input className="edit-input" inputname="닉네임" placeholder="유저 닉네임이다" defaultValue="" />
            <div>
              <Button text="변경하기" onClick={changeNickName} />
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* 사용자 작성 후기와 와인 보여줄창 */}
        <div>
          {/* 내가 쓴 후기, 내가 등록한 와인 */}
          <p>내가 쓴 후기</p>
          <p>내가 등록한 와인</p>
          <p>총 몇개</p>
        </div>
        <div>
          {/* 리뷰목록, 와인목록 */}
          {/* 반복문을 통해 유저 아이디를 통해 가지고온 데이터 */}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
