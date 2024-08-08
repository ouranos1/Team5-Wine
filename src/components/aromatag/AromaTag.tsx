import { Aroma, AromaName, AromaProps } from '@/types/Aroma';
import '@/components/aromatag/AromaTag.scss';
import { createAromaList } from '@/utils/AromaUtils';

interface AromaTagProps {
  list?: AromaProps[];
  option: string; // view, edit 이를 통해 리뷰등록에 보이는 태그인지 리뷰 목록에서 보이는 보유 태그인지 구분할 예정
}

export function AromaTag({ list = [], option }: AromaTagProps) {
  // const aromaTagList = createAromaList(list);

  const renderContent = () => {
    if (option === 'edit') {
      return list.map((aroma) => (
        <p key={aroma.name.eng} className={`aroma-tag ${aroma.selected ? 'on' : 'off'}`}>
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
