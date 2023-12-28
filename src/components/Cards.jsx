import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate } from "react-router-dom";

function Cards({ todo, setTodo }) {
  let navigate = useNavigate();

  let deleteTodo = (id) => {
    let index;
    for (let i = 0; i < todo.length; i++) {
      if (todo[i].id == id) {
        index = i;
        break;
      }
    }
    let newArray = [...todo]; //deep copy or Immutable
    newArray.splice(index, 1);
    setTodo(newArray);
  };
  return (
    <div className="container-fluid border-2">
    <Row xs={1} md={2} lg={3} xl={4} className="g-2">
        {todo.map((e, i) => {
          return (
            <Col key={i}>
              <Card
                className="mb-2 text-capitalize"
                bg="success"
                style={{ width: "300px" }}
              >
                <Card.Header as="h5">Name: {e.todoName}</Card.Header>
                <Card.Body>
                  <Card.Title>Description: {e.description}</Card.Title>
                  <Card.Text>
                    status:{" "}
                    <DropdownButton variant="success" title={e.status}>
                      <Dropdown.Item href="#">Completed</Dropdown.Item>
                      <Dropdown.Item href="#">Not Completed</Dropdown.Item>
                    </DropdownButton>
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => navigate(`/edit-todo/${e.id}`)}
                  >
                    Edit
                  </Button>{" "}
                  &nbsp;&nbsp;
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteTodo(e.id);
                    }}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      </div>
  )
}

export default Cards