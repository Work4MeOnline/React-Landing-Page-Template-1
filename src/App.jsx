import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Freelancers } from "./components/Freelancers";
import { About } from "./components/about";
import { Clients } from "./components/Clients";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Freelancers data={landingPageData.Freelancers} />
      <About data={landingPageData.About} />
      <Clients data={landingPageData.Clients} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
