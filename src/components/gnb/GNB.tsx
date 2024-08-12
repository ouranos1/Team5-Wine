'use client';

import React, { useEffect, useState } from 'react';
import './GNB.scss';
import Logo from '@/assets/icon/logo_wine.svg';
import Image from 'next/image';
import Link from 'next/link';
import { user } from '@/types/UserProps';
import Dropdown from '../dropdown/DropDown';
import defaultprofile from '@/assets/icon/defaultprofile.webp';
import { useSession } from 'next-auth/react';

interface GNBProps {
  userImage?: string;
}

// const GNB: React.FC = () => {
//   const items = [
//     { name: '마이페이지', path: '/myprofile' },
//     { name: '로그아웃', path: '/' },
//   ];
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <div>
//       <Dropdown items={items} />
//     </div>
//   );
// };

const GNB: React.FC<GNBProps> = () => {
  const session = useSession();
  const userData = session.data?.user.user;

  console.log(session);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    { name: '마이페이지', path: '/myprofile' },
    { name: '로그아웃', path: '/' },
  ];

  return (
    <nav className="gnb">
      <Image src={Logo} alt="Logo" className="logo" />
      {userData ? (
        <div className="gnb-right">
          <Image src={userData.image ? userData.image : defaultprofile} alt="User" className="user-image" onClick={toggleDropdown} />
          {isOpen && ( // isOpen이 true일 때만 드롭다운을 렌더링
            <div className="dropdown-container">
              <Dropdown items={items} />
            </div>
          )}
        </div>
      ) : (
        <Link
          href="/login"
          className="gnb-login"
          style={{
            color: 'white',
          }}
        >
          로그인
        </Link>
      )}
    </nav>
  );
};

export default GNB;
