import React from 'react';

const Container = ({ className, children }) => {
  return <div className={`${className} pl-6 pr-6 pt-12`}>{children}</div>;
};

export default Container;
