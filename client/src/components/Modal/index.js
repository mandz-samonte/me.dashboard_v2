import React from 'react';
import { X } from 'react-feather';

import Card from '../Card';
import Button from '../Button';

function Modal(props) {
  const {
    className = "",
    title = "",
    actionTitle = "",
    action,
    children,
    onClose,
  } = props;

  return (
    <div className="w-screen flex h-screen absolute top-0 left-0">
      <Card.Card className="md:w-2/3 w-1/3 h-2/4 mx-auto my-auto z-10">
        <Card.Header>
          <h3 className="text-purple-800">{title}</h3>
          <X
            className="stroke-current hover:text-purple-600 text-purple-800 stroke-3 cursor-pointer ml-auto"
            onClick={onClose}
          />
        </Card.Header>

        <Card.Body className="p-2">
          {children}
        </Card.Body>

        <Card.Footer>
          <Button
            className="ml-auto"
            onClick={action}
          >
            {actionTitle}
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
