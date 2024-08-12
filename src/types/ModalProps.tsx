import { wine } from './WineProps';

export interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  showButton: boolean;
}
//푸터버튼 안보일 수 있게 프롭스 추가했습니다.
export interface ModalFilterProps extends ModalProps {
  setWines: React.Dispatch<React.SetStateAction<wine[]>>;
}
