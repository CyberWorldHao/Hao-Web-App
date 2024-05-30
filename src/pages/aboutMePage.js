import "./aboutMePage.css";
import Navs from "../components/Navs";
import React from "react";

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

function AboutMePage() {
  return (
    <div className="aboutMePageContainer">
      <div class="snowflakes" aria-hidden="true">
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
      </div>
      <div class="snow position-relative overflow-hidden p-3 text-center">
        <Navs />
        <div class="col-md-5 p-lg-5 mx-auto my-2">
          <h1 class="display-4 font-weight-normal">
            Welcome to My Profile Page
          </h1>
          <h1>
            <a
              href="#"
              class="typewrite"
              data-period="2000"
              data-type='[ "Hi there, welcome to my profile page.", "I am Wei Hao", "I am Creative.", "I Love Design.", "I Love to Develop." ]'
            >
              <span class="wrap"></span>
            </a>
          </h1>
          <p class="lead">
            To discover more about me, please explore this website and visit the
            icon portal below.
          </p>
          <a
            class="btn contactIcon"
            href="https://6092c37c4fadbb1e559dfe17--jovial-brahmagupta-cf2731.netlify.app/home"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon
              name="home"
              style={{
                fontSize: "40px",
                color: "#DEB887",
                margin: "5% 0px 0px 1%",
              }}
            ></ion-icon>
          </a>
          <a
            class="btn contactIcon"
            href="mailto:ahaoahao2000@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon
              name="mail"
              style={{
                fontSize: "40px",
                color: "#DEB887",
                margin: "5% 0px 0px 1%",
              }}
            ></ion-icon>
          </a>
          <a
            class="btn contactIcon"
            href="https://www.linkedin.com/in/wei-hao-chong-32a29a211/"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon
              name="logo-linkedin"
              style={{
                fontSize: "40px",
                color: "#DEB887",
                margin: "5% 0px 0px 1%",
              }}
            ></ion-icon>
          </a>
          <a
            class="btn contactIcon"
            href="https://github.com/CyberWorldHao"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon
              name="logo-github"
              style={{
                fontSize: "40px",
                color: "#DEB887",
                margin: "5% 0px 0px 1%",
              }}
            ></ion-icon>
          </a>
          <a
            class="btn contactIcon"
            href="https://drive.google.com/drive/folders/1vcbcB2RAq-ciXygdcPnrS1142KUADFJV?usp=sharing"
            target="_blank"
            rel="noreferrer"
            style={{
              margin: "1% 0px 0px 1%",
              position: "relative" /* Make the container relative */,
              display:
                "inline-block" /* Ensure the container fits the content */,
            }}
          >
            <ion-icon
              name="document-attach"
              style={{
                fontSize: "40px",
                color: "#DEB887",
              }}
            ></ion-icon>
            <ion-icon
              name="logo-google"
              style={{
                fontSize: "16px",
                color: "#111417",
                position:
                  "absolute" /* Position absolutely within the container */,
                bottom: "26%" /* Align to bottom */,
                right: "33%" /* Align to right */,
              }}
            ></ion-icon>
          </a>
          <a
            class="btn contactIcon"
            href="http://wa.link/nrb1fv"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon
              name="logo-whatsapp"
              style={{
                fontSize: "40px",
                color: "#DEB887",
                margin: "5% 0px 0px 1%",
              }}
            ></ion-icon>
          </a>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <main role="main" class="container">
        <div class="row">
          <div class="col-md-8 blog-main">
            <div class="blog-post">
              <br></br>
              <h2 class="blog-post-title">
                My Curriculum Vitae and University Life Story
              </h2>
              <p id="GoingDown">
                Welcome to my blog! Here, I’d like to share some details about
                my curriculum vitae and a few stories from my university life.
                If you have any questions or would like to get in touch, please
                feel free to contact me via{" "}
                <a href="mailto:ahaoahao2000@gmail.com">E-mail</a> or direct
                message me on{" "}
                <a href="wa.link/twvut3" target="_blank">
                  WhatsApp
                </a>
                .
              </p>
              <hr />
              <h2 class="blog-post-title">About Me</h2>
              <p>
                I am Wei Hao, and I'm graduated from{" "}
                <b>University of Malaya, Malaysia</b> with a degree in{" "}
                <b>
                  Bachelor of Computer Science (Software Engineering), CGPA
                  3.85/4.0
                </b>
                . My time at university was filled with valuable experiences,
                both academically and personally.
              </p>
              <br />

              <h2 class="blog-post-title">University Life and Experiences</h2>
              <p>
                During my time at university, I was actively involved in various
                activities and projects that helped shape my skills and
                knowledge. Here are a few highlights:
              </p>

              <ul>
                <li>
                  <b>Academic Achievements:</b> I consistently maintained a high
                  GPA and received several awards for my academic performance.
                </li>
                <li>
                  <b>Extracurricular Activities:</b> I was a member of several
                  clubs and participated in numerous events, which I found both
                  enriching and enjoyable.
                </li>
              </ul>
              <p>Here are some of the clubs and events I participated in:</p>
              <ul>
                <li>
                  <b>Octa Sports Fest (OSF):</b> Organized sports events to
                  encourage physical activity.
                </li>
                <li>
                  <b>Kelas Kebudayaan Cina (KKC):</b> Taught Chinese culture.
                </li>
                <li>
                  <b>Unmasked Reality - Technical Team:</b> Developed Unity AR
                  mobile app for treasure hunt games.
                </li>
                <li>
                  <b>JKP Kemas:</b> Organized health & fitness events.
                </li>
                <li>
                  <b>App Club:</b> Learned Git along with code theory &
                  concepts.
                </li>
                <li>
                  <b>Developer Student Clubs:</b> Learned Android Studio & Mobile App Development.
                </li>
                <li>
                  <b>Sukmum8th:</b> Participated as a cheerleader and industrial
                  dancer.
                </li>
                <li>
                  <b>Technical Team Learning:</b> Gained skills in computer,
                  wiring and speaker setup.
                </li>
              </ul>
              <p>
                I believe there are more events and activities I participated
                in, but I can't recall all the details. Despite the challenges,
                such as the pandemic disrupting our plans, I enjoyed and learned
                a lot from these experiences.
              </p>
              <p>
                One memorable project involved finding third-party collaborators
                to encourage people to reduce their mobile phone usage and
                engage more in face-to-face interactions. We faced several
                challenges, including an international teammate returning to
                their country and the pandemic complicating communication. Our
                group leader struggled with providing clear instructions, and
                some members were late to meetings, leading to conflicts.
                Despite these hurdles, we managed to understand each other and
                made amends, thanks to the efforts of a dedicated teammate who
                helped piece our broken group back together.
              </p>
              <h2 class="blog-post-title">
                <br />
                The 4-Cs Value
              </h2>
              <p>
                Deep down, I believe that these four key values are very
                significant to everyone's life. Understanding and utilizing
                these values in any aspect of our life-career, self-development,
                and relationships can make our future more meaningful and
                colorful, with fewer misunderstandings and mental health
                problems. These values are:
              </p>
              <strong>
                <ol>
                  <li>Creativity</li>
                  <li>Critical thinking</li>
                  <li> Collaboration</li>
                  <li>Communication</li>
                </ol>
              </strong>
              <p>
                A team without spirit is just like a body in a PVS(persistent
                vegetative state). Therefore, I strive to incorporate unity into
                teams, helping them grow stronger.
              </p>
              <h2 class="blog-post-title">
                <br />
                Something About Me
              </h2>
              <p>Here are a few traits that define me:</p>
              <b>
                <ul>
                  <li>Curious</li>
                  <li>Impatient</li>
                  <li>Quick Learner</li>
                  <li>Mind-Absent</li>
                  <li>Anxious</li>
                  <li>Far-Sighted</li>
                  <li>Detail-Oriented</li>
                  <li>
                    Optimistic - I believe that after a hurricane, a rainbow
                    always follows.
                  </li>
                </ul>
              </b>
              <h2 class="blog-post-title">
                <br />
                Looking Forward
              </h2>
              <p>
                Now that I have graduated and have been working for several
                years, I am excited to apply my skills and knowledge in a
                professional setting. I am particularly interested in{" "}
                <b>Full-Stack Developer</b>, and I am actively seeking
                opportunities in this field.
              </p>
              <h2 class="blog-post-title">
                <br />
                Contact Me
              </h2>
              <p>
                I would love to hear from you! If you have any questions or
                would like to discuss potential opportunities, please feel free
                to reach out:
              </p>
              <b>
                <ul>
                  <li>{"Email: ahaoahao2000@gmail.com"}</li>
                  <li>{"WhatsApp: +6017-7296988"}</li>
                </ul>
              </b>
              <p>
                Feel free to visit my personal website where you can navigate to
                other pages. Although it currently has limited functionality, I
                update it periodically with new languages or features.
              </p>
              <br />
              <p>
                You can also access my certifications on Google Drive:{" "}
                <a
                  href="https://drive.google.com/drive/folders/1vcbcB2RAq-ciXygdcPnrS1142KUADFJV?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Drive E-certifications
                </a>
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </main>
      <footer class="text-center font-italic pt-2" id="GoingDown">
        <p>
          Copyright &copy; 2024 Hao's Web App <br />
          <a href="mailto:ahaoahao2000@gmail.com">ahaoahao2000@gmail.com</a>
          {" | "}
          <a href="https://www.linkedin.com/in/wei-hao-chong-32a29a211/">
            LinkedIn
          </a>
          {" | "}
          <a href="https://github.com/CyberWorldHao">GitHub</a>
          {" | "}
          <a href="https://drive.google.com/drive/folders/1vcbcB2RAq-ciXygdcPnrS1142KUADFJV?usp=sharing">
            E-Cert
          </a>
          {" | "}
          <a href="http://wa.link/nrb1fv">+6017-7296988</a>
        </p>
      </footer>
    </div>
  );
}

export default AboutMePage;
