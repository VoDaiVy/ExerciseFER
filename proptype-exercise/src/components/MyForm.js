import React from "react";
import MyForm from "././components/MyForm"; 

const App = () => {
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
  };

  return (
    <div className="App">
      <h1>Ứng Dụng React</h1>
      <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
