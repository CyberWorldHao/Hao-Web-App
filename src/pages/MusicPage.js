import "./musicPage.css";
import ALovelyNight from "../images/aLovelyNight.jpg";
import Card from "react-bootstrap/Card";
import CityOfStars from "../images/cityOfStars.png";
import Earth from "../images/earth.jpg";
import Epilogue from "../images/epilogue.jpg";
import lilDickyEarth from "../images/lilDickyEarth.png";
import Navs from "../components/Navs";
import Planetarium from "../images/planetarium.jpg";
import RaidersPoster from "../images/RaidersPoster.jpg";
import React from "react";
import Riders from "../images/Riders.png";

function MusicPage() {
  return (
    <div className="musicPageContainer">
      <div className="musicPageContentContainer">
        <div className="container">
          <div className="starsTop" />
          <div className="starsRight" />
          <div className="starsLeft" />
          <div className="starsBottom" />

          <header className="musicPageHeader">
            <h1>Those who wish to sing always find a song</h1>
          </header>
          <Navs />
          <div>
            <h2 className="mt-5">Music at La La Land</h2>
            <p>
              Step into the enchanting world of "La La Land," where dreams come
              alive against the vibrant backdrop of Los Angeles. This critically
              acclaimed musical masterpiece, directed by Damien Chazelle, weaves
              the spellbinding tale of Mia and Sebastian, played by the
              charismatic duo Emma Stone and Ryan Gosling. Their heartfelt
              journey of love and ambition is beautifully underscored by
              mesmerizing music and stunning visuals that pay homage to classic
              Hollywood while offering a fresh, modern twist. With its dazzling
              dance sequences, unforgettable songs, and a story that tugs at the
              heartstrings, "La La Land" is an unmissable cinematic experience
              that will leave you inspired and dreaming long after the final
              note fades.
            </p>
            <h4 className="musicPageHeader4">City of Stars</h4>
            <div className="soundTrackImg">
              <a
                href={"https://www.youtube.com/watch?v=GTWqwSNQCcg"}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={CityOfStars}
                  alt="City Of Stars"
                  className="songImg"
                />
              </a>
              {` Best Original Score, and Best Original Song`}
            </div>
            <h4 className="musicPageHeader4">A Lovely Night</h4>
            <div className="soundTrackImg">
              <a
                href={"https://www.youtube.com/watch?v=_8w9rOpV3gc"}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ALovelyNight}
                  alt="A Lovely Night"
                  className="songImg"
                />
              </a>
              {` A playful, flirtatious, elegant dance at twilight, showcasing
              their chemistry`}
            </div>
            <h4 className="musicPageHeader4">Planetarium</h4>
            <div className="soundTrackImg">
              <a
                href={"https://www.youtube.com/watch?v=lNFbbWOM5FU"}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Planetarium}
                  alt="A Lovely Night"
                  className="songImg"
                />
              </a>
              {` Mia and Sebastian share a magical moment while dancing among the
              stars.`}
            </div>
            <h4 className="musicPageHeader4">Epilogue</h4>
            <div className="soundTrackImg">
              <a
                href={"https://www.youtube.com/watch?v=Lw0U5rhrhaI"}
                target="_blank"
                rel="noreferrer"
              >
                <img src={Epilogue} alt="Epilogue" className="songImg" />
              </a>
              {` Sparking a fantasy of their ideal relationship encapsulates the
              love and sacrifice`}
            </div>
            <br />
            <br />
            <br />
            <hr className="my-5" />
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
                    className="btn btn-dark"
                    target="_blank"
                    href="https://www.midnight-riders.com/"
                    role="button"
                    rel="noreferrer"
                  >
                    Learn more
                  </a>
                </Card.Body>
              </Card>
              <Card className="defaultCardTheme">
                <Card.Img variant="top" src={lilDickyEarth} />
                <Card.Img variant="top" src={Earth} />
                <Card.Body>
                  <Card.Title>
                    <h1 className="cardHeader">Special Event!</h1>
                  </Card.Title>
                  <Card.Text className="cardText">
                    "Lil Dicky Earth" is a comedic rap song addresses
                    environmental issues and promotes awareness about climate
                    change and conservation. The music video features animated
                    versions of numerous celebrities voicing different animals
                    and elements of nature, including Ariana Grande, Justin
                    Bieber, Snoop Dogg, Ed Sheeran, Leonardo DiCaprio, and many
                    others.
                  </Card.Text>
                  <a
                    className="btn btn-primary"
                    target="_blank"
                    href="https://welovetheearth.org/"
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
