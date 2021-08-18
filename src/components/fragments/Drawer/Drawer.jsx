import React from 'react';

const Drawer = ({ show, toggleDrawer }) => {
  let drawerClasses = 'side_drawer';

  if (show) {
    drawerClasses = 'side_drawer open';
  }

  return <div className={`${drawerClasses}`}></div>;
};

export default Drawer;
