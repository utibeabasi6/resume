import React from 'react';

const Container = ({ className, children }) => {
  return <div className={`${className} pl-12 pr-12 pt-12`}>{children}</div>;
};

export default Container;
