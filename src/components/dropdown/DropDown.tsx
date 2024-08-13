'use client';

import Link from 'next/link';
import '@/components/dropdown/DropDown.scss';
import { DropdownProps } from '@/types/DropDown';
import { signOut } from 'next-auth/react';

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const handleItemClick = (item: { name: string; path: string }) => {
    // 여기에 버튼별 역할 부여하기
    // 예시: 로그아웃을 클릭
    if (item.name === '로그아웃') {
      signOut();
    }
    // 드롭다운 닫기
  };

  return (
    <div className="dropdown-wrapper">
      <ul className="dropdown">
        {items.map((item, index) => (
          <Link href={item.path} passHref>
            <li onClick={() => handleItemClick(item)} key={index} className="dropdown-item">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
