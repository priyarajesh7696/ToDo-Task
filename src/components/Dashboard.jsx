import React from "react";
import AddToDo from "./AddToDo";
import Cards from "./Cards";
import { Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Dashboard({ todo, setTodo }) {
  return (
    <>
      <div className="container-fluid border-2">
        <AddToDo todo={todo} setTodo={setTodo} />
        <div className="container-fluid d-grid">
          <Row>
            <Col>
              <h5>My Todo's</h5>
            </Col>
            <Col className="mb-5 p-2 ">
              <h5>Status Filter</h5><DropdownButton variant="success" title="All">
                      <Dropdown.Item href="#">Completed</Dropdown.Item>
                      <Dropdown.Item href="#">Not Completed</Dropdown.Item>
                    </DropdownButton>
              
            </Col>
            
          </Row>
        </div>
        <Cards todo={todo} setTodo={setTodo} />
      </div>
    </>
  );
}

export default Dashboard;
