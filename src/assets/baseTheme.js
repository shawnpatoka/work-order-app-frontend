import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
    typography: {
        h1: {
            fontSize: "10px",
            fontWeight: 400,
        },
        h2: {
            fontSize: "10px",
            fontWeight: 400,
        },
        h3: {
            fontSize: "10px",
            fontWeight: 400,
        },
        body1: {
            color: '#292b2d',
            fontWeight: '400'
        }
    },
});

export default baseTheme;