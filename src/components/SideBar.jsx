import { useState } from 'react'
import { Outlet, NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import MapsHomeWorkRoundedIcon from '@mui/icons-material/MapsHomeWorkRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import Avatar from '@mui/material/Avatar';
import { grey } from '@mui/material/colors';

const pageLinks = [
  { 'pageName': 'Home', 'pageRoute': '/', 'icon': <HomeRoundedIcon /> },
  { 'pageName': 'Work Orders', 'pageRoute': '/work-orders', 'icon': <ListAltRoundedIcon /> },
  { 'pageName': 'Clients & Job Sites', 'pageRoute': '/clients-job-sites', 'icon': <MapsHomeWorkRoundedIcon /> },
  { 'pageName': 'People', 'pageRoute': '/people', 'icon': <PeopleAltRoundedIcon /> },
  { 'pageName': 'Reports', 'pageRoute': '/reports', 'icon': <SummarizeRoundedIcon /> },
]

const countAmountStyle = {
  textAlign: 'center', fontSize: '2rem', fontWeight: '100', lineHeight: '2rem', color: grey[700]
}
const countLabelStyle = {
  textAlign: 'center', fontWeight: 'Bold', color: grey[800]
}

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 85,
      height: 85,
      fontSize: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

function SideBar({ isSideBarOpen, setIsSideBarOpen }) {

  return (
    <>
      <Drawer
        anchor='left'
        open={isSideBarOpen}
        onClose={() => setIsSideBarOpen(false)}
        sx={{ zIndex: '900' }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', width: 275 }}>
          <Box sx={{ mt: 2, mb: 2 }}>
            <Avatar {...stringAvatar('Shawn Patoka')} />
            <Typography variant="subtitle1" sx={{ textAlign: 'center', fontWeight: 'bold' }}>Shawn Patoka</Typography>
          </Box>
          <Divider />
          <Box sx={{ py: 2, display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ mx: '1rem' }}>
              <Typography variant="subtitle1" sx={countAmountStyle}>15</Typography>
              <Typography variant="subtitle2" sx={countLabelStyle}>Open</Typography>
            </Box>
            <Box sx={{ mx: '1rem' }}>
              <Typography variant="subtitle1" sx={countAmountStyle}>11</Typography>
              <Typography variant="subtitle2" sx={countLabelStyle}>Review</Typography>
            </Box>
            <Box sx={{ mx: '1rem' }}>
              <Typography variant="subtitle1" sx={countAmountStyle}>150</Typography>
              <Typography variant="subtitle2" sx={countLabelStyle}>Total</Typography>
            </Box>
          </Box>
          <Divider />
          <List>
            {pageLinks.map((page, index) => (
              <NavLink key={index} to={page.pageRoute} style={{ textDecoration: 'none' }}>
                <ListItem disablePadding>
                  <ListItemButton sx={{ color: 'textLink.main' }}>
                    <ListItemIcon>
                      {page.icon}
                    </ListItemIcon>
                    <ListItemText primary={page.pageName} />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default SideBar