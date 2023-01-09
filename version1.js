import React, { useState } from 'react';

const DragAndDrop = () => {
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, category) => {
    e.preventDefault();
    const item = draggedItem;
    setDraggedItem(null);
    // You can handle the item drop logic here
  };

  return (
    <div>
      <div
        className="item"
        draggable
        onDragStart={(e) => handleDragStart(e, 'item')}
      >
        Drag me!
      </div>
      <div
        className="dropzone"
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e, 'category')}
      >
        Drop here!
      </div>
    </div>
  );
};

export default DragAndDrop;
