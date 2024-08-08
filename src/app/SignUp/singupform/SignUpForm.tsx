import Image from 'next/image';
import wineLogo from '@/assets/icon/wineLogo.svg';
import Input from '@/components/inputComponent/Input';
import Button from '@/components/button/Button';
import React, { useState } from 'react';
import './SignUpForm.scss';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateEmail = (value: string) => {
    if (!value) return '이메일은 필수 입력입니다.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return '이메일 형식으로 작성해 주세요.';
    return '';
  };

  const validateNickname = (value: string) => {
    if (!value) return '닉네임은 필수 입력입니다.';
    if (value.length > 20) return '닉네임은 최대 20자까지 가능합니다.';
    return '';
  };

  const validatePassword = (value: string) => {
    if (!value) return '비밀번호는 필수 입력입니다.';
    if (value.length < 8) return '비밀번호는 최소 8자 이상입니다.';
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]*$/;
    if (!passwordRegex.test(value)) return '비밀번호는 숫자, 영문, 특수문자로만 가능합니다.';
    return '';
  };

  const validateConfirmPassword = (value: string) => {
    if (!value) return '비밀번호 확인을 입력해주세요.';
    if (value !== password) return '비밀번호가 일치하지 않습니다.';
    return '';
  };

  const handleChange = (field: string, value: string) => {
    let errorMessage = '';
    switch (field) {
      case 'email':
        errorMessage = validateEmail(value);
        setEmail(value);
        break;
      case 'nickname':
        errorMessage = validateNickname(value);
        setNickname(value);
        break;
      case 'password':
        errorMessage = validatePassword(value);
        setPassword(value);
        break;
      case 'confirmPassword':
        errorMessage = validateConfirmPassword(value);
        setConfirmPassword(value);
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [field]: errorMessage }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some((error) => error);
    if (!hasErrors) {
      console.log({ email, nickname, password });
      alert('회원가입이 완료되었습니다.');
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h1>
          <Image src={wineLogo} alt="와인 로고" width={104} height={30} />
        </h1>
        <Input type="email" size="L" placeholder="whyne@email.com" inputname="이메일" value={email} onChange={(e) => handleChange('email', e.target.value)} />
        {errors.email && <p>{errors.email}</p>}

        <Input type="text" size="L" placeholder="whyne" inputname="닉네임" value={nickname} onChange={(e) => handleChange('nickname', e.target.value)} />
        {errors.nickname && <p>{errors.nickname}</p>}

        <Input type="password" size="L" placeholder="비밀번호" inputname="비밀번호" value={password} onChange={(e) => handleChange('password', e.target.value)} />
        {errors.password && <p>{errors.password}</p>}

        <Input type="password" size="L" placeholder="비밀번호 확인" inputname="비밀번호 확인" value={confirmPassword} onChange={(e) => handleChange('confirmPassword', e.target.value)} />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

        <Button text="가입하기" onClick={handleSubmit} />
      </form>
    </div>
  );
}
