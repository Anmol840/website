import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Index from "./Components/Page/Index";
import Footer from "./Components/Footer/Footer";
import Achievements from "./Components/Achievements/Achievements";
import Team1 from "./Components/Team2018-2019/Team1";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
function App() {
  return (
    <>
      <Nav />
      <ScrollToTop />   
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/team1" element={<Team1 />} /> {/* ✅ Added */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
