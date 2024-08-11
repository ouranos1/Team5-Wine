import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id : 'email',
      name: 'Credentials',
      credentials: {
        username: { label: "email", type: "email", placeholder: "Email" },
        password: {  label: "password", type: "password" }
      },
      async authorize(credentials, req) {
        // TODO: 사용자 정보 가져와서 처리. 
        // https://winereview-api.vercel.app/docs/#/Auth/SignIn
        const res = await fetch("/auth/signIn", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json();
  
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    }),    
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_ID || '',
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || '',
      clientSecret: process.env.NAVER_CLIENT_SECRET || '',
    })
  ],
  // TODO 
  // callbacks: {
  //   async signIn({ account, profile }) {
  //     if (account?.provider === "google") {
  //       // TODO: 
  //       return profile.email_verified && profile.email.endsWith("@example.com")
  //     }
  //     return true // Do different verification for other providers that don't have `email_verified`
  //   },
  // }
});

export { handler as GET, handler as POST };
