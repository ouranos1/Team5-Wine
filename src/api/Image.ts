import CallAPI from "./CallApi";
import imageProp from "@/types/Image";

export async function ImageAPI(imgurl : imageProp) {
    const method = "post";
    let query = "/images/upload";
    const apiName = "image";
    const body = imgurl;
    await CallAPI({method, query, body, apiName});
}