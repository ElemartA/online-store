import React, { useState } from "react";
import { destroyOneProduct } from "../../../http/deviceApi.js";
import { Form, Modal, Button } from "react-bootstrap";

const DestroyProduct = ({ show, onHide }) => {
  const [value, setValue] = useState("");

  const destroy = () => {
    destroyOneProduct(value).then((data) => {
      console.log({
        status: 1,
        data: data,
        delete: "successfully",
      });
      onHide();
    });
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      style={{ fontFamily: "Roboto" }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Удалить продукт</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={"Введите id продукта"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={destroy}>
          Удалить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DestroyProduct;
