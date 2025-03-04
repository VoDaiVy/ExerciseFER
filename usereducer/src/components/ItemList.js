import React, { useReducer, useState } from "react";
import { Button, Form, Container, Row, Col, ListGroup, Dropdown } from "react-bootstrap";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };

    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((item) => item.id !== action.id) };

    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.newName } : item
        ),
      };

    case "SORT_BY_NAME":
      return { ...state, items: [...state.items].sort((a, b) => a.name.localeCompare(b.name)) };

    case "SORT_BY_TIME":
      return { ...state, items: [...state.items].sort((a, b) => a.id - b.id) };

    default:
      return state;
  }
}

const initialState = { items: [] };

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddItem = () => {
    if (newItemName.trim()) {
      const newItem = { id: Date.now(), name: newItemName.trim() };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const handleEditItem = (id, name) => {
    setEditId(id);
    setEditName(name);
  };

  const handleSaveEdit = () => {
    if (editName.trim()) {
      dispatch({ type: "EDIT_ITEM", id: editId, newName: editName.trim() });
      setEditId(null);
      setEditName("");
    }
  };

  const filteredItems = state.items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="offset-md-3">
          <Form>
            <Form.Group controlId="formItem">
              <Form.Label>Enter Item:</Form.Label>
              <Form.Control
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter item name"
              />
            </Form.Group>
            <Button className="mt-2" variant="primary" onClick={handleAddItem}>
              Add Item
            </Button>
          </Form>

          <Form.Group className="mt-3">
            <Form.Label>Search Items:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Group>

          <Dropdown className="mt-3">
            <Dropdown.Toggle variant="info">Sort Items</Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item onClick={() => dispatch({ type: "SORT_BY_NAME" })}>
                Sort by Name
              </Dropdown.Item>
              <Dropdown.Item onClick={() => dispatch({ type: "SORT_BY_TIME" })}>
                Sort by Created Time
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h3 className="mt-4">Item List:</h3>
          <ListGroup>
            {filteredItems.map((item) => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                {editId === item.id ? (
                  <Form.Control
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  item.name
                )}
                <div>
                  {editId === item.id ? (
                    <>
                      <Button variant="success" size="sm" onClick={handleSaveEdit}>
                        Save
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="ms-1"
                        onClick={() => setEditId(null)}
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="warning" size="sm" onClick={() => handleEditItem(item.id, item.name)}>
                        Edit
                      </Button>
                      <Button variant="danger" size="sm" className="ms-1" onClick={() => handleRemoveItem(item.id)}>
                        Remove
                      </Button>
                    </>
                  )}
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
export default ItemList;