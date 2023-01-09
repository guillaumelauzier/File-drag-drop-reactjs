# File-drag-drop-reactjs

---
Version 1
---
Here is an example of how you might implement drag and drop in a React application:

```
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
```

This example includes three event handlers: handleDragStart, handleDragOver, and handleDrop. The handleDragStart function is called when the user starts dragging an item, and it sets the draggedItem state and some additional properties on the dataTransfer object to specify the data being dragged and the appearance of the drag image. The handleDragOver function is called repeatedly as the user moves the item over valid drop targets, and it prevents the default behavior (which would be to navigate to the data being dragged) and sets the dropEffect to move. The handleDrop function is called when the user drops the item, and it prevents the default behavior, clears the draggedItem state, and allows you to specify any logic you want to run when the item is dropped.


---
Version 2
---

You can implement drag and drop in a React app using the react-dnd library. Here is an example of how you can use it:
```
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
```

This creates a drop target that accepts items of the box type. When a draggable item is hovered over the drop target, the drop target's isOver state will be true. You can customize the behavior of the drop target based on this state.

You will also need to create a drag source. Here is an example of how you can do that:
```
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
```

This creates a draggable item with the box type. The item's isDragging state will be true when the item is being dragged. You can customize the appearance of the draggable item based on this state.

You can then use the DropBox and Box components in your app like this:
```
import React from 'react';
import DropBox from './DropBox';
import Box from './Box';

const App = () => {
  return (
    <div>
      <DropBox />
      <Box name="Box 1" />
      <Box name="Box 2" />
    </div>
  );
};

export default App;
```


