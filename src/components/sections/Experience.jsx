import React from 'react';

import { experience as data } from '../../appData';
import Container from '../layout/Container';
import Divide from '../fragments/Divide';
import SectionHeading from '../fragments/SectionHeading';
import Heading from '../fragments/Heading';
import List from '../fragments/List';

const Experience = () => {
  return (
    <Container>
      <SectionHeading className={`uppercase`} title={data.title} />
      <div className={`space-y-12 mt-6`}>
        {data.data.map((item, idx) => {
          return <Item key={idx} item={item} />;
        })}
      </div>
      <Divide />
    </Container>
  );
};

const Item = ({ item }) => {
  return (
    <div>
      <Heading className={`uppercase`} title={item.title} size={3} />
      <div className={`flex items-center space-x-1`}>
        <h3 className={`font-semibold`}>{item.company}</h3>
        <span>|</span>
        <h3 className={`font-semibold`}>{item.year}</h3>
      </div>
      <List items={item.duties} />
    </div>
  );
};

export default Experience;
