import React from 'react';

import { footer as data } from '../../appData';

const Footer = ({ className }) => {
  return (
    <footer className={`${className} transition_all flex items-center justify-center p-4 pt-0 mt-12`}>
      <small className={` bg-white max-w-xs w-full text-sm text-center p-4 rounded-lg`}>&copy;{data.copyright}</small>
    </footer>
  );
};

export default Footer;
