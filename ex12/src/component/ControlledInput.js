import React, { useState } from "react";
const ControlledInput = () => {
  const [text, setText] = useState("");
  return (
    <div style={{ color: "#004d00" }}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} style={{ border: "2px solid #ffcc00", padding: "5px" }} />
      <p>{text}</p>
    </div>
  );
};

  export default ControlledInput;