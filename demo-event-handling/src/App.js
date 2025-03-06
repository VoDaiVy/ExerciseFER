import React from "react";
import { EventHandlingDemo, MyAlert, MyDropdown, MyModal, MyRadioButton } from "./EventHandling";

function App() {
  return (
    <div className="container mt-4">
      <h2>React Event Handling Examples</h2>
      <EventHandlingDemo />
      <MyAlert />
      <MyDropdown />
      <MyModal />
      <MyRadioButton />
    </div>
  );
}

export default App;
