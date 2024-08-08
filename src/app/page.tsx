/*export default function Home() {
  return <div></div>;
}
*/
'use client';
import React from 'react';
import Image from 'next/image';
//import styles from './page.module.css';
import Input from '@/components/inputcomponent/Input';

export default function Home() {
  return (
    <>
      <Input size="S" placeholder="Enter your email address" inputname="이메일" />
    </>
  );
}
