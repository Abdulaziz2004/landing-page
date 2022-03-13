import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { AboutMe } from "./components/aboutme/AboutMe";
import { Home } from "./components/home/HomeMain";
import { NavSec } from "./components/home/NavSec";
import { PortfolioMain } from "./components/portfolio/PortfolioMain";
import { Faqs } from "./components/setup/Faqs";


function App() {
  return (
    <AppContainer>
      <NavSec />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioMain />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/FAQs" element={<Faqs />} />
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: black;
`
