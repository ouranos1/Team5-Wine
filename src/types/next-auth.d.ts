import NextAuth from "next-auth"

// TODO: 임의로 옮겨둠. 나중에 AuthProps 에 있는 타입과 합치기
interface User {
  image : imageProp
  updatedAt : Date;
  createdAt : Date;
  id : id;
  nickname : nickName;
  email : string | null;
}

interface SignResponse {
  user: UserInfo;
}

interface UserInfo {
  user: User;
  refreshToken?: string;
  accessToken?: string;
}


declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    user: SignResponse;
  }
}

