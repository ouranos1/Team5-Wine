import { UserProps } from '@/types/UserProps';
import CallAPI from './CallApi';
import { LoginProps } from '@/types/LoginProps';

export async function signUpAPI(user :UserProps) {
    const method = "post";
    let query = "/auth/signUp";
    const apiName = "signUp";
    const body = user;
    await CallAPI({method, query, body, apiName});
}

export async function signInAPI(user : LoginProps) {
    const method = "post";
    let query = "/auth/signIn";
    const apiName = "signIn";
    const body = user;
    await CallAPI({method, query, body, apiName});
}

export async function refreshToken(token : object) {
    const method = "post";
    let query = "/auth/refresh-token";
    const apiName = "refreshToken";
    const body = token;
    await CallAPI({method, query, body, apiName});
}