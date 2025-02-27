import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // Kiểm tra đường dẫn import này
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css"; // Kiểm tra xem có import Bootstrap không

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
