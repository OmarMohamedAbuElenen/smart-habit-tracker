import React from 'react';
import {useNavigate} from "react-router";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface NavbarProps {
    darkMode: boolean;
    toggleTheme: ()=>void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
      const navigate = useNavigate();
      return (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Habit - Tracker ;)
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                color="inherit"
                onClick={toggleTheme}
                aria-label="toggle theme"
                sx={{ mr: 2 }}
              >
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>

              <Button color="inherit" onClick={()=> {navigate('/login');}}>
                User
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      );
};

export default Navbar;
