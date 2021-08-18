import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

import { contact as data } from './appData';

import Base from './components/layout/Base';
import Header from './components/sections/Header';
import ProfileImage from './components/sections/ProfileImage';
import Drawer from './components/fragments/Drawer';
import BackDrop from './components/fragments/Backdrop';
import Footer from './components/sections/Footer';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <Drawer show={drawerOpen} toggleDrawer={toggleDrawer} />
      <BackDrop show={drawerOpen} toggleDrawer={toggleDrawer} />
      <Base>
        <div style={{ backgroundColor: '#f8f4f4' }} className={`min-h-screen w-96`}>
          <ProfileImage />
          <FadeIn>
            <Contact />
            <Education />
            <Skills />
            <div className={`flex items-center justify-evenly mb-8`}>
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
        <div className={`min-h-screen flex-1 flex flex-col justify-between`}>
          <div>
            <Header toggleDrawer={toggleDrawer} />
            <FadeIn>
              <About />
              <Experience />
            </FadeIn>
          </div>
          <Footer />
        </div>
      </Base>
    </div>
  );
}

export default App;
