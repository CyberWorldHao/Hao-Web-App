import "./musicPage.css";
import Card from "react-bootstrap/Card";
import Greg from "../images/greg.jpg";
import GregThumbNail from "../images/gregThumbNail.jpg";
import Melanie from "../images/melanie.jpg";
import MelanieThumbNail from "../images/melanieThumbNail.jpg";
import Navs from "../components/Navs";
import RaidersPoster from "../images/RaidersPoster.jpg";
import React from "react";
import Riders from "../images/Riders.png";

function MusicPage() {
  return (
    <div className="musicPageContainer">
      <div className="musicPageContentContainer">
        <div className="container">
          <div class="stars" />
          <header className="musicPageHeader">
            <h1>Those who wish to sing always find a song</h1>
          </header>
          <Navs />
          <div>
            <h2>Music at La La Land</h2>
            <p >
              The first Friday night each month at JavaJam is a special night.
              Join us from 8 pm to 11 pm for some music you won't want to miss!
            </p>
            <h4>January</h4>
            <div className="singerImage">
              <a href={Melanie}>
                <img
                  src={Melanie}
                  className="floatleft"
                  alt="Melanie Morris"
                  width="80"
                  height="80"
                />
              </a>
              Melanie Morris entertains with her melodic folk style.
            </div>
            <h4>February</h4>
            <div className="singerImage">
              <a href={Greg}>
                <img
                  src={Greg}
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
            <br />
            <hr className="my-4" />
            <div className="imageBanner">
              <Card className="explosionGradient">
                <Card.Img variant="top" src={Riders} />
                <Card.Img variant="top" src={RaidersPoster} />
                <Card.Body>
                  <Card.Title>
                    <h1 className="cardHeader">Special Event!</h1>
                  </Card.Title>
                  <Card.Text className="cardText">
                    The Midnight Riders is here.The Hard rock band in the Left 4
                    Dead universe. They are famous for their pyrotechnic light
                    shows performed during their live performances. Though never
                    encountered directly, several posters advertise them.
                  </Card.Text>
                  <a
                    className="btn btn-secondary"
                    target="_blank"
                    href="https://www.midnight-riders.com/"
                    role="button"
                    rel="noreferrer"
                  >
                    Learn more
                  </a>
                </Card.Body>
              </Card>
              <Card className="explosionGradient">
                <Card.Img variant="top" src={Riders} />
                <Card.Img variant="top" src={RaidersPoster} />
                <Card.Body>
                  <Card.Title>
                    <h1 className="cardHeader">Special Event!</h1>
                  </Card.Title>
                  <Card.Text className="cardText">
                    The Midnight Riders is here.The Hard rock band in the Left 4
                    Dead universe. They are famous for their pyrotechnic light
                    shows performed during their live performances. Though never
                    encountered directly, several posters advertise them.
                  </Card.Text>
                  <a
                    className="btn btn-secondary"
                    target="_blank"
                    href="https://www.midnight-riders.com/"
                    role="button"
                    rel="noreferrer"
                  >
                    Learn more
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="musicPageFooter">
        <div>Copyright &copy; 2024 Hao's Web App</div>
        <a href="mailto:ahaoahao2000@gmail.com">ahaoahao2000@gmail.com</a>
      </div>
    </div>
  );
}
export default MusicPage;
