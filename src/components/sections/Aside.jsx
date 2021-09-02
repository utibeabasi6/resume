import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

import { contact as data } from '../../appData';
import ProfileImage from './ProfileImage';
import Contact from './Contact';
import Education from './Education';

const Aside = ({ className }) => {
  return (
    <div style={{ backgroundColor: '#f8f4f4' }} className={`${className} min-h-screen max-w-sm w-full lg:flex flex-col justify-between`}>
      <div>
        <ProfileImage />
        <FadeIn>
          <Contact />
          <Education />
        </FadeIn>
      </div>
      <div className={`flex items-center justify-evenly pb-8 `}>
        {data.socials.map((link, idx) => {
          return (
            <link.icon
              onClick={() => {
                window.open(link.url);
              }}
              className={`text-base font-medium hover:text-green-500 select-none cursor-pointer`}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Aside;
