/*import React, { useState, useEffect } from 'react';
import './page.scss';
import { ModalFilter } from '@/components/modal/modalfilter/ModalFilter';
import Input from '@/components/inputComponent/Input';
interface PageProps {
  params: { id: string };
  modal: boolean;
}
const WineListPage: React.FC<PageProps>=({params})=>{
  const condition1=1;
  const condition2=1;
  return(
    <div className='page'>
      <div className='페이지상단'>
        <text>이번 달 추천 와인</text>
        <div className='wines'><div/>
        <div className='circle'>
          <img />
        </div>
      </div>
      {condition1&&(
        <div className='모달'>
          <ModalFilter />
        </div>
      )}
      <div className='페이지하단'>
        <div className='인풋'>
          {!condition1&&(<img className='필터버튼'/>)}
          <Input />
          {!condition1&&condition2&&()}
        </div>
        <div className='카드와인들'></div>
      </div>
    </div>
    );  
};

export default WineListPage;
</div>*/
