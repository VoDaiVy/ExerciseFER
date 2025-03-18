import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedPost = { title, content };
    await axios.put(`http://localhost:3000/posts/${id}`, updatedPost);
    navigate("/");
  };

  return (
    <div>
      <h1>Chỉnh sửa bài viết</h1>
      <form onSubmit={handleUpdate}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        <button type="submit">Cập nhật</button>
      </form>
    </div>
  );
};

export default EditPost;
