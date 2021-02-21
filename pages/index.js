import React from 'react';
import Home from '../src/sections/Home';
import About from '../src/sections/About';
import Works from '../src/sections/Works';
import Reviews from '../src/sections/Reviews';
import ScrollToTopButton from '../src/components/ScrollToTopButton';

export default function HomeIndex() {
  return (
    <>
      <Home />
      <About />
      <Works />
      <Reviews />
      <ScrollToTopButton />
    </>
  );
}
