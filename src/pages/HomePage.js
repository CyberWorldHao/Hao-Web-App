import "./homePage.css";
import amazonRiverPinkDolphin from "../images/amazonRiverPinkDolphin.png";
import BloodDrop from "../images/bloodDrop.png";
import BloodSplatter from "../images/bloodSplatter.png";
import BloodyHand from "../images/bloodyHand.png";
import DolphinToTheLight from "../images/dolphinToTheLight.jpg";
import Flowers from "../components/Flowers";
import GhibliStudio from "../images/ghibliStudio.jpg";
import L4D2 from "../images/l4D2.png";
import Love from "../images/love.jpg";
import LoveBubble from "../images/loveBubble.png";
import Navs from "../components/Navs";
import PolarBear from "../images/polarBear.jpg";
import React from "react";

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
          alt="pink dolphin"
        />
        <h1
          className="my-auto pb-2"
          style={{
            alignItems: "center",
            justifyContent: "center",
            color: "#555357",
          }}
        >
          Welcome to Pinky Dolphin To The Light
        </h1>
      </header>
      <Navs />
      <div className="homePageContentContainer">
        <img
          src={amazonRiverPinkDolphin}
          // alt="winding road through the woods"
          alt="amazon river pink dolphin"
          align="right"
          width="400"
          height="300"
          style={{ borderRadius: "10px" }}
        />
        <h2>Follow the Pink Dolphin to Amazon River</h2>
        <p>
          The Amazon River pink dolphin is a symbol of the rich biodiversity of
          the Amazon basin and plays a crucial role in the health of its
          freshwater ecosystems. Conservation efforts are vital to ensure the
          survival of this unique species for future generations.
        </p>
        <h3>Conservation Status: </h3>
        <ul>
          <li>
            <b>Threats:</b> The pink dolphin faces several threats, including
            habitat destruction due to deforestation and dam construction,
            pollution, and accidental entanglement in fishing gear. In some
            regions, they are also hunted for use as bait in catfish fisheries.
          </li>
          <li>
            <b>Conservation Efforts:</b> Various conservation efforts are in
            place to protect this species, including habitat protection,
            pollution control, and legal protection measures. Organizations are
            also working to raise awareness about the importance of conserving
            these unique animals.
          </li>
        </ul>
        <h3>Physical Characteristics: </h3>
        <ul>
          <li>
            <b>Color:</b> Young pink dolphins are typically gray, but they
            become pinker as they age. Their color can vary from a light pink to
            a deep pink, and it can change depending on their mood, water
            temperature, and health. The pink coloration is due to capillary
            placement near the skin surface.
          </li>
          <li>
            <b>Size:</b> Adult pink dolphins can reach lengths of up to{" "}
            <b>2.5 meters (8.2 feet) </b>and weigh between{" "}
            <b>85 and 160 kilograms (187 to 353 pounds)</b>.
          </li>
          <li>
            <b>Body Structure:</b> They have a robust body with a large, rounded
            forehead, long beak, and flexible neck, which allows them to
            maneuver easily through the complex network of flooded forests,
            rivers, and lakes.
          </li>
        </ul>
        <br />
        <p
          style={{
            fontStyle: "italic",
            marginLeft: "0",
            textIndent: "-20px",
            paddingLeft: "20px",
          }}
        >
          Simandan, V. (2023, August 2). 25 Interesting Facts About the Pink
          Dolphin, aka the Amazon River Dolphin. <br />
          V.M. Simandan.
          <a
            href="https://www.simandan.com/amazon-river-pink-dolphin/"
            target="_blank"
            style={{ color: "blue", textDecoration: "underline" }}
            rel="noreferrer"
          >
            https://www.simandan.com/amazon-river-pink-dolphin/
          </a>
        </p>
        <br />
        <div className="row text-center">
          <div className="col-lg-4">
            <img
              src={PolarBear}
              className="bd-placeholder-img rounded"
              width="300"
              height="250"
              alt="polar bear on melting ice"
            />
            <br />
            <br />
            <h2>Stop Global Warming Fight Climate Change</h2>
            <p style={{ textAlign: "justify" }}>
              Our home is dying; our Mother Earth needs protectors like you to
              stand up for her.
            </p>
            <p>
              <a
                className="btn btn-success"
                target="-_blank"
                href="https://www.greenamerica.org/your-green-life/10-ways-you-can-fight-climate-change"
              >
                Save The Days
                <div class="drops">
                  <div class="drop drop1"></div>
                  <div class="drop drop2"></div>
                  <div class="drop drop3"></div>
                </div>
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src={Love}
              className="bd-placeholder-img rounded"
              width="300"
              height="250"
              alt="lovely book"
            />
            <br />
            <br />
            <h2>
              STOP Saying <br />
              "I Love You"
            </h2>
            <p style={{ textAlign: "justify" }}>
              Please respect the word 'Love' and say it only to those you truly
              mean it to.
            </p>
            <p className="loveImg">
              <a
                className="btn btn-danger"
                style={{ backgroundcolor: "#5B1E61" }}
                target="-_blank"
                href="https://www.youtube.com/watch?v=cr-ZCI_ZaFg"
              >
                <img
                  src={LoveBubble}
                  width="50"
                  height="80"
                  alt="love bubble"
                  className="loveBubble"
                />
                Prince EA Video
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src={L4D2}
              className="bd-placeholder-img rounded"
              width="300"
              height="250"
              alt="Left 4 Dead 1 & 2 main character poster"
            />
            <br />
            <br />
            <h2 className="l4d2Img forImgDisplay">
              <img
                src={BloodSplatter}
                width="50"
                height="80"
                alt="bloody splatter"
                className="bloodSplatter"
              />
              Are U a Left 4 Dead Lover!
            </h2>
            <p className="l4d2Img forImgDisplay" style={{ textAlign: "justify" }}>
              If the answer is yes, let me take you to the music video by the
              Midnight Riders Band.
              <img
                src={BloodDrop}
                width="50"
                height="80"
                alt="blood drop"
                className="bloodDrop"
              />
            </p>
            <p className="l4d2Img">
              <a
                className="btn btn-danger"
                style={{ color: "#c3253f", backgroundColor: "white" }}
                target="-_blank"
                href="https://www.youtube.com/watch?v=iyH_NxJ86vs"
              >
                Let's Roll
                <img
                  src={BloodyHand}
                  width="50"
                  height="80"
                  alt="bloody hand"
                  className="bloodyHand"
                />
              </a>
            </p>
          </div>
        </div>
        <br />
        <div className="text-center flowersContainer">
          <Flowers
            flowerPositionRight="80%"
            flowerPositionTop="50%"
            flowerType="flowerRotate"
          />
          <Flowers
            flowerPositionRight="90%"
            flowerPositionTop="5%"
            flowerType="flowerBlink"
          />
          <img
            src={GhibliStudio}
            style={{ borderRadius: "25px" }}
            className="bd-placeholder-img"
            width="350"
            height="380"
            alt="ghibli studio"
          />
          <Flowers
            flowerPositionRight="160px"
            flowerPositionTop="70px"
            flowerType="flowerRotate"
          />
          <Flowers
            flowerPositionRight="66%"
            flowerPositionTop="30%"
            flowerType="flowerBlink"
          />
          <br />
          <Flowers
            flowerPositionRight="40px"
            flowerPositionTop="50%"
            flowerType="flowerRotate"
          />
          <Flowers
            flowerPositionRight="20%"
            flowerPositionTop="34%"
            flowerType="flowerBlink"
          />
          <br />
          <h2 style={{ textAlign: "center" }}>
            {"吉卜力工作室 Studio Ghibli"}
          </h2>
          <p>
            I love Studio Ghibli, and here is one of my favorite songs from
            'Spirited Away'.
          </p>
          <p>
            <a
              className="btn btn-info"
              target="-_blank"
              href="https://www.youtube.com/watch?v=qXXbTwL79R0"
            >
              Always with Me
              <br />
              Itsumo Nando Demo
              <br /> いつも何度でも
            </a>
          </p>
        </div>
        <br />
      </div>
      <div className="text-center font-italic">
        <p>
          Copyright &copy; 2024 Hao's Web App <br />
          <a href="mailto:ahaoahao2000@gmail.com">ahaoahao2000@gmail.com</a>
        </p>
      </div>
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave wave2"></div>
      </div>
    </div>
  );
}

export default HomePage;
