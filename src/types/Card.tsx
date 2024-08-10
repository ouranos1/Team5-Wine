import imageProp from '@/types/Image';

export interface CardProps {
  size?: 'S' | 'M' | 'L';
  image: imageProp;
  wineName: string;
  wineDesc: string;
  winePrice: number;
  childeren?: React.ReactNode;
}
