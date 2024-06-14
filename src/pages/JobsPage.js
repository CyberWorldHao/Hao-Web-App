import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import HumanAlrightMP3 from '../audio/human-alright.mp3';
import HumanYesMeLordMP3 from '../audio/human-yes-me-lord.mp3';
import OrcWorkCompleteMP3 from '../audio/orc-work-complete.mp3';
import OrcWorkWorkMP3 from '../audio/orc-work-work.mp3';
import Navs from '../components/Navs';
import ToastMessage from '../components/ToastMessage';
import './jobsPage.css';

function JobsPage() {
  const audioRef = useRef(null);
  const [randomNumber] = useState(Math.floor(Math.random() * 4));
  const [validated, setValidated] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [selectedJob, setSelectedJob] = useState('');
  const [interview, setInterview] = useState('');
  const [pitch, setPitch] = useState('');
  const [check, setCheck] = useState(false);
  const form = useRef();

  const handleJobSelect = (event) => {
    setSelectedJob(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setValidated(true);
    if (
      !!selectedJob &&
      !!name &&
      !!email &&
      !!address &&
      !!interview &&
      !!check
    ) {
      emailjs
        .sendForm('service_2q9wgom', 'template_14gy5og', form.current, {
          publicKey: '4B-RHw5blJuk2IDgZ',
        })
        .then(
          () => {
            setValidated(false);
            setShowToast(true);
            setName('');
            setEmail('');
            setAddress('');
            setSelectedJob('');
            setInterview('');
            setPitch('');
            setCheck(false);
            setTimeout(() => {
              setShowToast(false);
            }, 3000);
          },
          (error) => {
            // console.log('FAILED...', error);
          },
        );
    }
  };

  useEffect(() => {
    if (audioRef.current && !!randomNumber) {
      audioRef.current.volume = 1; // Set volume to 100%
      audioRef.current
        .play()
        .then(() => {})
        .catch((error) => {
          // console.log('Audio play was prevented:', error);
        });
    }
  }, [randomNumber]);

  useEffect(() => {
    const handleUserInteractionAfterLoad = () => {
      if (audioRef.current && !!randomNumber) {
        audioRef.current.volume = 1; // Set volume to 100%
        audioRef.current
          .play()
          .then(() => {})
          .catch((error) => {
            // console.log('Audio play was prevented:', error);
          });
      }
      // Remove the event listener after the first interaction
      document.removeEventListener('click', handleUserInteractionAfterLoad);
      document.removeEventListener('keydown', handleUserInteractionAfterLoad);
    };

    // Add event listeners for user interaction
    document.addEventListener('click', handleUserInteractionAfterLoad);
    document.addEventListener('keydown', handleUserInteractionAfterLoad);
  }, [randomNumber]);

  const jobList = [];

  // const jobList = [
  //   {
  //     position: 'Barista',
  //     scope:
  //       'Preparing and serving hot and cold drinks such as coffee, tea, artisan and speciality beverages.',
  //   },
  //   {
  //     position: 'Trainee',
  //     scope: 'Supporting daily operations of the cafe.',
  //   },
  //   {
  //     position: 'Coffee Taster',
  //     scope:
  //       'Tastes samples of coffee to determine palatability of different coffee in terms of grade, approximate market value, or acceptability to consumer tastes.',
  //   },
  //   {
  //     position: 'Manager',
  //     scope: 'Managing day-to-day operations of the cafe.',
  //   },
  //   {
  //     position: 'Coffee Store Manager',
  //     scope:
  //       'Complete store administration and ensure compliance with policies and procedures, expand store traffic and optimize profitability.',
  //   },
  //   {
  //     position: 'Assistant Store Manager',
  //     scope:
  //       'Maintain outstanding store condition and visual merchandising standards, additional store manager duties as needed.',
  //   },
  //   {
  //     position: 'Administrative Manager',
  //     scope:
  //       'Meet sales goals by training, motivating, mentoring and providing feedback to sales staff, propose innovative ideas to increase market share.',
  //   },
  // ];

  return (
    <div className="jobsPageContainer">
      {randomNumber === 0 ? (
        <audio autoPlay ref={audioRef}>
          <source src={HumanAlrightMP3} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      ) : randomNumber === 1 ? (
        <audio autoPlay ref={audioRef}>
          <source src={HumanYesMeLordMP3} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      ) : randomNumber === 2 ? (
        <audio autoPlay ref={audioRef}>
          <source src={OrcWorkWorkMP3} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <audio autoPlay ref={audioRef}>
          <source src={OrcWorkCompleteMP3} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
      <div className="container">
        <header className="jobsPageHeader">
          <h1>
            {randomNumber === 0
              ? 'Peasant: Alright'
              : randomNumber === 1
                ? 'Peasant: Yes, me lord'
                : randomNumber === 2
                  ? 'Peon: Work, Work'
                  : 'Peon: Work Complete'}
          </h1>
        </header>
        <Navs />
        <ToastMessage
          message={'Your application is sent'}
          show={showToast}
          color={true}
        />
        <main>
          <h2 className="jobsPageHeader2">Join Us</h2>
          <p>
            Want to work with me? Fill out the form below to start your
            application. Required fields are marked with an asterisk (*).
          </p>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            ref={form}
          >
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Name*</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide your name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>E-mail*</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label>Address*</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid address.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>Select job position*</Form.Label>
                <Form.Select
                  required
                  value={selectedJob}
                  onChange={handleJobSelect}
                >
                  <option value=""></option>
                  {jobList.length !== 0 ? (
                    jobList.map((job, index) => (
                      <option key={index} value={job.position}>
                        {job.position}
                      </option>
                    ))
                  ) : (
                    <option value="">No job position available</option>
                  )}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select the job position that you want to apply.
                </Form.Control.Feedback>
                {selectedJob !== '' && (
                  <div>
                    <br />
                    <p>
                      {`Job Scope: ` +
                        jobList.find((job) => job.position === selectedJob)
                          ?.scope}
                    </p>
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom05">
                <Form.Label>Preferred Interview DateTime:*</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Monday to Friday || 11am to 3pm"
                  name="interview"
                  onChange={(e) => setInterview(e.target.value)}
                  value={interview}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide an interview date and time.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <br />
            <Row>
              <Form.Group as={Col} md="12" controlId="validationCustom06">
                <InputGroup>
                  <InputGroup.Text>Make Your Pitch!</InputGroup.Text>
                  <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                    name="pitch"
                    onChange={(e) => setPitch(e.target.value)}
                    value={pitch}
                  />
                </InputGroup>
              </Form.Group>
            </Row>
            <br />
            <Row>
              <Form.Group className="mb-3">
                <Form.Label>weihao.niuace@gmail.com</Form.Label>
                <Form.Check
                  type={'checkbox'}
                  id={`default-checkbox`}
                  label={`Please provide your CV by emailing it to this address.*`}
                  required
                  onChange={() => setCheck(!check)}
                  checked={check}
                />
              </Form.Group>
            </Row>
            {/* <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group> */}
            <Button type="submit">Submit form</Button>
          </Form>

          {/* <button className="btn btn-light" type="submit">
            Download Resume.pdf
          </button>
          <button className="btn btn-light" type="submit">
            Download Unscannable Resume.pdf
          </button> */}
        </main>
        <footer className="container text-center font-italic mt-5">
          Copyright &copy; 2024 Hao's Web App <br />
          <a href="mailto:ahaoahao2000@gmail.com">ahaoahao2000@gmail.com</a>
        </footer>
      </div>
    </div>
  );
}
export default JobsPage;
