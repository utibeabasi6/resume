import React from 'react';

import styles from './Button.module.css';

const Button = ({ text, type, size, autoResize, className, icon, placement, onClick, disabled, typex }) => {
  return (
    <button
      type={typex ? typex : ''}
      disabled={disabled}
      onClick={onClick}
      className={`${className} ${styles.button} ${
        type === 'secondary' ? `transparent text-green-500` : `bg-green-500 text-white`
      } transition_all border-2 border-green-500 hover:bg-green-500 hover:text-white ${size && size === 2 ? `px-4 py-2 text-sm` : `px-6 py-2 text-lg`} ${
        autoResize && `px-4 py-2 text-sm sm:px-6 sm:text-lg`
      }  rounded-3xl flex items-center`}
    >
      {icon && placement === 'left' && icon}
      <span className={`px-2`}>{text}</span>
      {icon && placement === 'right' && icon}
    </button>
  );
};

export default Button;
