'use client';

import React from 'react';
import './GNB.scss';
import Logo from '@/assets/icon/logo_wine.svg';
import Image from 'next/image';
import Link from 'next/link';

const GNB: React.FC = ({ }) => {
  return (
    <nav className="gnb">
      <Image src={Logo} alt="Logo" className="logo" />
      <Link href="/login" className="gnb-login">
        로그인
      </Link>
    </nav>
  );
};

export default GNB;
