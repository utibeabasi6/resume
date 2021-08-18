import React from 'react';

const List = ({ items, className }) => {
  return (
    <ul className={`${className} list-disc mx-6 space-y-4 mt-4 text-gray-700`}>
      {items.map((item, idx) => {
        return <li key={idx}>{item}</li>;
      })}
    </ul>
  );
};

export default List;
