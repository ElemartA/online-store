import React, { useContext } from "react";
import { destroyBrand } from "../../../http/deviceApi.js";
import { Form, Modal, Button, Dropdown } from "react-bootstrap";
import { Context } from "../../../index.js";
import { observer } from "mobx-react-lite";

const DestroyBrand = observer(({ show, onHide }) => {
  const { product } = useContext(Context);

  const destroy = () => {
    destroyBrand(product.selectedBrand.id).then((data) => {
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
        <Modal.Title>Удалить бренд</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {product.selectedBrand.name || "Выберите бренд"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product.brands.map((brand) => (
                <Dropdown.Item
                  onClick={() => product.setSelectedBrand(brand)}
                  key={brand.id}
                >
                  {brand.name}
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

export default DestroyBrand;
