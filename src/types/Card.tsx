import imageProp from '@/types/Image';
import { recentReview, reviewDetailType } from './ReviewProps';

export interface CardProps {
  image: imageProp;
  wineName: string;
  wineDesc: string;
  winePrice: number;
  childeren?: React.ReactNode;
  review?: recentReview | string;
  avgRating?: number | null;
  reviewCount?: number;
}
