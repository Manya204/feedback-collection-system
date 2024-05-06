import React from 'react';
import Zidio_Description from './Zidio_Description';
import Features from './Features';
import Footer from './Footer';
import Hero from './Hero';
import Nav from './Nav';

export default function Homepage() {
  return (
    <>
    <Nav/>
    <Zidio_Description/>
    <Features/>
    <Hero/>
    <Footer/>
    </>
  )
}
