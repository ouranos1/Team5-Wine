import { createWineBody } from "@/types/WineProps";
import CallAPI from "./CallApi";

export async function addWineAPI(props: createWineBody) {
    const method = "post";
    let query = `/wines`;
    const apiName = "addwine";
    const body = props;
    await CallAPI({method, query, body, apiName});
}

export async function wineListAPI() {
    //여기도 리미트 값을 설정하기 위한 방식이 필요
    let count = 5;
    const method = "get";
    // let query = `/wines?limit=${count}&cursor=${}&minPrice=${}&maxPrice=${}&rating=${}`;
    const apiName = "winelist";
    const body = null;
    await CallAPI({method, query, body, apiName});
}