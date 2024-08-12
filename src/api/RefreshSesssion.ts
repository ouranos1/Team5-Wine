import axios from 'axios';
import { getSession, signIn } from 'next-auth/react';

// 세션 및 토큰 갱신 함수
export async function refreshSession() {
  try {
    // 현재 세션에서 리프레시 토큰 가져오기
    const session = await getSession();
    const refreshToken = session?.user.user.refreshToken;
    // console.log(session?.user.user.refreshToken);

    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    // 서버에 새 토큰 요청
    const response = await axios.post('/update-session', { refreshToken });
    const { accessToken, refreshToken: newRefreshToken } = response.data;

    // 세션을 강제로 갱신하여 새로운 토큰 저장
    await signIn('credentials', {
      redirect: false,
      accessToken,
      refreshToken: newRefreshToken,
    });

    // 갱신된 세션 확인
    const updatedSession = await getSession();
    console.log('Updated Session:', updatedSession);

    return updatedSession;
  } catch (error) {
    console.error('Failed to refresh session:', error);
    throw error;
  }
}
