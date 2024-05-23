import "./phoneBookStyle.css";
import { phoneBookData } from "./PhoneBookData.jsx";
import Carousel from "react-bootstrap/Carousel";
import EmptyFolder from "../../images/emptyFolder.png";
import React from "react";
import RenderForm from "./AddContact.jsx";
import Table from "react-bootstrap/Table";

function PhoneNumList() {
  if (phoneBookData.length === 0) {
    return <></>;
  }

  return phoneBookData.map((data, index) => {
    return (
      <tr key={index}>
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

function PhoneBook() {
  return (
    <div className="phoneBookcontainer">
      <div className="phoneBookContentFrame">
        <h1>Phone Book</h1>
        <hr className="hr" />
        <Carousel data-bs-theme="dark" interval={null}>
          {phoneBookData.length ? (
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
                <img src={EmptyFolder} alt="File Not Found" className="emptyPhoneListImg" />
                <p className="credit">
                  {"Designed by "}
                  <a
                    href="http://www.freepik.com"
                    target="_blank"
                    rel="noreferrer"
                  >
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
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h2 className="header2 pl-5">Add New Contact</h2>
              <ion-icon
                name="call-outline"
                style={{
                  fontSize: "40px",
                  color: "rgb(33, 37, 41)",
                  margin: "5% 0px 0px 1%",
                }}
              />
            </div>
            {RenderForm()}
            <Carousel.Caption>
              <div className="phoneView">
                <p>
                  Let's save new phone number into your browser's local storage
                  ~
                  <br />
                  You can delete from your local storage anytime ~
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="PCView">
          <p>
            Let's save new phone number into your browser's local storage ~
            <p>You can delete from your local storage anytime ~</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PhoneBook;
