import React from 'react';

import { education as data } from '../../appData';
import Container from '../layout/Container';
import SectionHeading from '../fragments/SectionHeading';
import Text from '../fragments/Text';
import Divide from '../fragments/Divide';

const Education = () => {
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
      <h3 className={`font-semibold`}>{item.degree}</h3>
      <Text className={`text-gray-600`} value={item.school} />
      <Text className={`text-gray-600`} value={item.year} />
    </div>
  );
};

export default Education;
