import { user } from '@/types/UserProps';
import CallAPI from './CallApi';
import { signUpRequestBody, signInRequestBody, signUpResponse, signResponse, oauthRequestBody  } from '@/types/AuthProps';

export async function signUpAPI(user :signUpRequestBody) {
    const method = "post";
    let query = "/auth/signUp";
    const apiName = "signUp";
    const body = user;
    await CallAPI({method, query, body, apiName});
}

export async function signInAPI(user : signInRequestBody) {
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

export async function providerAPI(props: oauthRequestBody, provider:string) {
    const method = "post";
    let query = `/auth/signIn/${provider}`;
    const apiName = "refreshToken";
    const body = props;
    await CallAPI({method, query, body, apiName});
}
