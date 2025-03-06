import React, { useState } from "react";
const ToggleVisibility = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button style={{ backgroundColor: "#ffcc00", border: "none", padding: "10px" }} onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>
      {visible && <p style={{ color: "#000000" }}>This is some text!</p>}
    </div>
  );
};
  export default ToggleVisibility;