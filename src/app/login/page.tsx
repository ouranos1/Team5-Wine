'use client';

import React, { useState } from 'react';
import Button from '@/components/button/Button';
import GNB from '@/components/gnb/GNB';
import LoginForm from '@/components/loginform/loginform';
import '../globals.scss';
import './page.scss';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Home: React.FC = () => {
  const session = useSession();

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
