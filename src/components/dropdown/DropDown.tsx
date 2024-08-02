'use client';

import { useState } from 'react';
import Link from 'next/link';
import '@/components/dropdown/DropDown.scss';

type DropdownProps = {
    items: { name: string, path: string }[];
};

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-wrapper">
            <button onClick={toggleDropdown} className="toggle-button">
                🍔
            </button>
            {isOpen && (
                <ul className="dropdown">
                    {items.map((item, index) => (
                        <li key={index} className="dropdown-item" >
                            <Link href={item.path} passHref>
                                <div onClick={() => setIsOpen(false)}>{item.name}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
            )
            }
        </div >
    );
};

export default Dropdown;
