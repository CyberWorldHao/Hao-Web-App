import "./navStyle.css";
import { useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import React from "react";

function Navs() {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <Nav className="navs" fill>
      <Nav.Item
        className={location.includes("/home") ||  location.includes("")? "navItem activeBar" : "navItem"}
      >
        <Nav.Link
          className={"navLinkButton"}
          href="/home"
          eventKey="/home"
          active={location.includes("/home") ? true : false}
        >
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item
        className={location.includes("/menu") ? "navItem activeBar" : "navItem"}
      >
        <Nav.Link
          className="navLinkButton"
          href="/menu"
          eventKey="/menu"
          active={location.includes("/menu") ? true : false}
        >
          Menu
        </Nav.Link>
      </Nav.Item>
      <Nav.Item
        className={
          location.includes("/music") ? "navItem activeBar" : "navItem"
        }
      >
        <Nav.Link
          className="navLinkButton"
          href="/music"
          eventKey="/music"
          active={location.includes("/music") ? true : false}
        >
          Music
        </Nav.Link>
      </Nav.Item>
      <Nav.Item
        className={location.includes("/jobs") ? "navItem activeBar" : "navItem"}
      >
        <Nav.Link
          className="navLinkButton"
          href="/jobs"
          eventKey="/jobs"
          active={location.includes("/jobs") ? true : false}
        >
          Jobs
        </Nav.Link>
      </Nav.Item>
      {/* change the className after the Try It On App is up online */}
      <Nav.Item
        className={
          location.includes("/tryItOnApp")
            ? "navDisableItem activeBar"
            : "navDisableItem"
        }
      >
        <Nav.Link
          className="disableNavLinkButton "
          eventKey="disabled"
          disabled
          active={location.includes("/tryItOnApp") ? true : false}
        >
          Try it On App
          <p style={{ fontSize: "12px", color: "#575a5e" }}>Coming soon!</p>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item
        className={
          location.includes("/phonebook") ? "navItem activeBar" : "navItem"
        }
      >
        <Nav.Link
          className="navLinkButton"
          href="/phonebook"
          eventKey="/phonebook"
          active={location.includes("/phonebook") ? true : false}
        >
          Phone Book
        </Nav.Link>
      </Nav.Item>
      <Nav.Item
        className={
          location.includes("/aboutme") ? "navItem activeBar" : "navItem"
        }
      >
        <Nav.Link
          className="navLinkButton"
          href="/aboutme"
          eventKey="/aboutme"
          active={location.includes("/aboutme") ? true : false}
        >
          About Me
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navs;
