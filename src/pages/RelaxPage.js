import React from "react";
import "./relaxPage.css";
import Navs from "../components/Navs";
import WarmHome from "../images/warmHome.jpg";
import WindingRoad from "../images/windingRoad.jpg";
import FutureCoffee from "../images/futureCoffee.jpg";

function RelaxPage() {
  return (
    <div className="relaxPageContainer">
      <div className="container">
        <header className="relaxPageHeader">
          <h1 className="relaxPageHeader1">JavaJam Coffee House</h1>
        </header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="index.html">
            <img
              src={WarmHome}
              width="60"
              height="60"
              className="d-inline-block align-top rounded"
              alt="mugs on a wall"
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
              {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
            </div>
          </div>
        </nav>
        <Navs />
        <div>
          <img
            src={WindingRoad}
            // alt="winding road through the woods"
            align="right"
            width="400"
            height="300"
          />
          <h2>Coffee at JavaJam</h2>
          <p>
            Indulge in our locally roasted free-trade coffee and enjoy the
            aroma, the smooth taste, the caffeine! Join our Mug Club and get a
            10% discount on each cup of coffee you purchase — ask the barista
            for details.
          </p>
          <dl>
            <dt>
              <strong>Just Java</strong>
            </dt>
            <dd>
              Regular house blend, decaffeinated coffee, or flavor of the day.
            </dd>
            <dd>Endless Cup $2.00</dd>
            <dt>
              <strong>Cafe au Lait</strong>
            </dt>
            <dd>House blended coffee infused into a smooth, steamed milk.</dd>
            <dd>Single $2.00 Double $3.00</dd>
            <dt>
              <strong>Iced Cappuccino</strong>
            </dt>
            <dd>
              Sweetened espresso blended with icy-cold milk and served in a
              chilled glass.
            </dd>
            <dd>Single $4.75 Double $5.75</dd>
          </dl>
          <div className="relaxJumbotronFluid">
            <h1 className="relaxPageHeader1">
              All Of The Lovers Just Like Creams And Coffee
            </h1>
            <p>
              'Cause when their unbreakable bonds poured them together, it was
              something
            </p>
            <br />
            <h1 className="relaxPageHeader1 ">
              So, why not having cups of coffee
            </h1>
            <p>
              Enjoy your life and start your wonderful day with it
              <br />
              And make someone to look at you
              <br />
              The way you look at coffee ~
            </p>
          </div>
        </div>

        <footer className="container text-center font-italic">
          <p>
            <div>Copyright &copy 2021 JavaJam Coffee House</div>
            <a href="mailto:ahaoahao2000@gmail.com">ahaoahao2000@gmail.com</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default RelaxPage;
