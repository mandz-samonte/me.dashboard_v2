import React, { useState } from 'react';

import Input from '../../components/Input';
import Modal from '../../components/Modal';

function AddHabitModal(props) {
  const [ title, setTitle ] = useState('');
  const [ days, setDays ] = useState(0);
  const { onClose, onAdd } = props;

  return (
    <Modal
      title="Add Habit"
      actionTitle="Add"
      onClose={onClose}
      action={() => onAdd({title, days})}
    >
      <Input onChange={(e) => setTitle(e.target.value)} value={title} type="text" label="Habit Name *"  />
      <Input onChange={(e) => setDays(e.target.value)} value={days} type="number" label="Number of Days *"  />
    </Modal>
  )
}

export default AddHabitModal;
