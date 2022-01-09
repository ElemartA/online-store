import React, { useContext } from "react";
import { destroyType } from "../../../http/deviceApi.js";
import { Form, Modal, Button, Dropdown } from "react-bootstrap";
import { Context } from "../../../index.js";
import { observer } from "mobx-react-lite";

const DestroyType = observer(({ show, onHide }) => {
  const { product } = useContext(Context);

  const destroy = () => {
    destroyType(product.selectedType.id).then((data) => {
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
        <Modal.Title>Удалить тип</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {product.selectedType.name || "Выберите тип"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product.types.map((type) => (
                <Dropdown.Item
                  onClick={() => product.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
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
});

export default DestroyType;
