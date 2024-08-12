import { wine } from './WineProps';

export interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export interface ModalFilterProps extends ModalProps {
  setWines: React.Dispatch<React.SetStateAction<wine[]>>;
}

export interface ModalDeleteProps extends ModalProps {
  id: number;
  setWines: React.Dispatch<React.SetStateAction<wine[] | undefined>>;
  wines: wine[];
}
