'use client';

import OAuthButton from '@/components/oauthbuttoncomponent/OAuthButton';
import SearchBar from '@/components/searchbarcomponent/SearchBar';
import { signIn, signOut, useSession } from 'next-auth/react';
import googleLogo from '@/assets/googleLogo.svg';
import kakaoLogo from '@/assets/kakaoLogo.svg';
import naverLogo from '@/assets/naverLogo.svg';

export default function SignUp() {
  const { data: session } = useSession();

  return (
    <>
      <SearchBar placeholder="와인을 검색해 보세요" />
      <OAuthButton logo={googleLogo} text={session ? '로그아웃' : 'google로 시작하기'} onClick={session ? signOut : () => signIn('google')} />
    </>
  );
}
