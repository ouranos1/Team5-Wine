'use client';

import React from 'react';
import './Button.scss';
import { ButtonProps } from '@/types/ButtonProps';

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
