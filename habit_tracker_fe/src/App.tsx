import React, {useMemo, useState} from 'react';
import './App.css';
import Login from "./pages/login";
import Register from "./pages/register";
import { Route,Routes} from "react-router";
import {darkTheme, lightTheme} from "./theme/theme";
import {Paper, ThemeProvider} from "@mui/material";
import Navbar from "./components/navbar";
import Dashboard from "./pages/dashboard";

function App() {
    const [lightMode, setLightMode] = useState<boolean>(true);
    const theme = useMemo(() => (lightMode  ? lightTheme : darkTheme), [lightMode]);
    const toggleTheme = () => setLightMode(!lightMode);

  return (
      <ThemeProvider theme={theme}>
          <Paper sx={{height:'100vh'}}>
          <Navbar toggleTheme={toggleTheme} darkMode={!lightMode}/>
          <Routes>
              <Route path="/" element={<Dashboard />}  />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
          </Routes>
          </Paper>
      </ThemeProvider>
  );
}

export default App;
