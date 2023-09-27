import { createTheme } from "@mui/material";
import baseTheme from './baseTheme';

const themeMain = createTheme({
    ...baseTheme,
    palette: {
        mode: 'light',
        primary: {
            main: '#274c77',
            light: '#edf0f3',
            dark: '#232b33',
            medium: '#b4b4b4',
            contrastText: '#e7ecef',
            white: '#ffffff',
            accent: '#7d63ff'
        },
        secondary: {
            main: '#ff7700',
            light: '#ff943b',
            dark: '#d06200',
        },
        textLink: {
            main: '#5b6167',
            light: '#9ca9b6',
            dark: '#232b33',
        },
        text: {
            main: '#505153',
            light: '#9aa0a6',
            dark: '#292b2d',
            accent: '#7d63ff'
        },
    },
    overrides: {
        MuiButton: {
            root: {
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                border: 0,
                borderRadius: 3,
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                color: 'white',
                height: 48,
                padding: '0 30px',
            },
        },
    },
});

export default themeMain;