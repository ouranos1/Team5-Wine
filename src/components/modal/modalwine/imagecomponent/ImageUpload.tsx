import React, { useState } from 'react';
import { ImageAPI } from '@/api/Image'; // 서버에 이미지를 업로드하는 API
import './ImageUpload.scss';
import photo from '@/assets/icon/photo.svg';
import Image from 'next/image';

function ImageUpload({ onImageUpload }: { onImageUpload: (url: string | null) => void }) {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        // 이미지 파일을 서버에 업로드하고 URL을 받아옴
        const response = await ImageAPI(formData);
        const imgUrl = response.data.url; // 서버에서 반환된 이미지 URL

        setImage(imgUrl);
        onImageUpload(imgUrl);
      } catch (error) {
        alert('이미지 업로드에 실패했습니다.');
      }
    }
  };

  return (
    <>
      <h3 className="image-upload-title">와인 사진</h3>
      <label htmlFor="image-upload" className="image-upload">
        {image ? (
          <div className="uploaded-image">
            <Image src={image} alt="이미지 미리보기" layout="fill" />
          </div>
        ) : (
          <div className="upload-placeholder">
            <Image src={photo} alt="카메라 아이콘" width={30} height={30} />
          </div>
        )}
        <input id="image-upload" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
      </label>
    </>
  );
}

export default ImageUpload;
