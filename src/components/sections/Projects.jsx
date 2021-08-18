import React from 'react';

import { projects as data } from '../../appData';

import SectionHeading from '../fragments/SectionHeading';
import Heading from '../fragments/Heading';
import Container from '../layout/Container';
import Text from '../fragments/Text';

const Projects = () => {
  return (
    <Container>
      <SectionHeading className={`uppercase`} title={data.title} />
      <div className={`mt-12 flex flex-wrap items-center justify-between gap-4`}>
        {data.data.map((item, idx) => {
          return <Item key={idx} item={item} />;
        })}
      </div>
    </Container>
  );
};

const Item = ({ item }) => {
  return (
    <div className={`max-w-sm w-full h-full rounded-lg border border-gray-200 overflow-hidden mb-6 p-6 bg-white text-lg flex flex-col items-start`}>
      <Heading
        className={`uppercase`}
        title={item.title}
        size={3}
        color={`text-green-500`}
        onClick={() => {
          window.open(item.url);
        }}
      />
      <Text value={item.description} />
      <div className={`mt-6 text-sm text-gray-500`}>
        {item.stack.map((d, i) => {
          return <span key={i}>{d + `${i !== item.stack.length - 1 ? ` • ` : ``}`}</span>;
        })}
      </div>
    </div>
  );
};

export default Projects;
