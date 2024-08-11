import { signInAPI } from '@/api/Auth';
import { signInRequestBody, signResponse } from '@/types/AuthProps';
import React, { useState } from 'react';
import Image from 'next/image';
import Input from '@/components/inputComponent/Input';
import Button from '@/components/button/Button';
import Logo from '@/assets/icon/wineLogo.svg';
import Link from 'next/link';
import './loginform.scss';

interface LoginFormProps {
  onLoginSuccess: (image: string, accessToken: string, refreshToken: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const user: signInRequestBody = { email, password };
      const response = await signInAPI(user);
      // onLoginSuccess(response.user.image.url, response.accessToken, response.refreshToken); // 로그인 성공 시 이미지 및 토큰 전달
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      // localStorage.removeItem('accessToken');
      // localStorage.removeItem('refreshToken');

      console.log(response.accessToken);
    } catch (error) {
      console.error('Error');
    }
  };

  return (
    <div className="signin-form-container">
      <form onSubmit={handleSignIn}>
        <div className="signin-header">
          <Image src={Logo} alt="wine" width={104} height={30} />
        </div>
        <Input type="email" size="L" placeholder="이메일 입력" inputname="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" size="L" placeholder="비밀번호 입력" inputname="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
        <p className="fake-pw-finder">비밀번호를 잊으셨나요?</p>
        <Button text="로그인" type="submit" />

        <p className="signup-link">
          계정이 없으신가요? <Link href="/SignUp">회원가입하기</Link>
        </p>
      </form>
    </div>
    // <div>
    //     <h2>Login</h2>
    //     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
    //     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
    //     <button onClick={handleLogin}>Login</button>
    // </div>
  );
};

export default LoginForm;
