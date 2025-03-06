import React from "react";
import ReactDOM from "react-dom/client";  // Đúng cách trong React 18
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";  // Đảm bảo file này tồn tại

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Đo hiệu suất ứng dụng (nếu cần)
reportWebVitals();