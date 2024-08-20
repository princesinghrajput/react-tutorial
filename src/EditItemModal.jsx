import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './Edit.css'; // Import the CSS file

const EditItemModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} className="custom-popup">
      <Modal.Dialog>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Edit Item</Modal.Title>
            <Button variant="close" onClick={handleClose}></Button>
          </Modal.Header>
          <Modal.Body>
            <div className="edit-item-main-body">
              <div className="food-item-name-row">
                <span>Noodles</span>
                <span className="price">₹120</span>
              </div>
              <div className="item-edit-overroll-info">
                <div className="edit-quantity-item-row">
                  <h4 className="bottom-border">Edit Quantity</h4>
                  <div className="EditItem-quantity-status">
                    <Form.Check 
                      type="radio" 
                      id="size1" 
                      name="size" 
                      label={<><p>Full</p><span>₹120</span></>} 
                    />
                  </div>
                  <div className="EditItem-quantity-status">
                    <Form.Check 
                      type="radio" 
                      id="size2" 
                      name="size" 
                      label={<><p>Dinner</p><span>₹2502</span></>} 
                    />
                  </div>
                  <div className="EditItem-quantity-status">
                    <Form.Check 
                      type="radio" 
                      id="size3" 
                      name="size" 
                      label={<><p>Full</p><span>₹120</span></>} 
                    />
                  </div>
                </div>
                <div className="edit-quantity-item-row">
                  <h4 className="bottom-border">Edit Add-ons</h4>
                  <div className="edit-order-item-add-ons">
                    <h5>Oregano</h5>
                  </div>
                  <div className="EditItem-quantity-add-ons-row">
                    <div className="left-side-item">
                      <div className="item-food-tag-se">
                        <span></span>
                      </div>
                      <label htmlFor="">Medium</label>
                    </div>
                    <div className="right-side-item">
                      <span className="mx-1">+ ₹12</span>
                      <Form.Check 
                        type="checkbox" 
                        id="addon1" 
                        name="addOn" 
                        value="medium" 
                        className="input-addon" 
                      />
                    </div>
                  </div>
                  {/* Repeat the add-on rows as needed */}
                </div>
                <div className="edit-quantity-item-row">
                  <h4 className="bottom-border">Add Instructions</h4>
                  <div className="add-instruction-row">
                    <span>Space</span>
                    <span className="active">Non-Space</span>
                    <Form.Control 
                      as="textarea" 
                      rows={3} 
                      placeholder="Enter Instructions here..." 
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>Update</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Dialog>
    </Modal>
  );
};

export default EditItemModal;
