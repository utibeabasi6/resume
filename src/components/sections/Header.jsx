import React from 'react';

import { appData as data } from '../../appData';

import SectionHeading from '../fragments/SectionHeading';
import Container from '../layout/Container';

const Header = ({ className, toggleDrawer }) => {
  return (
    <div style={{ backgroundColor: '#f8e4d4', borderRadius: '0 0 24px 0', height: '296px' }} className={`flex items-center w-full`}>
      <div
        style={{
          backgroundImage: `url(${data.Pattern})`,
          backgroundPosition: 'right',
        }}
      >
        <Container>
          <SectionHeading className={`uppercase`} title={data.name} subtitle={data.description} />
        </Container>
      </div>
    </div>
  );
};

export default Header;
