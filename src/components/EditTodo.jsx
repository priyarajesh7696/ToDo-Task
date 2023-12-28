import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function EditTodo({ todo, setTodo }) {
  let params = useParams();
  let [todoName, setTodoName] = useState("");
  let [description, setDescription] = useState("");
  let [status, setStatus] = useState("");

  let navigate = useNavigate();

  const findIndex = (id) => {
    for (let i = 0; i < todo.length; i++) {
      if (id === todo[i].id) return i;
    }
  };
  const editTodo = () => {
    let id = Number(params.id);
    let index = findIndex(id);
    let newArray = [...todo]; // deep copy Achieve Immutability
    newArray.splice(index, 1, {
      id,
      todoName,
      description,
    });
    setTodo(newArray);
    navigate("/dashboard");
  };
  const getUserData = () => {
    let id = Number(params.id);
    let index = findIndex(id);

    setTodoName(todo[index].todoName);
    setDescription(todo[index].description);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "start-0" }}
      >
        <Modal.Dialog>
          <Modal.Header className="d-flex align-content-center justify-content-center">
            <Modal.Title>Edit TODO</Modal.Title>
          </Modal.Header>

          <Modal.Body className="g-5 d-flex align-content-center justify-content-center">
            <div className="container-fluid border-2">
              <Form className="g-5 text-capitalize d-flex align-items-center justify-content-evenly mb-1">
                <Form.Group className="mb-5  ">
                  <Form.Label as="h5">TodoName</Form.Label>
                  <Form.Control className="text-capitalize"
                    type="text"
                    placeholder="Enter Task Name"
                    value={todoName}
                    onChange={(e) => setTodoName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label as="h5">Description</Form.Label>
                  <Form.Control className="text-capitalize"
                    type="text"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={() => navigate("/dashboard")}>
              Close
            </Button>
            <Button variant="success" onClick={() => editTodo()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
}

export default EditTodo;
