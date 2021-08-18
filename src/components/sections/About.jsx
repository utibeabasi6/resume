import React from 'react';

import { about as data } from '../../appData';

import Container from '../layout/Container';
import Divide from '../fragments/Divide';
import SectionHeading from '../fragments/SectionHeading';
import Text from '../fragments/Text';

const About = () => {
  return (
    <Container>
      <SectionHeading className={`uppercase`} title={data.title} size={2} />
      <Text value={data.text} className={`mt-6 text-gray-700`} />
      <Divide />
    </Container>
  );
};

export default About;
