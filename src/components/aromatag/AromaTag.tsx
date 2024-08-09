import { Aroma, AromaName, AromaProps } from '@/types/Aroma';
import '@/components/aromatag/AromaTag.scss';
import { createAromaList } from '@/utils/AromaUtils';
import { useState } from 'react';

interface AromaTagProps {
  list?: AromaProps[];
  option: string; // view, edit 이를 통해 리뷰등록에 보이는 태그인지 리뷰 목록에서 보이는 보유 태그인지 구분할 예정
}

export function AromaTag({ list = [], option }: AromaTagProps) {
  // 태그의 선택 상태를 관리하는 로컬 상태 추가
  const [selectedTags, setSelectedTags] = useState(() => {
    return list.reduce((acc, aroma) => {
      acc[aroma.name.eng] = aroma.selected;
      return acc;
    }, {} as Record<string, boolean>);
  });

  const handleTagClick = (engName: string) => {
    setSelectedTags((prevSelectedTags) => ({
      ...prevSelectedTags,
      [engName]: !prevSelectedTags[engName],
    }));
  };
  const renderContent = () => {
    if (option === 'edit') {
      return list.map((aroma) => (
        <p key={aroma.name.eng} className={`aroma-tag ${selectedTags[aroma.name.eng] ? 'on' : 'off'}`} onClick={() => handleTagClick(aroma.name.eng)}>
          {aroma.name.kor}
        </p>
      ));
    } else if (option === 'view') {
      return list
        .filter((aroma) => aroma.selected)
        .map((aroma) => (
          <p key={aroma.name.eng} className={`aroma-tag off`}>
            {aroma.name.kor}
          </p>
        ));
    }
  };

  return <div className="aroma-tag-layer">{renderContent()}</div>;
}

export default AromaTag;
