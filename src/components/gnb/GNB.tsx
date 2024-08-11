'use client';

import React, { useEffect, useState } from 'react';
import './GNB.scss';
import Logo from '@/assets/icon/logo_wine.svg';
import Image from 'next/image';
import Link from 'next/link';
import { user } from '@/types/UserProps';
import Dropdown from '../dropdown/DropDown';

interface GNBProps {
  userImage?: string;
}

const handleMenu = () => {
  const items = [
    { name: '마이페이지', path: '/myprofile' },
    { name: '로그아웃', path: '/' },
  ];

  return (
    <div>
      <Dropdown items={items} />
    </div>
  );
};

const GNB: React.FC<GNBProps> = ({ userImage }) => {
  const [userData, setUserData] = useState();
  const userString = localStorage.getItem('User');
  useEffect(() => {
    if (userString) {
      try {
        setUserData(JSON.parse(userString));
      } catch (e) {
        console.error('Failed to parse user data from localStorage:', e);
      }
    }
  }, [userString]);

  return (
    <nav className="gnb">
      <Image src={Logo} alt="Logo" className="logo" />
      {userData ? (
        <Image src={userData.image} alt="User" className="user-image" onClick={handleMenu} />
      ) : (
        <Link href="/login" className="gnb-login">
          로그인
        </Link>
      )}
    </nav>
  );
};

export default GNB;
