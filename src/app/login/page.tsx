'use client';

import React from 'react';
import Button from '@/components/button/Button';

const Home: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button text="가입하기" onClick={handleClick} />
    </div>
  );
};

export default Home;
