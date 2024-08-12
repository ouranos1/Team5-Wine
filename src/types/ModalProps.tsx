import { wine } from './WineProps';

export interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export interface ModalFilterProps extends ModalProps {
  setWines: React.Dispatch<React.SetStateAction<wine[]>>;
}

export interface ModalWineEditProps extends ModalProps {
  id: number;
}

export interface ModalWineDeleteProps extends ModalProps {
  id: number;
  // setWines: React.Dispatch<React.SetStateAction<wine[] | undefined>>;
  // wines: wine[];
}

export interface ModalReviewDeleteProps extends ModalProps {
  id: number;
  // setReviews: React.Dispatch<React.SetStateAction<wine[] | undefined>>;
  // reviews: wine[];
}
