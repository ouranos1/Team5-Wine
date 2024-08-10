'use client';

import React, { useState } from 'react';
import Button from '@/components/button/Button';
import GNB from '@/components/gnb/GNB';
import LoginForm from '@/components/loginform/loginform';

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
    <div>
      <GNB userImage={userImage} accessToken={accessToken} refreshToken={refreshToken} />
      <Button text="가입하기" onClick={() => alert('Button clicked!')} />
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default Home;
