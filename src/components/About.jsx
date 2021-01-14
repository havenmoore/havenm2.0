import React from 'react';

import { Row, Col, Image } from 'react-bootstrap';

import profile from '../profile.jpg';

const About = () => {
  const daysSince = (startDate) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const currentDate = new Date();
    return Math.round(Math.abs((currentDate.getTime() - startDate.getTime()) / oneDay));
  };

  const nytCrosswordStreak = () => daysSince(new Date('2018', '4', '7'));

  const duolingoStreak = () => daysSince(new Date('2018', '11', '9'));

  return (
    <Row>
      <Col md={8}>
        <h1>{'Hi, I\'m Haven'}</h1>
        <p>
          {`I am a software developer in New York, New York.
          I am from Michigan originally, but have subsequently lived in 
          Houston, Kansas City (Missouri and Kansas), San Francisco and Oakland.
          I graduated from the University of Michigan (Go Blue!) in 2011 with a BSE 
          in Computer Engineering, and have subsequently worked in intellectual property law, 
          cofounded a startup in the animal health space, and most recently spent the last 3 years 
          working in FinTech.`}
        </p>
        <p>
          {`I am interested in working on projects, software and otherwise, 
          that expose me to challenging problems, give me the opportunity to create cool stuff, 
          and allow me to learn from intelligent, experienced and creative people.
          Code-wise, I am particularly passionate about good architecture, quality code 
          and making the world a more elegant place.`}
        </p>
        <p>
          {`In my free time, I enjoy genre fiction, hiking, running, taking huge number of pictures of 
          things (that I mostly never do anything with), Michigan Athletics (I was on the rowing team all 
          4 years), and occasionally learning useless skills. Presently these include juggling, solving a Rubik's Cube, whistling at least 5 different ways.
          I am also currently maintaining a ${nytCrosswordStreak()} day NYT Crossword streak and a ${duolingoStreak()}
          day Duolingo German streak.`}
        </p>
      </Col>
      <Col md={4}>
        <Image class="profile" src={profile} fluid rounded />
      </Col>
    </Row>
  );
};
export default About;
