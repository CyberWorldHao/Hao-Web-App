import React from "react";
import Nav from "react-bootstrap/Nav";
["Home", "Menu", "Music", "Jobs"];

function BasicExample() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/menu">Menu</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/music">Music</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/jobs">Jobs</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Try it On App
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default BasicExample;
