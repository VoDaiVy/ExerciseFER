  import React, { useState } from "react";
  const ColorSwitcher = () => {
    const [color, setColor] = useState("");

    return (
      <div style={{ backgroundColor: color || "white", padding: "20px" }}>
        <select onChange={(e) => setColor(e.target.value)}>
          <option value="">Select a color</option>
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="pink">Pink</option>
        </select>
      </div>
    );
  };

export default ColorSwitcher;
