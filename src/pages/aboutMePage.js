import "./aboutMePage.css";
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
    <div>
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
      <div class="snow position-relative overflow-hidden p-3 p-md-1 m-md-3 text-center">
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
          <p class="lead font-weight-normal">
            Want to learn more about me feel free to check out my Instagram &
            Facebook.{" "}
          </p>
          <a
            class="btn btn-primary fb"
            href="https://www.facebook.com/cwhao1314"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
          </a>
          <a
            class="btn btn-danger insta"
            href="https://www.instagram.com/cwhao2000/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
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
              <h2 class="blog-post-title">Story of My Life</h2>
              <p id="GoingDown">
                This blog post is mainly about my curriculum vitae and some my
                University life & Story Feel Free to contact me by using{" "}
                <a href="mailto:ahaoahao2000@gmail.com">E-mail</a> or Direct
                Message using{" "}
                <a href="wa.link/twvut3" target="_blank">
                  WhatsApp
                </a>
                .
              </p>
              <hr />
              <p>
                The <b>little story</b> on my resume actually is a subject that
                needs us to find third-party collaborators to encourage people
                to reduce the usage of mobile phones and more carry out more
                interaction with people. Due to one of an international student
                delay on their work causing our schedule event plan postponed. I
                think it is because he needs to go back to his country to
                somehow delay the progress. In addition, due to the pandemic
                make us hard to communicate to get things done.
              </p>
              <blockquote>
                <p>
                  The leader of the group also finds some difficulties in
                  leading the team due to unclear instruction of the project as
                  well as some group members also late to the meeting. Then
                  fighting is born from this flustered situation. The good
                  things we still can understand each other, and making amend to
                  what we’ve lost.
                  <br />
                  <strong>
                    Thank you for another teammate help me putting the broken
                    group pieces into one & together.
                  </strong>
                </p>
              </blockquote>
              <p>
                Free to view my basic website also you use the navigation to go
                to other pages. Although Nothing much functionality XD.
                <br />
                <em>
                  This website may be updated from time to time for applying to
                  other languages or features.
                </em>
              </p>
              <h2>To Access My Certifications</h2>
              <p>
                <a
                  href="https://drive.google.com/drive/folders/1vcbcB2RAq-ciXygdcPnrS1142KUADFJV?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check out my Google Drive for E-cert
                </a>
              </p>
              <h3>Events, Club, Activities</h3>
              <p>
                All of the below, are clubs and Events I join before, Some of
                them join as AJK to organize events & activities to ask people
                to join such as OSF(Organize sport event), Kkc (Teaching Chinese
                Culture), Unmasked - technical team (develop a mobile
                application for the game), JKP Kemas (Organize health event).
                Some of them is to learn including App Clubs(learn git),
                Developer Student Clubs(learn android studio). I got taking part
                to sukmum8th cheerleader and industrial dancing also video clip
                of performance can be accessed in my Instagram.
              </p>
              <pre>
                <code>
                  <ul>
                    <li>Octa Sports Fest</li>
                    <li>Kelas Kebudayaan Cina</li>
                    <li>Sukmum8th</li>
                    <li>App Club</li>
                    <li>Unmasked Reality</li>
                    <li>Industrial Dancing</li>
                    <li>Developer Student Clubs</li>
                    <li>JKP KEMAS</li>
                  </ul>
                </code>
              </pre>
              <p>
                I think there are more but I think I can't remember clearing.
                Like a technical team learning (wiring & speaker) event and
                other one-day events . . . Can't really remember the details.
              </p>
              <p>
                Actually, I learn quite a lot of things in all of the activities
                above. I also very enjoy all of it. If there isn't a pandemic I
                think I still will continue to join them.
              </p>
              <h3>4-C value</h3>
              <p>
                Deep down I believe that these 4 keys are very significant to
                everyone's life. If we can understanding and utilize these 4
                values inside of any aspect of our life like career,
                self-development as well as relationship. Our future will become
                more meaningful & colorful and lesser misunderstanding & mental
                health problems. A future that we would not be shocked when we
                see storms that are stronger than before.
              </p>
              <ul>
                <li>Creativity</li>
                <li>Critical thinking</li>
                <li> Collaboration</li>
                <li>Communication</li>
              </ul>
              <p>
                A team without its spirit just like a body in PVS. Thus, I will
                also put some unity into teams, to make them grow stronger.
              </p>
              <p>Something About Me</p>
              <ol>
                <li>Curious</li>
                <li>Inpatient</li>
                <li>Quick Learner</li>
                <li>Mind-Absent</li>
                <li>Anxious</li>
                <li>far-sighted</li>
                <li>Detail</li>
              </ol>
              <p>
                Optimistic, believe after a hurricane always comes a rainbow.
              </p>
              <br />
            </div>
          </div>
        </div>
      </main>
      <footer class="text-center font-italic" id="GoingDown">
        <p>
          Copyright &copy 2021 JavaJam Coffee House
          <a href="mailto:ahaoahao2000@gmail.com">ahaoahao2000@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}

export default AboutMePage;
