import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

import Base from './components/layout/Base';
import Drawer from './components/fragments/Drawer';
import BackDrop from './components/fragments/Backdrop';
import Aside from './components/sections/Aside';

import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
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
        <Aside className={`hidden`} />
        <div className={`min-h-screen flex-1 flex flex-col justify-between`}>
          <div>
            <Header toggleDrawer={toggleDrawer} />
            <FadeIn>
              <About />
              <Experience />
              <Projects />
          <Skills />
            </FadeIn>
          </div>
          <Footer />
        </div>
      </Base>
    </div>
  );
}

export default App;
