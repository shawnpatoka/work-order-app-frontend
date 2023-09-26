import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import WorkFlowLogo from '../assets/WorkFlowLogo';

function TopBar({ isSideBarOpen, setIsSideBarOpen, useDarkMode, setUseDarkMode }) {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, zIndex: '1000' }}>
        <AppBar position="static" sx={{ bgcolor: 'primary.white' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="primary.light"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <WorkFlowLogo useDarkMode={useDarkMode} />
            </Box>


            <IconButton
              size="large"
              aria-label="toggle darkmode"
              onClick={() => setUseDarkMode(!useDarkMode)}
              color="primary.light"
            >
              <Brightness6Icon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default TopBar