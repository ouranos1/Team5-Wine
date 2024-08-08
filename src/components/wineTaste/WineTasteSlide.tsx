import SlideComponent from '../slidecomponent/SlideComponent';
import '@/components/wineTaste/WineTasteSlide.scss';

const wineTaste = {
  lightBold: {
    title: '바디감',
    leftOption: '가벼워요',
    rightOption: '진해요',
  },
  smoothTannic: {
    title: '타닌',
    leftOption: '부드러워요',
    rightOption: '떫어요',
  },
  drySweet: {
    title: '당도',
    leftOption: '드라이해요',
    rightOption: '달아요',
  },
  softAcidic: {
    title: '산미',
    leftOption: '안셔요',
    rightOption: '많이셔요',
  },
};

interface WineTasteSlideProps {
  tasteValue?: number[];
}

export function wineTasteSlide({ tasteValue }: WineTasteSlideProps) {
  return (
    <div className="taste-slide-layer">
      {Object.entries(wineTaste).map(([tasteKey, tasteOptions], index) => (
        <SlideComponent key={tasteKey} SlideOptionTitle={tasteOptions.title} LeftOption={tasteOptions.leftOption} RightOption={tasteOptions.rightOption} value={tasteValue ? tasteValue[index] : undefined} />
      ))}
    </div>
  );
}

export default wineTasteSlide;
