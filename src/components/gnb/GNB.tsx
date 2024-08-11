'use client';

import React, { useEffect, useState } from 'react';
import './GNB.scss';
import Logo from '@/assets/icon/logo_wine.svg';
import Image from 'next/image';
import Link from 'next/link';
import { user } from '@/types/UserProps';
import Dropdown from '../dropdown/DropDown';
import defaultprofile from '@/assets/icon/defaultprofile.webp';

const GNB: React.FC = () => {
  const items = [
    { name: '마이페이지', path: '/myprofile' },
    { name: '로그아웃', path: '/' },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [userData, setUserData] = useState<user>();
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
        <>
          <Image src={userData.image ? userData.image : defaultprofile} alt="User" className="user-image" onClick={toggleDropdown} />
          <Dropdown items={items} />
        </>
      ) : (
        <Link href="/login" className="gnb-login">
          로그인
        </Link>
      )}
    </nav>
  );
};

export default GNB;
