import React, { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import HeroSection from "./Components/HeroSection";

const App = () => {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <HeroSection />
    </ThemeContext.Provider>
  );
};

export default App;
