import React, { useState } from "react";
import { Card, Form, ListGroup } from "react-bootstrap";

const SearchFilter = () => {
  const items = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Pineapple"];
  const [search, setSearch] = useState("");

  return (
    <Card className="mt-4 p-3">
      <h3>Search Filter</h3>
      <Form.Control
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="mb-2"
      />
      <ListGroup>
        {items.filter((item) => item.toLowerCase().includes(search.toLowerCase())).map((item, index) => (
          <ListGroup.Item key={index}>{item}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default SearchFilter;