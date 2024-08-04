'use client';

import './OAuthButton.scss';
import Image from 'next/image';

interface OAuthbuttonProps {
  logo: string;
  text: string;
  onClick: () => void;
}

export default function OAuthButton({ logo, text, onClick }: OAuthbuttonProps) {
  return (
    <div className="oauth-container">
      <button className="button-oauth" onClick={onClick}>
        <Image className="oauth-logo" src={logo} alt="로고"></Image>
        {text}
      </button>
    </div>
  );
}
