import React from 'react';
import './CardDetail';

interface Props {
  size: 'S' | 'Group63' | 'L';
  image: string;
  wineName: string;
  wineDesc: string;
  winePrice: string;
}

const Card: React.FC<Props> = ({ size, image, wineName, wineDesc, winePrice }) => {
  return (
    <div className="card" data-size={size}>
      <img src={image} alt="Card Image" className="cardImage" data-size={size} />
      <div className="wine">
        <div className="wineName" data-size={size}>
          {wineName}
        </div>
        <div className="wineDesc" data-size={size}>
          {wineDesc}
        </div>
      </div>
      <p className="winePrice" data-size={size}>
        {winePrice}
      </p>
    </div>
  );
};

export default Card;
