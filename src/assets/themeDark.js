import { createTheme } from "@mui/material"

export const themeDark = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#232b33',
            light: '#232b33',
            dark: '#232b33',
            contrastText: '#e7ecef',
            white: '#1e262d',
            medium: '#414345',
        },
        secondary: {
            main: '#ff7700',
            light: '#ff943b',
            dark: '#d06200',
        },
        textLink: {
            main: '#9ca9b6',
            light: '#9ca9b6',
            dark: '#232b33',
        },
        text: {
            main: '#d7d7d7',
            light: '#9aa0a6',
            dark: '#f2f2f2',
        },
    },
    typography: {
        h1: {
            fontSize: "3rem",
            fontWeight: 400,
            color: '#ecf0f2'
        },
        h2: {
            fontSize: "1.75rem",
            fontWeight: 400,
            color: '#ecf0f2'
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: 400,
            color: '#ecf0f2'
        },
        body1: {
            color: '#f2f2f2',
            fontWeight: '300'
        }
    },
})