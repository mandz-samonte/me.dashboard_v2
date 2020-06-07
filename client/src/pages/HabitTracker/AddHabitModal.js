import React from 'react';

import Input from '../../components/Input';
import Modal from '../../components/Modal';

function AddHabitModal(props) {
  const { onClose } = props;

  return (
    <Modal
      title="Add Habit"
      actionTitle="Add"
      onClose={onClose}
    >
      <Input label="Habit Name *"  />
      <Input label="Number of Days *"  />
    </Modal>
  )
}

export default AddHabitModal;
