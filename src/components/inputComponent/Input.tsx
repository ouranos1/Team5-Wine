'use client';

import React, { useState } from 'react';
import './Input.scss';

interface Props {
  type: 'email' | 'password';
  size: 'S' | 'L';
  placeholder?: string;
  inputname: string;
}

const Input: React.FC<Props> = ({ type, size, placeholder = '입력하시오.', inputname = '입력하시오.' }) => {
  const [inputvalue, setInputvalue] = useState('');

  return (
    <form className="form" data-size={size} data-type={type}>
      {inputname != '' && (
        <label className="inputname" data-size={size}>
          {inputname}
        </label>
      )}
      <input className="input" data-size={size} type={type} placeholder={placeholder} value={inputvalue} onChange={(e) => setInputvalue(e.target.value)} />
    </form>
  );
};

export default Input;
