import React from 'react';

const Backdrop = ({ show, toggleDrawer }) => {
  return <div onClick={() => toggleDrawer()} className={`${!show && `hidden`} backdrop`} />;
};

export default Backdrop;
