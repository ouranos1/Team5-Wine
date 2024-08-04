import { UserProps } from '@/types/UserProps';
import CallAPI from './CallApi';
import { LoginProps } from '@/types/LoginProps';

export function signUpAPI(user :UserProps) {
    const method = "post";
    let query = "/auth/signUp";
    const apiName = "signUp";
    const body = user;
    CallAPI({method, query, body, apiName});
}

export function signInAPI(user : LoginProps) {
    const method = "post";
    let query = "/auth/signIn";
    const apiName = "signIn";
    const body = user;
    CallAPI({method, query, body, apiName});
}

export function refreshToken(token : object) {
    const method = "post";
    let query = "/auth/refresh-token";
    const apiName = "refreshToken";
    const body = token;
    CallAPI({method, query, body, apiName});
}