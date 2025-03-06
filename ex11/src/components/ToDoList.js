import React, { useState } from "react";
import { Card, Form, Button, ListGroup, InputGroup } from "react-bootstrap";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Card className="mt-4 p-3">
      <h3>To-Do List</h3>
      <InputGroup className="mb-2">
        <Form.Control
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <Button onClick={addTask} variant="primary">Add</Button>
      </InputGroup>
      <ListGroup>
        {tasks.map((t, i) => (
          <ListGroup.Item key={i} className="d-flex justify-content-between">
            {t} <Button variant="danger" size="sm" onClick={() => deleteTask(i)}>Delete</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default ToDoList;