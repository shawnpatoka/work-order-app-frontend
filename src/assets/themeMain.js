import { createTheme } from "@mui/material"

export const themeMain = createTheme({
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
    typography: {
        h1: {
            fontSize: "3rem",
            fontWeight: 400,
            color: '#383a3d'
        },
        h2: {
            fontSize: "1.75rem",
            fontWeight: 400,
            color: '#383a3d'
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: 400,
            color: '#383a3d'
        },
        body1: {
            color: '#292b2d',
            fontWeight: '400'
        }
    },
})
