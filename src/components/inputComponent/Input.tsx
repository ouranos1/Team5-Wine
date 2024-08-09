'use client';

import React from 'react';
import './Input.scss';
import { InputProps } from '@/types/Input';

const Input: React.FC<InputProps> = ({ size, placeholder = '입력하시오.', inputname = '입력하시오.', defaultValue = '', ...rest }) => {
  return (
    <div className="form" data-size={size}>
      {inputname && (
        <p className="inputname" data-size={size}>
          {inputname}
        </p>
      )}
      <input className="input" data-size={size} placeholder={placeholder} defaultValue={defaultValue} {...rest} />
    </div>
  );
};

export default Input;
