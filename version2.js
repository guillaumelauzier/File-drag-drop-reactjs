import React from 'react';
import { useDrop } from 'react-dnd';

const DropBox = () => {
  const [{ isOver }, drop] = useDrop({
    accept: 'box',
    drop: () => ({ name: 'DropBox' }),
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  });
  return (
    <div ref={drop}>
      {isOver ? 'Release to drop' : 'Drag a box here'}
    </div>
  );
};

export default DropBox;
