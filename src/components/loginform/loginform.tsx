// components/LoginForm.tsx
import React from 'react';
import Link from 'next/link';
import './loginform.scss';
import Button from '../button/Button';

const LoginForm: React.FC = () => {
  return (
    <div className="login-container">
      <Image src={Logo} alt="Logo" className="logo" />
      <form action="/login" method="post" className={styles.form}>
        <input type="email" name="email" placeholder="이메일" required />
        <input type="password" name="password" placeholder="비밀번호" required />
        <Link href="/forgot-password">비밀번호를 잊으셨나요?</Link>
        <Button text="로그인" onClick={} />
      </form>
      계정이 없으신가요?<Link href="/register"> 회원가입하기</Link>
    </div>
  );
};

export default LoginForm;
