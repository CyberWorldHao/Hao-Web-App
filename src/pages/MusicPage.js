import "./musicPage.css";
import DolphinToTheLight from "../images/dolphinToTheLight.jpg";
import Greg from "../images/greg.jpg";
import GregThumbNail from "../images/gregThumbNail.jpg";
import Melanie from "../images/melanie.jpg";
import MelanieThumbNail from "../images/melanieThumbNail.jpg";
import MRComicPoster from "../images/MRComicPoster.jpg";
import RaidersPoster from "../images/RaidersPoster.jpg";
import React from "react";
import Riders from "../images/Riders.png";

function MusicPage() {
  return (
    <div className="body">
      <div className="container">
        <header className="header">
          <h1>JavaJam Coffee House</h1>
        </header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="index.html">
            <img
              src={DolphinToTheLight}
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
          {/* <!-- 
            And because we use classNamees for our navs, 
            you can avoid the list-based approach entirely if you like. 
            -->  */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="index.html">
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-link" href="menu.html">
                Menu
              </a>
              <a className="nav-link" href="music.html">
                Music
              </a>
              <a className="nav-link" href="jobs.html">
                Jobs
              </a>
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </div>
          </div>
        </nav>

        <div>
          <h2>Music at JavaJam</h2>
          <p>
            The first Friday night each month at JavaJam is a special night.
            Join us from 8 pm to 11 pm for some music you won't want to miss!
          </p>
          <h4>January</h4>
          <div className="details">
            <a href="picture/melanie.jpg">
              <img
                src={MelanieThumbNail}
                className="floatleft"
                alt="Melanie Morris"
                width="80"
                height="80"
              />
            </a>
            Melanie Morris entertains with her melodic folk style.
          </div>
          <h4>February</h4>
          <div className="details">
            <a href="picture/greg.jpg">
              <img
                src={GregThumbNail}
                className="floatleft"
                alt="Tahoe Greg"
                width="80"
                height="80"
              />
            </a>
            Tahoe Greg is back from his tour. New songs. New stories.
          </div>
          <br />
          <br />
          <div
            className="jumbotron"
            style={{
              backgroundImage:
                "linear-gradient( rgba(252, 235, 182, 1), rgba(0,0,0,1))",
            }}
          >
            <h1 className="display-4" style={{ color: "#000000" }}>
              Special Event!
            </h1>
            <br />
            <table>
              <thead>
                <tr>
                  <th scope="col">
                    <img
                      src={Riders}
                      style={{ borderRadius: "25px 0px 0px 25px" }}
                      className="px-2"
                      alt="Midnight Riders Logo"
                      width="347"
                      height="225"
                    />
                  </th>
                  <th scope="col">
                    <img
                      src={RaidersPoster}
                      alt="Midnight Riders Logo"
                      width="347"
                      height="225"
                    />
                  </th>
                  <th scope="col">
                    <img
                      src={MRComicPoster}
                      style={{ borderRadius: "0px 25px 25px 0px" }}
                      className="px-2"
                      alt="Midnight Riders Logo"
                      width="347"
                      height="225"
                    />
                  </th>
                </tr>
              </thead>
            </table>
            <hr className="my-4" />
            <p className="lead" style={{ color: "#bbbbbd" }}>
              The Midnight Riders is here.The Hard rock band in the Left 4 Dead
              universe. They are famous for their pyrotechnic light shows
              performed during their live performances. Though never encountered
              directly, several posters advertise them.
            </p>
            <a
              className="btn btn-secondary"
              target="_blank"
              href="https://www.midnight-riders.com/"
              role="button"
              rel="noreferrer"
            >
              Learn more about The Riders
            </a>
          </div>
        </div>

        <footer className="container text-center font-italic">
          <br />
          <p>
            <div>Copyright &copy 2021 JavaJam Coffee House</div>
            <a href="mailto:ahaoahao2000@gmail.com">ahaoahao2000@gmail.com</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
export default MusicPage;
