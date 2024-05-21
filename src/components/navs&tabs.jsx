import React from "react";
import Nav from "react-bootstrap/Nav";
["Home", "Menu", "Music", "Jobs"];

function Navs() {
  return (
    <Nav
      justify
      variant="tabs"
      defaultActiveKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/menu">Menu</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/music">Music</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/jobs">Jobs</Nav.Link>
        <Nav.Link href="/phoneBook">Phone Book</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Try it On App
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navs;
