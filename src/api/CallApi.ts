import axios from 'axios';
import { ApiCallProps } from '@/types/ApiCallProps';
import { refreshSession } from '@/api/RefreshSesssion';
import { getSession } from 'next-auth/react';

const API_KEY = process.env.NEXT_PUBLIC_API_URL;

const apiInstance = axios.create({
  baseURL: API_KEY,
});

apiInstance.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    const accessToken = session?.user.accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response && (error.response.status === 401 || error.response.status === 403) && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // 액세스 토큰을 갱신하고, 갱신된 세션을 적용합니다.
        await refreshSession(); // 세션을 갱신합니다.

        const session = await getSession();
        const newAccessToken = session?.user.accessToken;

        apiInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return apiInstance(originalRequest);
      } catch (refreshError) {
        console.error('Failed to refresh token:', refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

function ErrorCheck(method: string, apiName: string) {
  const errorMessage: { [key: string]: string } = {
    get: `${apiName}의 데이터를 받아오는데 실패하였습니다.`,
    put: `${apiName}의 데이터 수정에 실패하였습니다.`,
    post: `${apiName}에 데이터를 전송하는데 실패하였습니다.`,
    patch: `${apiName}의 데이터 수정에 실패하였습니다.`,
    delete: `${apiName}의 데이터 삭제에 실패하였습니다.`,
  };
  return errorMessage[method] || `알 수 없는 에러가 발생하였습니다.;`;
}

async function CallAPI({ method, query, body = null, apiName }: ApiCallProps) {
  let order = query;
  try {
    const response = await apiInstance({
      method,
      url: order,
      data: body !== null ? body : undefined,
    });
    return response.data;
  } catch (error) {
    console.log(ErrorCheck(method, apiName));
    throw error;
  }
}

export default CallAPI;
