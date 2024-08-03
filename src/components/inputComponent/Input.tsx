'use client';

import React, { useState } from 'react';
import './Input.scss';

interface Props {
  type: 'email' | 'password';
  size: 'S' | 'L';
  onSubmit: (value: string) => void;
  placeholder?: string;
  inputname?: string;
}

const Input: React.FC<Props> = ({ type, size, onSubmit, placeholder = '입력하시오.', inputname = '' }) => {
  const [inputvalue, setInputvalue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputvalue);
  };

  return (
    <form className="form" data-size={size} data-type={type} onSubmit={handleSubmit}>
      <label className="inputname" data-size={size}>
        {inputname}
      </label>
      <input className="input" data-size={size} type={type} placeholder={placeholder} value={inputvalue} onChange={(e) => setInputvalue(e.target.value)} />
    </form>
  );
};

export default Input;
