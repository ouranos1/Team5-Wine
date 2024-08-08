'use client';

import React from 'react';
import Button from '@/components/button/Button';
import GNB from '@/components/gnb/GNB';
import LoginForm from '@/components/loginform/loginform';

const Home: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button disable text="가입하기" onClick={handleClick} />
      <LoginForm />
    </div>
  );
};

export default Home;
