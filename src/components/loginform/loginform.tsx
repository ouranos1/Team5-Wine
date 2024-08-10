import { signInAPI } from '@/api/Auth';
import { signInRequestBody, signResponse } from '@/types/AuthProps';
import React, { useState } from 'react';

interface LoginFormProps {
  onLoginSuccess: (image: string, accessToken: string, refreshToken: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
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
    <div>
      <h2>Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
