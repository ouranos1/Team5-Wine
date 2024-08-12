'use client';

import Link from 'next/link';
import '../dropdown/DropDown.scss';

interface SHDropdownProps {
  items: { name: string; func: () => void }[];
}


const SHDropdown: React.FC<SHDropdownProps> = ({ items }) => {

  return (
    <div className="dropdown-wrapper">
      <ul className="dropdown">
        {items.map((item, index) => (
          <li key={index} className="dropdown-item">
            <div onClick={item.func}>{item.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SHDropdown;
