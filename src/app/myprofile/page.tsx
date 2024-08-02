"use client"

import SlideComponent from "@/components/slidecomponent/SlideComponent";
import { SildeOptionProps } from "@/types/SlideOption";
import "@/components/slidecomponent/SlideComponent.scss";

import {signUpAPI, signInAPI, refreshToken} from "@/api/Auth";
import { UserProps } from "@/types/UserProps";
import { useEffect } from "react";
import { LoginProps } from "@/types/LoginProps";

function MyProfile() {

    const testoption:SildeOptionProps = {
        SlideOptionTitle : "test옵션타이틀",
        LeftOption : "test레프트옵션",
        RightOption : "test라이트옵션",
        value : 70
    };

    const testoption2:SildeOptionProps = {
        SlideOptionTitle : "test옵션타이틀",
        LeftOption : "test레프트옵션",
        RightOption : "test라이트옵션",
    };

    const test:UserProps = {
        email : "test2@test2.com",
        nickname : "test2",
        password : "12345678",
        passwordConfirmation : "12345678"
    }

    const test2:LoginProps = {
        email : "gwangho@gwangho.com",
        password : "12345678",
    }

    const refreshtest:object = {
        refreshToken : "fdasfdsa"
    }

    useEffect(() => {
        async function tt() { 
            // await refreshToken(refreshtest);
        }
        tt();
    }, []);

    return (
        <div>
            <SlideComponent {...testoption}/>
            <SlideComponent {...testoption2}/>
        </div>
    );
}

export default MyProfile;