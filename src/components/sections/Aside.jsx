import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

import { contact as data } from '../../appData';
import ProfileImage from './ProfileImage';
import Contact from './Contact';
import Education from './Education';
import Skills from './Skills';

const Aside = ({ className }) => {
  return (
    <div style={{ backgroundColor: '#f8f4f4' }} className={`${className} min-h-screen max-w-sm w-full`}>
      <ProfileImage />
      <FadeIn>
        <Contact />
        <Education />
        <Skills />
        <div className={`flex items-center justify-evenly pb-8`}>
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
      </FadeIn>
    </div>
  );
};

export default Aside;
