export type AromaName = 'CHERRY' | 'BERRY' | 'OAK' | 'VANILLA' | 'PEPPER' | 'BAKING' | 'GRASS' | 'APPLE' | 'PEACH' | 'CITRUS' | 'TROPICAL' | 'MINERAL' | 'FLOWER' | 'TOBACCO' | 'EARTH' | 'CHOCOLATE' | 'SPICE' | 'CARAMEL' | 'LEATHER';

export interface Aroma {
  name: {
    eng: AromaName;
    kor: string;
  };
  selected: boolean;
}

export const AromaLabels: { [key in AromaName]: string } = {
  CHERRY: '체리',
  BERRY: '베리',
  OAK: '오크',
  VANILLA: '바닐라',
  PEPPER: '후추',
  BAKING: '제빵',
  GRASS: '풀',
  APPLE: '사과',
  PEACH: '복숭아',
  CITRUS: '시트러스',
  TROPICAL: '트로피컬',
  MINERAL: '미네랄',
  FLOWER: '꽃',
  TOBACCO: '담배잎',
  EARTH: '흙',
  CHOCOLATE: '초콜릿',
  SPICE: '스파이스',
  CARAMEL: '카라멜',
  LEATHER: '가죽',
};
