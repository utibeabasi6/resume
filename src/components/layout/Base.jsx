import React from 'react';

const Base = ({ children }) => {
  return <div className={`min-h-screen bga flex max-w-7xl mx-auto`}>{children}</div>;
};

export default Base;
