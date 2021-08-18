import React from 'react';

import Aside from '../../sections/Aside';
import { appData as data } from '../../../appData';

const Drawer = ({ show, toggleDrawer }) => {
  let drawerClasses = 'side_drawer';

  if (show) {
    drawerClasses = 'side_drawer open';
  }

  return (
    <div className={`${drawerClasses} overflow-y-auto`}>
      <data.CloseIcon onClick={toggleDrawer} size={24} className={`fixed right-0 z-50 my-12 mx-6 cursor-pointer`} />
      <Aside />
    </div>
  );
};

export default Drawer;
