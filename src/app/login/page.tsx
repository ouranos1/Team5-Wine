'use client';

import React, { useState } from 'react';
import Button from '@/components/button/Button';
import GNB from '@/components/gnb/GNB';
import LoginForm from '@/components/loginform/loginform';
import '../globals.scss';
import './page.scss';

const Home: React.FC = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default Home;
