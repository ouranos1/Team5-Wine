'use client';
import { useState } from 'react';

type DropdownProps = {
    items: string[];
};

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <button onClick={toggleDropdown} style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Toggle Dropdown
            </button>
            {isOpen && (
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, position: 'absolute', backgroundColor: '#fff', border: '1px solid #ccc', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '4px', marginTop: '8px' }}>
                    {items.map((item, index) => (
                        <li key={index} style={{ padding: '8px 16px', cursor: 'pointer', borderBottom: '1px solid #ddd' }}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
