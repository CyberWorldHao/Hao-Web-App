import "./navStyle.css";
import { useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import React from "react";

function Navs() {
  const location = useLocation().pathname;
  return (
    <Nav
      className={
        location.includes("/phonebook")
          ? "navsPhoneBook"
          : location.includes("/aboutme")
          ? "navsAboutMe"
          : location.includes("/music")
          ? "navsMusic"
          : location.includes("/relax")
          ? "navsRelax"
          : "navs"
      }
      fill
    >
      <Nav.Item
        className={
          location.includes("/home") ||
          (location.includes("/") && location.length === 1)
            ? "navItem activeBar"
            : "navItem"
        }
      >
        <Nav.Link
          className={
            location.includes("/home") ? "homeNavLinkButton" : "navLinkButton"
          }
          href={location.includes("/home") ? "" : "/home"}
          eventKey="/home"
          active={location.includes("/home") ? true : false}
        >
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item
        className={
          location.includes("/relax") ? "navItem relaxActiveBar" : "navItem"
        }
      >
        <Nav.Link
          className={
            location.includes("/relax") ? "relaxNavLinkButton" : "navLinkButton"
          }
          href={location.includes("/relax") ? "" : "/relax"}
          eventKey="/relax"
          active={location.includes("/relax") ? true : false}
        >
          Relax
        </Nav.Link>
      </Nav.Item>
      <Nav.Item
        className={
          location.includes("/music") ? "navItem musicActiveBar" : "navItem"
        }
      >
        <Nav.Link
          className={
            location.includes("/music") ? "musicNavLinkButton" : "navLinkButton"
          }
          href={location.includes("/music") ? "" : "/music"}
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
          className={
            location.includes("/jobs") ? "jobsNavLinkButton" : "navLinkButton"
          }
          href={location.includes("/jobs") ? "" : "/jobs"}
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
          <p className="disabledMessage">Coming soon!</p>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className={"navItem"}>
        <Nav.Link
          className={
            location.includes("/phonebook")
              ? "phoneBookNavLinkButton"
              : "navLinkButton"
          }
          href={location.includes("/phonebook") ? "" : "/phonebook"}
          eventKey="/phonebook"
          active={location.includes("/phonebook") ? true : false}
        >
          Phone Book
        </Nav.Link>
      </Nav.Item>
      <Nav.Item
        className={
          location.includes("/aboutme") ? "navItem aboutMeActiveBar" : "navItem"
        }
      >
        <Nav.Link
          className={
            location.includes("/aboutme")
              ? "aboutMeNavLinkButton"
              : "navLinkButton"
          }
          href={location.includes("/aboutme") ? "" : "/aboutme"}
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
