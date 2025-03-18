import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, content };
    await axios.post("http://localhost:3000/posts", newPost);
    navigate("/");
  };

  return (
    <div>
      <h1>Thêm bài viết mới</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Tiêu đề" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Nội dung" value={content} onChange={(e) => setContent(e.target.value)} required />
        <button type="submit">Tạo bài viết</button>
      </form>
    </div>
  );
};

export default CreatePost;
