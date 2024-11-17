import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "react-bootstrap/Table";

function App() {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    index: "",
  });

  let [userDatas, setUserDatas] = useState([]);

  let getvalue = (event) => {
    let oldData = { ...formData };
    oldData[event.target.name] = event.target.value;
    setFormData(oldData);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    let currentUserFormData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    if (formData.index === "") {
      // Create new user scenario
      let phone_number = formData.phone;
      let email = formData.email;
      let checkFilterUser = userDatas.filter(
        (v) => (email && v.email === email) || (phone_number && v.phone === phone_number)
      );
      if (checkFilterUser.length > 0) {
        toast.warn("Email or Phone already exists");
        return;
      } else {
        let newUserDatas = [...userDatas, currentUserFormData];
        setUserDatas(newUserDatas);
      }
    } else {
      // Edit existing user scenario
      let editIndex = formData.index;
      let updatedUserDatas = [...userDatas]; 
      updatedUserDatas[editIndex] = currentUserFormData;
      setUserDatas(updatedUserDatas);
    }

    // Clear the form after submitting
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      index: "",
    });
};


  let deleteRow = (indexNum) => {
    let filterDateAfterDelete = userDatas.filter(
      (v, index) => index !== indexNum
    );
    console.log(filterDateAfterDelete);
    setUserDatas(filterDateAfterDelete);
  };

  let editRow = (indexNum) => {
    let filterDateAfterEdit = userDatas.filter(
      (v, index) => index === indexNum
    );
    console.log(filterDateAfterEdit);
    setFormData({
      name: filterDateAfterEdit[0].name,
      email: filterDateAfterEdit[0].email,
      phone: filterDateAfterEdit[0].phone,
      message: filterDateAfterEdit[0].message,
      index: indexNum,
    });
  };

  return (
    <Container>
      <Container>
        <Row>
          <Col className="text-center py-5">
            <h1>Enquiry Now</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <form action="" onSubmit={handleSubmit}>
              <div className="pb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  onChange={getvalue}
                  value={formData.name}
                  name="name"
                  className="form-control"
                />
              </div>
              <div className="pb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  onChange={getvalue}
                  value={formData.email}
                  name="email"
                  className="form-control"
                />
              </div>
              <div className="pb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  onChange={getvalue}
                  value={formData.phone}
                  name="phone"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  onChange={getvalue}
                  value={formData.message}
                  className="form-control"
                  id=""
                  rows="3"
                ></textarea>
              </div>
              <button className="btn btn-primary">
                {formData.index === "" ? "Submit" : "Update"}
              </button>
            </form>
          </Col>
          <Col lg={7}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {userDatas.length > 0 ? (
                  userDatas.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.phone}</td>
                      <td>{data.message}</td>
                      <td>
                        <button onClick={() => editRow(index)}>Edit</button>
                        <button onClick={() => deleteRow(index)}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6}>No Data found.!</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Container>
  );
}

export default App;
