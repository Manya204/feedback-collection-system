import React from 'react';
import Zidio_Description from './Zidio_Description';
import Features from './Features';
import Footer from './Footer';
import Hero from './Hero';
import NavLogin from './NavLogin';

export default function LoginHome() {
  return (
    <>
    <NavLogin/>
    <Zidio_Description/>
    <Features/>
    <Hero/>
    <Footer/>
    </>
  )
}
