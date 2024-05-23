import React from "react";
import Nav from "react-bootstrap/Nav";
import "./navStyle.css";

function Navs() {
  return (
    <Nav
      className="navs"
      fill
      variant="underline"
      menuVariant="dark"
      defaultActiveKey="/home"
    >
      <Nav.Item className="navItem">
        <Nav.Link className="navLinkButton" href="/home" eventKey="link-1">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="navItem">
        <Nav.Link className="navLinkButton" href="/menu" eventKey="/menu">
          Menu
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="navItem">
        <Nav.Link className="navLinkButton" href="/music" eventKey="/music">
          Music
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="navItem">
        <Nav.Link className="navLinkButton" href="/jobs" eventKey="/jobs">
          Jobs
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="navItem">
        <Nav.Link
          className="navLinkButton"
          href="/phonebook"
          eventKey="/phonebook"
        >
          Phone Book
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="navItem">
        <Nav.Link
          className="navLinkButton disable"
          eventKey="disabled"
          disabled
        >
          Try it On App
          <p style={{fontSize: "12px", color: "#575a5e"}}>Coming soon!</p>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navs;
