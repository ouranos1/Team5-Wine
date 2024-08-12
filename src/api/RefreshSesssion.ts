import axios from 'axios';
import { getSession } from 'next-auth/react';

export async function refreshSession() {
  try {
    const response = await axios.post('/api/update-session');
    const { accessToken, refreshToken } = response.data;

    // 세션을 강제로 갱신하기 위해 다음과 같이 처리할 수 있습니다.
    await getSession(); // getSession() 호출을 통해 세션 업데이트를 시도합니다.

    // 필요한 경우, 새로 갱신된 토큰을 Axios 인스턴스에 설정할 수 있습니다.
    // 예: apiInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    return { accessToken, refreshToken };
  } catch (error) {
    console.error('Failed to refresh session:', error);
    throw error;
  }
}
