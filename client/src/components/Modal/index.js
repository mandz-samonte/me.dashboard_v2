import React from 'react';
import { X } from 'react-feather';

import Card from '../Card';
import Button from '../Button';

function Modal(props) {
  const { className = "", children, onClose, onClick } = props;

  return (
    <div className="w-screen flex h-screen absolute top-0 left-0">
      <Card.Card className="md:w-2/3 w-1/3 h-64 mx-auto my-auto z-10">
        <Card.Header>
          <X
            className="stroke-current text-purple-800 stroke-3 cursor-pointer ml-auto"
            onClick={onClose}
          />
        </Card.Header>

        <Card.Footer>
          <Button className="ml-auto">
            Sample Button
          </Button>
        </Card.Footer>
      </Card.Card>

      <div
        className="w-full h-full bg-gray-500 opacity-50 absolute top-0 left-0"
        onClick={onClose}
      />
    </div>
  )
}

export default Modal;
