import React from "react";
import ValidatedInput from "./component/ValidatedInput";
import "./App.css"; // Đảm bảo file CSS có quy tắc styling

function App() {
  return (
    <div className="container mt-4">
      {/* Exercise 4 */}
      <div className="exercise-card">
        <div className="exercise-header">Exercise 4</div>
        <ValidatedInput />
      </div>

      {/* Exercise 5 */}
      <div className="exercise-card">
        <div className="exercise-header">Exercise 5</div>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Nhập email" className="form-control" />
          <label>Mật khẩu</label>
          <input type="password" placeholder="Nhập mật khẩu" className="form-control" />
          <button className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>

      {/* Exercise 6 */}
      <div className="exercise-card">
        <div className="exercise-header">Exercise 6</div>
        <form>
          <label>Họ và Tên</label>
          <input type="text" placeholder="Nhập họ và tên" className="form-control" />

          <label>Giới tính</label>
          <div>
            <input type="radio" name="gender" value="male" /> Nam
            <input type="radio" name="gender" value="female" className="ms-3" /> Nữ
          </div>

          <button className="btn btn-success mt-3">Gửi</button>
        </form>
      </div>
    </div>
  );
}

export default App;
