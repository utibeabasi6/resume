import React from 'react';

import { appData as data } from '../../appData';

import SectionHeading from '../fragments/SectionHeading';
import Container from '../layout/Container';

const Header = ({ toggleDrawer }) => {
  return (
    <div style={{ backgroundColor: '#f8e4d4', borderRadius: '0 0 24px 0', height: '296px' }} className={`flex flex-col justify-between lg:justify-end w-full`}>
      <Container className={`w-full flex justify-between lg:justify-start`}>
        {/* <div className={`flex items-center space-x-4`}>
          {data.logos.map((logo, idx) => {
            return <img className={`rounded-full`} width={50} key={idx} src={logo} alt='logo' />;
          })}
        </div> */}
        <data.MenuIcon className={`lg:hidden  text-gray-800 cursor-pointer`} onClick={toggleDrawer} size={24} />
      </Container>
      <Container className={`flex items-center w-full mb-12`}>
        <SectionHeading className={`uppercase`} title={data.name} subtitle={data.description} />
      </Container>
    </div>
  );
};

export default Header;
