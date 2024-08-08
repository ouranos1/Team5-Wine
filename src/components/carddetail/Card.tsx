import React from 'react';
import './Card';
import imageProp from '@/types/Image';

interface Props {
  size: 'S' | 'M' | 'L';
  image: imageProp;
  wineName: string;
  wineDesc: string;
  winePrice: number;
  childeren?: React.ReactNode;
}
//size가 S이면 className이 wine인 div태그를 제거되도록 했습니다.
const Card: React.FC<Props> = ({ size, image, wineName, wineDesc, winePrice }) => {
  return (
    <div className="hiddenCard">
      <div className="card" data-size={size}>
        <img src={image ? image : ''} alt="Card Image" className="cardImage" data-size={size} />
        {size !== 'S' ? (
          <div className="wine">
            <div className="wineName" data-size={size}>
              {wineName}
            </div>
            <div className="wineDesc" data-size={size}>
              {wineDesc}
            </div>
          </div>
        ) : (
          <>
            <div className="wineName" data-size={size}>
              {wineName}
            </div>
            <div className="wineDesc" data-size={size}>
              {wineDesc}
            </div>
          </>
        )}
        <div className="winePrice" data-size={size}>
          {winePrice}
        </div>
      </div>
    </div>
  );
};

export default Card;
