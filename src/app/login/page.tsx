'use client';

import React, {  } from 'react';
import LoginForm from '@/components/loginform/loginform';
import '../globals.scss';
import './page.scss';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Home: React.FC = () => {
  const session = useSession();

  // NOTE: 로그인 상태일 경우 홈으로 리다이렉트
  if (session.data?.user.user) {
    redirect('/');
  }

  return (
    <>
      <LoginForm />
    </>
  );
};

export default Home;
