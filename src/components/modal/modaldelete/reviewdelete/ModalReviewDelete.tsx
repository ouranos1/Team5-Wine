'use client';

import BaseModal from '@/components/modal/modalbase/BaseModal';
import { deleteReviewsAPI } from '@/api/Review';
import { ModalDeleteProps } from '@/types/ModalProps';
import './ModalWineDelete.scss';

export default function ModalDeleteWine({ isModalOpen, closeModal, reviewId }: ModalDeleteProps) {
  const handleDeleteReview = async () => {
    try {
      await deleteReviewsAPI(reviewId);
      alert('리뷰이 삭제되었습니다.');
      closeModal();
    } catch (error) {
      console.error('리뷰 삭제 오류:', error);
      alert('리뷰 삭제에 실패했습니다.');
    }
  };

  return (
    <BaseModal
      isOpen={isModalOpen}
      onClose={closeModal}
      title=""
      closeButton={false}
      footerButtons={[
        <button key="1" onClick={closeModal}>
          취소
        </button>,
        <button key="2" onClick={handleDeleteReview}>
          삭제하기
        </button>,
      ]}
    >
      <p>정말 삭제하시겠습니까?</p>
    </BaseModal>
  );
}
