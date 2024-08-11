'use client';

import React from 'react';
import './GNB.scss';
import Logo from '@/assets/icon/logo_wine.svg';
import Image from 'next/image';
import Link from 'next/link';

interface GNBProps {
  userImage?: string;
}

const GNB: React.FC<GNBProps> = ({ userImage }) => {
  return (
    <nav className="gnb">
      <Image src={Logo} alt="Logo" className="logo" />
      {userImage ? (
        <Image src={userImage} alt="User" className="user-image" />
      ) : (
        <Link href="/login" className="gnb-login">
          로그인
        </Link>
      )}
    </nav>
  );
};

export default GNB;
