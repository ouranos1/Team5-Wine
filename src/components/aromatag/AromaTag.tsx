import { Aroma } from '@/types/Aroma';
import '@/components/aromatag/AromaTag.scss';

export function AromaTag({ name, selected }: Aroma) {
  return (
    <div className="aroma-tag">
      <p className={selected ? 'on' : 'off'}>{name.kor}</p>
    </div>
  );
}

export default AromaTag;
