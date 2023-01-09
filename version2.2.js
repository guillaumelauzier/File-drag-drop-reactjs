import React from 'react';
import { useDrag } from 'react-dnd';

const Box = ({ name }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: 'box' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {name}
    </div>
  );
};

export default Box;
