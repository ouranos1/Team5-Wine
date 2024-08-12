import { getSession, signIn } from 'next-auth/react';
import axios from 'axios';

// 세션 및 토큰 갱신 함수
export async function updateSession(newAccessToken: string) {
  const session = await getSession();
  if (session) {
    // 새 액세스 토큰을 세션에 설정
    session.user.accessToken = newAccessToken;

    // 새로 발급받은 토큰으로 세션 업데이트
    await signIn('credentials', {
      redirect: false,
      accessToken: newAccessToken,
      refreshToken: session.user.refreshToken,
    });

    // 세션이 업데이트되었는지 확인
    const updatedSession = await getSession();
    console.log('Updated Session:', updatedSession);
  }
}
