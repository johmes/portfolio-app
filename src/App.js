// App.js
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './Styles/global';
import { theme } from './Styles/theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';

function App() {
  const doc = document.documentElement;

  const node = useRef();
  const menuId = "main-menu";
  const Scroll = require('react-scroll');
  const Events = Scroll.Events;

  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const [direction, setDirection] = useState();
  const [prevDirection, setPrevDirection] = useState();

  // Checks with direction const if user scrolling down and sets visible to false
  // if direction is up, sets true
  const toggleHeader = useCallback((direction, curScroll) => {
    if (direction === 2 && curScroll > 80) {
      setVisible(false);
    }
    else if (direction === 1) {
      setVisible(true);
    }
    setPrevDirection(direction);
  }, [setPrevDirection]);

  // Detects scroll event and sets direction by that
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY || doc.scrollTop;

    if (currentScrollPos > prevScrollPos) {
      // up
      setDirection(2);
    } else if (currentScrollPos < prevScrollPos) {
      // down
      setDirection(1);
    }

    // Calls function to toggle header if true
    if (direction !== prevDirection) {
      toggleHeader(direction, currentScrollPos);

    }

    setPrevScrollPos(currentScrollPos);

  }, [direction, prevDirection, prevScrollPos, setDirection, doc.scrollTop, toggleHeader]);


  // Listen when scrolling begins and hide menu
  Events.scrollEvent.register('begin', function (to, element) {
    setOpen(false)
  });

  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);


  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} visible={visible} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} visible={visible} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
      </>

    </ThemeProvider>
  );
}

export default App;