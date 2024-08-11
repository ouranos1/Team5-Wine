import { wine } from './WineProps';

export interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export interface ModalFilterProps extends ModalProps {
  setWines: React.Dispatch<React.SetStateAction<wine[]>>;
}
