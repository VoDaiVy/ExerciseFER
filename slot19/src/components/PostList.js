import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này không?")) {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  if (loading) return <div>Đang tải...</div>;

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <Link to="/create"><button>Tạo bài viết mới</button></Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Link to={`/edit/${post.id}`}><button>Sửa</button></Link>
            <button onClick={() => handleDelete(post.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
