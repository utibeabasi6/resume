import React from 'react';

import { appData as data } from '../../appData';

import SectionHeading from '../fragments/SectionHeading';
import Container from '../layout/Container';

const Header = ({ className, toggleDrawer }) => {
  return (
    <div style={{ backgroundColor: '#f8e4d4', borderRadius: '0 0 24px 0', height: '296px' }} className={`flex flex-col justify-between lg:justify-end w-full`}>
      <Container className={`lg:hidden w-full flex justify-end`}>
        <data.MenuIcon className={`text-gray-800 cursor-pointer`} onClick={toggleDrawer} size={24} />
      </Container>
      <Container className={`flex items-center w-full mb-12`}>
        <SectionHeading className={`uppercase`} title={data.name} subtitle={data.description} />
      </Container>
    </div>
  );
};

export default Header;
