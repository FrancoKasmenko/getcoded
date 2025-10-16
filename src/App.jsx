import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Work from "./components/Work.jsx";
import Process from "./components/Process.jsx";
import Faq from "./components/Faq.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Pricing from "./components/Pricing.jsx";
import Cursor from "./components/Cursor.jsx";
import FloatingLogo from "./components/FloatingLogo.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Faq />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <Cursor />
      <FloatingLogo />
    </>
  );
}
