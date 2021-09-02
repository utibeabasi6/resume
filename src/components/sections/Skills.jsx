import React from 'react';

import { skills as data } from '../../appData';

import Container from '../layout/Container';
import SectionHeading from '../fragments/SectionHeading';
import Heading from '../fragments/Heading';
import List from '../fragments/List';

const Skills = () => {
  return (
    <Container className={`mb-12`}>
      <SectionHeading className={`uppercase`} title={data.title} />
      <div className={`space-y-12 mt-6 skills`}>
        {data.data.map((item, idx) => {
          return <Item key={idx} item={item} />;
        })}
      </div>
    </Container>
  );
};

const Item = ({ item }) => {
  return (
    <div>
      <Heading className={`uppercase`} title={item.title} size={3} />
      <List items={item.data} />
    </div>
  );
};

export default Skills;
