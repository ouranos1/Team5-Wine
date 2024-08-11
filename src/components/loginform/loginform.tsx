import { signInAPI } from '@/api/Auth';
import { signInRequestBody, signResponse } from '@/types/AuthProps';
import React, { useState } from 'react';
import Image from 'next/image';
import Input from '@/components/inputComponent/Input';
import Button from '@/components/button/Button';
import Logo from '@/assets/icon/wineLogo.svg';
import Link from 'next/link';
import './loginform.scss';
import OAuthButton from '../oauthbuttoncomponent/OAuthButton';
import googleLogo from '@/assets/icon/googleLogo.svg';
import kakaoLogo from '@/assets/icon/kakaoLogo.svg';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface LoginFormProps {
  onLoginSuccess: (image: string, accessToken: string, refreshToken: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const user: signInRequestBody = { email, password };
      const response = await signInAPI(user);
      // onLoginSuccess(response.user.image.url, response.accessToken, response.refreshToken); // 로그인 성공 시 이미지 및 토큰 전달
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      localStorage.setItem('User', JSON.stringify(response.user));
      // localStorage.removeItem('accessToken');
      // localStorage.removeItem('refreshToken');
      // localStorage.removeItem('User');
      router.push('/');
      console.log(response.user);
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
        <OAuthButton logo={googleLogo} text="google로 시작하기" onClick={() => signIn('google')} />
        <OAuthButton logo={kakaoLogo} text="Kakao로 시작하기" onClick={() => signIn('kakao')} />
        <p className="signup-link">
          계정이 없으신가요? <Link href="/SignUp">회원가입하기</Link>
        </p>
      </form>
    </div>

    /* <SearchBar placeholder="와인을 검색해 보세요" />
      <OAuthButton logo={googleLogo} text={session ? '로그아웃' : 'google로 시작하기'} onClick={session ? signOut : () => signIn('google')} />
      <OAuthButton logo={kakaoLogo} text={session ? '로그아웃' : 'kakao로 시작하기'} onClick={session ? signOut : () => signIn('kakao')} /> */

    // <div>
    //     <h2>Login</h2>
    //     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
    //     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
    //     <button onClick={handleLogin}>Login</button>
    // </div>
  );
};

export default LoginForm;
