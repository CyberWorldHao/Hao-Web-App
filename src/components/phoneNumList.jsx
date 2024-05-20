import React, { useState } from "react";
import { phonebookData, updateData } from "./phoneBookData.jsx";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import RenderForm from "./addContact";
import "./style.css";
import EmptyFolder from "../images/emptyFolder.png";

function PhoneNumList() {
  if (phonebookData.length === 0) {
    return <></>;
  }

  return phonebookData.map((data, index) => {
    return (
      <tr>
        <td>
          <b>{index + 1}</b>
        </td>
        <td>
          <b>{data.name}</b>
        </td>
        <td>
          <b>{data.phoneNum}</b>
        </td>
      </tr>
    );
  });
}

function AddContact(name, num) {
  var newContact = {};
  newContact.name = name;
  newContact.phoneNum = num;
  phonebookData.push(newContact);
  updateData(phonebookData);
}

function OutputPhoneNumList() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="container">
      <div className="contentFrame">
        <h1 className="mb-0">Phone Book</h1>
        <hr className="hr" />
        <Carousel data-bs-theme="dark" interval={null}>
          {phonebookData.length ? (
            <Carousel.Item>
              <div className="table">
                <Table striped bordered hover variant="dark" size="lg">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>{PhoneNumList()}</tbody>
                </Table>
              </div>
            </Carousel.Item>
          ) : (
            <Carousel.Item className="pl-5 py-5">
              <div className="noPhoneContainer">
                <img src={EmptyFolder} alt="File Not Found" className="img" />
                <p className="credit">
                  {"Designed by "}
                  <a href="http://www.freepik.com" target="_blank">
                    Freepik
                  </a>
                </p>
                <p className="emptyCaption">
                  The Phone Book is Empty. Try add some to your website's local
                  storage.
                </p>
              </div>
            </Carousel.Item>
          )}
          <Carousel.Item>
            <h2 className="header2 pl-5">Add New Contact</h2>
            {RenderForm()}
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default OutputPhoneNumList;
