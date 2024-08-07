'use client';

import OAuthButton from '@/components/oauthbuttoncomponent/OAuthButton';
import SearchBar from '@/components/searchbarcomponent/SearchBar';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import googleLogo from '@/assets/icon/googleLogo.svg';
import kakaoLogo from '@/assets/icon/kakaoLogo.svg';
import { ModalFilter } from '@/components/modal/modalfilter/ModalFilter';
import '../globals.scss';
import WineAdd from '@/components/modal/wineadd/WineAdd';

export default function SignUp() {
  const { data: session } = useSession();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <SearchBar placeholder="와인을 검색해 보세요" />
      <OAuthButton logo={googleLogo} text={session ? '로그아웃' : 'google로 시작하기'} onClick={session ? signOut : () => signIn('google')} />
      <OAuthButton logo={kakaoLogo} text={session ? '로그아웃' : 'kakao로 시작하기'} onClick={session ? signOut : () => signIn('kakao')} />
      <button onClick={openModal}>모달열기</button>
      <ModalFilter isModalOpen={isModalOpen} closeModal={closeModal} />
      {/* <WineAdd isModalOpen={isModalOpen} closeModal={closeModal} /> */}
    </>
  );
}
