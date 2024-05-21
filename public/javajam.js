// Import the necessary modules
import React from "react";
import ReactDOM from "react-dom";

// Define a functional component for the JavaJam Coffee House
function JavaJamCoffeeHouse() {
  return (
    <div className="container">
      <header className="header">
        <h1>JavaJam Coffee House</h1>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="index.html">
          <img
            src="images/javajamlogo.jpg"
            width="60"
            height="60"
            className="rounded d-inline-block align-top"
            alt="JavaJam"
          />{" "}
          JavaJam
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="menu.html">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="music.html">
                Music
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="jobs.html">
                Jobs
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main>{/* Main content goes here */}</main>
      <footer className="container text-center font-italic">
        <p>
          Copyright &copy; 2021 JavaJam Coffee House <br />
          <a href="mailto:ahaoahao2000@gmail.com">ahaoahao2000@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}

// Render the JavaJamCoffeeHouse component to the root element
ReactDOM.render(<JavaJamCoffeeHouse />, document.getElementById("root"));
