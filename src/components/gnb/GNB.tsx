'use client';

import React from 'react';
import './GNB.scss';
import Logo from '@/assets/logo_wine.svg';

const GNB: React.FC = ({}) => {
  return (
    <nav className="gnb">
      <img src={Logo} alt="Logo" className="logo" />
    </nav>
  );
};

export default GNB;
