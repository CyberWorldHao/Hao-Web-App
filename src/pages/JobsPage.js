import React from 'react';

import './jobsPage.css';

function JobsPage() {
  var opt = document.querySelector('select');
  var paragraph = document.querySelector('#jobScope');
  //   opt.addEventListener('change', changeText);
  const changeText = () => {
    var value = opt.value;
    for (var i = 0; i < jobclass.length; i++) {
      if (value == jobclass[i].code) {
        paragraph.textContent = jobclass[i].scope;
      }
    }
  };

  var jobclass = [
    {
      code: 'ba',
      name: 'Barista',
      scope:
        'Preparing and serving hot and cold drinks such as coffee, tea, artisan and speciality beverages.',
    },
    {
      code: 'tr',
      name: 'Trainee',
      scope: 'Supporting daily operations of the cafe.',
    },
    {
      code: 'ct',
      name: 'Coffee Taster',
      scope:
        'Tastes samples of coffee to determine palatability of different coffee in terms of grade, approximate market value, or acceptability to consumer tastes.',
    },
    {
      code: 'ma',
      name: 'Manager',
      scope: 'Managing day-to-day operations of the cafe.',
    },
    {
      code: 'csm',
      name: 'Coffee Store Manager',
      scope:
        'Complete store administration and ensure compliance with policies and procedures, expand store traffic and optimize profitability.',
    },
    {
      code: 'asm',
      name: 'Assistant Store Manager',
      scope:
        'Maintain outstanding store condition and visual merchandising standards, additional store manager duties as needed.',
    },
    {
      code: 'am',
      name: 'Administrative Manager',
      scope:
        'Meet sales goals by training, motivating, mentoring and providing feedback to sales staff, propose innovative ideas to increase market share.',
    },
  ];
  //   for (var i = 0; i < jobclass.length; i++) {
  //     document.write(
  //       '<option value=' +
  //         jobclass[i].code +
  //         '>' +
  //         jobclass[i].name +
  //         '</option>',
  //     );
  //   }

  return (
    <div>
      <title>JavaJam House Jobs</title>
      <div className="container">
        <header className="header">
          <h1>JavaJam Coffee House</h1>
        </header>
        <main>
          <h2>Jobs at JavaJam</h2>
          <p>
            Want to work at JavaJam? Fill out the form below to start your
            application. Required fields are marked with an asterisk (*).
          </p>
          <form
            action="http://webdevbasics.net/scripts/javajam8.php"
            method="post"
          >
            <label htmlFor="name">*Full name:</label>
            <br />
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name / Forename / Given Name "
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name / Surname"
                  required
                />
              </div>
            </div>

            <label htmlFor="email">*Email address:</label>
            <br />
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="name@example.com"
              required
            />
            <br />

            <label htmlFor="exp">*Experience:</label>
            <br />
            <textarea
              name="exp"
              className="form-control"
              id="exp"
              rows="3"
              placeholder="Please list out your work experiences."
            ></textarea>
            <br />

            <div className="form-group">
              <label htmlFor="select-choice">Select job position:</label>
              <select className="form-control" name="job" id="job"></select>
              <p id="jobScope">
                {' '}
                Preparing and serving hot and cold drinks such as coffee, tea,
                artisan and speciality beverages.
              </p>
            </div>

            <label htmlFor="date&time">Preferred Interview Data and Time:</label>
            <input type="datetime-local" id="date&time" name="date&time" />

            <div className="custom-file mb-3">
              <input
                type="file"
                className="custom-file-input"
                id="validatedCustomFile"
                required
              />
              <label className="custom-file-label" htmlFor="file">
                Please upload your photo.{' '}
              </label>
            </div>
            <button className="btn btn-light" type="submit">
              Apply
            </button>
          </form>
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
