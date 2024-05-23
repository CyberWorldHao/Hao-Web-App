import "./homePage.css";
import GhibliStudio from "../images/ghibliStudio.jpg";
import L4D from "../images/l4D.jpeg";
import DolphinToTheLight from "../images/dolphinToTheLight.jpg";
import Love from "../images/love.jpg";
import Navs from "../components/Navs";
import React from "react";
import WarmHome from "../images/warmHome.jpg";
import WindingRoad from "../images/windingRoad.jpg";

function HomePage() {
  return (
    <div className="homePageContainer">
      <header
        className="header p-2"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <img
          src={DolphinToTheLight}
          width="90"
          height="60"
          className="rounded my-auto mx-2"
          alt="Does anyone want a coffee?"
        />
        <h1
          className="my-auto pb-2"
          style={{ alignItems: "center", justifyContent: "center" ,color:"#231814"}}
        >
          Welcome to Pinky Dolphin To The Light
        </h1>
      </header>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="index.html">
          {" "}
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
      </nav> */}
      <Navs />
      <div>
        <img
          src={WindingRoad}
          alt="winding road through the woods"
          align="right"
          width="400"
          height="300"
        />
        <h2>Follow the Winding Road to JavaJam</h2>
        <p>
          We're a little out of the way, but take a drive down Route 42 to
          JavaJam today! Indulge in our locally roasted free-trade coffee and
          home-made pastries. You'll feel right at home at JavaJam!
        </p>
        <h3>JavaJam Coffee House features: </h3>
        <ul>
          <li>Specialty Coffee and Tea</li>
          <li>Bagels, Muffins, and Organic Snacks</li>
          <li>Music and Poetry Readings</li>
          <li>Open Mic Night</li>
        </ul>
        <p>
          <div>54321 Route 42 Ellison Bay, WI 54210 1-888-555-5555</div>
        </p>
        <br />
        <div className="row text-center">
          <div className="col-lg-4">
            <img
              src={WarmHome}
              className="bd-placeholder-img rounded-circle"
              width="200"
              height="200"
              alt="warm-home"
            />
            <br />
            <br />
            <h2>Home Sweet Home</h2>
            <p>
              A house is made of walls and beams, a home is built with love and
              dreams
            </p>
            <p>
              Our home is dying, our mother earth need protector like you to
              stand out for her
            </p>
            <p>
              <a
                className="btn btn-success"
                target="-_blank"
                href="https://www.greenamerica.org/your-green-life/10-ways-you-can-fight-climate-change"
              >
                Save The Days
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src={Love}
              className="bd-placeholder-img rounded-circle"
              width="200"
              height="200"
              alt="warm-home"
            />
            <br />
            <br />
            <h2>Life is the flower for which love is the honey</h2>
            <p>
              Check out our Coffee Lover queto in page menu! Click the button
              below to know how to maintain relationship with real life example
            </p>
            <p>
              <a
                className="btn btn-danger"
                style={{ backgroundcolor: "#5B1E61" }}
                target="-_blank"
                href="https://www.youtube.com/watch?v=cr-ZCI_ZaFg"
              >
                Enjoy the journey of learning
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src={L4D}
              className="bd-placeholder-img rounded-circle"
              width="200"
              height="200"
              alt="warm-home"
            />
            <br />
            <br />
            <h2>Hiding Easter Egg</h2>
            <p>
              Go to the Music Page to find out the easter egg we prepared for
              you Gamer!
            </p>
            <p>
              <a
                className="btn btn-danger"
                style={{ backgroundcolor: "#c72202" }}
                target="-_blank"
                href="https://www.youtube.com/watch?v=iyH_NxJ86vs"
              >
                Click Me to Enjoy The Easter Egg
              </a>
            </p>
          </div>
        </div>
        <br />
        <div className="text-center">
          <img
            src={GhibliStudio}
            style={{ borderRadius: "25px" }}
            className="bd-placeholder-img"
            width="300"
            height="400"
            alt="ghiblistudio"
          />
          <br />
          <br />
          <h2>吉卜力工作室 (Studio Ghibli)</h2>
          <p>
            There are more content to be updated for JavaJam 6, i hope i can see
            you there
          </p>
          <p>
            <a
              className="btn btn-outline-info"
              target="-_blank"
              href="https://www.youtube.com/watch?v=qXXbTwL79R0"
            >
              Here is the present for you
            </a>
          </p>
        </div>
        <br />
      </div>
      <div className="text-center font-italic">
        <p>
          Copyright &copy; 2021 JavaJam Coffee House <br />
          <a href="mailto:ahaoahao2000@gmail.com">ahaoahao2000@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default HomePage;
