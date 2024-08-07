import { Aroma, AromaLabels, AromaName } from '@/types/Aroma';

export const createAromaObjects = (): Aroma[] => {
  return Object.keys(AromaLabels).map((key) => {
    const aromaName = key as AromaName;
    return {
      name: {
        eng: aromaName,
        kor: AromaLabels[aromaName],
      },
      selected: false, // 초기에는 선택되지 않은 상태
    };
  });
};

export const aromaArray = createAromaObjects();
