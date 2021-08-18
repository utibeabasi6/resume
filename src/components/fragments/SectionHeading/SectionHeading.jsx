import React from 'react';

const SectionHeading = ({ title, subtitle, slogan, doubleTitle, className }) => {
  return (
    <div className={`${className} flex flex-col text-gray-800`}>
      {subtitle && <span className={`${doubleTitle ? `text-xl font-semibold` : `text-xl text-gray-600`}`}>{subtitle}</span>}
      <h2 className={`${subtitle ? `text-4xl mt-1` : `text-3xl`} font-bold`}>{title}</h2>
      {slogan && <span className={`text-base mt-1 text-gray-700`}>{slogan}</span>}
    </div>
  );
};

export default SectionHeading;
