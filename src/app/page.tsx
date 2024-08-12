'use client';

import GNB from '@/components/gnb/GNB';
import { ModalFilter } from '@/components/modal/modalfilter/ModalFilter';
import ModalWine from '@/components/modal/modalwine/ModalWine';
import ModalDeleteWine from '@/components/modal/modalwinedelete/ModalWineDelete';
import { wine } from '@/types/WineProps';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wines, setWines] = useState<wine[]>([]);

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>모달버튼</button>
      {/* <ModalWine isModalOpen={isModalOpen} closeModal={closeModal} /> */}
      {/* <ModalFilter isModalOpen={isModalOpen} closeModal={closeModal} setWines={setWines} /> */}
      <ModalDeleteWine isModalOpen={isModalOpen} closeModal={closeModal} />

      <div>
        {wines.map((wine) => (
          <div key={wine.id}>
            {/* {wine.image ? <img src={wine.image} alt="와인 이미지" /> : <p>이미지가 없습니다.</p>} */}
            <h4>{wine.name}</h4>
            <p>가격: ₩{wine.price.toLocaleString()}</p>
            <p>등급: {wine.avgRating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
