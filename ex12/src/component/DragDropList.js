import React, { useState } from "react";
const DragDropList = () => {
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);
    const [draggingItem, setDraggingItem] = useState(null);
  
    const handleDragStart = (index) => {
      setDraggingItem(index);
    };
  
    const handleDragOver = (index) => {
      if (draggingItem === null || draggingItem === index) return;
      const newItems = [...items];
      const item = newItems.splice(draggingItem, 1)[0];
      newItems.splice(index, 0, item);
      setDraggingItem(index);
      setItems(newItems);
    };
  
    const handleDragEnd = () => {
      setDraggingItem(null);
    };
  
    return (
      <ul style={{ color: "#004d00" }}>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={() => handleDragOver(index)}
            onDragEnd={handleDragEnd}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };

  export default DragDropList;