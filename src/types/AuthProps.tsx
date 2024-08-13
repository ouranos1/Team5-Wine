import { imageProp } from '@/types/Image';
import { nickName } from '@/types/NickName';
import { user } from '@/types/UserProps';

export interface signResponse {
  refreshToken: string;
  accessToken: string;
  user: user;
}

export interface signUpRequestBody {
  image?: imageProp;
  password: string;
  passwordConfirmation: string;
  nickname: nickName;
  email: string;
}

export interface signInRequestBody {
  email: string;
  password: string;
}

export interface oauthRequestBody {
  state: string;
  redirectUrl: string;
  token: string; // 간편 로그인으로 발급받은 토큰
}

export interface signUpResponse {
  refreshToken: string;
  accessToken: string;
  user: user;
}
