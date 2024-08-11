'use client';

import React, { useState } from 'react';
import Button from '@/components/button/Button';
import GNB from '@/components/gnb/GNB';
import LoginForm from '@/components/loginform/loginform';
import '../globals.scss';
import './page.scss';

const Home: React.FC = () => {
  const [userImage, setUserImage] = useState<string | undefined>(undefined);
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);
  const [refreshToken, setRefreshToken] = useState<string | undefined>(undefined);

  const handleLoginSuccess = (image: string, accessToken: string, refreshToken: string) => {
    setUserImage(image);
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
  };

  return (
    <>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </>
  );
};

export default Home;
