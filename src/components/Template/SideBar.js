import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Sergio Navarrete</h2>
        <p><a href="mailto:sergio.nava89@gmail.com">sergio.nava89@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Sergio. I like computers, mathematics and science in general.
        I have a bachelours degree in Computer Science
        and I&apos;m currently a Software Engineer at Facebook.
        I have worked as a Software Engineer at <a href="https://goldmansachs.com">Goldman Sachs</a>
        , <a href="https://rosslyndatatech.com">Rosslyn Data Technologies</a> and <a href="https://talentmap.com">Talent Map</a>.
        I was also a teaching assistant and reasercher at the Technological University in Havana <a href="https://cujae.edu.cu">CUJAE</a>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Sergio Navarrete <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
