import React, { useState } from "react";
import { Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import authStore from "../stores/authStore";
import menuStore from "../stores/menuStore";
import truckStore from "../stores/truckStore";
import { MenuTypesList } from "./selectListData";

function MenuCreateModal(props) {
  const [descriptionWordCount, setDescriptionWordCount] = useState(0);
  const [dish, setDish] = useState({
    name: "",
    image: "",
    price: 0,
    image: "",
    description: "",
  });
  const truck = truckStore.trucks.find(
    (truck) => truck.owner === authStore.user._id
  );
  const handleChange = (e) => {
    setDish({ ...dish, [e.target.name]: e.target.value });
    if (e.target.name === "description")
      setDescriptionWordCount(e.target.value.length);
  };
  const handleImage = (event) =>
    setDish({ ...dish, image: event.target.files[0] });

  const handleSubmit = (e) => {
    e.preventDefault();
    menuStore.createDish(dish, truck._id);
    props.closeModal();
  };
  return (
    <Modal className="" centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header className="">
        <Modal.Title>Create a Dish</Modal.Title>
      </Modal.Header>
      <Modal.Body className="">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <FormControl
              placeholder="Dish's name"
              name="name"
              v-model="name"
              type="text"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Select onChange={handleChange} name="type">
              <option>Select a Type</option>
              {MenuTypesList?.map((type) => {
                return <option value={type.slugedName}>{type.name}</option>;
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <FormControl
              placeholder="Dish's Price"
              name="price"
              type="text"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Descripe your meal here"
              name="description"
              maxlength="200"
              onChange={handleChange}
            />
            <p>{descriptionWordCount}/200</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <FormControl
              name="image"
              type="file"
              onChange={handleImage}
              placeholder="Image"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Button
              className="btn regular-button float-right"
              variant="primary"
              onClick={handleSubmit}
            >
              Create
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className=""></Modal.Footer>
    </Modal>
  );
}

export default MenuCreateModal;
