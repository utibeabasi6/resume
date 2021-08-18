import React from 'react';

const Text = ({ value, className }) => {
  return <div className={`${className} transition_all`}>{value}</div>;
};

export default Text;
