import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Navs from '../components/Navs';
import ToastMessage from '../components/ToastMessage';
import WarmHome from '../images/warmHome.jpg';
import WindingRoad from '../images/windingRoad.jpg';
import './relaxPage.css';

function RelaxPage() {
  const [inputValue, setInputValue] = useState('');
  const [showToast, setShowToast] = useState(false);
  const form = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!!inputValue) {
      emailjs
        .sendForm('service_2q9wgom', 'template_c13hs5c', form.current, {
          publicKey: '4B-RHw5blJuk2IDgZ',
        })
        .then(
          () => {
            setInputValue('');
            setShowToast(true);
            setTimeout(() => {
              setShowToast(false);
            }, 3000);
          },
          (error) => {
            console.error('FAILED...', error);
          },
        );
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="relaxPageContainer">
      <header className="relaxPageHeaderContainer">
        <h1 className="relaxPageHeader">☕ Grab A Coffee And Relax 😌🍃</h1>
      </header>
      <Navs />
      <ToastMessage message={'Thank You for sharing'} show={showToast} />
      <div className="container">
        <div className="relaxPageContentContainer">
          <img
            src={WindingRoad}
            alt="winding road through the woods"
            className="relaxImg"
          />
          <div className="coffeeText">
            <h2 className="coffeeTextHeader">Great Coffee Place Nearby ☕︎</h2>
            <p>
              The coffee aroma is a delightful blend of floral and fruity notes,
              with hints of jasmine and citrus dancing on the nose. Underlying
              this brightness is a subtle nuttiness, evoking images of roasted
              almonds. As the aroma unfolds, there's a warm, comforting scent of
              caramelized sugar, reminiscent of freshly baked pastries. This
              complexity is balanced by a gentle earthiness, grounding the aroma
              and adding depth. Overall, it's a captivating bouquet that
              promises a rich and flavorful coffee experience.
            </p>
          </div>

          <img src={WarmHome} alt="warming home" className="relaxImg2" />
          <dl className="coffeeText2">
            <dt>
              <strong>Tell me what's your favorite coffee spot?</strong>
            </dt>
            <dd>
              <form ref={form} onSubmit={handleSubmit}>
                <Form.Control
                  id="coffeeSpot"
                  type="text"
                  className="relaxForm"
                  size="sm"
                  name="message"
                  onChange={handleChange}
                  value={inputValue}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault();
                      handleSubmit(event);
                    }
                  }}
                />
                <Button size="sm" type="submit" className="mt-1">
                  Submit
                </Button>
              </form>
            </dd>
            <dt>
              <strong>Caffè Latte</strong>
            </dt>
            <dd>
              Lattes are popular for their mild coffee flavor and creamy
              texture. They can also be flavored with syrups such as vanilla,
              caramel, or hazelnut.
            </dd>
            <small>
              RM8 to RM25 || <i>Local Coffee Shops to High-End Cafes</i>
            </small>
            <dt>
              <br />
              <strong>Cappuccino</strong>
            </dt>
            <dd>
              Cappuccinos are popular worldwide and are particularly favored in
              European coffee culture. In Italy, it is traditionally enjoyed in
              the morning, often paired with a pastry.
            </dd>
            <small>
              RM9 to RM25 || <i>Local Coffee Shops to High-End Cafes</i>
            </small>
          </dl>
        </div>
        <div className="relaxJumbotronFluid p-3">
          <h1 className="relaxPageHeader1">
            All Of The Lovers Just Like Creams And Coffee
          </h1>
          <p className="relaxJumbotronText">
            'Cause when their unbreakable bonds poured them together, it was
            something
          </p>
          <br />
          <h1 className="relaxPageHeader1">
            So, why not having cups of coffee
          </h1>
          <p className="relaxJumbotronText">
            Enjoy your life and start your wonderful day with it
            <br />
            And make someone to look at you
            <br />
            The way you look at coffee ~
          </p>
        </div>

        <footer className="container text-center font-italic mt-5">
          Copyright &copy; 2024 Hao's Web App <br />
          <a href="mailto:ahaoahao2000@gmail.com">ahaoahao2000@gmail.com</a>
        </footer>
      </div>
    </div>
  );
}

export default RelaxPage;
