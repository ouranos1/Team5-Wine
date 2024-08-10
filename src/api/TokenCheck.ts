export function getToken() {
    const tokenData = {
        "accessToken" : localStorage.getItem('accessToken'),
        "refreshToken" : localStorage.getItem("refreshToken")
    }
    return tokenData;
}

export function tokenErrorCheck(ResponseMessage: string) {

    // if(ResponseMessage)

}