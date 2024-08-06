'use client';

import OAuthButton from '@/components/oauthbuttoncomponent/OAuthButton';
import SearchBar from '@/components/searchbarcomponent/SearchBar';
import BaseModal from '@/components/modal/BaseModal';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import googleLogo from '@/assets/icon/googleLogo.svg';
import kakaoLogo from '@/assets/icon/kakaoLogo.svg';
import naverLogo from '@/assets/icon/naverLogo.svg';

export default function SignUp() {
  const { data: session } = useSession();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <SearchBar placeholder="와인을 검색해 보세요" />
      <OAuthButton logo={googleLogo} text={session ? '로그아웃' : 'google로 시작하기'} onClick={session ? signOut : () => signIn('google')} />
      <button onClick={openModal}>모달열기</button>
      <BaseModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="모달 제목"
        closeButton={true}
        footerButtons={[
          <button key="1" onClick={closeModal}>
            버튼
          </button>,
          <button key="2" onClick={closeModal}>
            버튼
          </button>,
        ]}
        role="review"
      >
        모달 컨텐츠
      </BaseModal>
    </>
  );
}
