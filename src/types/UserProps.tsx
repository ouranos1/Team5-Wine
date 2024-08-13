import { id } from "@/types/Id";
import { imageProp } from "@/types/Image";
import { nickName } from "@/types/NickName";

export interface user {
    image : imageProp;
    updatedAt : Date;
    createdAt : Date;
    id : id;
    nickname : nickName;
    email : string | null;
}

export interface reviewUser {
    id : number;
    nickname : string;
    image : imageProp;
}

export interface editUser {
    image : imageProp;
    nickname : nickName;
}