import { id } from "@/types/Id";
import { imageProp } from "@/types/Image";
import { ReviewListType, recentReview } from "@/types/ReviewProps";

export interface wine {
    id : id;
    name : string;
    region : string;
    image : imageProp;
    price : number;
    avgRation : number;
    type : wineType;
}

export interface wineDetailType {
    id : id;
    name : string;
    region : string;
    image : imageProp;
    price : number;
    avgRating : number;
    reviewCount : number;
    recentReview : recentReview | null;
    userId : id;
    reviews : [ReviewListType];
    avgRations : number;
}

export interface winListType {
    id : id;
    name : string;
    region : string;
    image : imageProp;
    avgRation : number;
    reviewCount : number;
    recentReview : recentReview | null;
    userId : id
}

export interface createWineBody {
    name : string;
    region : string;
    image : imageProp;
    price : number;
    type : wineType;
}

type wineTypeName =
  | "RED"
  | "WHITE"
  | "SPARKLING";

export interface wineType {
    name : wineTypeName
    selected : boolean;
}
