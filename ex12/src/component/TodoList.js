import React, { useState } from "react";
const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
  
    const addTodo = () => {
      if (input) {
        setTodos([...todos, input]);
        setInput("");
      }
    };
  
    const removeTodo = (index) => {
      setTodos(todos.filter((_, i) => i !== index));
    };
  
    return (
      <div style={{ color: "#004d00" }}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} style={{ border: "2px solid #ffcc00", padding: "5px" }} />
        <button style={{ backgroundColor: "#ffcc00", border: "none", padding: "10px" }} onClick={addTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo} <button style={{ backgroundColor: "#ffcc00", border: "none", padding: "5px" }} onClick={() => removeTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default TodoList;