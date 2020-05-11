import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "reactstrap";
const HeroSection = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  const currentTheme = AppTheme[themeMode];
  return (
    <Container
      fluid
      className="text-center"
      style={{
        color: `${currentTheme.textColor}`,
        backgroundColor: `${currentTheme.backgroundColor}`,
        height: "100vh",
        padding: "1rem"
      }}
    >
      <h1>Theme Toggler</h1>
      <Button
        style={{
          color: `${currentTheme.textColor}`,
          backgroundColor: "#45CE30",
          padding: "5px 25px",
          fontSize: "20px",
          border: `${currentTheme.border}`
        }}
        onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
      >
        {themeMode === "light" ? "LightsOff" : "LightsOn"}
      </Button>
    </Container>
  );
};

export default HeroSection;
